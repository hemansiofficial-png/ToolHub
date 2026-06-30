import Link from 'next/link'

export default function ToolIntroduction({
  title,
  category,
  paragraphs,
  useCases,
  audience,
}: {
  title: string
  category: string
  paragraphs: string[]
  useCases: string[]
  audience: string[]
}) {
  return (
    <section className="panel p-6 sm:p-8" aria-labelledby="tool-introduction-title">
      <div className="max-w-4xl">
        <h2 id="tool-introduction-title" className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
          What Is This Tool?
        </h2>
        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            You can explore more options in the{' '}
            <Link href={`/categories/${encodeURIComponent(category)}`} className="font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
              {category} tools category
            </Link>{' '}
            or browse the{' '}
            <Link href="/blog" className="font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
              ToolHub blog
            </Link>{' '}
            for deeper explainers that support {title.toLowerCase()} workflows.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="interactive-panel rounded-[28px] p-5" aria-labelledby="tool-use-cases-title">
          <h3 id="tool-use-cases-title" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Common Use Cases
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {useCases.map((useCase) => (
              <li key={useCase} className="rounded-2xl bg-white/80 px-4 py-3 dark:bg-slate-950/70">
                {useCase}
              </li>
            ))}
          </ul>
        </section>

        <section className="interactive-panel rounded-[28px] p-5" aria-labelledby="tool-audience-title">
          <h3 id="tool-audience-title" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Who Should Use It?
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {audience.map((item) => (
              <li key={item} className="rounded-2xl bg-white/80 px-4 py-3 dark:bg-slate-950/70">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
