'use client'

import { useState } from 'react'
import ToolPageShell from '../../../components/ToolPageShell'

export default function WordCounter() {
  const [text, setText] = useState('')

  const trimmed = text.trim()
  const words = trimmed ? trimmed.split(/\s+/).length : 0
  const chars = text.length
  const sentences = trimmed ? trimmed.split(/[.!?]+/).filter(Boolean).length : 0
  const readingTime = Math.max(0, Math.ceil(words / 200))

  function reset() {
    setText('')
  }

  return (
    <ToolPageShell
      title="Word Counter"
      description="Paste or type text to get instant counts for words, characters, sentences, and reading time with a live preview experience."
      badge="Writing utility"
      stats={[
        { label: 'Words', value: String(words) },
        { label: 'Characters', value: String(chars) },
        { label: 'Reading time', value: `${readingTime} min` },
      ]}
      tips={[
        'Use this while drafting articles, bios, captions, or prompts that have length limits.',
        'Sentence count helps when you want to keep copy snappy and readable.',
        'Everything updates live, so there is no extra action between writing and checking.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Live summary</p>
              <p className="mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50">{words}</p>
              <p className="mt-2 text-lg font-medium text-slate-700 dark:text-slate-200">words detected</p>
            </div>
          </div>

          <div className="interactive-panel rounded-[28px] p-5 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between gap-4">
              <span>Sentences</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{sentences}</span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span>Estimated reading time</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{readingTime} min</span>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="form-field min-h-[18rem] resize-y"
          placeholder="Paste your article, caption, or prompt here..."
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={reset} className="btn-secondary w-full sm:w-auto">
            Clear text
          </button>
        </div>
      </div>
    </ToolPageShell>
  )
}
