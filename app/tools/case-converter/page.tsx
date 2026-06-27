'use client'

import { useState } from 'react'
import ToolPageShell from '../../../components/ToolPageShell'

function toTitleCase(text: string) {
  return text.toLowerCase().replace(/\b\w/g, (character) => character.toUpperCase())
}

function toSentenceCase(text: string) {
  return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (character) => character.toUpperCase())
}

function normalizeWords(text: string) {
  return text.trim().split(/[\s_-]+/).filter(Boolean)
}

export default function CaseConverterPage() {
  const [text, setText] = useState('Convert this sample text')

  function reset() {
    setText('Convert this sample text')
  }

  const titleCase = toTitleCase(text)
  const sentenceCase = toSentenceCase(text)
  const camelCase = normalizeWords(text)
    .map((word, index) => (index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
    .join('')
  const snakeCase = normalizeWords(text).map((word) => word.toLowerCase()).join('_')
  const kebabCase = normalizeWords(text).map((word) => word.toLowerCase()).join('-')

  async function copyText(value: string) {
    await navigator.clipboard.writeText(value)
  }

  return (
    <ToolPageShell
      title="Case Converter"
      description="Convert text between upper, lower, title, sentence, camel, snake, and kebab case with one-click copy actions."
      badge="Text tool"
      stats={[
        { label: 'Characters', value: String(text.length) },
        { label: 'Words', value: String(text.trim() ? text.trim().split(/\s+/).length : 0) },
        { label: 'Variants', value: '7' },
      ]}
      tips={[
        'Great for UI copy, programming identifiers, filenames, and content cleanup.',
        'Camel, snake, and kebab case are especially useful when naming variables or routes.',
        'Every converted block can be copied independently.',
      ]}
    >
      <div className="space-y-5">
        <textarea value={text} onChange={(event) => setText(event.target.value)} className="form-field min-h-[12rem] resize-y" placeholder="Type or paste text here..." />

        {[
          ['UPPERCASE', text.toUpperCase()],
          ['lowercase', text.toLowerCase()],
          ['Title Case', titleCase],
          ['Sentence case', sentenceCase],
          ['camelCase', camelCase],
          ['snake_case', snakeCase],
          ['kebab-case', kebabCase],
        ].map(([label, value]) => (
          <div key={label} className="interactive-panel rounded-[28px] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{label}</p>
                <p className="mt-2 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">{value}</p>
              </div>
              <button onClick={() => copyText(value)} className="btn-secondary">
                Copy
              </button>
            </div>
          </div>
        ))}

        <button onClick={reset} className="btn-secondary w-full sm:w-auto">
          Reset defaults
        </button>
      </div>
    </ToolPageShell>
  )
}
