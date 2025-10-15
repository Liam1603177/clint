/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bubble-1': 'bubble-1 4s ease-in-out infinite',
        'bubble-2': 'bubble-2 5s ease-in-out infinite',
        'bubble-3': 'bubble-3 6s ease-in-out infinite',
        'bubble-4': 'bubble-4 7s ease-in-out infinite',
        'bubble-5': 'bubble-5 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'bubble-1': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.1)' }
        },
        'bubble-2': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-40px) scale(0.9)' }
        },
        'bubble-3': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-25px) scale(1.2)' }
        },
        'bubble-4': {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px) scale(1)' },
          '25%': { transform: 'translateX(10px) translateY(-15px) scale(0.8)' },
          '75%': { transform: 'translateX(-10px) translateY(-35px) scale(1.3)' }
        },
        'bubble-5': {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px) scale(1) rotate(0deg)' },
          '50%': { transform: 'translateX(20px) translateY(-20px) scale(0.9) rotate(180deg)' }
        }
      }
    },
  },
  plugins: [],
}