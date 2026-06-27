'use client'

import FormField from './FormField'

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export default function RangeField({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix = '',
  suffix = '',
  valueFormatter,
}: {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  prefix?: string
  suffix?: string
  valueFormatter?: (value: number) => string
}) {
  const percent = ((value - min) / (max - min)) * 100
  const displayValue = valueFormatter ? valueFormatter(value) : `${prefix}${value}${suffix}`

  return (
    <FormField label={label}>
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-100">
            {displayValue}
          </div>
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(event) => onChange(clamp(Number(event.target.value) || min, min, max))}
            className="form-field w-full text-right sm:w-36"
          />
        </div>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="slider mt-4"
          style={{
            background: `linear-gradient(90deg, #0ea5e9 0%, #0ea5e9 ${percent}%, #cbd5e1 ${percent}%, #cbd5e1 100%)`,
          }}
        />

        <div className="mt-2 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
          <span>
            {prefix}
            {min}
            {suffix}
          </span>
          <span>
            {prefix}
            {max}
            {suffix}
          </span>
        </div>
      </div>
    </FormField>
  )
}
