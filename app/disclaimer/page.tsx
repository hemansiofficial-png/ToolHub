import { buildMetadata } from '../../components/PageSeo'
import ContentPageShell from '../../components/ContentPageShell'

export const metadata = buildMetadata({
  title: 'Disclaimer',
  description: 'Read the important limitations that apply to ToolHub India calculators, articles, external links, and advertising placements.',
  url: '/disclaimer',
})

export default function DisclaimerPage() {
  return (
    <ContentPageShell
      eyebrow="Policy"
      title="Disclaimer"
      description="ToolHub India provides general information and utility tools. Results and articles are meant to assist visitors, not replace professional judgment."
      updatedAt="29 June 2026"
      sidebar={
        <div className="interactive-panel rounded-[28px] p-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-slate-100">Important note</p>
          <p className="mt-4">
            Visitors should verify important financial, legal, tax, health, or business decisions with qualified professionals when needed.
          </p>
        </div>
      }
    >
      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">General information only</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          The calculators, converters, and articles on this site are provided for general informational and educational use. They may simplify assumptions, round values, or omit factors that matter in real-world decisions.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">No professional advice</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Nothing on ToolHub India should be treated as financial, investment, legal, tax, medical, or accounting advice. Use the site as a starting point, then confirm high-stakes decisions with a qualified professional.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Third-party links and advertising</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          The site may include links to third-party websites, embedded services, or advertising placements. ToolHub India does not control external sites and cannot guarantee their accuracy, security, or policies. Sponsored or advertising sections should always be clearly identified.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Accuracy and availability</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Every effort is made to keep the site useful and current, but no guarantee is given that every page, result, or route will always be complete, accurate, or available at all times.
        </p>
      </section>
    </ContentPageShell>
  )
}
