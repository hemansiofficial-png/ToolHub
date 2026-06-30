import Link from 'next/link'

export default function CTASection({ toolCount }: { toolCount: number }) {
  return (
    <section className="panel p-6 sm:p-8" aria-labelledby="tool-cta-title">
      <div className="rounded-[32px] bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(16,185,129,0.16))] p-6 sm:p-8">
        <h2 id="tool-cta-title" className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
          Need More Utilities?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 dark:text-slate-200">
          Explore {toolCount}+ free online tools across finance, PDF, image, text, health, and everyday productivity. You can head back to the{' '}
          <Link href="/" className="font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
            homepage
          </Link>{' '}
          or jump straight into the full{' '}
          <Link href="/tools" className="font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
            tools directory
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href="/tools" className="btn-primary text-center">
            Browse all tools
          </Link>
          <Link href="/categories" className="btn-secondary text-center">
            Explore categories
          </Link>
        </div>
      </div>
    </section>
  )
}
