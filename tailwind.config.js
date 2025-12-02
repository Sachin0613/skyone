/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4C6BFF",
        "primary-hover": "#3B5AFF",
        secondary: "#A85CFF",
        "secondary-hover": "#9A4EFF",
        accent: "#00D4FF",
        dark: "#0A0A0F",
        "dark-light": "#1A1A2E",
        "dark-lighter": "#16213E",
        neon: {
          blue: "#4C6BFF",
          purple: "#A85CFF",
          cyan: "#00D4FF",
          pink: "#FF6B9D",
          green: "#00FF88"
        }
      },
      fontFamily: {
        gaming: ["Orbitron", "monospace"],
        body: ["Inter", "sans-serif"]
      },
      animation: {
        "pulse-neon": "pulse-neon 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out"
      },
      keyframes: {
        "pulse-neon": {
          "0%": { 
            boxShadow: "0 0 5px #4C6BFF, 0 0 10px #4C6BFF, 0 0 15px #4C6BFF"
          },
          "100%": { 
            boxShadow: "0 0 10px #4C6BFF, 0 0 20px #4C6BFF, 0 0 30px #4C6BFF"
          }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "glow": {
          "0%": { filter: "brightness(1) drop-shadow(0 0 5px #4C6BFF)" },
          "100%": { filter: "brightness(1.2) drop-shadow(0 0 20px #4C6BFF)" }
        },
        "slide-up": {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      backdropBlur: {
        xs: "2px"
      },
      spacing: {
        section: "2rem"
      },
      borderRadius: {
        container: "0.75rem"
      }
    },
  },
  plugins: [],
}
