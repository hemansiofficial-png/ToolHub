'use client'

import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'
import { useState } from 'react'

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, value))

function calculateSlabTax(income: number, slabs: Array<{ upTo: number; rate: number }>) {
  let remaining = income
  let previousLimit = 0
  let tax = 0

  for (const slab of slabs) {
    const taxableBand = Math.min(Math.max(remaining, 0), slab.upTo - previousLimit)
    if (taxableBand <= 0) {
      previousLimit = slab.upTo
      continue
    }

    tax += taxableBand * slab.rate
    remaining -= taxableBand
    previousLimit = slab.upTo
  }

  if (remaining > 0) {
    tax += remaining * slabs[slabs.length - 1].rate
  }

  return tax
}

function calculateNewRegimeTax(taxableIncome: number) {
  if (taxableIncome <= 1200000) return 0

  const slabTax = calculateSlabTax(taxableIncome, [
    { upTo: 400000, rate: 0 },
    { upTo: 800000, rate: 0.05 },
    { upTo: 1200000, rate: 0.1 },
    { upTo: 1600000, rate: 0.15 },
    { upTo: 2000000, rate: 0.2 },
    { upTo: 2400000, rate: 0.25 },
    { upTo: Number.POSITIVE_INFINITY, rate: 0.3 },
  ])

  const marginalReliefCap = Math.max(0, taxableIncome - 1200000)
  return Math.min(slabTax, marginalReliefCap)
}

function calculateOldRegimeTax(taxableIncome: number) {
  if (taxableIncome <= 500000) return 0

  const slabTax = calculateSlabTax(taxableIncome, [
    { upTo: 250000, rate: 0 },
    { upTo: 500000, rate: 0.05 },
    { upTo: 1000000, rate: 0.2 },
    { upTo: Number.POSITIVE_INFINITY, rate: 0.3 },
  ])

  const marginalReliefCap = Math.max(0, taxableIncome - 500000)
  return Math.min(slabTax, marginalReliefCap)
}

export default function IncomeTaxCalculator() {
  const [grossIncome, setGrossIncome] = useState(1800000)
  const [oldRegimeDeductions, setOldRegimeDeductions] = useState(200000)

  const newTaxableIncome = Math.max(0, grossIncome - 75000)
  const oldTaxableIncome = Math.max(0, grossIncome - 50000 - oldRegimeDeductions)
  const newTax = calculateNewRegimeTax(newTaxableIncome) * 1.04
  const oldTax = calculateOldRegimeTax(oldTaxableIncome) * 1.04
  const betterRegime = newTax <= oldTax ? 'New regime' : 'Old regime'
  const savings = Math.abs(newTax - oldTax)

  return (
    <ToolPageShell
      title="Income Tax Calculator"
      description="Estimate salaried income tax for FY 2025-26 using both regimes, including standard deduction and basic rebate-style relief. Excludes surcharge and special-rate income."
      badge="Finance calculator"
      stats={[
        { label: 'Better option', value: betterRegime },
        { label: 'Estimated savings', value: formatCurrency(savings) },
        { label: 'Gross income', value: formatCurrency(grossIncome) },
      ]}
      tips={[
        'This tool assumes salaried income and compares the old and new regime side by side.',
        'Old regime deductions can represent 80C, home-loan interest, HRA effects, and similar benefits.',
        'Cess is included, but surcharge and special-rate capital gains are intentionally excluded.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Recommended regime</p>
              <p className="mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50">{betterRegime}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Estimated tax difference: {formatCurrency(savings)}
              </p>
            </div>
          </div>

          <div className="interactive-panel rounded-[28px] p-5 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between gap-4">
              <span>New regime tax</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(newTax)}</span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span>Old regime tax</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(oldTax)}</span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span>Old regime taxable income</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(oldTaxableIncome)}</span>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <RangeField label="Gross annual income" value={grossIncome} onChange={setGrossIncome} min={300000} max={5000000} step={50000} valueFormatter={formatCurrency} />
        <RangeField
          label="Old regime deductions"
          value={oldRegimeDeductions}
          onChange={setOldRegimeDeductions}
          min={0}
          max={500000}
          step={10000}
          valueFormatter={formatCurrency}
        />
      </div>
    </ToolPageShell>
  )
}
