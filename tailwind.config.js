/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#008163', // Зелёный профиссионалитет
        'secondary': '#F2F2F2', // ��ёрный фон приложения
        'tertiary': '#E0E0E0', // Серый фон визуальных компонентов
        'gray': {
          '100': '#F2F2F2', // Серый фон приложения
          '200': '#E0E0E0', // Серый фон визуальных компонентов
          '300': '#5E6278', // Серый фон текста
          '400': '#A6A6A6', // Темный серый фон тек
        }
      },
    },
  },
  plugins: [],
}

