import Link from 'next/link'
import { buildMetadata } from '../../components/PageSeo'
import { posts } from '../../data/blog'
import { siteConfig } from '../../utils/site'

export const metadata = buildMetadata({
  title: `Blog - ${siteConfig.name}`,
  description: 'Read practical guides on finance, productivity, SEO, and online tools.',
  url: '/blog',
  keywords: ['tool blog', 'finance guides', 'seo tips', 'productivity articles'],
})

export default function Blog() {
  const dateFormatter = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <section className="panel p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div>
            <span className="rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
              Editorial
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
              ToolHub India Blog
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              Practical articles that support the tools on this site, explain assumptions clearly, and help visitors make better decisions.
            </p>
          </div>

          <aside className="interactive-panel rounded-[28px] p-5">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">What you will find here</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <li>Clear explainers that match the calculators and utilities on the site.</li>
              <li>Actionable checklists instead of thin keyword-stuffed posts.</li>
              <li>Internal links to tools, policies, and related guides.</li>
            </ul>
          </aside>
        </div>

        <div className="mt-8 grid gap-4">
          {posts.map((post) => (
            <article key={post.slug} className="interactive-panel rounded-[28px] p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                <span>{post.category}</span>
                <span>{post.readingTime}</span>
                <span>{dateFormatter.format(new Date(post.updatedAt))}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-slate-50">
                <Link href={`/blog/${post.slug}`} className="transition hover:text-sky-700 dark:hover:text-sky-300">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.description}</p>
              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">{post.intro}</p>
              <div className="mt-5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
