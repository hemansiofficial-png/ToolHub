export function buildCanonical(host: string, path: string) {
  return `${host.replace(/\/$/, '')}${path.startsWith('/') ? path : '/' + path}`
}

export function jsonLdForTool({ title, description, url }: { title: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
  }
}

export function jsonLdForArticle({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  author,
}: {
  title: string
  description: string
  url: string
  publishedAt: string
  updatedAt: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: author,
    },
    datePublished: publishedAt,
    dateModified: updatedAt,
    mainEntityOfPage: url,
    url,
  }
}

export function jsonLdForBreadcrumbs(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
