/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../../images/backgrounds/wood.png')",
        'footer-trees': "url('../../images/backgrounds/trees.png')",
      },
      colors: {
        'dirt':'#23201A',
        'dirt-400': '#292622',
        'dirt-300': '#312F2B',
        'pine-cone':'#EE684A',
        'northern-lights':'#9CE7DB',
        'primary': '#9CE7DB'
      },
     
      fontFamily: {
        'primary': ['Clarika Grotesque','Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '4xl': ['24px', {
          lineHeight: '28px',
          letterSpacing: '-0.1px',
          fontWeight: '600',
        }],

        '5xl': ['40px', {
          lineHeight: '40px',
          letterSpacing: '-0.1px',
          fontWeight: '600',
        }],

        '7xl': ['70px', {
        lineHeight: '78px',
        letterSpacing: '-0.1px',
        fontWeight: '500',
      }],
      },
      maxWidth: {
        'md': '1280px',
        'lg': '1440px',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  safelist: [],
  content: ['./templates/*.{twig,html,js}', './src/**/*.{css,js,html}'],
};
