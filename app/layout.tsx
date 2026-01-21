import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'JuegoRating - Mejores Casinos Online en Colombia 2026',
    template: '%s | JuegoRating',
  },
  description: 'Comparamos bonos, licencias, pagos y juegos de los casinos legales en Colombia. Encuentra el mejor casino online con nuestro ranking actualizado.',
  keywords: ['casinos online colombia', 'mejores casinos', 'bonos casino', 'juegos de azar', 'apuestas colombia', 'casino legal colombia', 'tragamonedas online', 'ruleta online', 'blackjack online'],
  authors: [{ name: 'JuegoRating', url: 'https://juegorating.site' }],
  creator: 'JuegoRating',
  publisher: 'JuegoRating',
  metadataBase: new URL('https://juegorating.site'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/',
    },
  },
  openGraph: {
    title: 'JuegoRating - Mejores Casinos Online en Colombia 2026',
    description: 'Comparamos bonos, licencias, pagos y juegos de los casinos legales en Colombia.',
    url: 'https://juegorating.site',
    siteName: 'JuegoRating',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JuegoRating - Mejores Casinos Online Colombia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JuegoRating - Mejores Casinos Online en Colombia 2026',
    description: 'Comparamos bonos, licencias, pagos y juegos de los casinos legales en Colombia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M52L5VT2');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M52L5VT2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
