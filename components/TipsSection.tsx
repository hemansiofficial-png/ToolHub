export default function TipsSection({ items }: { items: string[] }) {
  return (
    <section className="panel p-6 sm:p-8" aria-labelledby="tool-tips-title">
      <h2 id="tool-tips-title" className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
        Tips &amp; Best Practices
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item} className="interactive-panel rounded-[28px] p-5">
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
