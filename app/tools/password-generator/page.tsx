'use client'

import { useEffect, useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

function randomChar(pool: string) {
  return pool[Math.floor(Math.random() * pool.length)]
}

function buildPassword(length: number, includeNumbers: boolean, includeSymbols: boolean) {
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = lower.toUpperCase()
  const numbers = '0123456789'
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

  let pool = lower + upper
  if (includeNumbers) pool += numbers
  if (includeSymbols) pool += symbols

  let generated = ''
  for (let index = 0; index < length; index += 1) {
    generated += randomChar(pool)
  }

  return generated
}

function getStrength(length: number, includeNumbers: boolean, includeSymbols: boolean) {
  const score = length + (includeNumbers ? 6 : 0) + (includeSymbols ? 8 : 0)
  if (score < 18) return 'Basic'
  if (score < 28) return 'Strong'
  return 'Very strong'
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(14)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [password, setPassword] = useState('')

  const strength = getStrength(length, includeNumbers, includeSymbols)

  function generate() {
    setPassword(buildPassword(length, includeNumbers, includeSymbols))
  }

  function reset() {
    setLength(14)
    setIncludeSymbols(true)
    setIncludeNumbers(true)
  }

  useEffect(() => {
    generate()
  }, [length, includeNumbers, includeSymbols])

  async function copyPassword() {
    if (!password) return
    await navigator.clipboard.writeText(password)
  }

  return (
    <ToolPageShell
      title="Password Generator"
      description="Tune the length, switch character sets on or off, and generate fresh passwords instantly with a live strength readout."
      badge="Security utility"
      stats={[
        { label: 'Length', value: `${length} chars` },
        { label: 'Numbers', value: includeNumbers ? 'On' : 'Off' },
        { label: 'Strength', value: strength },
      ]}
      tips={[
        'Longer passwords usually do more for security than complex-but-short ones.',
        'Symbols are useful for sites that permit them, but toggles let you match strict rules quickly.',
        'Every settings change generates a fresh candidate automatically.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Generated password</p>
              <p className="mt-3 break-all font-mono text-2xl font-bold text-slate-950 dark:text-slate-50">{password}</p>
            </div>
          </div>

          <div className="interactive-panel rounded-[28px] p-5">
            <div className="flex items-center justify-between gap-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span>Strength</span>
              <span>{strength}</span>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className={`h-full rounded-full ${
                  strength === 'Very strong'
                    ? 'w-full bg-emerald-500'
                    : strength === 'Strong'
                      ? 'w-3/4 bg-sky-500'
                      : 'w-1/2 bg-amber-500'
                }`}
              />
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <RangeField label="Password length" value={length} onChange={setLength} min={6} max={32} step={1} valueFormatter={(value) => `${value} characters`} />

        <label className="interactive-panel flex items-center justify-between rounded-3xl p-4">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Include numbers</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Adds digits from 0 to 9 into the generator pool.</p>
          </div>
          <input type="checkbox" checked={includeNumbers} onChange={(event) => setIncludeNumbers(event.target.checked)} className="h-5 w-5 accent-sky-600" />
        </label>

        <label className="interactive-panel flex items-center justify-between rounded-3xl p-4">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Include symbols</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Adds punctuation and special characters for stronger variety.</p>
          </div>
          <input type="checkbox" checked={includeSymbols} onChange={(event) => setIncludeSymbols(event.target.checked)} className="h-5 w-5 accent-sky-600" />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={generate} className="btn-primary">
            Generate new one
          </button>
          <button onClick={copyPassword} className="btn-secondary">
            Copy password
          </button>
          <button onClick={reset} className="btn-secondary">
            Reset defaults
          </button>
        </div>
      </div>
    </ToolPageShell>
  )
}
