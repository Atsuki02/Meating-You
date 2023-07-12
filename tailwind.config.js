/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Cardo',
    },

    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
        partscreen: 'calc(100dvh - 80px)',
      },
      minHeight: {
        screen: '100dvh',
        partscreen: 'calc(100dvh - 80px)',
      },
      backgroundImage: {
        'custom-background': 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))',
      },
      fontFamily: {
        main: 'Cardo',
      },
    },
  },
  plugins: [],
};
