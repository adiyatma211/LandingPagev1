const {nextui} = require('@nextui-org/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
        lg: '4px 4px 8px var(--tw-shadow-color)',
      },
      screens: {
        'xs': '370px', // Custom breakpoint for 370px
        'sm': '640px', // Default small breakpoint
        'md': '768px', // Default medium breakpoint
        'lg': '1024px', // Default large breakpoint
        'xl': '1280px', // Default extra-large breakpoint
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}