import { Oswald, Merriweather_Sans, Shadows_Into_Light } from 'next/font/google'
// import { Oswald, Montserrat, Jost } from "next/font/google"

export const merriweather = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-body',
  display: 'fallback',
})

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '300'],
  variable: '--font-headings',
  display: 'fallback',
})

export const shadowIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-hand',
  display: 'fallback',
})
