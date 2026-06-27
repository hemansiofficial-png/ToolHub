import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t">
      <div className="container mx-auto p-6 text-sm text-slate-600 dark:text-slate-400">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto_auto]">
          <div className="max-w-md">
            <p className="font-semibold text-slate-900 dark:text-slate-100">ToolHub India</p>
            <p className="mt-2 leading-6">
              Free tools, calculators, and explainers built to be useful, transparent, and easy to navigate.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-slate-900 dark:text-slate-100">Explore</p>
            <div className="flex flex-col gap-2">
              <Link href="/tools">Tools</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-slate-900 dark:text-slate-100">Policies</p>
            <div className="flex flex-col gap-2">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
          Copyright {new Date().getFullYear()} ToolHub India
        </div>
      </div>
    </footer>
  )
}
