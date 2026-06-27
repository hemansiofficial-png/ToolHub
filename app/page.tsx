import Link from 'next/link'
import { tools } from '../data/tools'
import ToolCard from '../components/ToolCard'
import ToolSearch from '../components/ToolSearch'
import FAQSection from '../components/FAQSection'
import AdPlaceholder from '../components/AdPlaceholder'

const faqItems = [
  { question: 'What kind of tools are available?', answer: 'ToolHub India includes finance, image, text, developer, and utility tools.' },
  { question: 'Is this service free?', answer: 'Yes, the core utilities are designed to be free for all users.' },
]

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <header className="py-8">
        <h1 className="text-3xl font-bold">ToolHub India</h1>
        <p className="text-slate-600 dark:text-slate-300">Free online tools and calculators for everyone.</p>
      </header>

      <section className="my-6">
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Search tools</h2>
          <ToolSearch tools={tools} />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Popular Tools</h3>
          <ul className="mt-3 space-y-2">
            {tools.slice(0, 3).map((tool) => (
              <li key={tool.slug}><Link href={`/tools/${tool.slug}`}>{tool.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold">Categories</h3>
          <ul className="mt-3 space-y-2">
            <li>Finance</li>
            <li>PDF</li>
            <li>Image</li>
            <li>Developer</li>
          </ul>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold">Trust and transparency</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Learn how the site works, review our policies, and read supporting articles before using a tool.
          </p>
          <div className="mt-3 space-y-2 text-sm">
            <div><Link href="/about">About ToolHub India</Link></div>
            <div><Link href="/privacy">Privacy Policy</Link></div>
            <div><Link href="/blog">Latest articles</Link></div>
          </div>
        </div>
      </section>

      <AdPlaceholder />

      <section className="my-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Recent Tools</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
              {tools.slice(0, 4).map((tool) => (
                <ToolCard key={tool.slug} title={tool.title} slug={tool.slug} description={tool.description} />
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-24">
            <FAQSection items={faqItems} />
          </div>
        </div>
      </section>
    </main>
  )
}
