/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    fontFamily: {
      primary: "Rubik",
    },
    extend: {
      colors: {
        platinum: {
          DEFAULT: "#e5e4e2 ",
          secondary: "#c0c0c0",
        },
        black: {
          DEFAULT: "#000000",
          hover: "#333333",
        },
        gray: {
          DEFAULT: "#E0E0E0",
        },
        grey: "#a9a9a9",
        white: "#ffffff",
      },
      boxShadow: {
        primary: "0px 20px 200px rgba(57, 23, 119, 0.05)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  plugins: [],
};