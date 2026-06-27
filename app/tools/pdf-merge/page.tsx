'use client'

import { PDFDocument } from 'pdf-lib'
import { useState } from 'react'
import ToolPageShell from '../../../components/ToolPageShell'
import { downloadBlob, formatBytes, readFileAsArrayBuffer } from '../../../utils/browserTools'

export default function PDFMergePage() {
  const [files, setFiles] = useState<File[]>([])
  const [isWorking, setIsWorking] = useState(false)
  const [message, setMessage] = useState('Add two or more PDF files to merge them in the selected order.')

  async function mergePDFs() {
    if (files.length < 2) return
    setIsWorking(true)
    setMessage('Merging PDFs...')

    try {
      const mergedPdf = await PDFDocument.create()

      for (const file of files) {
        const source = await PDFDocument.load(await readFileAsArrayBuffer(file))
        const pages = await mergedPdf.copyPages(source, source.getPageIndices())
        pages.forEach((page) => mergedPdf.addPage(page))
      }

      const bytes = new Uint8Array(await mergedPdf.save())
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), 'merged-document.pdf')
      setMessage(`Merged ${files.length} files successfully.`)
    } catch {
      setMessage('Could not merge the selected PDFs. Please verify the files and try again.')
    } finally {
      setIsWorking(false)
    }
  }

  function reset() {
    setFiles([])
    setIsWorking(false)
    setMessage('Add two or more PDF files to merge them in the selected order.')
  }

  return (
    <ToolPageShell
      title="PDF Merge"
      description="Select multiple PDF files and combine them into a single document directly in the browser."
      badge="PDF tool"
      stats={[
        { label: 'Files queued', value: String(files.length) },
        { label: 'Total size', value: formatBytes(files.reduce((sum, file) => sum + file.size, 0)) },
        { label: 'Output', value: 'Merged PDF' },
      ]}
      tips={[
        'The merge order follows the file order provided by your browser selection.',
        'Everything runs client-side, so files stay on your device during processing.',
        'Use this for invoices, reports, contracts, or scanned page bundles.',
      ]}
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Upload PDFs</span>
          <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={(event) => setFiles(Array.from(event.target.files || []))}
            className="form-field mt-2"
          />
        </label>

        <div className="interactive-panel rounded-[28px] p-5">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Selected files</p>
          <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {files.length > 0 ? files.map((file) => <div key={file.name}>{file.name}</div>) : <div>No files added yet.</div>}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={mergePDFs} disabled={files.length < 2 || isWorking} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
            {isWorking ? 'Processing...' : 'Merge PDFs'}
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
