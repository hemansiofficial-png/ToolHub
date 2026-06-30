import Link from 'next/link'
import ToolCard from '../../components/ToolCard'
import ToolSearch from '../../components/ToolSearch'
import { buildMetadata } from '../../components/PageSeo'
import { posts } from '../../data/blog'
import { categories, tools, toolsByCategory } from '../../data/tools'
import { categorySummaries } from '../../data/siteContent'

export const metadata = buildMetadata({
  title: 'Tools',
  description: 'Browse free calculators, converters, and utility tools with helpful examples, related reading, and clear category navigation.',
  url: '/tools',
  keywords: ['online tools', 'calculators', 'free utilities', 'tool directory'],
})

export default function ToolsPage() {
  const featuredTools = tools.slice(0, 6)
  const featuredPosts = posts.slice(0, 3)

  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <section className="panel p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="max-w-3xl">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200">
              Explore tools
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">All Tools</h1>
            <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
              Browse calculators, formatters, converters, and document tools by category. Each tool includes supporting content, examples, FAQs, and links to related resources.
            </p>
            <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
              The directory is designed to help users find the right utility quickly, then continue to the next relevant page instead of stopping at a dead end.
            </p>
          </div>

          <aside className="interactive-panel rounded-[28px] p-5">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Search first</p>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              If you already know the task, use search to jump straight to the right tool.
            </p>
          </aside>
        </div>

        <div className="mt-8 rounded-[28px] border border-slate-200 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-950/70">
          <ToolSearch tools={tools} />
        </div>

        <div className="mt-8 grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} title={tool.title} slug={tool.slug} description={tool.description} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="interactive-panel rounded-[28px] p-6">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Popular Categories</h2>
            <div className="mt-5 grid items-start gap-4 md:grid-cols-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${encodeURIComponent(category)}`}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-sky-500"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{category}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{categorySummaries[category]}</p>
                  <p className="mt-3 text-sm font-medium text-sky-700 dark:text-sky-300">{toolsByCategory(category).length} tools</p>
                </Link>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="interactive-panel rounded-[28px] p-6">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Featured Reading</h2>
              <div className="mt-5 space-y-4">
                {featuredPosts.map((post) => (
                  <article key={post.slug} className="rounded-[24px] border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-950">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{post.category}</p>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                      <Link href={`/blog/${post.slug}`} className="transition hover:text-sky-700 dark:hover:text-sky-300">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="interactive-panel rounded-[28px] p-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">How to explore faster</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <li>Start with the search box if you know the tool name.</li>
                <li>Use category pages when you want a broader comparison.</li>
                <li>Open the matching blog post when you need practical background.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
