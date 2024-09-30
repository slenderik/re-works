/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#50CD89", // яркая версия цвета
          200: "#3ABF7A", // дополнительный светлый оттенок
          300: "#28B66D", // еще один светлый оттенок
          400: "#1DAF60", // промежуточный светлый оттенок
          500: "#008165", // основной цвет для логотипов
          600: "#007B5F", // темный оттенок
          700: "#007054", // более темный оттенок
          800: "#006548", // еще более темный оттенок
          900: "#005B3D", // очень темный оттенок
          950: "#004D33"  // самый темный оттенок
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        background: "#F5F8FA"
      },
      fontFamily: {
        sans: ['var(--font-vk-sans-display)'],
      },
    },
  },
  plugins: [],
};
