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
          DEFAULT: '#111412',
          surface: '#181E1A',
          secondary: '#202823',
          elevated: '#28332C',
          border: 'rgba(237, 234, 225, 0.08)',
          'border-hover': 'rgba(169, 184, 155, 0.25)',
        },
        ivory: {
          DEFAULT: '#EDEAE1',
          muted: '#C4C0B5',
          dim: '#8E8B82',
        },
        sage: {
          light: '#C7D3BC',
          DEFAULT: '#A9B89B',
          dark: '#7D8C6F',
        },
        forest: {
          light: '#6E8F74',
          DEFAULT: '#526C56',
          dark: '#3A4D3E',
        },
        muted: {
          grey: '#888D85',
        },
        accent: {
          amber: '#F59E0B',
          cyber: '#FACC15',
          orange: '#F97316',
          burgundy: '#881337',
          emerald: '#10B981',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
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
