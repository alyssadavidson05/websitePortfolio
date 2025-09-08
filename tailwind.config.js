/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,.06)" },
      colors: { brand: { DEFAULT: "#0f172a" } },
      fontFamily: { sans: ["Inter","system-ui","-apple-system","Segoe UI","Roboto","sans-serif"] }
    }
  },
  plugins: []
};
