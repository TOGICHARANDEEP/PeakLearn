/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        indigo2: {
          950: "#191B3A",
          900: "#232659",
          800: "#2E3270",
        },
        paper: "#FAFAFF",
        amber2: {
          400: "#F5B14C",
          500: "#EF9F2C",
        },
        mint: {
          500: "#3FBF8F",
          100: "#E4F7EF",
        },
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 14px 32px -16px rgba(25,27,58,0.3)",
      },
    },
  },
  plugins: [],
};
