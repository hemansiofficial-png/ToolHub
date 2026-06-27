'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)

const compoundingOptions = [
  { label: 'Yearly', value: 1 },
  { label: 'Half-yearly', value: 2 },
  { label: 'Quarterly', value: 4 },
  { label: 'Monthly', value: 12 },
]

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(500000)
  const [rate, setRate] = useState(7.2)
  const [years, setYears] = useState(5)
  const [compoundsPerYear, setCompoundsPerYear] = useState(4)

  const maturity = principal * Math.pow(1 + rate / 100 / compoundsPerYear, compoundsPerYear * years)
  const interest = maturity - principal

  return (
    <ToolPageShell
      title="FD Calculator"
      description="Estimate maturity amount and total interest for a fixed deposit using the deposit amount, tenure, rate, and compounding frequency."
      badge="Deposit planner"
      stats={[
        { label: 'Maturity value', value: formatCurrency(maturity) },
        { label: 'Interest earned', value: formatCurrency(interest) },
        { label: 'Compounding', value: `${compoundsPerYear}x/year` },
      ]}
      tips={[
        'Quarterly compounding is common for many Indian fixed deposits.',
        'Use the tenure slider to compare short-term safety versus long-term compounding.',
        'This calculator estimates maturity before any TDS or tax impact on interest.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Estimated maturity</p>
              <p className="mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50">{formatCurrency(maturity)}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Interest earned: {formatCurrency(interest)}
              </p>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <RangeField label="Deposit amount" value={principal} onChange={setPrincipal} min={10000} max={5000000} step={10000} valueFormatter={formatCurrency} />
        <RangeField
          label="Interest rate"
          value={rate}
          onChange={setRate}
          min={3}
          max={10}
          step={0.1}
          valueFormatter={(value) => `${value.toFixed(1)}%`}
        />
        <RangeField label="Tenure" value={years} onChange={setYears} min={1} max={10} step={1} valueFormatter={(value) => `${value} years`} />

        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Compounding frequency</span>
          <select value={compoundsPerYear} onChange={(event) => setCompoundsPerYear(Number(event.target.value))} className="form-field mt-2">
            {compoundingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </ToolPageShell>
  )
}
