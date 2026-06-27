'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)

export default function CAGRCalculator() {
  const [initialValue, setInitialValue] = useState(100000)
  const [finalValue, setFinalValue] = useState(225000)
  const [years, setYears] = useState(5)

  const cagr = initialValue > 0 && finalValue > 0 ? (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100 : 0
  const absoluteReturn = ((finalValue - initialValue) / initialValue) * 100

  return (
    <ToolPageShell
      title="CAGR Calculator"
      description="Measure the annualized growth rate between a starting value and an ending value over a chosen time period."
      badge="Growth metric"
      stats={[
        { label: 'CAGR', value: `${cagr.toFixed(2)}%` },
        { label: 'Absolute return', value: `${absoluteReturn.toFixed(1)}%` },
        { label: 'Investment period', value: `${years} years` },
      ]}
      tips={[
        'CAGR smooths uneven growth into a single annualized rate.',
        'This is useful for mutual funds, stocks, revenue growth, or portfolio comparisons.',
        'It does not show volatility between the start and end points.',
      ]}
    >
      <div className="space-y-5">
        <RangeField label="Starting value" value={initialValue} onChange={setInitialValue} min={10000} max={5000000} step={10000} valueFormatter={formatCurrency} />
        <RangeField label="Ending value" value={finalValue} onChange={setFinalValue} min={10000} max={10000000} step={10000} valueFormatter={formatCurrency} />
        <RangeField label="Time period" value={years} onChange={setYears} min={1} max={20} step={1} valueFormatter={(value) => `${value} years`} />
      </div>
    </ToolPageShell>
  )
}
