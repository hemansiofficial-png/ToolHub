'use client'

import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { categories } from '../data/tools'

type ToolFormValues = {
  slug: string
  title: string
  description: string
  category: string
}

type ToolFormProps = {
  onSubmit: (values: ToolFormValues) => void
  initialValues?: ToolFormValues
}

export default function ToolForm({ onSubmit, initialValues }: ToolFormProps) {
  const form = useForm<ToolFormValues>({
    defaultValues: initialValues || { slug: '', title: '', description: '', category: categories[0] || '' },
  })

  const { register, handleSubmit, watch, reset } = form
  const slug = watch('slug')
  const previewUrl = useMemo(() => `/tools/${slug || 'your-tool'}`, [slug])

  useEffect(() => {
    reset(initialValues || { slug: '', title: '', description: '', category: categories[0] || '' })
  }, [initialValues, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded border p-6 bg-slate-50 dark:bg-slate-950">
      <div>
        <label className="block text-sm font-medium">Tool Title</label>
        <input {...register('title')} className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" />
      </div>
      <div>
        <label className="block text-sm font-medium">Slug</label>
        <input {...register('slug')} className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea {...register('description')} className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" rows={3} />
      </div>
      <div>
        <label className="block text-sm font-medium">Category</label>
        <select {...register('category')} className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400">Preview URL: <span className="font-mono">{previewUrl}</span></div>
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Save Tool</button>
    </form>
  )
}
