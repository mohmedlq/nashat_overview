/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nashat: {
          bg: '#111714',
          surface: '#151E19',
          surfaceElevated: '#1A251F',
          surfaceBorder: 'rgba(179, 154, 99, 0.18)',
          surfaceBorderMuted: 'rgba(255, 255, 255, 0.08)',
          gold: {
            DEFAULT: '#B39A63',
            light: '#CBB688',
            hover: '#C2A870',
            dark: '#8C7443',
            muted: 'rgba(179, 154, 99, 0.12)',
            glow: 'rgba(179, 154, 99, 0.25)',
          },
          text: {
            primary: '#F3F4F6',
            secondary: '#9CA8A2',
            muted: '#637069',
            accent: '#D4C198',
          }
        }
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', '"Noto Sans Arabic"', 'system-ui', 'sans-serif'],
        english: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'nashat-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(179, 154, 99, 0.12)',
        'nashat-gold': '0 0 25px -5px rgba(179, 154, 99, 0.25)',
      }
    },
  },
  plugins: [],
}

