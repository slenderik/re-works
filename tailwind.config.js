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
          500: "#008163", // Для логотипов, основой цвет
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
