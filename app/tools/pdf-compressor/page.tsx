'use client'

import { PDFDocument } from 'pdf-lib'
import { useState } from 'react'
import ToolPageShell from '../../../components/ToolPageShell'
import { downloadBlob, formatBytes, readFileAsArrayBuffer } from '../../../utils/browserTools'

export default function PDFCompressorPage() {
  const [file, setFile] = useState<File | null>(null)
  const [optimizedSize, setOptimizedSize] = useState<number | null>(null)
  const [message, setMessage] = useState('Upload a PDF to optimize it with lightweight client-side compression.')

  async function optimizePDF() {
    if (!file) return

    try {
      setMessage('Optimizing PDF...')
      const source = await PDFDocument.load(await readFileAsArrayBuffer(file))
      const rebuilt = await PDFDocument.create()
      const pages = await rebuilt.copyPages(source, source.getPageIndices())
      pages.forEach((page) => rebuilt.addPage(page))
      rebuilt.setTitle('')
      rebuilt.setAuthor('')
      rebuilt.setSubject('')
      rebuilt.setProducer('')
      rebuilt.setCreator('')

      const bytes = new Uint8Array(await rebuilt.save({ useObjectStreams: true }))
      setOptimizedSize(bytes.length)
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), 'optimized.pdf')
      setMessage('Optimization complete. Results vary depending on the original PDF structure.')
    } catch {
      setMessage('Could not optimize that PDF. Please try another file.')
    }
  }

  function reset() {
    setFile(null)
    setOptimizedSize(null)
    setMessage('Upload a PDF to optimize it with lightweight client-side compression.')
  }

  return (
    <ToolPageShell
      title="PDF Compressor"
      description="Reduce PDF overhead by rebuilding and optimizing the file structure locally in the browser."
      badge="PDF tool"
      stats={[
        { label: 'Original size', value: file ? formatBytes(file.size) : '0 B' },
        { label: 'Optimized size', value: optimizedSize ? formatBytes(optimizedSize) : 'Pending' },
        { label: 'Method', value: 'Structure optimize' },
      ]}
      tips={[
        'This lightweight compressor works best on PDFs with removable overhead rather than heavy scanned images.',
        'Files are rebuilt locally and downloaded immediately after optimization.',
        'Some PDFs may shrink noticeably while others change very little.',
      ]}
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Upload PDF</span>
          <input type="file" accept="application/pdf" onChange={(event) => setFile(event.target.files?.[0] || null)} className="form-field mt-2" />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={optimizePDF} disabled={!file} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
            Optimize PDF
          </button>
          <button onClick={reset} className="btn-secondary">
            Reset defaults
          </button>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300">{message}</p>
      </div>
    </ToolPageShell>
  )
}
