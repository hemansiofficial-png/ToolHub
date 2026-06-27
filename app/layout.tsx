import './globals.css'
import { Metadata } from 'next'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getSiteUrl, siteConfig } from '../utils/site'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  keywords: ['online tools', 'calculators', 'finance tools', 'pdf tools', 'image tools', 'tool website'],
  category: 'technology',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteUrl,
      description: siteConfig.description,
    },
  ]

  return (
    <html lang="en-IN">
      <body className="bg-slate-100 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <Script id="site-structured-data" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
        <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_55%,_#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_30%),_linear-gradient(180deg,_#020617_0%,_#020617_55%,_#020617_100%)]">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
