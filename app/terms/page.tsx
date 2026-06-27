import { buildMetadata } from '../../components/PageSeo'
import ContentPageShell from '../../components/ContentPageShell'
import { siteConfig } from '../../utils/site'

export const metadata = buildMetadata({
  title: `Terms of Service - ${siteConfig.name}`,
  description: 'Review the usage terms that apply to ToolHub India, including acceptable use, content ownership, and service limitations.',
  url: '/terms',
})

export default function TermsPage() {
  return (
    <ContentPageShell
      eyebrow="Policy"
      title="Terms of Service"
      description="These terms govern the use of ToolHub India, including calculators, utilities, written content, and any advertising or partner placements shown on the site."
      updatedAt="25 June 2026"
      sidebar={
        <div className="interactive-panel rounded-[28px] p-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-slate-100">Terms summary</p>
          <ul className="mt-4 space-y-3">
            <li>Use the site lawfully and responsibly.</li>
            <li>Outputs are provided for convenience and general information.</li>
            <li>Availability and features may change over time.</li>
          </ul>
        </div>
      }
    >
      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Use of the site</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          You may use ToolHub India for personal, educational, or business research purposes so long as your use is lawful and does not interfere with the service, security, or experience of other visitors.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Acceptable use</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          <li>Do not attempt to disrupt, overload, scrape abusively, or reverse engineer the service.</li>
          <li>Do not upload or submit unlawful, malicious, or infringing material.</li>
          <li>Do not misrepresent site content as certified legal, financial, medical, or tax advice.</li>
        </ul>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Content and intellectual property</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Site branding, written content, layout, and original tool experiences are owned by ToolHub India unless otherwise stated. External trademarks, references, and linked services remain the property of their respective owners.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">No warranty</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Tools and content are provided on an as-available basis for convenience and general information. While the site aims to be accurate and useful, results may include assumptions, rounding, or simplifications and should be reviewed before being relied on for important decisions.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Changes to the service</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          ToolHub India may update tools, articles, layouts, providers, or policies at any time to improve the service, meet legal requirements, or maintain platform quality.
        </p>
      </section>
    </ContentPageShell>
  )
}
