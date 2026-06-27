import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 border-b">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 p-4">
        <Link href="/" className="text-xl font-bold">ToolHub India</Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-4 text-sm sm:flex">
            <Link href="/tools" className="transition hover:text-sky-700 dark:hover:text-sky-300">Tools</Link>
            <Link href="/blog" className="transition hover:text-sky-700 dark:hover:text-sky-300">Blog</Link>
            <Link href="/about" className="transition hover:text-sky-700 dark:hover:text-sky-300">About</Link>
            <Link href="/contact" className="transition hover:text-sky-700 dark:hover:text-sky-300">Contact</Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
