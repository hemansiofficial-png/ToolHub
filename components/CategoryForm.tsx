'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type CategoryFormValues = {
  name: string
}

type CategoryFormProps = {
  onSubmit: (values: CategoryFormValues) => void
  initialValues?: CategoryFormValues
}

export default function CategoryForm({ onSubmit, initialValues }: CategoryFormProps) {
  const { register, handleSubmit, reset } = useForm<CategoryFormValues>({
    defaultValues: initialValues || { name: '' },
  })

  useEffect(() => {
    reset(initialValues || { name: '' })
  }, [initialValues, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded border p-6 bg-slate-50 dark:bg-slate-950">
      <div>
        <label className="block text-sm font-medium">Category Name</label>
        <input {...register('name')} className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" />
      </div>
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Save Category</button>
    </form>
  )
}
