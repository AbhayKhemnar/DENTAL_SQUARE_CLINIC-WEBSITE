/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#b7791f',
          dark: '#111827',
          gray: '#64748b',
        },
      },
      boxShadow: {
        clinic: '0 22px 70px rgba(15, 23, 42, 0.12)',
      },
    },
  },
}
