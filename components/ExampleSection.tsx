type ToolExample = {
  title: string
  description: string
  inputLabel: string
  input: string
  outputLabel: string
  output: string
}

export default function ExampleSection({ example }: { example: ToolExample }) {
  return (
    <section className="panel p-6 sm:p-8" aria-labelledby="tool-example-title">
      <h2 id="tool-example-title" className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
        Example
      </h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="interactive-panel rounded-[28px] p-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{example.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{example.description}</p>
        </article>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="interactive-panel rounded-[28px] p-5" aria-labelledby="tool-example-input-title">
            <h3 id="tool-example-input-title" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {example.inputLabel}
            </h3>
            <pre className="mt-4 whitespace-pre-wrap break-words rounded-2xl bg-slate-950 px-4 py-4 text-sm leading-6 text-slate-50">
              {example.input}
            </pre>
          </section>

          <section className="interactive-panel rounded-[28px] p-5" aria-labelledby="tool-example-output-title">
            <h3 id="tool-example-output-title" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {example.outputLabel}
            </h3>
            <pre className="mt-4 whitespace-pre-wrap break-words rounded-2xl bg-emerald-950/90 px-4 py-4 text-sm leading-6 text-emerald-50">
              {example.output}
            </pre>
          </section>
        </div>
      </div>
    </section>
  )
}
