import Link from 'next/link'
import type { BlogPost } from '../data/blog'

export default function RelatedBlogs({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="panel p-6 sm:p-8" aria-labelledby="related-blogs-title">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="related-blogs-title" className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
            Related Blog Posts
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Read deeper guides that add context, examples, and decision support around this tool.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200"
        >
          Visit the blog
        </Link>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="interactive-panel rounded-[28px] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{post.category}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
              <Link href={`/blog/${post.slug}`} className="transition hover:text-sky-700 dark:hover:text-sky-300">
                {post.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
