'use client'

import { useState } from 'react'
import ToolPageShell from '../../../components/ToolPageShell'

export default function CharacterCounterPage() {
  const [text, setText] = useState('')

  function reset() {
    setText('')
  }

  const characters = text.length
  const charactersNoSpaces = text.replace(/\s/g, '').length
  const lines = text ? text.split(/\r?\n/).length : 0
  const paragraphs = text.trim() ? text.trim().split(/\n\s*\n/).length : 0

  return (
    <ToolPageShell
      title="Character Counter"
      description="Track total characters, characters without spaces, lines, and paragraphs as you type or paste text."
      badge="Text tool"
      stats={[
        { label: 'Characters', value: String(characters) },
        { label: 'No spaces', value: String(charactersNoSpaces) },
        { label: 'Lines', value: String(lines) },
      ]}
      tips={[
        'Useful for social posts, bios, meta descriptions, and prompt limits.',
        'Counting without spaces helps when a field has stricter character rules.',
        'Paragraph and line counts are handy for editing longer drafts.',
      ]}
    >
      <div className="space-y-4">
        <textarea value={text} onChange={(event) => setText(event.target.value)} className="form-field min-h-[18rem] resize-y" placeholder="Type or paste your text here..." />
        <div className="interactive-panel rounded-[28px] p-5 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center justify-between gap-4">
            <span>Paragraphs</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">{paragraphs}</span>
          </div>
        </div>
        <button onClick={reset} className="btn-secondary w-full sm:w-auto">
          Reset defaults
        </button>
      </div>
    </ToolPageShell>
  )
}
