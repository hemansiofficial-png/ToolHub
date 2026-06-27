export const siteConfig = {
  name: 'ToolHub India',
  title: 'ToolHub India - Free Online Tools and Calculators',
  description:
    'Free online tools, calculators, and practical guides for finance, documents, images, text, and daily productivity.',
  defaultSiteUrl: 'https://your-domain.com',
}

function normalizeUrl(url: string) {
  return url.trim().replace(/\/$/, '')
}

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  return normalizeUrl(siteUrl || siteConfig.defaultSiteUrl)
}

export function getContactEmail() {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || ''
}

export function hasConfiguredContactEmail() {
  return Boolean(getContactEmail())
}

export function getAdSensePublisherId() {
  return process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID?.trim() || ''
}
