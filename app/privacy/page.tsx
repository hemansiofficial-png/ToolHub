import { buildMetadata } from '../../components/PageSeo'
import ContentPageShell from '../../components/ContentPageShell'
import { siteConfig } from '../../utils/site'

export const metadata = buildMetadata({
  title: `Privacy Policy - ${siteConfig.name}`,
  description: 'Learn what data ToolHub India processes, how ads and analytics may work, and how to contact us about privacy requests.',
  url: '/privacy',
})

export default function PrivacyPage() {
  return (
    <ContentPageShell
      eyebrow="Policy"
      title="Privacy Policy"
      description="This page explains what information ToolHub India may process, why it is used, and how advertising or analytics integrations should be disclosed."
      updatedAt="25 June 2026"
      sidebar={
        <div className="interactive-panel rounded-[28px] p-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-slate-100">Privacy summary</p>
          <ul className="mt-4 space-y-3">
            <li>Many tools can run entirely in the browser.</li>
            <li>Analytics and ads should be disclosed before launch.</li>
            <li>Visitors should have a clear way to contact the site owner.</li>
          </ul>
        </div>
      }
    >
      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Information we collect</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          ToolHub India is designed to minimize data collection where possible. Text, files, and values entered into tools may be processed in the browser, while operational data such as aggregate traffic, diagnostics, or abuse-prevention logs may be collected by the hosting platform or analytics providers.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">How information is used</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          <li>To deliver calculators, converters, generators, and supporting content.</li>
          <li>To monitor uptime, performance, and reliability of the site.</li>
          <li>To improve the quality of content, navigation, and tool output.</li>
          <li>To serve and measure advertising if ads are enabled in production.</li>
        </ul>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Cookies, analytics, and advertising</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Third-party services such as analytics platforms or advertising networks may use cookies, device identifiers, or similar technologies to understand site usage, prevent abuse, and personalize ad delivery. If Google AdSense or similar services are enabled, this page should remain linked in the footer and updated to match the final provider setup.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Third-party services</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Hosting, analytics, form, and advertising providers may process limited technical information on behalf of the site. Their own privacy policies may also apply. Visitors should review any linked third-party policies when interacting with external services or embedded content.
        </p>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Your choices</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Visitors can limit some tracking through browser settings, privacy tools, or ad settings offered by third-party providers. Requests relating to data handling, corrections, or concerns should be sent through the contact details published on the contact page.
        </p>
      </section>
    </ContentPageShell>
  )
}
