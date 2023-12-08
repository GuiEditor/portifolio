import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xsm': '350px',
        'xsm': '500px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purpledeep': '#17002e',
        'purpledeep-2': '#2D1647'
      },
      fontFamily: {
        'sans':['"Anton"', ...defaultTheme.fontFamily.sans],
        'serif': ['"Lato"', ...defaultTheme.fontFamily.serif]
      },
      height: {
        '128': '34rem'
      }
    },
  },
  plugins: [],
}
export default config
