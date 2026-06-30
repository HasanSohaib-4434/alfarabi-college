/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9f8',
          100: '#d5f0ed',
          200: '#abe0da',
          300: '#7ac9c0',
          400: '#4aada3',
          500: '#2d9188',
          600: '#22746d',
          700: '#1e5d58',
          800: '#1c4b47',
          900: '#1a3f3c',
        },
        accent: {
          400: '#f5a623',
          500: '#e8910a',
          600: '#c97408',
        },
        medical: {
          teal: '#0d9488',
          blue: '#0891b2',
          green: '#059669',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(13, 148, 136, 0.08)',
        'card-hover': '0 12px 40px rgba(13, 148, 136, 0.15)',
      },
    },
  },
  plugins: [],
}
