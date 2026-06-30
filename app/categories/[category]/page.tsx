import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildMetadata } from '../../../components/PageSeo'
import { posts } from '../../../data/blog'
import { categories, toolsByCategory } from '../../../data/tools'
import { categoryBlogSlugs, categoryFaqs, categorySummaries } from '../../../data/siteContent'
import { siteConfig } from '../../../utils/site'

export async function generateStaticParams() {
  return categories.map((category) => ({ category }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  if (!categories.includes(category)) {
    return { title: 'Not found' }
  }

  return buildMetadata({
    title: `${category} Tools`,
    description: categorySummaries[category],
    url: `/categories/${encodeURIComponent(category)}`,
    keywords: [category.toLowerCase(), 'tool category', `${category.toLowerCase()} tools`, siteConfig.name],
  })
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  if (!categories.includes(category)) return notFound()

  const items = toolsByCategory(category)
  const relatedPosts = (categoryBlogSlugs[category] || [])
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))

  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <section className="panel p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="max-w-3xl">
            <span className="rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:bg-sky-950/40 dark:text-sky-200">
              Category overview
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">{category} Tools</h1>
            <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">{categorySummaries[category]}</p>
            <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
              This category groups {items.length} tools together, making it easier to compare options and move from a quick task to a deeper explanation when needed.
            </p>
          </div>

          <aside className="interactive-panel rounded-[28px] p-5">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">What to expect</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <li>Fast access to the core utility pages.</li>
              <li>Supporting blog posts that explain the workflow.</li>
              <li>Clean internal links back to the broader directory.</li>
            </ul>
          </aside>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="interactive-panel rounded-[28px] p-5 transition hover:-translate-y-0.5"
              >
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{tool.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{tool.description}</p>
              </Link>
            ))}
          </div>

          <div className="space-y-6">
            <section className="interactive-panel rounded-[28px] p-6">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Related Articles</h2>
              <div className="mt-5 space-y-4">
                {relatedPosts.map((post) => (
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
            </section>

            <section className="interactive-panel rounded-[28px] p-6">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">FAQs</h2>
              <div className="mt-4 space-y-4">
                {(categoryFaqs[category] || []).map((faq) => (
                  <details key={faq.question} className="rounded-[24px] border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900 marker:hidden dark:text-slate-100">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
