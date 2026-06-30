type FAQItem = {
  question: string
  answer: string
}

type FAQSectionProps = {
  heading?: string
  intro?: string
  items: FAQItem[]
}

export default function FAQSection({ heading = 'Frequently Asked Questions', intro, items }: FAQSectionProps) {
  return (
    <section className="panel p-6 sm:p-8" aria-labelledby="faq-section-title">
      <h2 id="faq-section-title" className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
        {heading}
      </h2>
      {intro ? <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{intro}</p> : null}
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <details key={item.question} className="interactive-panel rounded-[28px] p-5">
            <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:hidden dark:text-slate-100">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
