import type { Metadata } from 'next'
import { Space_Grotesk, Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://askmrai.ai'),
  title: {
    default: 'Ask Mr AI — Real builds. Honest takes.',
    template: '%s | Ask Mr AI',
  },
  description:
    'David Finnegan — AI consultant, creative director, and YouTube host with 25 years in the creative industry. Real builds. Honest takes. AI that actually works.',
  keywords: ['AI consultant', 'creative director', 'YouTube', 'AI for creatives', 'David Finnegan'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://askmrai.ai',
    siteName: 'Ask Mr AI',
    title: 'Ask Mr AI — Real builds. Honest takes.',
    description:
      'David Finnegan — AI consultant and YouTube host. 25 years creative. AI that actually works.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Ask Mr AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ask Mr AI — Real builds. Honest takes.',
    description: 'David Finnegan — AI consultant and YouTube host.',
    images: ['/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="bg-bg text-warm-white">
        <div className="grain-overlay" aria-hidden="true" />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
