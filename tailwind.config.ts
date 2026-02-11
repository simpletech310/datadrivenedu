import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#62AEE0',
        light: '#BFDEF2',
        dark: '#231F20',
        gray: '#94999B',
        slate: '#5D7586',
        success: '#4CAF50'
      },
      fontFamily: {
        heading: ['var(--font-poppins)'],
        body: ['var(--font-inter)']
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.08)'
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px'
      }
    }
  },
  plugins: []
};

export default config;
