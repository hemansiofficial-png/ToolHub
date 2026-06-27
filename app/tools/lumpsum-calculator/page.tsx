'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)

export default function LumpsumCalculator() {
  const [investment, setInvestment] = useState(500000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  const futureValue = investment * Math.pow(1 + rate / 100, years)
  const gains = futureValue - investment

  return (
    <ToolPageShell
      title="Lumpsum Calculator"
      description="Estimate the future value of a one-time investment over time using an expected annual rate of return."
      badge="Investment planner"
      stats={[
        { label: 'Future value', value: formatCurrency(futureValue) },
        { label: 'Capital gains', value: formatCurrency(gains) },
        { label: 'Investment term', value: `${years} years` },
      ]}
      tips={[
        'Lumpsum projections are useful for bonuses, inheritance, and one-time investments.',
        'Longer holding periods amplify the power of compounding.',
        'This tool estimates growth only and does not include taxes or exit loads.',
      ]}
    >
      <div className="space-y-5">
        <RangeField label="Investment amount" value={investment} onChange={setInvestment} min={10000} max={10000000} step={10000} valueFormatter={formatCurrency} />
        <RangeField label="Expected annual return" value={rate} onChange={setRate} min={1} max={20} step={0.1} valueFormatter={(value) => `${value.toFixed(1)}%`} />
        <RangeField label="Time horizon" value={years} onChange={setYears} min={1} max={30} step={1} valueFormatter={(value) => `${value} years`} />
      </div>
    </ToolPageShell>
  )
}
