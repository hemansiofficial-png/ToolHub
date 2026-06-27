'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)

export default function StepUpSIPCalculator() {
  const [monthlyStart, setMonthlyStart] = useState(10000)
  const [annualStepUp, setAnnualStepUp] = useState(10)
  const [returnRate, setReturnRate] = useState(12)
  const [years, setYears] = useState(15)

  const monthlyRate = returnRate / 100 / 12
  let maturity = 0
  let invested = 0

  for (let year = 0; year < years; year += 1) {
    const monthlyContribution = monthlyStart * Math.pow(1 + annualStepUp / 100, year)
    for (let month = 0; month < 12; month += 1) {
      maturity = (maturity + monthlyContribution) * (1 + monthlyRate)
      invested += monthlyContribution
    }
  }

  const gains = maturity - invested

  return (
    <ToolPageShell
      title="Step Up SIP Calculator"
      description="Estimate SIP growth when you increase your monthly contribution every year along with salary growth or higher savings capacity."
      badge="Wealth planner"
      stats={[
        { label: 'Projected corpus', value: formatCurrency(maturity) },
        { label: 'Total invested', value: formatCurrency(invested) },
        { label: 'Expected gains', value: formatCurrency(gains) },
      ]}
      tips={[
        'A modest yearly step-up can create a much larger final corpus over long periods.',
        'This model increases the SIP once every 12 months.',
        'Use the sliders to compare flat SIP investing versus growing contributions.',
      ]}
    >
      <div className="space-y-5">
        <RangeField label="Starting monthly SIP" value={monthlyStart} onChange={setMonthlyStart} min={1000} max={100000} step={500} valueFormatter={formatCurrency} />
        <RangeField
          label="Annual step-up"
          value={annualStepUp}
          onChange={setAnnualStepUp}
          min={0}
          max={25}
          step={1}
          valueFormatter={(value) => `${value}%`}
        />
        <RangeField label="Expected annual return" value={returnRate} onChange={setReturnRate} min={1} max={20} step={0.1} valueFormatter={(value) => `${value.toFixed(1)}%`} />
        <RangeField label="Investment duration" value={years} onChange={setYears} min={1} max={30} step={1} valueFormatter={(value) => `${value} years`} />
      </div>
    </ToolPageShell>
  )
}
