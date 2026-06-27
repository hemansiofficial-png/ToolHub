import { Metadata } from 'next'

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
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
      url,
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
    },
  }
}
