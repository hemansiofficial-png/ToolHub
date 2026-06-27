import ToolCard from '../../components/ToolCard'
import { tools } from '../../data/tools'

export default function ToolsPage() {
  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <section className="panel p-6 sm:p-8">
        <div className="max-w-3xl">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200">
            Explore tools
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">All Tools</h1>
          <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            Browse interactive calculators, generators, and utility tools with richer previews and faster inputs.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} title={tool.title} slug={tool.slug} description={tool.description} />
        ))}
        </div>
      </section>
    </main>
  )
}
