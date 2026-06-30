'use client'

import Link from 'next/link'
import Script from 'next/script'
import BenefitsSection from './BenefitsSection'
import CTASection from './CTASection'
import ExampleSection from './ExampleSection'
import FAQSection from './FAQSection'
import HowToUse from './HowToUse'
import RelatedBlogs from './RelatedBlogs'
import RelatedTools from './RelatedTools'
import TipsSection from './TipsSection'
import ToolFeatures from './ToolFeatures'
import ToolIntroduction from './ToolIntroduction'
import { posts } from '../data/blog'
import { getToolSeoContentByTitle } from '../data/toolSeo'
import { tools } from '../data/tools'
import {
  buildCanonical,
  jsonLdForBreadcrumbs,
  jsonLdForFaqs,
  jsonLdForSoftwareApplication,
  jsonLdForWebPage,
} from '../utils/seo'
import { getSiteUrl, siteConfig } from '../utils/site'

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
  const siteUrl = getSiteUrl()
  const tool = tools.find((item) => item.title === title)
  const toolId = tool?.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const canonical = tool ? buildCanonical(siteUrl, `/tools/${tool.slug}`) : ''
  const relatedTools = seoContent
    ? seoContent.internalLinkSlugs
        .map((slug) => tools.find((item) => item.slug === slug))
        .filter((item): item is NonNullable<typeof item> => Boolean(item))
    : []
  const relatedPosts = seoContent
    ? seoContent.relatedPostSlugs
        .map((slug) => posts.find((post) => post.slug === slug))
        .filter((post): post is NonNullable<typeof post> => Boolean(post))
        .slice(0, 3)
    : []
  const reviewedAt = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(siteConfig.contentReviewedAt))

  const structuredData = seoContent
    ? [
        jsonLdForWebPage({
          title: seoContent.title,
          description: seoContent.metaDescription,
          url: canonical,
        }),
        jsonLdForSoftwareApplication({
          title: seoContent.title,
          description: seoContent.metaDescription,
          url: canonical,
          category: seoContent.category,
          features: seoContent.features.map((feature) => feature.title),
        }),
        jsonLdForBreadcrumbs([
          { name: 'Home', url: siteUrl },
          { name: 'Tools', url: buildCanonical(siteUrl, '/tools') },
          { name: seoContent.title, url: canonical },
        ]),
        jsonLdForFaqs(seoContent.faqs),
      ]
    : []

  return (
    <main className="relative overflow-hidden">
      {structuredData.map((item, index) => (
        <Script key={index} id={`tool-ld-${index}-${toolId}`} type="application/ld+json">
          {JSON.stringify(item)}
        </Script>
      ))}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_30%)]" />

      <div className="container relative mx-auto px-4 py-6 sm:py-8">
        <nav aria-label="Breadcrumb" className="animate-fade-up text-sm text-slate-500 dark:text-slate-400">
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
              <header className="animate-fade-up">
                <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:border-sky-900/60 dark:bg-sky-950/50 dark:text-sky-200">
                  {badge}
                </span>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">{title}</h1>
                <div className="mt-3 max-w-3xl space-y-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {(seoContent?.heroIntro || [description]).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="#tool-interface" className="btn-primary text-center" aria-label={seoContent?.primaryCta || `Use ${title}`}>
                    {seoContent?.primaryCta || `Use ${title}`}
                  </a>
                  <Link href="/tools" className="btn-secondary text-center">
                    Explore more tools
                  </Link>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Category</p>
                    <p className="mt-2 font-medium">{seoContent?.category || tool?.category || 'Tool'}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Usage time</p>
                    <p className="mt-2 font-medium">{seoContent?.usageTime || '2 min'}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">Access</p>
                    <p className="mt-2 font-medium">Free • No signup required</p>
                  </div>
                  <div className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-800 dark:border-sky-900/60 dark:bg-sky-950/40 dark:text-sky-200">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">Last reviewed</p>
                    <p className="mt-2 font-medium">{reviewedAt}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                    HTTPS secure browsing
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                    Browser-first workflow
                  </span>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200">
                    No data stored for routine use
                  </span>
                </div>
              </header>

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

              <section id="tool-interface" aria-labelledby="tool-interface-title" className="animate-fade-up interactive-panel rounded-[32px] p-6" style={{ animationDelay: '180ms' }}>
                <div className="mb-5 flex flex-col gap-2">
                  <h2 id="tool-interface-title" className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Tool Interface
                  </h2>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Start with the live utility below, then use the examples, FAQs, and related guides further down the page if you need more context.
                  </p>
                </div>
                {children}
              </section>
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
                    {(tips.length > 0
                      ? tips
                      : [
                          'Move the sliders to explore realistic ranges quickly.',
                          'Use the quick reset action to jump back to the default values.',
                          'Watch the result card for live updates while you tweak inputs.',
                        ]).map((tip) => (
                      <div key={tip} className="interactive-panel rounded-2xl p-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                        {tip}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white/80 p-5 text-sm leading-7 text-slate-600 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-300">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Trust signals</p>
                    <p className="mt-3">
                      ToolHub pages are written to be useful before they are promotional, with supporting examples, related articles, and clear navigation.
                    </p>
                    <p className="mt-3">
                      If you are using a file-based tool on a shared device, review the output carefully and avoid sensitive uploads unless you are comfortable with the environment.
                    </p>
                  </div>
                </>
              )}
            </aside>
          </div>
        </section>

        {seoContent ? (
          <div className="mt-6 space-y-6 pb-8">
            <ToolIntroduction
              title={seoContent.title}
              category={seoContent.category}
              paragraphs={seoContent.overview}
              useCases={seoContent.useCases}
              audience={seoContent.audience}
            />
            <ToolFeatures items={seoContent.features} />
            <HowToUse steps={seoContent.howTo} />
            <ExampleSection example={seoContent.example} />
            <BenefitsSection items={seoContent.benefits} />
            <FAQSection
              items={seoContent.faqs}
              intro={`These answers cover common questions about ${seoContent.title.toLowerCase()}, privacy, mobile support, browser compatibility, and usage best practices.`}
            />
            <TipsSection items={seoContent.tips} />
            {relatedTools.length > 0 ? <RelatedTools category={seoContent.category} tools={relatedTools} /> : null}
            {relatedPosts.length > 0 ? <RelatedBlogs posts={relatedPosts} /> : null}
            <CTASection toolCount={tools.length} />
          </div>
        ) : null}
      </div>
    </main>
  )
}
