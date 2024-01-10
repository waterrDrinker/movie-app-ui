import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-violet-blue': `linear-gradient(to right, ${theme.colors.violet}, ${theme.colors.blue})`
      }),
      colors: {
        primary: '#09090C',
        blue: '#2575FC',
        violet: '#6A11CB'
      }
    },
  },
  plugins: [],
}
export default config
