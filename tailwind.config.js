/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#08131f',
        'space-deep': '#040910',
        'neon-cyan': '#00f2fe',
        'neon-purple': '#7f00ff',
        'neon-pink': '#fe08b5',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 242, 254, 0.35)',
        'purple-glow': '0 0 20px rgba(127, 0, 255, 0.35)',
        'dual-glow': '0 0 25px rgba(0, 242, 254, 0.25), 0 0 25px rgba(127, 0, 255, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
