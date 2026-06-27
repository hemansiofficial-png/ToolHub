import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import AdPlaceholder from '../../../components/AdPlaceholder'
import ToolPageShell from '../../../components/ToolPageShell'
import { tools } from '../../../data/tools'
import { jsonLdForTool } from '../../../utils/seo'
import { getSiteUrl } from '../../../utils/site'
import { getToolMetadataBySlug } from '../../../utils/toolMetadata'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  return getToolMetadataBySlug(slug)
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }))
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const tool = tools.find((item) => item.slug === slug)
  if (!tool) return notFound()

  const canonical = `${getSiteUrl()}/tools/${slug}`
  const ld = jsonLdForTool({ title: tool.title, description: tool.description, url: canonical })
  const relatedTools = tools.filter((item) => item.category === tool.category && item.slug !== tool.slug).slice(0, 3)

  return (
    <main>
      <Script id="ld+json" type="application/ld+json">{JSON.stringify(ld)}</Script>

      <ToolPageShell
        title={tool.title}
        description={tool.description}
        badge={`${tool.category} tool`}
        stats={[
          { label: 'Category', value: tool.category },
          { label: 'Ready now', value: 'Browse related' },
          { label: 'Route', value: `/tools/${tool.slug}` },
        ]}
        tips={[
          'This route is set up for custom tool experiences, so the full UI can be dropped in cleanly.',
          'Use the related links to jump to active tools with live inputs and richer results.',
          'Structured data and internal linking are already in place for SEO and discovery.',
        ]}
        aside={
          <div className="space-y-4">
            <div className="interactive-panel rounded-[28px] p-5">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Explore similar tools</p>
              <div className="mt-4 space-y-3">
                {relatedTools.length > 0 ? (
                  relatedTools.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/tools/${related.slug}`}
                      className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200"
                    >
                      {related.title}
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-slate-600 dark:text-slate-300">No additional tools in this category yet.</p>
                )}
              </div>
            </div>
          </div>
        }
      >
        <div className="interactive-panel rounded-[28px] p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Tool surface ready</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            This page now uses the same animated tool shell as the interactive calculators and generators, so future tools can plug into a polished layout from day one.
          </p>
        </div>
      </ToolPageShell>

      <div className="container mx-auto px-4 pb-8">
        <AdPlaceholder />
      </div>
    </main>
  )
}
