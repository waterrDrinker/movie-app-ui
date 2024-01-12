import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero-image.jpg')"
      },
      colors: {
        background: '#09090C',
        blue: '#2575FC',
        violet: '#6A11CB'
      }
    },
  },
  plugins: [],
}
export default config
