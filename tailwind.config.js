/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0c0c0e",
        surfaceBorder: "rgba(255, 255, 255, 0.08)",
        charcoal: "#111111",
        graphite: "#1c1c1f",
        ivory: "#F5F5F0",
        mutedIvory: "#A0A09B",
        silver: "#D1D5DB",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        editorial: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Syne"', '"Cinzel"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spinReverse 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
