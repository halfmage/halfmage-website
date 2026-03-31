module.exports = {
  content: ["_site/**/*.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fafafa',
      black: '#09090b',
      surface: {
        DEFAULT: '#111113',
        raised: '#19191b',
        overlay: '#222225',
      },
      border: {
        DEFAULT: '#27272a',
        subtle: '#1e1e21',
      },
      text: {
        DEFAULT: '#fafafa',
        secondary: '#a1a1aa',
        muted: '#71717a',
        faint: '#3f3f46',
      },
      accent: {
        DEFAULT: '#6366f1',
        light: '#818cf8',
        muted: '#6366f1',
      },
      green: { DEFAULT: '#22c55e' },
      red: { DEFAULT: '#ef4444', 500: '#ef4444' },
      amber: { DEFAULT: '#f59e0b' },
    },
    fontFamily: {
      sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'monospace'],
    },
    extend: {
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-up-delay-1': 'fadeUp 0.6s ease-out 0.08s both',
        'fade-up-delay-2': 'fadeUp 0.6s ease-out 0.16s both',
        'fade-up-delay-3': 'fadeUp 0.6s ease-out 0.24s both',
        'fade-up-delay-4': 'fadeUp 0.6s ease-out 0.32s both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
