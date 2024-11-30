import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'landscape-sm': {
          raw: '(max-width: 667px) and (orientation: landscape)',
        },
      },
      colors: {
        primary: '#b45309',
        secondary: '#082f49',
        dark: '#18181b',
        light: '#f6f2ef',
      },
      fontFamily: {
        body: ['var(--font-body)'],
        headings: ['var(--font-headings)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {},
      animation: {
        'fade-image-in': 'fade-image-in 2s 4s linear',
        reveal: 'reveal 2s 2s ease forwards',
        'marquee-move-text': 'marquee-move-text 10s linear infinite',
        'author-text': 'author-text 1s 3.5s ease-out forwards',
      },
      keyframes: {
        'fade-image-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        reveal: {
          to: { y: '100%' },
        },
        'marquee-move-text': {
          to: { transform: 'translateX(-50%)' },
        },
        'author-text': {
          to: { color: 'var(--amber-600)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
