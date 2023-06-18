// const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    'node_modules/tailvue/dist/tailvue.es.js',
    // `./nuxt.config.js`,
    // `./nuxt.config.ts`
  ],
  theme: {
    screens: {
      'sm': '640px',
  

      'md': '768px',
     

      'lg': '1024px',
     

      'xl': '1280px',
    

      '2xl': '1536px',
      'xxl': '1600px',
    },
    extend: {
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.1em',
        wider: '.25em',
        widest: '.35em',
      },
      maxWidth: {
        '2xl': '1536px',
        '8xl': '1536px',
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      fontFamily: {
        sans: [
          'HelveticaNeueW01-Thin',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        body: [
          'HelveticaNeueW01-Thin',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        bold: [
          'HelveticaNeueW01-45Ligh',
          'Helvetica Neue',
          'Helvetica',
          '-apple-system',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
        light: [
          'Helvetica Neue LT W05_25 Ult Lt',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Cinzel',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}