import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(90deg, rgba(244,112,70,1) 0%, rgba(242,64,57,1) 50%, rgba(243,154,10,1) 100%)'
      }),
      colors: {
        'custom-yellow': '#FDCC54',
        'custom-yellow-darker': '#f0bc3e',
      }
      
    },
  },
  plugins: [],
}
export default config
