'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value)

export default function StockAverageCalculator() {
  const [quantityOne, setQuantityOne] = useState(10)
  const [priceOne, setPriceOne] = useState(250)
  const [quantityTwo, setQuantityTwo] = useState(15)
  const [priceTwo, setPriceTwo] = useState(220)
  const [quantityThree, setQuantityThree] = useState(20)
  const [priceThree, setPriceThree] = useState(180)

  const totalShares = quantityOne + quantityTwo + quantityThree
  const totalCost = quantityOne * priceOne + quantityTwo * priceTwo + quantityThree * priceThree
  const averagePrice = totalShares > 0 ? totalCost / totalShares : 0

  return (
    <ToolPageShell
      title="Stock Average Calculator"
      description="Average multiple buy prices to find your blended cost per share and total invested amount after averaging down or up."
      badge="Portfolio helper"
      stats={[
        { label: 'Average price', value: formatCurrency(averagePrice) },
        { label: 'Total shares', value: String(totalShares) },
        { label: 'Total cost', value: formatCurrency(totalCost) },
      ]}
      tips={[
        'Use separate lots to model averaging down after a dip or pyramiding into strength.',
        'Your break-even price is simply the weighted average cost per share.',
        'Brokerage, taxes, and charges are not included in this quick estimate.',
      ]}
    >
      <div className="space-y-6">
        <div className="interactive-panel rounded-[28px] p-5">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lot 1</h2>
          <div className="mt-4 space-y-4">
            <RangeField label="Quantity" value={quantityOne} onChange={setQuantityOne} min={1} max={500} step={1} />
            <RangeField label="Buy price" value={priceOne} onChange={setPriceOne} min={10} max={5000} step={5} valueFormatter={formatCurrency} />
          </div>
        </div>
        <div className="interactive-panel rounded-[28px] p-5">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lot 2</h2>
          <div className="mt-4 space-y-4">
            <RangeField label="Quantity" value={quantityTwo} onChange={setQuantityTwo} min={1} max={500} step={1} />
            <RangeField label="Buy price" value={priceTwo} onChange={setPriceTwo} min={10} max={5000} step={5} valueFormatter={formatCurrency} />
          </div>
        </div>
        <div className="interactive-panel rounded-[28px] p-5">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lot 3</h2>
          <div className="mt-4 space-y-4">
            <RangeField label="Quantity" value={quantityThree} onChange={setQuantityThree} min={1} max={500} step={1} />
            <RangeField label="Buy price" value={priceThree} onChange={setPriceThree} min={10} max={5000} step={5} valueFormatter={formatCurrency} />
          </div>
        </div>
      </div>
    </ToolPageShell>
  )
}
