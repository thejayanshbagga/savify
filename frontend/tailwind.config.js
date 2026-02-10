/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#162447',
          blue: '#4A6FA5',
          light: '#F0F2EF',
          charcoal: '#2B2F3A',
          lightblue: '#D8DEE9',
          // Old colors kept for compatibility
          indigo: '#120052',
          cyan: '#4adeed',
        },
        grayblue: {
          1: '#515e90',
          2: '#6270a1',
        },
        lightgray: {
          1: '#b4b4b4',
          2: '#c9c9c9',
          3: '#ebebeb',
        },
        pastel: {
          orange: '#fab96d',
          yellow: '#fefefa',
        },
        base: {
          white: '#ffffff',
          black: '#000000',
        },
      },
      backgroundImage: {
        'brand-gradient': 'radial-gradient(circle at 0% 0%, #857ba1, #082e49)',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
