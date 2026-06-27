'use client'

import { PDFDocument } from 'pdf-lib'
import { useState } from 'react'
import ToolPageShell from '../../../components/ToolPageShell'
import { downloadBlob, readFileAsArrayBuffer } from '../../../utils/browserTools'

export default function PDFSplitPage() {
  const [file, setFile] = useState<File | null>(null)
  const [pageCount, setPageCount] = useState(0)
  const [startPage, setStartPage] = useState(1)
  const [endPage, setEndPage] = useState(1)
  const [message, setMessage] = useState('Upload a PDF to choose the page range you want to extract.')

  async function handleFileSelect(nextFile: File | null) {
    setFile(nextFile)
    if (!nextFile) return

    try {
      const document = await PDFDocument.load(await readFileAsArrayBuffer(nextFile))
      const totalPages = document.getPageCount()
      setPageCount(totalPages)
      setStartPage(1)
      setEndPage(totalPages)
      setMessage(`Loaded ${totalPages} pages.`)
    } catch {
      setPageCount(0)
      setMessage('Could not read that PDF. Please choose another file.')
    }
  }

  async function splitPDF() {
    if (!file || pageCount === 0) return

    try {
      const source = await PDFDocument.load(await readFileAsArrayBuffer(file))
      const output = await PDFDocument.create()
      const pageIndexes = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage - 1 + index)
      const pages = await output.copyPages(source, pageIndexes)
      pages.forEach((page) => output.addPage(page))
      const bytes = new Uint8Array(await output.save())
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), 'split-pages.pdf')
      setMessage(`Extracted pages ${startPage} to ${endPage}.`)
    } catch {
      setMessage('Could not extract the selected pages.')
    }
  }

  function reset() {
    setFile(null)
    setPageCount(0)
    setStartPage(1)
    setEndPage(1)
    setMessage('Upload a PDF to choose the page range you want to extract.')
  }

  return (
    <ToolPageShell
      title="PDF Split"
      description="Upload a PDF and extract any page range into a new standalone PDF file."
      badge="PDF tool"
      stats={[
        { label: 'Pages loaded', value: String(pageCount) },
        { label: 'Start page', value: String(startPage) },
        { label: 'End page', value: String(endPage) },
      ]}
      tips={[
        'This is ideal for extracting a chapter, invoice range, or selected report pages.',
        'The output preserves the original pages without rasterizing them.',
        'You can adjust the page range after the file loads.',
      ]}
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Upload PDF</span>
          <input
            type="file"
            accept="application/pdf"
            onChange={(event) => handleFileSelect(event.target.files?.[0] || null)}
            className="form-field mt-2"
          />
        </label>

        {pageCount > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Start page</span>
              <input
                type="number"
                min={1}
                max={pageCount}
                value={startPage}
                onChange={(event) => setStartPage(Math.max(1, Math.min(Number(event.target.value) || 1, endPage)))}
                className="form-field mt-2"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">End page</span>
              <input
                type="number"
                min={startPage}
                max={pageCount}
                value={endPage}
                onChange={(event) => setEndPage(Math.max(startPage, Math.min(Number(event.target.value) || startPage, pageCount)))}
                className="form-field mt-2"
              />
            </label>
          </div>
        )}

        <button onClick={splitPDF} disabled={!file || pageCount === 0} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
          Extract pages
        </button>
        <p className="text-sm text-slate-600 dark:text-slate-300">{message}</p>
      </div>
    </ToolPageShell>
  )
}
