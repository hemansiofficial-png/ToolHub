'use client'

import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

export default function QRCodeGenerator() {
  const [text, setText] = useState('https://toolhub.example')
  const [size, setSize] = useState(240)
  const [src, setSrc] = useState('')

  useEffect(() => {
    let cancelled = false

    async function generateCode() {
      try {
        const nextSrc = await QRCode.toDataURL(text || ' ', {
          width: size,
          margin: 2,
        })

        if (!cancelled) {
          setSrc(nextSrc)
        }
      } catch {
        if (!cancelled) {
          setSrc('')
        }
      }
    }

    generateCode()

    return () => {
      cancelled = true
    }
  }, [size, text])

  function reset() {
    setText('https://toolhub.example')
    setSize(240)
  }

  return (
    <ToolPageShell
      title="QR Code Generator"
      description="Type a URL or any text, resize the code with the slider, and download the QR image instantly from the live preview."
      badge="Visual generator"
      stats={[
        { label: 'Content length', value: String(text.length) },
        { label: 'Canvas size', value: `${size}px` },
        { label: 'Download ready', value: src ? 'Yes' : 'No' },
      ]}
      tips={[
        'Keep URLs clean and short for easier scanning in the real world.',
        'Use the size slider when you need a larger export for print or signage.',
        'The QR preview updates automatically while you type, so there is no separate generate step.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative flex items-center justify-center">
              {src ? <img src={src} alt="Generated QR code" className="rounded-3xl bg-white p-4 shadow-sm" /> : <p>No preview yet</p>}
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Text or URL</span>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            className="form-field mt-2"
            placeholder="https://example.com"
          />
        </label>

        <RangeField
          label="QR size"
          value={size}
          onChange={setSize}
          min={160}
          max={480}
          step={20}
          suffix=" px"
          valueFormatter={(value) => `${value}px`}
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={src || '#'}
            download="qrcode.png"
            className={`btn-primary text-center ${src ? '' : 'pointer-events-none opacity-60'}`}
          >
            Download PNG
          </a>
          <button onClick={reset} className="btn-secondary">
            Reset defaults
          </button>
        </div>
      </div>
    </ToolPageShell>
  )
}
