'use client'

import ToolPageShell from './ToolPageShell'

export default function CalculatorShell({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <ToolPageShell title={title} description={description} badge="Calculator">
      {children}
    </ToolPageShell>
  )
}
