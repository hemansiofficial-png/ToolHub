'use client'

import { PDFDocument } from 'pdf-lib'
import { useState } from 'react'
import ToolPageShell from '../../../components/ToolPageShell'
import { downloadBlob, loadImageFromFile } from '../../../utils/browserTools'

export default function ImageToPDFPage() {
  const [files, setFiles] = useState<File[]>([])
  const [message, setMessage] = useState('Upload images to convert them into a single PDF.')
  const [isWorking, setIsWorking] = useState(false)

  async function convertImages() {
    if (files.length === 0) return
    setIsWorking(true)
    setMessage('Converting images to PDF...')

    try {
      const pdf = await PDFDocument.create()

      for (const file of files) {
        const { dataUrl, image } = await loadImageFromFile(file)
        const isPng = file.type === 'image/png'
        const embeddedImage = isPng ? await pdf.embedPng(dataUrl) : await pdf.embedJpg(dataUrl)
        const page = pdf.addPage([image.width, image.height])
        page.drawImage(embeddedImage, { x: 0, y: 0, width: image.width, height: image.height })
      }

      const bytes = new Uint8Array(await pdf.save())
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), 'images-to-pdf.pdf')
      setMessage(`Converted ${files.length} image${files.length === 1 ? '' : 's'} successfully.`)
    } catch {
      setMessage('Could not convert one or more selected images.')
    } finally {
      setIsWorking(false)
    }
  }

  function reset() {
    setFiles([])
    setMessage('Upload images to convert them into a single PDF.')
    setIsWorking(false)
  }

  return (
    <ToolPageShell
      title="Image to PDF"
      description="Turn one or more JPG or PNG images into a PDF file directly in the browser."
      badge="PDF tool"
      stats={[
        { label: 'Images selected', value: String(files.length) },
        { label: 'Output', value: 'Single PDF' },
        { label: 'Mode', value: 'Client-side' },
      ]}
      tips={[
        'This works well for scanned notes, receipts, screenshots, and image portfolios.',
        'Each image becomes one PDF page sized to the image dimensions.',
        'No upload step is required, so your images stay local.',
      ]}
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Upload images</span>
          <input type="file" accept="image/png,image/jpeg" multiple onChange={(event) => setFiles(Array.from(event.target.files || []))} className="form-field mt-2" />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={convertImages} disabled={files.length === 0 || isWorking} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
            {isWorking ? 'Processing...' : 'Create PDF'}
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
