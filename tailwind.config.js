/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#08080c',
          800: '#0d0d14',
          700: '#13131c',
          600: '#1a1a26',
          500: '#222230',
          400: '#2e2e3e',
        },
        gold: {
          50: '#fffdf0',
          100: '#fdf6d3',
          200: '#f9e9a0',
          300: '#f3d96b',
          400: '#e8c544',
          500: '#d4a82a',
          600: '#b88a1d',
          700: '#8f6818',
          800: '#5e4413',
          900: '#3a2b0d',
        },
        accent: {
          blue: '#1e3a5f',
          teal: '#2a6b6b',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 30s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'blink': 'blink 1.2s steps(2) infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'typing': 'typing 3s steps(30) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { opacity: '0.5', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          '0%': { width: '0' },
          '60%, 100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
