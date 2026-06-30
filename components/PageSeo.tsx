import { Metadata } from 'next'
import { siteConfig } from '../utils/site'
import { buildCanonical } from '../utils/seo'
import { getSiteUrl } from '../utils/site'

type PageSeoProps = {
  title: string
  description: string
  image?: string
  url?: string
  keywords?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function buildMetadata({
  title,
  description,
  image,
  url,
  keywords,
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageSeoProps): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: url ? { canonical: buildCanonical(getSiteUrl(), url) } : undefined,
    openGraph: {
      siteName: siteConfig.name,
      title,
      description,
      images: image ? [{ url: image }] : undefined,
      url: url ? buildCanonical(getSiteUrl(), url) : undefined,
      type,
      ...(type === 'article'
        ? {
            publishedTime,
            modifiedTime,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}
