/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6ecea",
          75: "#96afaa",
          100: "#6b8e86",
          200: "#2b5d52",
          300: "#003c2f",
          400: "#002a21",
          500: "#00251d",
        },
        secondary: {
          50: "#f5f9ed",
          75: "#d4e5b4",
          100: "#c2da94",
          200: "#a8ca66",
          300: "#96bf47",
          400: "#698632",
          500: "#5c752b",
        },
        black: {
          50: "#e8e8e8",
          75: "#a2a2a2",
          100: "#7b7b7b",
          200: "#434343",
          300: "#1c1c1c",
          400: "#141414",
          500: "#111111",
        },
      },
    },
  },
  plugins: [],
};
