import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { posts } from '../../../data/blog'
import { blogToolSlugs } from '../../../data/siteContent'
import { tools } from '../../../data/tools'
import { buildMetadata } from '../../../components/PageSeo'
import { jsonLdForArticle, jsonLdForBreadcrumbs, jsonLdForFaqs } from '../../../utils/seo'
import { getSiteUrl } from '../../../utils/site'

type Props = {
  params: Promise<{ slug: string }>
}

function toAnchorId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = posts.find((item) => item.slug === slug)
  if (!post) return { title: 'Not found' }

  return buildMetadata({
    title: post.title,
    description: post.description,
    url: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  })
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Post({ params }: Props) {
  const { slug } = await params
  const post = posts.find((item) => item.slug === slug)
  if (!post) return notFound()

  const relatedPosts = posts
    .filter((item) => item.slug !== post.slug)
    .filter((item) => item.category === post.category)
    .concat(posts.filter((item) => item.slug !== post.slug).filter((item) => item.category !== post.category))
    .slice(0, 3)

  const relatedTools = (blogToolSlugs[post.slug] || [])
    .map((toolSlug) => tools.find((tool) => tool.slug === toolSlug))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool))

  const takeaways = post.sections.flatMap((section) => section.bullets || []).slice(0, 4)
  const siteUrl = getSiteUrl()
  const articleUrl = `${siteUrl}/blog/${post.slug}`
  const dateFormatter = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const articleLd = jsonLdForArticle({
    title: post.title,
    description: post.description,
    url: articleUrl,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: post.author,
  })
  const breadcrumbLd = jsonLdForBreadcrumbs([
    { name: 'Home', url: siteUrl },
    { name: 'Blog', url: `${siteUrl}/blog` },
    { name: post.title, url: articleUrl },
  ])
  const faqLd = jsonLdForFaqs(post.faqs)
  const tocItems = [
    { label: 'Introduction', href: '#introduction' },
    ...post.sections.map((section) => ({
      label: section.heading,
      href: `#${toAnchorId(section.heading)}`,
    })),
    ...(relatedTools.length > 0 ? [{ label: 'Related tools', href: '#related-tools' }] : []),
    { label: 'Conclusion', href: '#conclusion' },
    { label: 'Frequently asked questions', href: '#faq' },
  ]

  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <Script id={`article-ld-${post.slug}`} type="application/ld+json">
        {JSON.stringify(articleLd)}
      </Script>
      <Script id={`breadcrumb-ld-${post.slug}`} type="application/ld+json">
        {JSON.stringify(breadcrumbLd)}
      </Script>
      <Script id={`faq-ld-${post.slug}`} type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      <section className="panel p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div>
            <Link href="/blog" className="text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
              Back to blog
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              <span>{post.category}</span>
              <span>{post.readingTime}</span>
              <span>Updated {dateFormatter.format(new Date(post.updatedAt))}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">{post.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">{post.description}</p>
            <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
              <span>By {post.author}</span>
              <span>Published {dateFormatter.format(new Date(post.publishedAt))}</span>
              <span>Last updated {dateFormatter.format(new Date(post.updatedAt))}</span>
            </div>
          </div>

          <aside className="interactive-panel rounded-[28px] p-5">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Table of Contents</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {tocItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-sky-700 dark:hover:text-sky-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="space-y-4">
            <div id="introduction" className="interactive-panel rounded-[28px] p-6">
              <p className="text-base leading-8 text-slate-700 dark:text-slate-200">{post.intro}</p>
            </div>

            {post.sections.map((section) => (
              <section key={section.heading} id={toAnchorId(section.heading)} className="interactive-panel rounded-[28px] p-6">
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {relatedTools.length > 0 ? (
              <section id="related-tools" className="interactive-panel rounded-[28px] p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Related Tools</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Keep moving from reading to action with tools that match the topic of this article.
                    </p>
                  </div>
                  <Link href="/tools" className="text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
                    Browse all tools
                  </Link>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {relatedTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="interactive-panel block rounded-[24px] p-5 transition hover:-translate-y-0.5"
                    >
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{tool.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{tool.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            <section id="conclusion" className="interactive-panel rounded-[28px] p-6">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Conclusion</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {`The practical takeaway is simple: use ${post.title.toLowerCase()} as a decision aid, then pair it with the related tools and guides on ToolHub India when you want a faster path from understanding to action.`}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                The more you explore the matching tools, categories, and supporting articles, the easier it becomes to turn a single answer into a better workflow.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/tools" className="btn-primary text-center">
                  Explore tools
                </Link>
                <Link href="/categories" className="btn-secondary text-center">
                  Browse categories
                </Link>
              </div>
            </section>

            <section className="interactive-panel rounded-[28px] p-6">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Internal Links</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Use these links to keep reading without leaving the site structure.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/tools" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                  Tools directory
                </Link>
                <Link href="/blog" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                  Blog index
                </Link>
                <Link href="/" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                  Homepage
                </Link>
                <Link href="/about" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                  About ToolHub India
                </Link>
              </div>
            </section>

            <section id="faq" className="interactive-panel rounded-[28px] p-6">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">Frequently asked questions</h2>
              <div className="mt-4 space-y-4">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-4">
            <div className="interactive-panel rounded-[28px] p-5">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Key takeaways</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {takeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </div>

            <div className="interactive-panel rounded-[28px] p-5">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Related articles</p>
              <div className="mt-4 space-y-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200"
                  >
                    {relatedPost.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
