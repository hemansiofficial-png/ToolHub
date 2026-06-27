'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate()
}

function buildDateValue(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function calculateAgeParts(dateOfBirth: Date, referenceDate: Date) {
  let years = referenceDate.getFullYear() - dateOfBirth.getFullYear()
  let months = referenceDate.getMonth() - dateOfBirth.getMonth()
  let days = referenceDate.getDate() - dateOfBirth.getDate()

  if (days < 0) {
    months -= 1
    days += new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0).getDate()
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  return { years, months, days }
}

export default function AgeCalculator() {
  const today = new Date()
  const currentYear = today.getFullYear()
  const [year, setYear] = useState(2000)
  const [month, setMonth] = useState(1)
  const [day, setDay] = useState(1)
  const maxMonth = year === currentYear ? today.getMonth() + 1 : 12
  const safeMonth = Math.min(month, maxMonth)
  const maxDay = year === currentYear && safeMonth === today.getMonth() + 1 ? today.getDate() : getDaysInMonth(year, safeMonth)
  const safeDay = Math.min(day, maxDay)
  const birthDate = new Date(year, safeMonth - 1, safeDay)
  const age = calculateAgeParts(birthDate, today)
  const nextBirthdayYear =
    today.getMonth() > safeMonth - 1 || (today.getMonth() === safeMonth - 1 && today.getDate() > safeDay) ? currentYear + 1 : currentYear
  const nextBirthday = new Date(nextBirthdayYear, safeMonth - 1, safeDay)
  const daysToBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  function handleYearChange(value: number) {
    setYear(value)
    const nextMaxMonth = value === currentYear ? today.getMonth() + 1 : 12
    const nextMonth = Math.min(month, nextMaxMonth)
    setMonth(nextMonth)
    setDay((current) => {
      const nextMaxDay = value === currentYear && nextMonth === today.getMonth() + 1 ? today.getDate() : getDaysInMonth(value, nextMonth)
      return Math.min(current, nextMaxDay)
    })
  }

  function handleMonthChange(value: number) {
    setMonth(value)
    const nextMaxDay = year === currentYear && value === today.getMonth() + 1 ? today.getDate() : getDaysInMonth(year, value)
    setDay((current) => Math.min(current, nextMaxDay))
  }

  function reset() {
    setYear(2000)
    setMonth(1)
    setDay(1)
  }

  return (
    <ToolPageShell
      title="Age Calculator"
      description="Use the date picker or the year, month, and day sliders to explore age instantly and see how close the next birthday is."
      badge="Date calculator"
      stats={[
        { label: 'Age today', value: `${age.years} years` },
        { label: 'Months extra', value: `${age.months} months` },
        { label: 'Next birthday', value: `${daysToBirthday} days` },
      ]}
      tips={[
        'The sliders stay synced with the date picker, so you can use whichever feels faster.',
        'Changing the birth month automatically adjusts the day range for shorter months.',
        'The next birthday card is useful for countdown pages, forms, and quick planning.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Calculated age</p>
              <p className="mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50">{age.years}</p>
              <p className="mt-2 text-lg font-medium text-slate-700 dark:text-slate-200">
                {age.months} months and {age.days} days
              </p>
            </div>
          </div>

          <div className="interactive-panel rounded-[28px] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Next birthday countdown</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{buildDateValue(nextBirthdayYear, safeMonth, safeDay)}</p>
              </div>
              <div className="rounded-full bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200">
                {daysToBirthday} days
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Date of birth</span>
          <input
            type="date"
            value={buildDateValue(year, safeMonth, safeDay)}
            max={buildDateValue(currentYear, today.getMonth() + 1, today.getDate())}
            onChange={(event) => {
              const [nextYear, nextMonth, nextDay] = event.target.value.split('-').map(Number)
              if (!nextYear || !nextMonth || !nextDay) return
              setYear(nextYear)
              setMonth(nextMonth)
              setDay(nextDay)
            }}
            className="form-field mt-2"
          />
        </label>

        <RangeField label="Birth year" value={year} onChange={handleYearChange} min={1950} max={currentYear} step={1} />
        <RangeField
          label="Birth month"
          value={safeMonth}
          onChange={handleMonthChange}
          min={1}
          max={maxMonth}
          step={1}
          valueFormatter={(value) => `Month ${value}`}
        />
        <RangeField
          label="Birth day"
          value={safeDay}
          onChange={setDay}
          min={1}
          max={maxDay}
          step={1}
          valueFormatter={(value) => `Day ${value}`}
        />

        <button onClick={reset} className="btn-secondary w-full sm:w-auto">
          Reset defaults
        </button>
      </div>
    </ToolPageShell>
  )
}
