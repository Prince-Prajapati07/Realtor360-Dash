/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        page: '#F6F6F7',
        card: '#FFFFFF',
        gold: '#D9A514',
        tan: '#E4C47C',
        cream: '#F8EEDB',
        ink: '#17171C',
        body: '#5F6B7A',
        muted: '#98A2B3',
        teal: '#0E9384',
        pink: '#F04452',
        purple: '#7C3AED',
        search: '#F4F4F5',
      },
      boxShadow: {
        card: '0 1px 3px rgba(16,24,40,.06)',
      },
    },
  },
  plugins: [],
};
