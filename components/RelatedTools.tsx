import Link from 'next/link'
import type { ToolData } from '../data/tools'

export default function RelatedTools({
  category,
  tools,
}: {
  category: string
  tools: ToolData[]
}) {
  return (
    <section className="panel p-6 sm:p-8" aria-labelledby="related-tools-title">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="related-tools-title" className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
            Related Tools
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Explore more tools in the {category} category to keep the workflow moving.
          </p>
        </div>
        <Link
          href={`/categories/${encodeURIComponent(category)}`}
          className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200"
        >
          View all {category} tools
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link key={tool.slug} href={`/tools/${tool.slug}`} className="interactive-panel block rounded-[28px] p-5 transition hover:-translate-y-0.5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{tool.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
