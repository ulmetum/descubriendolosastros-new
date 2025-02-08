import type { Metadata } from 'next'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'

// Fuentes
import { oswald, merriweather } from '@/fonts'

import { ScrollLayout } from '@/layouts/ScrollLayout'
import { ScrollTop } from '@/components/ScrollTop'
import { MagneticButton } from '@/components/MagneticButton'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  metadataBase: new URL('https://descubriendolosastros.com'),
  title: {
    default: 'Descubriendo los astros',
    template: '%s | Descubriendo los astros',
  },
  description:
    'Un blog para aprender sobre astronomía y astrología, explorando el misterio del cosmos, los movimientos planetarios y su influencia en nuestra vida diaria',
  openGraph: {
    title: 'Descubriendo los astros',
    description:
      'Un blog para aprender sobre astronomía y astrología, explorando el misterio del cosmos, los movimientos planetarios y su influencia en nuestra vida diaria',
    type: 'website',
    locale: 'es_ES',
    url: 'https://descubriendolosastros.com',
    images: [
      {
        url: 'https://descubriendolosastros.com/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Descubriendo los astros',
      },
    ],
    siteName: 'Descubriendo los astros',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <ScrollTop />
        <body
          className={`${oswald.variable} ${merriweather.variable} antialiased`}
        >
          <ScrollLayout>
            <Header />
            <Toaster
              position='top-center'
              duration={9999999999999}
            />
            <main className='min-h-[100dvh]'>
              {children}
              <MagneticButton size='sm' />
            </main>
            <Footer />
          </ScrollLayout>
        </body>
      </html>
    </ViewTransitions>
  )
}
