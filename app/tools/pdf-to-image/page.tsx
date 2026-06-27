'use client'

import { useEffect, useState } from 'react'
import ToolPageShell from '../../../components/ToolPageShell'
import { canvasToBlob, downloadBlob, formatBytes, readFileAsArrayBuffer } from '../../../utils/browserTools'

type ConvertedImage = {
  name: string
  blob: Blob
  url: string
}

function createBaseName(fileName: string) {
  return fileName.replace(/\.pdf$/i, '')
}

export default function PdfToImagePage() {
  const [file, setFile] = useState<File | null>(null)
  const [images, setImages] = useState<ConvertedImage[]>([])
  const [message, setMessage] = useState('Upload a PDF to turn each page into a PNG image.')
  const [isWorking, setIsWorking] = useState(false)

  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.url))
    }
  }, [images])

  function clearImages() {
    setImages((current) => {
      current.forEach((image) => URL.revokeObjectURL(image.url))
      return []
    })
  }

  async function convertPdf() {
    if (!file) return

    setIsWorking(true)
    setMessage('Rendering PDF pages...')
    clearImages()

    try {
      const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs')
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
        import.meta.url,
      ).toString()

      const pdf = await pdfjs.getDocument({ data: await readFileAsArrayBuffer(file) }).promise
      const nextImages: ConvertedImage[] = []
      const baseName = createBaseName(file.name)

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        const page = await pdf.getPage(pageNumber)
        const viewport = page.getViewport({ scale: 2 })
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')

        if (!context) {
          throw new Error('Canvas rendering is not available.')
        }

        canvas.width = viewport.width
        canvas.height = viewport.height

        await page.render({
          canvas,
          canvasContext: context,
          viewport,
        }).promise

        const blob = await canvasToBlob(canvas, 'image/png')
        const name = `${baseName}-page-${pageNumber}.png`
        const url = URL.createObjectURL(blob)

        nextImages.push({ name, blob, url })
      }

      setImages(nextImages)
      setMessage(`Converted ${nextImages.length} page${nextImages.length === 1 ? '' : 's'} successfully.`)
    } catch {
      clearImages()
      setMessage('Could not convert the selected PDF. Please try another file.')
    } finally {
      setIsWorking(false)
    }
  }

  function reset() {
    setFile(null)
    clearImages()
    setMessage('Upload a PDF to turn each page into a PNG image.')
    setIsWorking(false)
  }

  function downloadAll() {
    images.forEach((image) => {
      downloadBlob(image.blob, image.name)
    })
  }

  const totalSize = images.reduce((sum, image) => sum + image.blob.size, 0)

  return (
    <ToolPageShell
      title="PDF to Image"
      description="Convert PDF pages into downloadable PNG images directly in your browser."
      badge="PDF tool"
      stats={[
        { label: 'Pages converted', value: String(images.length) },
        { label: 'Output type', value: 'PNG images' },
        { label: 'Export size', value: formatBytes(totalSize) },
      ]}
      tips={[
        'Use this when you need slide previews, document snapshots, or image pages for design review.',
        'Pages are rendered as PNG images so text and diagrams stay crisp at normal zoom levels.',
        'Everything runs client-side after you select the PDF, so your file stays on your device.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Conversion summary</p>
              <p className="mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50">{images.length}</p>
              <p className="mt-2 text-lg font-medium text-slate-700 dark:text-slate-200">image page{images.length === 1 ? '' : 's'} ready</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Upload one PDF and export each page as a separate PNG image.
              </p>
            </div>
          </div>

          <div className="interactive-panel rounded-[28px] p-5 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between gap-4">
              <span>Selected file</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{file ? file.name : 'None'}</span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span>Total output size</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{formatBytes(totalSize)}</span>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Upload PDF</span>
          <input
            type="file"
            accept="application/pdf"
            onChange={(event) => {
              clearImages()
              setFile(event.target.files?.[0] || null)
            }}
            className="form-field mt-2"
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={convertPdf} disabled={!file || isWorking} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
            {isWorking ? 'Processing...' : 'Convert PDF'}
          </button>
          <button onClick={downloadAll} disabled={images.length === 0} className="btn-secondary disabled:cursor-not-allowed disabled:opacity-60">
            Download all images
          </button>
          <button onClick={reset} className="btn-secondary">
            Reset defaults
          </button>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300">{message}</p>

        {images.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {images.map((image, index) => (
              <div key={image.name} className="interactive-panel rounded-[28px] p-4">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950">
                  <img src={image.url} alt={`Converted PDF page ${index + 1}`} className="h-auto w-full" />
                </div>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{image.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{formatBytes(image.blob.size)}</p>
                  </div>
                  <button onClick={() => downloadBlob(image.blob, image.name)} className="btn-secondary">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </ToolPageShell>
  )
}
