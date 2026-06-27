'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { categories } from '../data/tools'
import type { BlogPost } from '../data/blog'

type BlogFormValues = Pick<BlogPost, 'slug' | 'title' | 'category' | 'description' | 'intro'>

type BlogFormProps = {
  onSubmit: (values: BlogFormValues) => void
  initialValues?: BlogFormValues
}

export default function BlogForm({ onSubmit, initialValues }: BlogFormProps) {
  const defaultValues: BlogFormValues = initialValues || {
    slug: '',
    title: '',
    category: categories[0] || 'General',
    description: '',
    intro: '',
  }

  const form = useForm<BlogFormValues>({
    defaultValues,
  })

  const { register, handleSubmit, reset } = form

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded border bg-slate-50 p-6 dark:bg-slate-950">
      <div>
        <label className="block text-sm font-medium">Post Title</label>
        <input {...register('title')} className="mt-1 w-full rounded border bg-white p-2 dark:bg-slate-800" />
      </div>
      <div>
        <label className="block text-sm font-medium">Slug</label>
        <input {...register('slug')} className="mt-1 w-full rounded border bg-white p-2 font-mono dark:bg-slate-800" />
      </div>
      <div>
        <label className="block text-sm font-medium">Category</label>
        <select {...register('category')} className="mt-1 w-full rounded border bg-white p-2 dark:bg-slate-800">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea {...register('description')} className="mt-1 w-full rounded border bg-white p-2 dark:bg-slate-800" rows={2} />
      </div>
      <div>
        <label className="block text-sm font-medium">Intro</label>
        <textarea {...register('intro')} className="mt-1 w-full rounded border bg-white p-2 dark:bg-slate-800" rows={6} />
      </div>
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Save Post</button>
    </form>
  )
}
