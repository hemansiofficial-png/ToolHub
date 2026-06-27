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

export default function GSTCalculator() {
  const [amount, setAmount] = useState(10000)
  const [gst, setGst] = useState(18)
  const [inclusive, setInclusive] = useState(false)

  const rate = gst / 100
  const taxableValue = inclusive ? amount / (1 + rate) : amount
  const tax = inclusive ? amount - taxableValue : amount * rate
  const total = inclusive ? amount : amount + tax
  const cgst = tax / 2

  function reset() {
    setAmount(10000)
    setGst(18)
    setInclusive(false)
  }

  return (
    <ToolPageShell
      title="GST Calculator"
      description="Flip between inclusive and exclusive pricing, then drag the amount and GST rate sliders to preview the tax split in real time."
      badge="Tax helper"
      stats={[
        { label: 'Tax amount', value: formatCurrency(tax) },
        { label: 'Total amount', value: formatCurrency(total) },
        { label: 'Tax mode', value: inclusive ? 'Inclusive' : 'Exclusive' },
      ]}
      tips={[
        'Switch inclusive mode on when the entered price already contains GST.',
        'The breakdown shows an equal CGST and SGST split for a quick estimate.',
        'Use the sliders to compare how tax behaves at different amounts and rates.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Total amount</p>
              <p className="mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50">{formatCurrency(total)}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Taxable value {formatCurrency(taxableValue)} with {gst}% GST.
              </p>
            </div>
          </div>

          <div className="interactive-panel rounded-[28px] p-5">
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between gap-4">
                <span>GST amount</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(tax)}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Estimated CGST</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(cgst)}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Estimated SGST</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(cgst)}</span>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <RangeField
          label="Amount"
          value={amount}
          onChange={setAmount}
          min={100}
          max={200000}
          step={100}
          valueFormatter={(value) => formatCurrency(value)}
        />
        <RangeField
          label="GST rate"
          value={gst}
          onChange={setGst}
          min={1}
          max={28}
          step={1}
          suffix="%"
          valueFormatter={(value) => `${value}%`}
        />

        <label className="interactive-panel flex cursor-pointer items-center justify-between rounded-3xl p-4">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Amount includes GST</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Turn this on if the entered price is already tax-inclusive.</p>
          </div>
          <button
            type="button"
            aria-pressed={inclusive}
            onClick={() => setInclusive((current) => !current)}
            className={`relative h-10 w-20 rounded-full transition ${
              inclusive ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'
            }`}
          >
            <span
              className={`absolute top-1 h-8 w-8 rounded-full bg-white shadow-md transition ${
                inclusive ? 'left-11' : 'left-1'
              }`}
            />
          </button>
        </label>

        <button onClick={reset} className="btn-secondary w-full sm:w-auto">
          Reset defaults
        </button>
      </div>
    </ToolPageShell>
  )
}
