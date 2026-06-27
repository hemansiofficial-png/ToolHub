'use client'

import { useState } from 'react'
import RangeField from '../../../components/RangeField'
import ToolPageShell from '../../../components/ToolPageShell'

function getClassification(bmi: number) {
  if (bmi < 18.5) return { label: 'Underweight', color: 'from-amber-400 to-orange-500' }
  if (bmi < 25) return { label: 'Healthy range', color: 'from-emerald-400 to-teal-500' }
  if (bmi < 30) return { label: 'Overweight', color: 'from-sky-400 to-blue-500' }
  return { label: 'Obesity', color: 'from-rose-400 to-red-500' }
}

export default function BMICalculator() {
  const [weight, setWeight] = useState(70)
  const [height, setHeight] = useState(170)

  const bmi = weight / Math.pow(height / 100, 2)
  const bmiPosition = Math.max(0, Math.min(100, (bmi / 40) * 100))
  const classification = getClassification(bmi)

  function reset() {
    setWeight(70)
    setHeight(170)
  }

  return (
    <ToolPageShell
      title="BMI Calculator"
      description="Adjust your height and weight to instantly see your body mass index, current category, and where you sit on the visual scale."
      badge="Health calculator"
      stats={[
        { label: 'BMI score', value: bmi.toFixed(1) },
        { label: 'Category', value: classification.label },
        { label: 'Height', value: `${height} cm` },
      ]}
      tips={[
        'BMI is a quick screening tool and does not replace medical advice.',
        'Move the sliders slowly to compare how a small weight change affects the score.',
        'Use the colored range bar to see whether you are below, within, or above the typical range.',
      ]}
      aside={
        <div className="space-y-4">
          <div className="result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Current BMI</p>
              <p className="mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50">{bmi.toFixed(1)}</p>
              <div className={`mt-4 inline-flex rounded-full bg-gradient-to-r ${classification.color} px-4 py-2 text-sm font-semibold text-white`}>
                {classification.label}
              </div>
            </div>
          </div>

          <div className="interactive-panel rounded-[28px] p-5">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span>BMI range guide</span>
              <span>{bmi.toFixed(1)} / 40</span>
            </div>
            <div className="mt-4 h-4 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="flex h-full">
                <div className="w-[46.25%] bg-amber-400" />
                <div className="w-[16.25%] bg-emerald-500" />
                <div className="w-[12.5%] bg-sky-500" />
                <div className="w-[25%] bg-rose-500" />
              </div>
            </div>
            <div className="relative mt-2 h-4">
              <span
                className="absolute top-0 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-slate-950 shadow-lg dark:border-slate-950 dark:bg-white"
                style={{ left: `${bmiPosition}%` }}
              />
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between gap-4">
                <span>Weight</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{weight} kg</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Height</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{height} cm</span>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <RangeField
          label="Weight"
          value={weight}
          onChange={setWeight}
          min={30}
          max={180}
          step={1}
          suffix=" kg"
          valueFormatter={(value) => `${value} kg`}
        />
        <RangeField
          label="Height"
          value={height}
          onChange={setHeight}
          min={120}
          max={220}
          step={1}
          suffix=" cm"
          valueFormatter={(value) => `${value} cm`}
        />

        <button onClick={reset} className="btn-secondary w-full sm:w-auto">
          Reset defaults
        </button>
      </div>
    </ToolPageShell>
  )
}
