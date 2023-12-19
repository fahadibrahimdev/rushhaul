/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xxxs': '320px',
        'xxs': '380px',
        'xs': '450px',
        '3xl': '1700px'
      },
      colors: {
        primary: '#4081FF',
        secondary: '#EE832B',
        accent: '#4C4C4C',
        tertiary: '#7CB3EA'
      },
      backgroundColor: {
        'primary-gradient': 'linear-gradient(257deg, #4081FF 0%, #EE832C 100%);',
        'faq': '#FFF5E6',
      },
      spacing: {
        '9.5': '38px',
        '13': '50px',
        '18': '72px',
        '26': '106px',
        '38': '150px'
      },
      borderRadius: {
        '4xl': '38px',
        '6xl': '74px',
      },
      fontSize: {
        '4.5xl': '40px',
        '5.5xl': '56px'
      },
      height: {
        '146': '446px'
      },
      width: {
        '92': '360px'
      },
      boxShadow: {
        'nav': '0 2px 4px -2px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.10);',
        '3xl': '55px 5px 50px 0 rgba(0, 0, 0, 0.08);',
      }
    },
    container: {
      center: true,
      padding: {
        'xxxs': '.3rem',
        'xxs': '.6rem',
        'md': '1rem',
        '2xl': '3rem',
        '3xl': '5rem'
      }
    },
  },
  plugins: [],
}

