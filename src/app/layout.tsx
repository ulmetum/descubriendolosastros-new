import type { Metadata } from 'next'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'

// Fuentes
import { oswald, merriweather } from '@/fonts'

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
        <body
          className={`${oswald.variable} ${merriweather.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}