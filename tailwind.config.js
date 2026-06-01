/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#06080f',
          50: '#0a0e17',
          100: '#0d1220',
          200: '#121829',
        },
        signal: {
          DEFAULT: '#22d3ee',
          dim: '#0891b2',
        },
        depth: {
          DEFAULT: '#8b5cf6',
          dim: '#6366f1',
        },
        warmth: {
          DEFAULT: '#f59e0b',
          soft: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-tech':
          'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
        'glow-radial':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,211,238,0.15), transparent)',
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(34,211,238,0.08), 0 24px 48px -24px rgba(0,0,0,0.8)',
        'panel-hover':
          '0 0 0 1px rgba(34,211,238,0.2), 0 0 40px -12px rgba(34,211,238,0.15)',
        cta: '0 0 0 1px rgba(245,158,11,0.3), 0 8px 32px -8px rgba(245,158,11,0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        scan: 'scan 8s linear infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
