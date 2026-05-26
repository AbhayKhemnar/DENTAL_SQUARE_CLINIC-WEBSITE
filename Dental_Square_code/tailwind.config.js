/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0b63ce',
          navy: '#0b2f66',
          gray: '#64748b',
        },
      },
      boxShadow: {
        clinic: '0 22px 70px rgba(15, 23, 42, 0.12)',
      },
    },
  },
}
