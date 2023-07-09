const colors = require('tailwindcss/colors')

export default {
  content: [
    './index.html',
    './src/*.{js,ts,jsx,tsx,vue}',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc
      },
      animation: {
        'spin-header': 'spin 10s linear infinite'
      },
      dropShadow: {
        'subtitle': '0 4px 2px rgba(0, 0, 0, 0.75)'
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  plugins: [],
}
