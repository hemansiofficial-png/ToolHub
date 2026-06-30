import { getSiteUrl } from './site'

export function buildCanonical(host: string, path: string) {
  return `${host.replace(/\/$/, '')}${path.startsWith('/') ? path : '/' + path}`
}

function toAbsoluteUrl(url: string) {
  if (/^https?:\/\//i.test(url)) {
    return url
  }

  return buildCanonical(getSiteUrl(), url)
}

export function jsonLdForWebPage({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: toAbsoluteUrl(url),
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
    mainEntityOfPage: toAbsoluteUrl(url),
    url: toAbsoluteUrl(url),
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

export function jsonLdForFaqs(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function jsonLdForSoftwareApplication({
  title,
  description,
  url,
  category,
  features,
}: {
  title: string
  description: string
  url: string
  category: string
  features: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    url: toAbsoluteUrl(url),
    applicationCategory: `${category}Application`,
    applicationSubCategory: category,
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    featureList: features,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
  }
}
