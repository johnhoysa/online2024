const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s ease-out'
      },
      backdropBlur: {
        xs: '2px'
      },
      backgroundImage: {
        hero: "url('./../images/wood.png')",
        'hero-mobile': "url('./../images/wood-mobile.png')",
        'footer-trees': "url('./../images/trees.png')"
      },
      colors: {
        dirt: '#23201A',
        'dirt-400': '#292622',
        'dirt-300': '#312F2B',
        'pine-cone-100': '#f7c1b4',
        'pine-cone-200': '#f19581',
        'pine-cone-300': '#eb6a4d',
        'pine-cone-400': '#E63F19',
        'pine-cone': '#EE684A',
        'northern-lights-50': '#f5fcfa',
        'northern-lights-100': '#e8f8f4',
        'northern-lights-200': '#D4F3EC',
        'northern-lights-300': '#bdede3',
        'northern-lights-400': '#A7E9DC',
        'northern-lights-500': '#92E4D5',
        'northern-lights': '#9CE7DB',
        'accent-blue': '#0593DC',
        primary: '#9CE7DB'
      },
      fontFamily: {
        primary: ['Clarika Grotesque', 'serif']
      },
      fontSize: {
        sm: [
          '16px',
          { lineHeight: '150%', letterSpacing: '-0.1px', fontWeight: '300' }
        ],
        base: [
          '20px',
          { lineHeight: '150%', letterSpacing: '-0.1px', fontWeight: '300' }
        ],
        '2xl': [
          '24px',
          { lineHeight: '28px', letterSpacing: '-0.1px', fontWeight: '600' }
        ],
        '5xl': [
          '40px',
          { lineHeight: '40px', letterSpacing: '-0.1px', fontWeight: '600' }
        ],
        'hero-mobile': [
          '24px',
          { lineHeight: '120%', letterSpacing: '-0.1px', fontWeight: '500' }
        ],
        'hero-tablet': [
          '38px',
          { lineHeight: '120%', letterSpacing: '-0.1px', fontWeight: '500' }
        ],
        'hero-desktop': [
          '48px',
          { lineHeight: '120%', letterSpacing: '-0.1px', fontWeight: '500' }
        ],
        'hero-desktop-xl': [
          '60px',
          { lineHeight: '120%', letterSpacing: '-0.1px', fontWeight: '500' }
        ]
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      maxWidth: {
        md: '1280px',
        lg: '1440px',
        xl: '1768px'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  // Tailwind v4 auto-scans the project; keep content if you want explicit control.
  content: [
    '*.html',
    'index.html',
    './smore-code/*.html',
    './src/**/*.{css,js,html,twig}'
  ]
};
