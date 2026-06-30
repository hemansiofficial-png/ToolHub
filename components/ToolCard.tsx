import Link from 'next/link'

export default function ToolCard({ title, slug, description }: { title: string; slug: string; description?: string }) {
  return (
    <Link
      href={`/tools/${slug}`}
      className="interactive-panel block h-auto self-start rounded-[26px] border p-5 transition duration-200 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:bg-sky-950/60 dark:text-sky-200">
          Tool
        </span>
      </div>
      {description && <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>}
    </Link>
  )
}
