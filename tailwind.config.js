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
        'primary': {
          '100': '#50CD89', // яркая версия цвета
          '500': '#008163', // Для логотипов, основой цвет
        }, 
        'secondary': '#F2F2F2', // чёрный фон приложения
        'tertiary': '#E0E0E0', // Серый фон визуальных компонентов
        
        'background': '#F5F8FA', // фон приложения
        
        'gray': {
          '100': '#F2F2F2', // Серый фон приложения
          '200': '#E0E0E0', // Серый фон визуальных компонентов
          '300': '#5E6278', // Серый фон текста
          '400': '#A6A6A6', // Темный серый фон тек
          '500': '#A1A5B7', // Темный серый фон текста
        }
      },
    },
  },
  plugins: [],
}

