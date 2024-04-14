/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'border': '#ffffff54',
        'main': '#080A1A',
        'color-01': '#fab771',
        'color-09': '#1f303c',
        'color-10': '#ffffff47',
      },
      fontSize: {
        'title-1': '27px',
        'title': '18px',
        'sm': '15px',
        'md': '16px',
        'lg': '17px',
        'xl': '18px',
        '2xl': '21px',
        'full': '30px'
      },
      maxWidth: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      borderColor: {
        'border-gray-1': '#ffffff4a'
      },
      padding: {
        header: '103px'
      }
    },
  },
  plugins: [],
}

