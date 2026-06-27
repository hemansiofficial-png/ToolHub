'use client'

import { useState } from 'react'
import AdminTable from '../../../components/AdminTable'
import AdForm from '../../../components/AdForm'

type AdSlot = {
  id: string
  name: string
  placement: string
  type: string
  active: boolean
}

const initialAds: AdSlot[] = [
  { id: 'hero-banner', name: 'Homepage Banner', placement: 'Homepage Top', type: 'AdSense', active: true },
  { id: 'sidebar-1', name: 'Sidebar Unit', placement: 'Tool Sidebar', type: 'Sponsored', active: false },
]

export default function AdminAds() {
  const [ads, setAds] = useState<AdSlot[]>(initialAds)
  const [selected, setSelected] = useState<AdSlot | null>(null)

  const handleSubmit = (values: AdSlot) => {
    setAds((current) => {
      const exists = current.some((ad) => ad.id === values.id)
      if (exists) {
        return current.map((ad) => (ad.id === values.id ? values : ad))
      }
      return [...current, values]
    })
    setSelected(null)
  }

  const handleEdit = (ad: AdSlot) => setSelected(ad)
  const handleDelete = (id: string) => setAds((current) => current.filter((ad) => ad.id !== id))

  return (
    <main className="space-y-6">
      <section className="rounded border bg-white p-6 shadow-sm dark:bg-slate-800">
        <h1 className="text-2xl font-bold">Ad Management</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Create ad slots, configure AdSense placeholders, and manage sponsored listings.</p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div>
          <AdminTable columns={[ 'ID', 'Name', 'Placement', 'Type', 'Active', 'Actions' ]}>
            {ads.map((ad) => (
              <tr key={ad.id}>
                <td className="px-4 py-3 font-mono text-slate-500 dark:text-slate-400">{ad.id}</td>
                <td className="px-4 py-3">{ad.name}</td>
                <td className="px-4 py-3">{ad.placement}</td>
                <td className="px-4 py-3">{ad.type}</td>
                <td className="px-4 py-3">{ad.active ? 'Yes' : 'No'}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button onClick={() => handleEdit(ad)} className="rounded bg-slate-900 px-3 py-1 text-white">Edit</button>
                  <button onClick={() => handleDelete(ad.id)} className="rounded bg-red-600 px-3 py-1 text-white">Delete</button>
                </td>
              </tr>
            ))}
          </AdminTable>
        </div>

        <div>
          <AdForm onSubmit={handleSubmit} initialValues={selected ?? undefined} />
        </div>
      </section>
    </main>
  )
}
