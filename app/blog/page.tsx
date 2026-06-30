import Link from 'next/link'
import { buildMetadata } from '../../components/PageSeo'
import { posts } from '../../data/blog'
import { siteConfig } from '../../utils/site'

export const metadata = buildMetadata({
  title: 'Blog',
  description: 'Practical guides that support the tools on ToolHub India with examples, internal links, and clear editorial context.',
  url: '/blog',
  keywords: ['tool blog', 'finance guides', 'seo tips', 'productivity articles'],
})

export default function Blog() {
  const dateFormatter = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  const featuredPosts = posts.slice(0, 3)
  const recentPosts = posts.slice(3, 6)

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
            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              The blog expands on the tools you see on the site. Each article explains assumptions, highlights practical use cases, and links back to the utilities that solve the work.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              That structure helps visitors move from a quick calculation or conversion into a deeper explanation, which is better for session depth, trust, and search visibility.
            </p>
          </div>

          <aside className="interactive-panel rounded-[28px] p-5">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Editorial standards</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <li>Articles include author, published date, last updated date, and reading time.</li>
              <li>Every post links to related tools and supporting reading.</li>
              <li>We keep the advice practical, human-readable, and non-promotional.</li>
            </ul>
          </aside>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="interactive-panel rounded-[28px] p-6">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Featured Articles</h2>
            <div className="mt-5 grid gap-4">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="rounded-[26px] border border-slate-200 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-950/70">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    <span>{post.category}</span>
                    <span>{post.readingTime}</span>
                    <span>{dateFormatter.format(new Date(post.updatedAt))}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-slate-50">
                    <Link href={`/blog/${post.slug}`} className="transition hover:text-sky-700 dark:hover:text-sky-300">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>By {post.author}</span>
                    <span>Updated {dateFormatter.format(new Date(post.updatedAt))}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="interactive-panel rounded-[28px] p-6">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Recent Articles</h2>
              <div className="mt-5 space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block rounded-[24px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200"
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="interactive-panel rounded-[28px] p-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why read these guides?</p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                The articles are written to support {siteConfig.name} tools with explanations, examples, and next steps that help users make better decisions.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                They are also useful for visitors who want to understand the broader topic before they use a calculator, converter, or formatter.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
