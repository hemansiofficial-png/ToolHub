import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { posts } from '../../../data/blog'
import { buildMetadata } from '../../../components/PageSeo'
import { jsonLdForArticle, jsonLdForBreadcrumbs } from '../../../utils/seo'
import { getSiteUrl, siteConfig } from '../../../utils/site'

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
    title: `${post.title} - ${siteConfig.name}`,
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

  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 2)
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

  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <Script id={`article-ld-${post.slug}`} type="application/ld+json">
        {JSON.stringify(articleLd)}
      </Script>
      <Script id={`breadcrumb-ld-${post.slug}`} type="application/ld+json">
        {JSON.stringify(breadcrumbLd)}
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
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">{post.description}</p>
            <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
              <span>By {post.author}</span>
              <span>Published {dateFormatter.format(new Date(post.publishedAt))}</span>
            </div>
          </div>

          <aside className="interactive-panel rounded-[28px] p-5">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">On this page</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {post.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${toAnchorId(section.heading)}`} className="transition hover:text-sky-700 dark:hover:text-sky-300">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="space-y-4">
            <div className="interactive-panel rounded-[28px] p-6">
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

            <section className="interactive-panel rounded-[28px] p-6">
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
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Related reading</p>
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
