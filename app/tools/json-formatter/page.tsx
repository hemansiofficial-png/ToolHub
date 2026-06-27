'use client'

import { useState } from 'react'
import ToolPageShell from '../../../components/ToolPageShell'

const sampleJSON = `{"name":"ToolHub","category":"Developer","features":["format","validate","copy"]}`

export default function JSONFormatter() {
  const [input, setInput] = useState(sampleJSON)
  const [output, setOutput] = useState('')
  const [error, setError] = useState<string | null>(null)

  function formatJSON() {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError(null)
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Invalid JSON')
      setOutput('')
    }
  }

  function minifyJSON() {
    try {
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
      setError(null)
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Invalid JSON')
      setOutput('')
    }
  }

  function reset() {
    setInput(sampleJSON)
    setOutput('')
    setError(null)
  }

  async function copyOutput() {
    if (!output) return
    await navigator.clipboard.writeText(output)
  }

  return (
    <ToolPageShell
      title="JSON Formatter"
      description="Paste JSON, validate it, format it for readability, or minify it for transport with an interactive preview on the same page."
      badge="Developer utility"
      stats={[
        { label: 'Input chars', value: String(input.length) },
        { label: 'Output chars', value: String(output.length) },
        { label: 'Status', value: error ? 'Invalid' : 'Ready' },
      ]}
      tips={[
        'Format for debugging and minify when you want a compact payload.',
        'Load the sample payload if you just want to test the UI quickly.',
        'Validation errors stay visible so you can fix the exact issue without losing your input.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Validation status</p>
              <p className="mt-3 text-3xl font-bold text-slate-950 dark:text-slate-50">{error ? 'Needs fixing' : 'Looks good'}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {error ? error : 'Your JSON is valid and ready to be formatted or copied.'}
              </p>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <textarea
          className="form-field min-h-[16rem] font-mono text-sm"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Paste JSON here"
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button onClick={formatJSON} className="btn-primary">
            Format
          </button>
          <button onClick={minifyJSON} className="btn-secondary">
            Minify
          </button>
          <button onClick={copyOutput} className="btn-secondary">
            Copy output
          </button>
          <button onClick={reset} className="btn-secondary">
            Load sample
          </button>
        </div>

        {error && <div className="rounded-3xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-950/60 dark:bg-rose-950/20 dark:text-rose-200">{error}</div>}

        <pre className="form-field min-h-[16rem] overflow-auto bg-slate-950 text-sm text-slate-100 dark:border-slate-700 dark:bg-slate-950">
          {output || '// Formatted JSON will appear here'}
        </pre>
      </div>
    </ToolPageShell>
  )
}
