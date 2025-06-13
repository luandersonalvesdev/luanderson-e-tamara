/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // se estiver usando a pasta /app
    "./pages/**/*.{js,ts,jsx,tsx}", // ou /pages
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00ffff",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
          },
          "50%": {
            textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff",
          },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
