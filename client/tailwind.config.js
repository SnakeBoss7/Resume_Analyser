const { keyframes } = require("styled-components");

module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        mono: ['VT323', 'Arial', 'sans-serif'],
      },
      Animation:
      {
        'fade-in-footer': 'fadeIn 0.5s ease-in-out',
      },
      keyframes:
      {
        fadeIn:
        {
          '0%': {transform:'translateY(100%)', opacity: '0' },
          '100%': {transform:'translateY(0%)',opacity: '1' },
        }
      },
      colors: {
        primary: '#2563eb',
        primary_lg:'#4f8af7',
        primary_ulg:'#a3c9ff',
        bg_c: '#262626',
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
