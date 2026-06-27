'use client'

import { useState } from 'react'
import AdminTable from '../../../components/AdminTable'
import BlogForm from '../../../components/BlogForm'
import { posts as initialPosts, type BlogPost } from '../../../data/blog'

type PostType = Pick<BlogPost, 'slug' | 'title' | 'category' | 'description' | 'intro'>

export default function AdminBlogs() {
  const [posts, setPosts] = useState<PostType[]>(
    initialPosts.map(({ slug, title, category, description, intro }) => ({
      slug,
      title,
      category,
      description,
      intro,
    })),
  )
  const [selected, setSelected] = useState<PostType | null>(null)

  const handleSubmit = (values: PostType) => {
    setPosts((current) => {
      const exists = current.some((post) => post.slug === values.slug)
      if (exists) {
        return current.map((post) => (post.slug === values.slug ? values : post))
      }
      return [...current, values]
    })
    setSelected(null)
  }

  const handleEdit = (post: PostType) => setSelected(post)
  const handleDelete = (slug: string) => setPosts((current) => current.filter((post) => post.slug !== slug))

  return (
    <main className="space-y-6">
      <section className="rounded border bg-white p-6 shadow-sm dark:bg-slate-800">
        <h1 className="text-2xl font-bold">Admin Blogs</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Create and edit blog posts for SEO-driven content.</p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div>
          <AdminTable columns={['Title', 'Category', 'Slug', 'Actions']}>
            {posts.map((post) => (
              <tr key={post.slug}>
                <td className="px-4 py-3">{post.title}</td>
                <td className="px-4 py-3">{post.category}</td>
                <td className="px-4 py-3 font-mono text-slate-500 dark:text-slate-400">{post.slug}</td>
                <td className="flex gap-2 px-4 py-3">
                  <button onClick={() => handleEdit(post)} className="rounded bg-slate-900 px-3 py-1 text-white">Edit</button>
                  <button onClick={() => handleDelete(post.slug)} className="rounded bg-red-600 px-3 py-1 text-white">Delete</button>
                </td>
              </tr>
            ))}
          </AdminTable>
        </div>

        <div>
          <BlogForm onSubmit={handleSubmit} initialValues={selected ?? undefined} />
        </div>
      </section>
    </main>
  )
}
