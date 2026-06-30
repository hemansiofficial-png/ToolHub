import Link from 'next/link'
import { buildMetadata } from '../../components/PageSeo'
import { posts } from '../../data/blog'
import { categories, toolsByCategory } from '../../data/tools'
import { categorySummaries, categoryBlogSlugs } from '../../data/siteContent'

export const metadata = buildMetadata({
  title: 'Categories',
  description: 'Browse ToolHub India by category to find the right calculators, converters, and utilities faster.',
  url: '/categories',
  keywords: ['tool categories', 'calculator categories', 'utility categories', 'tool directory'],
})

export default function CategoriesPage() {
  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <section className="panel p-6 sm:p-8">
        <div className="max-w-3xl">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:bg-sky-950/40 dark:text-sky-200">
            Categories
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">Browse by Category</h1>
          <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
            Categories help visitors find the right tool faster and make the site easier to explore. They also create a strong internal linking path between tools, blog posts, and the homepage.
          </p>
          <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
            If you are not sure which tool to open, start here and move into the category that matches your task.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <section key={category} className="interactive-panel rounded-[28px] p-5">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{category}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{categorySummaries[category]}</p>
              <p className="mt-3 text-sm font-medium text-sky-700 dark:text-sky-300">{toolsByCategory(category).length} tools available</p>
              <div className="mt-5 space-y-2">
                {toolsByCategory(category).slice(0, 4).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200"
                  >
                    {tool.title}
                  </Link>
                ))}
              </div>

              {categoryBlogSlugs[category]?.length ? (
                <div className="mt-5 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Related articles</p>
                  <div className="mt-3 space-y-2">
                    {categoryBlogSlugs[category].slice(0, 2).map((slug) => {
                      const post = posts.find((item) => item.slug === slug)
                      if (!post) return null

                      return (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="block text-sm leading-6 text-slate-600 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-sky-300"
                        >
                          {post.title}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}
