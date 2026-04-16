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
        brand: {
          red: '#C0392B',
          'red-dark': '#96281B',
          'red-light': '#E74C3C',
          navy: '#1A2744',
          'navy-dark': '#0D1A38',
          'navy-light': '#243459',
          gold: '#D4AF37',
          'gold-light': '#F0D060',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Bebas Neue', 'Impact', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D1A38 0%, #1A2744 40%, #96281B 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0D1A38 0%, #1A2744 100%)',
        'red-gradient': 'linear-gradient(135deg, #96281B 0%, #C0392B 100%)',
        'gold-gradient': 'linear-gradient(135deg, #B8960C 0%, #D4AF37 50%, #F0D060 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'gold': '0 0 30px rgba(212,175,55,0.4)',
        'red': '0 4px 30px rgba(192,57,43,0.4)',
        'navy': '0 4px 30px rgba(26,39,68,0.6)',
        'card': '0 8px 40px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
