/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        
        'sm': '325px',
        'md': '768px',
        'lg': '1048px',
        'xl': '1240px',
        '2xl': '2536px',
      },
      maxWidth: {
        'sm': '639px',
        'md': '770px',
        'lg': '1049px',
        'xl': '1241px',
        '2xl': '2537px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
