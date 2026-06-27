import Link from 'next/link'
import { buildMetadata } from '../../components/PageSeo'
import ContentPageShell from '../../components/ContentPageShell'
import { siteConfig } from '../../utils/site'

export const metadata = buildMetadata({
  title: `About - ${siteConfig.name}`,
  description: 'Learn what ToolHub India is building, how tools and articles are created, and what principles guide the site.',
  url: '/about',
})

export default function AboutPage() {
  return (
    <ContentPageShell
      eyebrow="Company"
      title="About ToolHub India"
      description="ToolHub India brings together practical online tools and plain-language content so visitors can solve small problems quickly without getting lost in clutter."
      updatedAt="25 June 2026"
      sidebar={
        <div className="interactive-panel rounded-[28px] p-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-slate-100">Our approach</p>
          <ul className="mt-4 space-y-3">
            <li>Make useful tools fast and easy to understand.</li>
            <li>Publish clear supporting content, not filler.</li>
            <li>Label ads and policy information openly.</li>
          </ul>
        </div>
      }
    >
      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">What the site is for</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          The goal is simple: give visitors a reliable place to calculate, convert, format, or generate something useful in a few clicks. Finance tools, PDF utilities, image helpers, and developer aids all follow the same principle of clarity over clutter.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">How content is created</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Articles and support copy are written to explain assumptions, common mistakes, and practical usage tips around the tools. The editorial goal is to make the site easier to trust and easier to use, not just larger.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Transparency commitments</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          <li>Important policies stay linked in the footer.</li>
          <li>Advertising space should be clearly separated from core utility content.</li>
          <li>Guides should explain limitations instead of overstating certainty.</li>
        </ul>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Explore the site</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/tools" className="rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200">
            Browse tools
          </Link>
          <Link href="/blog" className="rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200">
            Read the blog
          </Link>
          <Link href="/contact" className="rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200">
            Contact us
          </Link>
        </div>
      </section>
    </ContentPageShell>
  )
}
