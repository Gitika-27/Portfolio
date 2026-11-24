/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#101112',
          surface: '#191817',
          secondary: '#242220',
          elevated: '#2F2B28',
          border: 'rgba(242, 238, 232, 0.12)',
          'border-hover': 'rgba(214, 111, 67, 0.35)',
        },
        ivory: {
          DEFAULT: '#F2EEE8',
          muted: '#C8C2BA',
          dim: '#A9A29A',
        },
        terracotta: {
          light: '#E68962',
          DEFAULT: '#D66F43',
          dark: '#A85B3D',
        },
        accent: {
          DEFAULT: '#D66F43',
          muted: '#A85B3D',
          amber: '#F59E0B',
          cyber: '#FACC15',
          emerald: '#10B981',
          cyan: '#38BDF8',
          burgundy: '#881337',
        }
      },
      fontFamily: {
        sans: ['"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Lora"', 'Georgia', 'serif'],
        display: ['"Nunito"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
