export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        '15': 'repeat(15, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      colors: {
        metal: {
          50: '#eff6ff',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
        },
        nonmetal: {
          50: '#fefce8',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          900: '#713f12',
        },
        halogen: {
          50: '#fef2f2',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          900: '#7f1d1d',
        },
        noble: {
          50: '#ecfeff',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          900: '#164e63',
        },
        metalloid: {
          50: '#f0fdf4',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          900: '#14532d',
        },
        lanthanide: {
          50: '#fdf4ff',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          900: '#701a75',
        },
        actinide: {
          50: '#faf5ff',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          900: '#581c87',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}