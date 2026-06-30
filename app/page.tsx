import Link from 'next/link'
import AdPlaceholder from '../components/AdPlaceholder'
import FAQSection from '../components/FAQSection'
import ToolCard from '../components/ToolCard'
import ToolSearch from '../components/ToolSearch'
import { buildMetadata } from '../components/PageSeo'
import { posts } from '../data/blog'
import { categories, tools, toolsByCategory } from '../data/tools'
import {
  categorySummaries,
  homepageBenefits,
  homepageFaqs,
  homepageHeroParagraphs,
  homepagePrinciples,
  homepageTrustSignals,
  homepageWorkflowSteps,
} from '../data/siteContent'

export const metadata = buildMetadata({
  title: 'Home',
  description:
    'ToolHub India offers free online tools, calculators, and practical guides with strong internal linking, helpful examples, and clear trust signals.',
  url: '/',
  keywords: ['online tools', 'calculators', 'free utilities', 'toolhub india'],
})

export default function Home() {
  const featuredTools = tools.slice(0, 6)
  const recentTools = tools.slice(-4)
  const featuredPosts = posts.slice(0, 3)
  const topCategories = categories.slice(0, 6)
  const spotlightTools = tools.slice(0, 3)
  const stats = [
    { label: 'Tools available', value: tools.length.toString() },
    { label: 'Categories', value: categories.length.toString() },
    { label: 'Guides published', value: posts.length.toString() },
    { label: 'Free access', value: 'No signup' },
  ]

  return (
    <main className="container mx-auto max-w-7xl px-4 py-6 sm:py-8">
      <section className="panel overflow-hidden p-5 sm:p-7 lg:p-8">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch">
          <div className="flex min-h-full flex-col justify-between gap-8 rounded-[32px] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.68),rgba(255,255,255,0.34))] p-6 dark:border-slate-700/80 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.56),rgba(15,23,42,0.28))] sm:p-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:bg-sky-950/40 dark:text-sky-200">
                ToolHub India
              </span>
              <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-6xl">
                Free tools, calculators, and guides built for real work.
              </h1>
              <div className="mt-5 max-w-2xl space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {homepageHeroParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/tools" className="btn-primary text-center">
                  Explore all tools
                </Link>
                <Link href="/blog" className="btn-secondary text-center">
                  Read the blog
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[24px] border border-slate-200 bg-white/85 p-4 dark:border-slate-700 dark:bg-slate-950/70">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex min-h-full flex-col gap-4 rounded-[32px] border border-slate-200/70 bg-white/60 p-5 dark:border-slate-700/80 dark:bg-slate-950/60 sm:p-6">
            <div className="rounded-[24px] border border-slate-200 bg-white/90 p-5 dark:border-slate-700 dark:bg-slate-950/90">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Find a tool fast</p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Search the directory when you already know the task. The tools below give you a quick starting point if you are browsing.
              </p>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-950/90">
              <ToolSearch tools={tools} maxResults={3} />
            </div>

            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {spotlightTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="rounded-[20px] border border-slate-200 bg-white/80 p-4 transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-slate-700 dark:bg-slate-950/80 dark:hover:border-sky-500"
                >
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{tool.title}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">{tool.description}</p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
        <div className="space-y-6">
          <section className="panel p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Why Choose ToolHub?</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {homepagePrinciples.map((item) => (
                <article key={item.title} className="interactive-panel rounded-[28px] p-5">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="panel p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">How Our Tools Work</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {homepageWorkflowSteps.map((step, index) => (
                <article key={step.title} className="interactive-panel rounded-[28px] p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700 dark:bg-sky-950/60 dark:text-sky-200">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <AdPlaceholder />

          <section className="panel p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Popular Categories</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Start with the category that matches your task, then move deeper into the tools and supporting guides from there.
                </p>
              </div>
              <Link href="/categories" className="text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
                View all categories
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {topCategories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${encodeURIComponent(category)}`}
                  className="interactive-panel rounded-[28px] p-5 transition hover:-translate-y-0.5"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{category}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{categorySummaries[category]}</p>
                  <p className="mt-3 text-sm font-medium text-sky-700 dark:text-sky-300">{toolsByCategory(category).length} tools</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="panel p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Featured Tools</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  The tools below are common entry points for visitors who want a fast answer with supporting guidance nearby.
                </p>
              </div>
              <Link href="/tools" className="text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
                Browse all tools
              </Link>
            </div>

            <div className="mt-6 grid items-start grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.slug} title={tool.title} slug={tool.slug} description={tool.description} />
              ))}
            </div>
          </section>

          <section className="panel p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Recently Added Tools</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  New entries and refreshed pages give returning visitors another reason to come back and keep exploring.
                </p>
              </div>
              <Link href="/tools" className="text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
                See the directory
              </Link>
            </div>

            <div className="mt-6 grid items-start gap-4 md:grid-cols-2">
              {recentTools.map((tool) => (
                <ToolCard key={tool.slug} title={tool.title} slug={tool.slug} description={tool.description} />
              ))}
            </div>
          </section>

          <section className="panel p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Featured Blog Articles</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  The blog expands on the tools with practical advice, decision context, and internal links to the relevant utilities.
                </p>
              </div>
              <Link href="/blog" className="text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
                Open the blog
              </Link>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="interactive-panel rounded-[28px] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{post.category}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    <Link href={`/blog/${post.slug}`} className="transition hover:text-sky-700 dark:hover:text-sky-300">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.description}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    By {post.author} | {post.readingTime}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="panel p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Benefits for Visitors</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {homepageBenefits.map((benefit) => (
                <article key={benefit} className="interactive-panel rounded-[28px] p-5">
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{benefit}</p>
                </article>
              ))}
            </div>
          </section>

          <FAQSection
            items={homepageFaqs}
            intro="These questions cover how ToolHub India works, what kind of support each page includes, and why the site is structured the way it is."
          />
        </div>

        <aside className="space-y-6">
          <section className="panel p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Trust Signals</h2>
            <div className="mt-6 space-y-4">
              {homepageTrustSignals.map((signal) => (
                <div key={signal.label} className="interactive-panel rounded-[24px] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{signal.label}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">{signal.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="panel p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Why online tools save time</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Browser tools reduce setup time, avoid app switching, and make one-off jobs feel lighter. That is especially useful when you need a quick estimate, a formatted output, or a file adjustment and do not want to open a heavy desktop workflow.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              The result is a more direct path from problem to output, which is exactly the kind of experience visitors expect from a utility site.
            </p>
          </section>

          <section className="panel p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Customer Benefits</h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <p>Less friction when users just need one task finished.</p>
              <p>More confidence because examples and FAQs are nearby.</p>
              <p>Better exploration thanks to category and blog links.</p>
            </div>
          </section>
        </aside>
      </section>
    </main>
  )
}
