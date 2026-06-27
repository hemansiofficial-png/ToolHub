'use client'

import JsBarcode from 'jsbarcode'
import { useEffect, useRef, useState } from 'react'
import ToolPageShell from '../../../components/ToolPageShell'
import { downloadBlob } from '../../../utils/browserTools'

const barcodeFormats = ['CODE128', 'EAN13', 'UPC', 'CODE39'] as const

export default function BarcodeGeneratorPage() {
  const [value, setValue] = useState('123456789012')
  const [format, setFormat] = useState<(typeof barcodeFormats)[number]>('CODE128')
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [message, setMessage] = useState('Barcode preview updates automatically as you edit the value.')

  useEffect(() => {
    if (!canvasRef.current) return

    try {
      JsBarcode(canvasRef.current, value || '0', {
        format,
        displayValue: true,
        background: '#ffffff',
        lineColor: '#0f172a',
        margin: 12,
      })
      setMessage('Barcode ready to download.')
    } catch {
      setMessage('This value does not match the selected barcode format.')
    }
  }, [format, value])

  async function downloadBarcode() {
    if (!canvasRef.current) return
    const blob = await new Promise<Blob | null>((resolve) => canvasRef.current?.toBlob(resolve))
    if (!blob) return
    downloadBlob(blob, 'barcode.png')
  }

  function reset() {
    setValue('123456789012')
    setFormat('CODE128')
  }

  return (
    <ToolPageShell
      title="Barcode Generator"
      description="Generate and download barcode images in common formats like CODE128, EAN13, UPC, and CODE39."
      badge="Image tool"
      stats={[
        { label: 'Format', value: format },
        { label: 'Characters', value: String(value.length) },
        { label: 'Preview', value: 'Live' },
      ]}
      tips={[
        'Use CODE128 for general-purpose labels and internal codes.',
        'EAN13 and UPC have stricter numeric-length requirements, so the value must match the format.',
        'Download the rendered barcode as a PNG once the preview looks correct.',
      ]}
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Value</span>
          <input value={value} onChange={(event) => setValue(event.target.value)} className="form-field mt-2" placeholder="123456789012" />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Format</span>
          <select value={format} onChange={(event) => setFormat(event.target.value as (typeof barcodeFormats)[number])} className="form-field mt-2">
            {barcodeFormats.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-950">
          <canvas ref={canvasRef} className="max-w-full" />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={downloadBarcode} className="btn-primary">
            Download barcode
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
