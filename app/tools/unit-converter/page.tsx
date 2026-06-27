'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

type UnitCategory = 'length' | 'weight' | 'temperature'

const unitConfig: Record<
  UnitCategory,
  {
    label: string
    units: { label: string; value: string }[]
    convert: (value: number, from: string, to: string) => number
  }
> = {
  length: {
    label: 'Length',
    units: [
      { label: 'Meters', value: 'm' },
      { label: 'Kilometers', value: 'km' },
      { label: 'Centimeters', value: 'cm' },
      { label: 'Inches', value: 'in' },
      { label: 'Feet', value: 'ft' },
    ],
    convert: (value, from, to) => {
      const factors: Record<string, number> = { m: 1, km: 1000, cm: 0.01, in: 0.0254, ft: 0.3048 }
      return (value * factors[from]) / factors[to]
    },
  },
  weight: {
    label: 'Weight',
    units: [
      { label: 'Kilograms', value: 'kg' },
      { label: 'Grams', value: 'g' },
      { label: 'Pounds', value: 'lb' },
      { label: 'Ounces', value: 'oz' },
    ],
    convert: (value, from, to) => {
      const factors: Record<string, number> = { kg: 1, g: 0.001, lb: 0.45359237, oz: 0.0283495 }
      return (value * factors[from]) / factors[to]
    },
  },
  temperature: {
    label: 'Temperature',
    units: [
      { label: 'Celsius', value: 'c' },
      { label: 'Fahrenheit', value: 'f' },
      { label: 'Kelvin', value: 'k' },
    ],
    convert: (value, from, to) => {
      let celsius = value

      if (from === 'f') {
        celsius = ((value - 32) * 5) / 9
      } else if (from === 'k') {
        celsius = value - 273.15
      }

      if (to === 'f') {
        return (celsius * 9) / 5 + 32
      }

      if (to === 'k') {
        return celsius + 273.15
      }

      return celsius
    },
  },
}

export default function UnitConverter() {
  const [category, setCategory] = useState<UnitCategory>('length')
  const [value, setValue] = useState(25)
  const [from, setFrom] = useState('m')
  const [to, setTo] = useState('ft')

  const activeCategory = unitConfig[category]
  const result = activeCategory.convert(value, from, to)

  function switchCategory(nextCategory: UnitCategory) {
    const firstUnit = unitConfig[nextCategory].units[0].value
    const secondUnit = unitConfig[nextCategory].units[1].value
    setCategory(nextCategory)
    setFrom(firstUnit)
    setTo(secondUnit)
    setValue(nextCategory === 'temperature' ? 25 : 25)
  }

  function swapUnits() {
    setFrom(to)
    setTo(from)
  }

  function reset() {
    setCategory('length')
    setValue(25)
    setFrom('m')
    setTo('ft')
  }

  return (
    <ToolPageShell
      title="Unit Converter"
      description="Pick a measurement category, slide the value, and switch units instantly without mixing incompatible conversions."
      badge="Utility converter"
      stats={[
        { label: 'Category', value: activeCategory.label },
        { label: 'From', value: from.toUpperCase() },
        { label: 'To', value: to.toUpperCase() },
      ]}
      tips={[
        'Categories keep the conversion clean so you do not accidentally compare meters to kilograms.',
        'Use swap to reverse the direction instantly when checking both sides of a conversion.',
        'Temperature conversions use the right formula instead of simple multipliers.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Converted value</p>
              <p className="mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50">{result.toFixed(4)}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {value} {from.toUpperCase()} equals {result.toFixed(4)} {to.toUpperCase()}.
              </p>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-3">
          {(['length', 'weight', 'temperature'] as UnitCategory[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => switchCategory(item)}
              className={`rounded-3xl border px-4 py-4 text-sm font-semibold transition ${
                category === item
                  ? 'border-sky-500 bg-sky-50 text-sky-700 shadow-sm dark:border-sky-400 dark:bg-sky-950/40 dark:text-sky-200'
                  : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200'
              }`}
            >
              {unitConfig[item].label}
            </button>
          ))}
        </div>

        <RangeField
          label="Value"
          value={value}
          onChange={setValue}
          min={category === 'temperature' ? -100 : 0}
          max={category === 'temperature' ? 500 : 1000}
          step={category === 'temperature' ? 1 : 0.5}
          valueFormatter={(current) => `${current}`}
        />

        <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">From</span>
            <select value={from} onChange={(event) => setFrom(event.target.value)} className="form-field mt-2">
              {activeCategory.units.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </label>

          <button onClick={swapUnits} className="btn-secondary h-12 px-6">
            Swap
          </button>

          <label className="block">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">To</span>
            <select value={to} onChange={(event) => setTo(event.target.value)} className="form-field mt-2">
              {activeCategory.units.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button onClick={reset} className="btn-secondary w-full sm:w-auto">
          Reset defaults
        </button>
      </div>
    </ToolPageShell>
  )
}
