/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "#e5e7eb",
        background: "#f9fafb",
        foreground: "#111827",
        primary: {
          400: "#60a5fa",
          500: "#3b82f6",
        },
        secondary: {
          400: "#f472b6",
          500: "#ec4899",
        },
        accent: {
          400: "#34d399",
          500: "#10b981",
        },
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}