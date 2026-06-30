type HowToStep = {
  title: string
  description: string
}

export default function HowToUse({ steps }: { steps: HowToStep[] }) {
  return (
    <section className="panel p-6 sm:p-8" aria-labelledby="how-to-use-title">
      <h2 id="how-to-use-title" className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
        How To Use
      </h2>
      <ol className="mt-6 grid gap-4">
        {steps.map((step, index) => (
          <li key={step.title} className="interactive-panel rounded-[28px] p-5">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700 dark:bg-sky-950/60 dark:text-sky-200">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
