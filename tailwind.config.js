/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00F5FF',      // Cyan brillante
        secondary: '#2563EB',     // Azul eléctrico
        accent: '#FFD700',        // Dorado brillante
        'accent-pink': '#FF1493', // Rosa fucsia
        'accent-purple': '#9333EA', // Púrpura vibrante
        bg: '#0A0E27',            // Azul oscuro profundo
        'bg-elevated': '#0F1629', // Azul oscuro elevado
        surface: '#1A1F3A',       // Superficie azul oscura
        text: '#FFFFFF',          // Blanco puro
        'text-muted': '#94A3B8',  // Gris azulado
        border: '#334155',        // Borde gris azul
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'zoom-in': 'zoom-in 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(0, 245, 255, 0.8), 0 0 60px rgba(0, 245, 255, 0.5), 0 0 80px rgba(37, 99, 235, 0.3)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
}
