/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
          inter: ['Inter', 'sans-serif'],
      },
      animation: {
          'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
          'infinite-scroll': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-100%)' },
          }
      }                    
  },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

