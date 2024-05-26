/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "dark",
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
  
        'md': '720px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        
        '3xl': '1736px',
      },
      
    },
  },
  plugins: [],
};