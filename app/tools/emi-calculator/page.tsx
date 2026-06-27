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

export default function EMICalculator() {
  const [loan, setLoan] = useState(1500000)
  const [rate, setRate] = useState(8.5)
  const [tenure, setTenure] = useState(20)

  const monthlyRate = rate / 12 / 100
  const months = tenure * 12
  const growthFactor = Math.pow(1 + monthlyRate, months)
  const emi = monthlyRate === 0 ? loan / months : (loan * monthlyRate * growthFactor) / (growthFactor - 1)
  const totalPayment = emi * months
  const totalInterest = totalPayment - loan
  const interestShare = totalPayment > 0 ? Math.round((totalInterest / totalPayment) * 100) : 0

  function reset() {
    setLoan(1500000)
    setRate(8.5)
    setTenure(20)
  }

  return (
    <ToolPageShell
      title="EMI Calculator"
      description="Move the sliders to instantly see how the loan amount, annual interest rate, and repayment tenure affect your monthly EMI."
      badge="Finance calculator"
      stats={[
        { label: 'Monthly EMI', value: formatCurrency(emi) },
        { label: 'Interest outgo', value: formatCurrency(totalInterest) },
        { label: 'Repayment term', value: `${months} months` },
      ]}
      tips={[
        'Use the tenure slider to compare lower EMIs versus higher lifetime interest.',
        'A small interest rate change can noticeably shift the total repayment amount.',
        'The result panel updates live, so you can test different scenarios quickly.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Monthly payment</p>
              <p className="mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50">{formatCurrency(emi)}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Total repayment {formatCurrency(totalPayment)} over {tenure} years.
              </p>
            </div>
          </div>

          <div className="interactive-panel rounded-[28px] p-5">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span>Interest share</span>
              <span>{interestShare}%</span>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className="animate-pulse-soft h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-500"
                style={{ width: `${interestShare}%` }}
              />
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between gap-4">
                <span>Principal</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(loan)}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Total interest</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(totalInterest)}</span>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <RangeField
          label="Loan amount"
          value={loan}
          onChange={setLoan}
          min={100000}
          max={10000000}
          step={50000}
          prefix="Rs "
          valueFormatter={(value) => formatCurrency(value)}
        />
        <RangeField
          label="Annual interest rate"
          value={rate}
          onChange={setRate}
          min={1}
          max={24}
          step={0.1}
          suffix="%"
          valueFormatter={(value) => `${value.toFixed(1)}%`}
        />
        <RangeField
          label="Loan tenure"
          value={tenure}
          onChange={setTenure}
          min={1}
          max={30}
          step={1}
          suffix=" yr"
          valueFormatter={(value) => `${value} years`}
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={reset} className="btn-secondary w-full sm:w-auto">
            Reset defaults
          </button>
        </div>
      </div>
    </ToolPageShell>
  )
}
