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
        navy: {
          950: '#060D1F',
          900: '#0F172A',
          800: '#1E2D4A',
          700: '#1E3A5F',
        },
        neon: {
          blue: '#2563EB',
          cyan: '#38BDF8',
          glow: '#0EA5E9',
        }
      },
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(56, 189, 248, 0.4), 0 0 60px rgba(56, 189, 248, 0.1)',
        'neon-blue': '0 0 20px rgba(37, 99, 235, 0.5)',
        'glass': 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(56, 189, 248, 0.8), 0 0 60px rgba(56, 189, 248, 0.3)' },
        }
      },
      backgroundImage: {
        'grid': 'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      }
    },
  },
  plugins: [],
}
