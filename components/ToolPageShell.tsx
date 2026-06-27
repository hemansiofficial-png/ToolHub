'use client'

import Link from 'next/link'
import { getToolSeoContentByTitle } from '../data/toolSeo'
import { tools } from '../data/tools'

type ToolStat = {
  label: string
  value: string
}

export default function ToolPageShell({
  title,
  description,
  badge = 'Interactive tool',
  stats = [],
  tips = [],
  children,
  aside,
}: {
  title: string
  description: string
  badge?: string
  stats?: ToolStat[]
  tips?: string[]
  children: React.ReactNode
  aside?: React.ReactNode
}) {
  const seoContent = getToolSeoContentByTitle(title)
  const internalLinks = seoContent
    ? seoContent.internalLinkSlugs
        .map((slug) => tools.find((tool) => tool.slug === slug))
        .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool))
    : []

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_30%)]" />

      <div className="container relative mx-auto px-4 py-6 sm:py-8">
        <nav className="animate-fade-up text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="transition hover:text-slate-900 dark:hover:text-slate-100">
            Home
          </Link>{' '}
          /{' '}
          <Link href="/tools" className="transition hover:text-slate-900 dark:hover:text-slate-100">
            Tools
          </Link>{' '}
          / <span>{title}</span>
        </nav>

        <section className="panel tool-stage mt-4 p-6 sm:p-8">
          <div className="grid gap-8 xl:grid-cols-[1.35fr_0.85fr] xl:items-start">
            <div className="space-y-6">
              <div className="animate-fade-up">
                <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:border-sky-900/60 dark:bg-sky-950/50 dark:text-sky-200">
                  {badge}
                </span>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">{title}</h1>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </div>

              {stats.length > 0 && (
                <div className="grid animate-fade-up gap-3 sm:grid-cols-3" style={{ animationDelay: '120ms' }}>
                  {stats.map((stat) => (
                    <div key={stat.label} className="interactive-panel rounded-3xl p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{stat.label}</p>
                      <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{stat.value}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="animate-fade-up" style={{ animationDelay: '180ms' }}>
                {children}
              </div>
            </div>

            <aside className="animate-slide-in space-y-4 rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700 dark:bg-slate-950/90">
              {aside ?? (
                <>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">Live workflow</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">Adjust, preview, refine.</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Each control responds instantly so you can test scenarios, compare outputs, and fine-tune values without reloading the page.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {(tips.length > 0 ? tips : [
                      'Move the sliders to explore realistic ranges quickly.',
                      'Use the quick reset action to jump back to the default values.',
                      'Watch the result card for live updates while you tweak inputs.',
                    ]).map((tip) => (
                      <div key={tip} className="interactive-panel rounded-2xl p-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                        {tip}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </aside>
          </div>
        </section>

        {seoContent ? (
          <section className="mt-6 grid gap-6 pb-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="panel p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-2">
                <section className="interactive-panel rounded-[28px] p-5">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">How To Use This Tool</h2>
                  <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {seoContent.howTo.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </section>

                <section className="interactive-panel rounded-[28px] p-5">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{seoContent.example.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{seoContent.example.body}</p>
                </section>
              </div>

              <section className="mt-6 interactive-panel rounded-[28px] p-5">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Frequently Asked Questions</h2>
                <div className="mt-4 space-y-4">
                  {seoContent.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="panel p-6 sm:p-8">
              <section className="interactive-panel rounded-[28px] p-5">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Related Internal Links</h2>
                <div className="mt-4 space-y-3">
                  <Link
                    href={`/categories/${encodeURIComponent(seoContent.category)}`}
                    className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200"
                  >
                    Browse all {seoContent.category} tools
                  </Link>
                  <Link
                    href="/blog"
                    className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200"
                  >
                    Read related guides on the blog
                  </Link>
                  {internalLinks.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200"
                    >
                      {tool.title}
                    </Link>
                  ))}
                </div>
              </section>
            </aside>
          </section>
        ) : null}
      </div>
    </main>
  )
}
