import Link from 'next/link'

export default function AdminPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Features: Add/Edit tools, manage blogs, ads, and view analytics. (Auth not implemented)</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        <Link href="/admin/tools" className="rounded border bg-white p-4 shadow-sm hover:shadow-lg dark:bg-slate-800">
          <h2 className="font-semibold">Manage Tools</h2>
        </Link>
        <Link href="/admin/blogs" className="rounded border bg-white p-4 shadow-sm hover:shadow-lg dark:bg-slate-800">
          <h2 className="font-semibold">Manage Blogs</h2>
        </Link>
        <Link href="/admin/categories" className="rounded border bg-white p-4 shadow-sm hover:shadow-lg dark:bg-slate-800">
          <h2 className="font-semibold">Manage Categories</h2>
        </Link>
        <Link href="/admin/ads" className="rounded border bg-white p-4 shadow-sm hover:shadow-lg dark:bg-slate-800">
          <h2 className="font-semibold">Manage Ads</h2>
        </Link>
        <Link href="/admin/analytics" className="rounded border bg-white p-4 shadow-sm hover:shadow-lg dark:bg-slate-800">
          <h2 className="font-semibold">Analytics</h2>
        </Link>
      </div>
    </main>
  )
}
