import { buildMetadata } from '../components/PageSeo'
import { getToolSeoContentBySlug } from '../data/toolSeo'

export function getToolMetadataBySlug(slug: string) {
  const seoContent = getToolSeoContentBySlug(slug)
  if (!seoContent) {
    return buildMetadata({
      title: 'Tool not found',
      description: 'This tool could not be found.',
      url: `/tools/${slug}`,
    })
  }

  return buildMetadata({
    title: seoContent.metaTitle,
    description: seoContent.metaDescription,
    url: `/tools/${slug}`,
    keywords: [
      seoContent.title,
      `${seoContent.title} online`,
      `${seoContent.category.toLowerCase()} tool`,
      'ToolHub India',
    ],
  })
}
