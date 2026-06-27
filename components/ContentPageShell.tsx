import { ReactNode } from 'react'

type ContentPageShellProps = {
  eyebrow: string
  title: string
  description: string
  updatedAt?: string
  sidebar?: ReactNode
  children: ReactNode
}

export default function ContentPageShell({
  eyebrow,
  title,
  description,
  updatedAt,
  sidebar,
  children,
}: ContentPageShellProps) {
  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <section className="panel p-6 sm:p-8">
        <div className="max-w-3xl">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-800 dark:bg-sky-950/40 dark:text-sky-200">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
          {updatedAt ? (
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Last updated: {updatedAt}</p>
          ) : null}
        </div>

        <div className={`mt-8 grid gap-6 ${sidebar ? 'lg:grid-cols-[minmax(0,1fr)_18rem]' : ''}`}>
          <div className="space-y-4">{children}</div>
          {sidebar ? <aside className="space-y-4 lg:sticky lg:top-24">{sidebar}</aside> : null}
        </div>
      </section>
    </main>
  )
}
