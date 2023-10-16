/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      transitionDuration: {
        "2000": "2000ms",
      },
      animation: {
        "border-blink": "border-blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "border-blink": {
          "0%, 100%": { "border-color": "transparent" },
          "70%": { "border-color": "white" },
        }
      }
    },
  },
  plugins: [],
}
