import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SGM Group of Companies — Automotive Division | Liberia',
  description: 'SGM Group of Companies is Liberia\'s premier automotive parts and supplies company. Spare parts, engine oils, tyres, batteries, and fleet supply across Monrovia.',
  keywords: 'SGM Group, Liberia, automotive parts, spare parts, engine oil, tyres, batteries, Monrovia, Sachin Motwani',
  openGraph: {
    title: 'SGM Group of Companies — Automotive Division',
    description: 'Liberia\'s premier automotive parts and supplies company.',
    type: 'website',
    images: ['/assets/logo/sgm-logo-text.png'],
  },
  icons: {
    icon: '/assets/logo/sgm-logo-gear.png',
    apple: '/assets/logo/sgm-logo-gear.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
