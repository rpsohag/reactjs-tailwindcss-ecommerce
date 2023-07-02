/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Poppins"
    },
    container: {
      padding: {
        default: '30px',
        lg: '0'
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px"
    },
    extend: {
     colors: {
      primary: "#222222",
      secondary: "#F5E6E0",
     },
     backgroundColor: {
      hero: "url('./img/bg_hero.jpg')",
     } 
    },
  },
  plugins: [],
}

