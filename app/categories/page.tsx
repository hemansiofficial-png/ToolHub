import Link from 'next/link'
import { categories } from '../../data/tools'
import { toolsByCategory } from '../../data/tools'

export default function CategoriesPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Categories</h1>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <section key={category} className="rounded border p-4 shadow-sm dark:bg-slate-900">
            <h2 className="font-semibold">{category}</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {toolsByCategory(category).slice(0, 4).map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="hover:text-blue-600">
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
