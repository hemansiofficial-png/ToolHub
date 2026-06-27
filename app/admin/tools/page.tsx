'use client'

import { useState } from 'react'
import AdminTable from '../../../components/AdminTable'
import ToolForm from '../../../components/ToolForm'
import { tools as initialTools } from '../../../data/tools'

type ToolType = {
  slug: string
  title: string
  description: string
  category: string
}

export default function AdminTools() {
  const [tools, setTools] = useState<ToolType[]>(initialTools)
  const [selected, setSelected] = useState<ToolType | null>(null)

  const handleSubmit = (values: ToolType) => {
    setTools((current) => {
      const exists = current.some((tool) => tool.slug === values.slug)
      if (exists) {
        return current.map((tool) => (tool.slug === values.slug ? values : tool))
      }
      return [...current, values]
    })
    setSelected(null)
  }

  const handleEdit = (tool: ToolType) => setSelected(tool)
  const handleDelete = (slug: string) => setTools((current) => current.filter((tool) => tool.slug !== slug))

  return (
    <main className="space-y-6">
      <section className="rounded border bg-white p-6 shadow-sm dark:bg-slate-800">
        <h1 className="text-2xl font-bold">Admin Tools</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Create and edit tools for the site.</p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div>
          <AdminTable columns={[ 'Title', 'Slug', 'Category', 'Actions' ]}>
            {tools.map((tool) => (
              <tr key={tool.slug}>
                <td className="px-4 py-3">{tool.title}</td>
                <td className="px-4 py-3 font-mono text-slate-500 dark:text-slate-400">{tool.slug}</td>
                <td className="px-4 py-3">{tool.category}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button onClick={() => handleEdit(tool)} className="rounded bg-slate-900 px-3 py-1 text-white">Edit</button>
                  <button onClick={() => handleDelete(tool.slug)} className="rounded bg-red-600 px-3 py-1 text-white">Delete</button>
                </td>
              </tr>
            ))}
          </AdminTable>
        </div>

        <div>
          <ToolForm onSubmit={handleSubmit} initialValues={selected ?? undefined} />
        </div>
      </section>
    </main>
  )
}
