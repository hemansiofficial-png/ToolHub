'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(25000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  const months = years * 12
  const invested = monthly * months
  const monthlyRate = rate / 100 / 12
  const maturity = monthlyRate === 0 ? invested : monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  const returns = Math.max(0, maturity - invested)
  const returnsShare = maturity > 0 ? Math.round((returns / maturity) * 100) : 0

  function reset() {
    setMonthly(25000)
    setRate(12)
    setYears(10)
  }

  return (
    <ToolPageShell
      title="SIP Calculator"
      description="Explore how monthly contributions, expected annual returns, and investment duration shape your long-term SIP corpus."
      badge="Wealth planner"
      stats={[
        { label: 'Projected corpus', value: formatCurrency(maturity) },
        { label: 'Invested amount', value: formatCurrency(invested) },
        { label: 'Est. wealth gain', value: formatCurrency(returns) },
      ]}
      tips={[
        'Increase the time horizon to see the compounding effect become more dramatic.',
        'Use the rate slider to compare conservative and optimistic return assumptions.',
        'The return split ring helps you see how much of the final value comes from gains.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Projected maturity</p>
              <p className="mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50">{formatCurrency(maturity)}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Based on {years} years of investing {formatCurrency(monthly)} every month.
              </p>
            </div>
          </div>

          <div className="interactive-panel rounded-[28px] p-5">
            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border-[18px] border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div
                className="flex h-36 w-36 items-center justify-center rounded-full text-center"
                style={{
                  background: `conic-gradient(#0ea5e9 0% ${returnsShare}%, #cbd5e1 ${returnsShare}% 100%)`,
                }}
              >
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white dark:bg-slate-950">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Returns</span>
                  <span className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">{returnsShare}%</span>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between gap-4">
                <span>Invested amount</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(invested)}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Estimated returns</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(returns)}</span>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <RangeField
          label="Monthly investment"
          value={monthly}
          onChange={setMonthly}
          min={1000}
          max={100000}
          step={500}
          valueFormatter={(value) => formatCurrency(value)}
        />
        <RangeField
          label="Expected annual return"
          value={rate}
          onChange={setRate}
          min={1}
          max={25}
          step={0.1}
          suffix="%"
          valueFormatter={(value) => `${value.toFixed(1)}%`}
        />
        <RangeField
          label="Investment duration"
          value={years}
          onChange={setYears}
          min={1}
          max={30}
          step={1}
          suffix=" yr"
          valueFormatter={(value) => `${value} years`}
        />

        <button onClick={reset} className="btn-secondary w-full sm:w-auto">
          Reset defaults
        </button>
      </div>
    </ToolPageShell>
  )
}
