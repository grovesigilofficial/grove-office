/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grove: {
          green: "#00FFB2",
          dark: "#0D1117",
          light: "#A8FFE8"
        }
      }
    }
  },
  plugins: [],
}
