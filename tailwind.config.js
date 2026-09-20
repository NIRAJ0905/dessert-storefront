/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFBF8',
          100: '#FAF8F5',
          200: '#F4EFEA',
          300: '#EBE3DA',
        },
        brand: {
          black: '#171513',
          muted: '#615C56',
          light: '#8E877F',
        },
        lightblue: {
          DEFAULT: '#6CA0DC',
          hover: '#598EC8',
          light: '#EEF5FB',
          border: '#C3DCF1',
        },
        caramel: {
          DEFAULT: '#C07D3E',
          hover: '#A9682B',
          light: '#FAF3EB',
          badge: '#B87232',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
