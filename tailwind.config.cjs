/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2F8',
          100: '#CCE5F1',
          200: '#99CBE3',
          300: '#66B1D5',
          400: '#3397C7',
          500: '#0891B2',
          600: '#06748E',
          700: '#05576A',
          800: '#033A47',
          900: '#021D23',
        },
        secondary: {
          50: '#EDE9FE',
          100: '#DBD3FD',
          200: '#B7A7FB',
          300: '#937BF9',
          400: '#6F4FF7',
          500: '#6B21A8',
          600: '#561A86',
          700: '#401465',
          800: '#2B0D43',
          900: '#150722',
        },
        accent: {
          50: '#FEF2E8',
          100: '#FDE5D1',
          200: '#FBCBA3',
          300: '#F9B175',
          400: '#F79747',
          500: '#EA580C',
          600: '#BB460A',
          700: '#8C3507',
          800: '#5E2305',
          900: '#2F1202',
        },
        navy: {
          50: '#E8EBF0',
          100: '#D1D7E1',
          200: '#A3AFC3',
          300: '#7587A5',
          400: '#475F87',
          500: '#1A365D',
          600: '#152B4A',
          700: '#102038',
          800: '#0B1525',
          900: '#050B13',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif TC', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
