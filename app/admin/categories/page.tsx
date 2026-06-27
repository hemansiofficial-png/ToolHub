'use client'

import { useState } from 'react'
import CategoryForm from '../../../components/CategoryForm'
import { categories as initialCategories } from '../../../data/tools'

export default function AdminCategories() {
  const [categories, setCategories] = useState<string[]>(initialCategories)

  const handleAddCategory = (values: { name: string }) => {
    if (!values.name.trim()) return
    setCategories((current) => Array.from(new Set([...current, values.name.trim()])))
  }

  const handleRemove = (categoryToRemove: string) => {
    setCategories((current) => current.filter((category) => category !== categoryToRemove))
  }

  return (
    <main className="space-y-6">
      <section className="rounded border bg-white p-6 shadow-sm dark:bg-slate-800">
        <h1 className="text-2xl font-bold">Admin Categories</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Add and remove site-wide categories for tools and blog posts.</p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="rounded border bg-white p-6 shadow-sm dark:bg-slate-800">
            <h2 className="text-lg font-semibold">Active Categories</h2>
            <div className="mt-4 space-y-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center justify-between rounded border p-3">
                  <span>{category}</span>
                  <button onClick={() => handleRemove(category)} className="rounded bg-red-600 px-3 py-1 text-sm text-white">Remove</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <CategoryForm onSubmit={handleAddCategory} />
        </div>
      </section>
    </main>
  )
}
