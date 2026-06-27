'use client'

import { ReactNode } from 'react'

type AdminTableProps = {
  columns: string[]
  children: ReactNode
}

export default function AdminTable({ columns, children }: AdminTableProps) {
  return (
    <div className="overflow-x-auto rounded border bg-white shadow-sm dark:bg-slate-800">
      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
        <thead className="bg-slate-50 dark:bg-slate-900">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-sm text-slate-700 dark:text-slate-300">
          {children}
        </tbody>
      </table>
    </div>
  )
}
