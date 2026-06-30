type FeatureItem = {
  title: string
  description: string
}

export default function ToolFeatures({ items }: { items: FeatureItem[] }) {
  return (
    <section className="panel p-6 sm:p-8" aria-labelledby="tool-features-title">
      <h2 id="tool-features-title" className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
        Key Features
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="interactive-panel rounded-[28px] p-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
