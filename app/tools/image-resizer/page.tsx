'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'
import { canvasToBlob, downloadBlob, loadImageFromFile } from '../../../utils/browserTools'

export default function ImageResizerPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState('')
  const [width, setWidth] = useState(1200)
  const [height, setHeight] = useState(800)
  const [aspectRatio, setAspectRatio] = useState(1.5)
  const [lockAspect, setLockAspect] = useState(true)

  async function handleSelect(nextFile: File | null) {
    setFile(nextFile)
    if (!nextFile) return
    const { dataUrl, image } = await loadImageFromFile(nextFile)
    setPreview(dataUrl)
    setWidth(image.width)
    setHeight(image.height)
    setAspectRatio(image.width / image.height)
  }

  async function downloadResized() {
    if (!file) return
    const { image } = await loadImageFromFile(file)
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    if (!context) return
    context.drawImage(image, 0, 0, width, height)
    const blob = await canvasToBlob(canvas, 'image/png')
    downloadBlob(blob, 'resized-image.png')
  }

  function reset() {
    setFile(null)
    setPreview('')
    setWidth(1200)
    setHeight(800)
    setAspectRatio(1.5)
    setLockAspect(true)
  }

  return (
    <ToolPageShell
      title="Image Resizer"
      description="Resize an image with slider-based width and height controls, with the option to keep the original aspect ratio locked."
      badge="Image tool"
      stats={[
        { label: 'Width', value: `${width}px` },
        { label: 'Height', value: `${height}px` },
        { label: 'Aspect lock', value: lockAspect ? 'On' : 'Off' },
      ]}
      tips={[
        'Lock the aspect ratio to avoid stretching the image.',
        'This is handy for blog uploads, thumbnails, profile banners, and product photos.',
        'The output downloads as PNG to preserve crisp resized edges.',
      ]}
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Upload image</span>
          <input type="file" accept="image/png,image/jpeg" onChange={(event) => handleSelect(event.target.files?.[0] || null)} className="form-field mt-2" />
        </label>

        <RangeField
          label="Width"
          value={width}
          onChange={(value) => {
            setWidth(value)
            if (lockAspect) setHeight(Math.max(1, Math.round(value / aspectRatio)))
          }}
          min={100}
          max={3000}
          step={10}
          valueFormatter={(value) => `${value}px`}
        />
        <RangeField
          label="Height"
          value={height}
          onChange={(value) => {
            setHeight(value)
            if (lockAspect) setWidth(Math.max(1, Math.round(value * aspectRatio)))
          }}
          min={100}
          max={3000}
          step={10}
          valueFormatter={(value) => `${value}px`}
        />

        <label className="interactive-panel flex items-center justify-between rounded-3xl p-4">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Lock aspect ratio</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Keep the image proportions linked while resizing.</p>
          </div>
          <input type="checkbox" checked={lockAspect} onChange={(event) => setLockAspect(event.target.checked)} className="h-5 w-5 accent-sky-600" />
        </label>

        {preview && <img src={preview} alt="Uploaded preview" className="rounded-[28px] border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-950" />}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={downloadResized} disabled={!file} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
            Download resized image
          </button>
          <button onClick={reset} className="btn-secondary">
            Reset defaults
          </button>
        </div>
      </div>
    </ToolPageShell>
  )
}
