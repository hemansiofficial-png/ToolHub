'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'
import { canvasToBlob, downloadBlob, formatBytes, loadImageFromFile } from '../../../utils/browserTools'

export default function ImageCompressorPage() {
  const [file, setFile] = useState<File | null>(null)
  const [quality, setQuality] = useState(75)
  const [maxWidth, setMaxWidth] = useState(1600)
  const [preview, setPreview] = useState('')
  const [compressedSize, setCompressedSize] = useState<number | null>(null)

  async function handleSelect(nextFile: File | null) {
    setFile(nextFile)
    setCompressedSize(null)
    if (!nextFile) return
    const { dataUrl } = await loadImageFromFile(nextFile)
    setPreview(dataUrl)
  }

  async function compressImage() {
    if (!file) return
    const { image } = await loadImageFromFile(file)
    const scale = Math.min(1, maxWidth / image.width)
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(image.width * scale)
    canvas.height = Math.round(image.height * scale)
    const context = canvas.getContext('2d')
    if (!context) return
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    const blob = await canvasToBlob(canvas, 'image/jpeg', quality / 100)
    setCompressedSize(blob.size)
    downloadBlob(blob, 'compressed-image.jpg')
  }

  function reset() {
    setFile(null)
    setQuality(75)
    setMaxWidth(1600)
    setPreview('')
    setCompressedSize(null)
  }

  return (
    <ToolPageShell
      title="Image Compressor"
      description="Compress JPG or PNG images in-browser by reducing resolution and export quality before downloading the smaller file."
      badge="Image tool"
      stats={[
        { label: 'Original size', value: file ? formatBytes(file.size) : '0 B' },
        { label: 'Compressed size', value: compressedSize ? formatBytes(compressedSize) : 'Pending' },
        { label: 'Quality', value: `${quality}%` },
      ]}
      tips={[
        'Reducing width usually creates the biggest file-size savings for large photos.',
        'Compression exports as JPEG for broad compatibility and smaller file sizes.',
        'Preview first, then download the optimized version when you are happy with the settings.',
      ]}
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Upload image</span>
          <input type="file" accept="image/png,image/jpeg" onChange={(event) => handleSelect(event.target.files?.[0] || null)} className="form-field mt-2" />
        </label>

        <RangeField label="Output quality" value={quality} onChange={setQuality} min={20} max={95} step={1} valueFormatter={(value) => `${value}%`} />
        <RangeField label="Maximum width" value={maxWidth} onChange={setMaxWidth} min={400} max={2400} step={50} valueFormatter={(value) => `${value}px`} />

        {preview && <img src={preview} alt="Uploaded preview" className="rounded-[28px] border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-950" />}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={compressImage} disabled={!file} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
            Compress image
          </button>
          <button onClick={reset} className="btn-secondary">
            Reset defaults
          </button>
        </div>
      </div>
    </ToolPageShell>
  )
}
