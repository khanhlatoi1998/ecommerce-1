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
        'color-02': '#008000',
        'color-03': '#ff0000ad',
        'color-04': '#f3f5f2',
        'color-05': '#aa8a82',
        'color-09': '#1f303c',
        'color-10': '#ffffff47',
        'color-11': '#00000012',
        'color-12': '#0000008a',
        'color-13': '#0000001c',
      },
      fontSize: {
        'title-1': '27px',
        'title-2': '18px',
        'icon-1': '27px',
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
        'border-gray-1': '#ffffff4a',
        'gray-2': '#80808024'
      },
      padding: {
        header: '103px'
      },
      opacity: {
        'opacity-1': '70%'
      },
      boxShadow: {
        'shadow-1': '0 0 10px #0000001a'
      }
    },
  },
  plugins: [],
}

