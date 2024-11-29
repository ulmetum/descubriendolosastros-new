import type { Metadata } from 'next'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'

// Fuentes
import { oswald, merriweather } from '@/fonts'

import { Header, MagneticButton } from '@/components'
import { ScrollTop } from '@/components'
import { ScrollLayout } from '@/layouts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
            <main>
              {children}
              <MagneticButton size='sm' />
            </main>
          </ScrollLayout>
        </body>
      </html>
    </ViewTransitions>
  )
}
