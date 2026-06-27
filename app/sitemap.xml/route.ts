import { NextResponse } from 'next/server'
import { posts } from '../../data/blog'
import { categories, tools } from '../../data/tools'
import { getSiteUrl } from '../../utils/site'

export async function GET() {
  const baseUrl = getSiteUrl()
  const staticUrls = ['/', '/tools', '/blog', '/categories', '/about', '/contact', '/privacy', '/terms', '/disclaimer']
  const toolUrls = tools.map((tool) => `/tools/${tool.slug}`)
  const categoryUrls = categories.map((category) => `/categories/${encodeURIComponent(category)}`)
  const blogUrls = posts.map((post) => `/blog/${post.slug}`)
  const urls = [...staticUrls, ...toolUrls, ...categoryUrls, ...blogUrls]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${baseUrl}${url}</loc>
        <changefreq>weekly</changefreq>
      </url>`,
      )
      .join('')}
  </urlset>`

  return new NextResponse(sitemap, { headers: { 'Content-Type': 'application/xml' } })
}
