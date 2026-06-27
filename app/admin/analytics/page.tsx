export default function AdminAnalytics() {
  const metrics = [
    { label: 'Monthly Visits', value: '12.8K', detail: 'Up 8% from last month' },
    { label: 'Top Tool', value: 'EMI Calculator', detail: 'Most used tool this week' },
    { label: 'Ad Clicks', value: '1.3K', detail: 'AdSense performance summary' },
    { label: 'Blog Views', value: '4.2K', detail: 'Traffic from SEO articles' },
    { label: 'Conversion Rate', value: '3.4%', detail: 'Tool engagement success' },
    { label: 'New Categories', value: '5', detail: 'Active categories for marketing' },
  ]

  return (
    <main className="space-y-6">
      <section className="rounded border bg-white p-6 shadow-sm dark:bg-slate-800">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Traffic, tool usage, and ad performance insights.</p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded border bg-white p-6 shadow-sm dark:bg-slate-800">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.detail}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
