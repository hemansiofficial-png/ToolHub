import { buildMetadata } from '../../components/PageSeo'
import ContentPageShell from '../../components/ContentPageShell'
import { getContactEmail, hasConfiguredContactEmail } from '../../utils/site'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Contact ToolHub India for support, partnerships, advertising, privacy questions, or feedback.',
  url: '/contact',
})

export default function ContactPage() {
  const email = getContactEmail()

  return (
    <ContentPageShell
      eyebrow="Support"
      title="Contact ToolHub India"
      description="Use this page for support requests, privacy questions, correction requests, partnerships, or advertising enquiries."
      updatedAt="29 June 2026"
      sidebar={
        <div className="interactive-panel rounded-[28px] p-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-slate-100">Best uses for this page</p>
          <ul className="mt-4 space-y-3">
            <li>Report a broken calculator or content issue.</li>
            <li>Ask a privacy or policy question.</li>
            <li>Reach out about partnerships or advertising.</li>
          </ul>
        </div>
      }
    >
      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Primary contact</h2>
        {hasConfiguredContactEmail() ? (
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Email: <a href={`mailto:${email}`} className="font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">{email}</a>
          </p>
        ) : (
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Add `NEXT_PUBLIC_CONTACT_EMAIL` to your environment settings before launch so this page shows a public support address for visitors and AdSense reviewers.
          </p>
        )}
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">What to include in your message</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          <li>The page or tool you were using.</li>
          <li>A short description of the issue or request.</li>
          <li>Screenshots or sample input details if a result looked incorrect.</li>
        </ul>
      </section>

      <section className="interactive-panel rounded-[28px] p-6">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Business and advertising</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Partnership, sponsorship, or advertising enquiries should clearly mention the brand, campaign type, expected timeline, and the pages or placements you are interested in discussing.
        </p>
      </section>
    </ContentPageShell>
  )
}
