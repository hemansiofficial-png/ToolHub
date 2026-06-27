import Link from 'next/link'
import { notFound } from 'next/navigation'
import { categories, toolsByCategory } from '../../../data/tools'

export async function generateStaticParams() {
  return categories.map((category) => ({ category }))
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  if (!categories.includes(category)) return notFound()
  const items = toolsByCategory(category)

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{category} Tools</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Browse all tools in the {category} category.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((tool) => (
          <Link key={tool.slug} href={`/tools/${tool.slug}`} className="rounded border p-4 shadow-sm hover:shadow-lg dark:bg-slate-900">
            <h2 className="font-semibold">{tool.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
