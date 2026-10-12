/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0b2a7a',
          'navy-dark': '#08205f',
          blue: '#1d4fd8',
          red: '#f0243c',
          yellow: '#ffd21f',
          'yellow-soft': '#ffe36b',
        },
      },
      fontFamily: {
        // Headings: rounded, playful (matches the "KIDS ZONE" look)
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        // Bubbly cartoon style for ADMISSION IS GOING ON
        bubble: ['"Fredoka"', '"Baloo 2"', 'system-ui', 'sans-serif'],
        // Body: clean and friendly
        body: ['Poppins', 'system-ui', 'sans-serif'],
        // Hand-written accent for "Brighter Tomorrow"
        script: ['"Baloo 2"', 'cursive'],
      },
      boxShadow: {
        card: '0 6px 20px rgba(11, 42, 122, 0.10)',
      },
    },
  },
  plugins: [],
};
