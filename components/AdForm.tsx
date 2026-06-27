'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type AdFormValues = {
  id: string
  name: string
  placement: string
  type: string
  active: boolean
}

type AdFormProps = {
  onSubmit: (values: AdFormValues) => void
  initialValues?: AdFormValues
}

export default function AdForm({ onSubmit, initialValues }: AdFormProps) {
  const { register, handleSubmit, reset, watch } = useForm<AdFormValues>({
    defaultValues: initialValues || {
      id: '',
      name: '',
      placement: 'Homepage Banner',
      type: 'AdSense',
      active: true,
    },
  })

  const active = watch('active')

  useEffect(() => {
    reset(
      initialValues || {
        id: '',
        name: '',
        placement: 'Homepage Banner',
        type: 'AdSense',
        active: true,
      },
    )
  }, [initialValues, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded border p-6 bg-slate-50 dark:bg-slate-950">
      <div>
        <label className="block text-sm font-medium">Ad Slot ID</label>
        <input {...register('id')} className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800 font-mono" />
      </div>
      <div>
        <label className="block text-sm font-medium">Ad Name</label>
        <input {...register('name')} className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" />
      </div>
      <div>
        <label className="block text-sm font-medium">Placement</label>
        <input {...register('placement')} className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" />
      </div>
      <div>
        <label className="block text-sm font-medium">Ad Type</label>
        <select {...register('type')} className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800">
          <option value="AdSense">AdSense</option>
          <option value="Sponsored">Sponsored</option>
          <option value="Custom">Custom</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <input id="active" type="checkbox" {...register('active')} className="h-4 w-4 rounded border-slate-300 text-blue-600" />
        <label htmlFor="active" className="text-sm font-medium">Active</label>
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400">Status: {active ? 'Enabled' : 'Disabled'}</div>
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Save Ad Slot</button>
    </form>
  )
}
