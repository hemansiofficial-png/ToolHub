'use client'

import { useMemo, useState } from 'react'
import { ToolData } from '../data/tools'
import Link from 'next/link'

type ToolSearchProps = {
  tools: ToolData[]
}

export default function ToolSearch({ tools }: ToolSearchProps) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(
    () => tools.filter((tool) => tool.title.toLowerCase().includes(query.toLowerCase()) || tool.description.toLowerCase().includes(query.toLowerCase())),
    [query, tools]
  )

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="sr-only">Search tools</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools, e.g. SIP calculator"
          className="w-full rounded border p-3"
        />
      </label>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="block rounded border p-4 hover:shadow-sm"
          >
            <h3 className="font-semibold">{tool.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
