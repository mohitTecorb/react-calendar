/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      screens: {
        'ipad': { 'max': '991px' },
        'mobile': { 'max': '780px' },
        'mobileView': { 'max': '767px' },
        'xs': { 'max': '640px' },
        'xxs': { 'max': '575px' },
        'xss': { 'max': '475px' },
        'xxxs': { 'max': '425px' },
        'smalldevice': { 'max': '375px' },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width:{
        '460':'460px',
        '100':'100%',
      },
    },
  },
  plugins: [],
}
