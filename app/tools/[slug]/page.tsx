import Link from 'next/link'
import { notFound } from 'next/navigation'
import AdPlaceholder from '../../../components/AdPlaceholder'
import ToolPageShell from '../../../components/ToolPageShell'
import { tools } from '../../../data/tools'
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

  const relatedTools = tools.filter((item) => item.category === tool.category && item.slug !== tool.slug).slice(0, 4)

  return (
    <main>
      <ToolPageShell
        title={tool.title}
        description={tool.description}
        badge={`${tool.category} tool`}
        stats={[
          { label: 'Category', value: tool.category },
          { label: 'Ready now', value: 'Use instantly' },
          { label: 'Route', value: `/tools/${tool.slug}` },
        ]}
        tips={[
          'This route is ready for a custom tool experience when you want to replace the placeholder surface below.',
          'Use the page sections under the tool interface for examples, FAQs, and related resources.',
          'The category and blog links on this page help visitors keep exploring instead of dead-ending.',
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
            This route now uses the same resource-rich layout as the live calculators and converters, so a future tool can plug into a polished shell without rebuilding the surrounding SEO and help content.
          </p>
        </div>
      </ToolPageShell>

      <div className="container mx-auto px-4 pb-8">
        <AdPlaceholder />
      </div>
    </main>
  )
}
