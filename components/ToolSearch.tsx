'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ToolData } from '../data/tools'

type ToolSearchProps = {
  tools: ToolData[]
  maxResults?: number
}

export default function ToolSearch({ tools, maxResults = 6 }: ToolSearchProps) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(
    () =>
      tools.filter(
        (tool) => tool.title.toLowerCase().includes(query.toLowerCase()) || tool.description.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, tools],
  )

  const results = filtered.slice(0, maxResults)

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="sr-only">Search tools</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools, e.g. SIP calculator"
          className="form-field"
        />
      </label>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {results.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="interactive-panel block rounded-[20px] p-4 transition hover:-translate-y-0.5"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{tool.title}</h3>
            <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">{tool.description}</p>
          </Link>
        ))}
      </div>

      {filtered.length > results.length ? (
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Showing {results.length} of {filtered.length} matches.
        </p>
      ) : null}

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">No matching tools found. Try a shorter term or browse the full directory.</p>
      ) : null}

      <div className="pt-1">
        <Link href="/tools" className="text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
          View full tools directory
        </Link>
      </div>
    </div>
  )
}
