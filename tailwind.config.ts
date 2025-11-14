import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f6f9ff",
          100: "#e9f0ff",
          200: "#d3dfff",
          300: "#abc1ff",
          400: "#7a96ff",
          500: "#546eff",
          600: "#3946f0",
          700: "#2c35c6",
          800: "#262d9e",
          900: "#22287d"
        },
        accent: {
          100: "#fff7e5",
          200: "#ffe0b2",
          300: "#ffcb80",
          400: "#ffb84d",
          500: "#ffa31a",
          600: "#db7f00",
          700: "#b75f00",
          800: "#934800",
          900: "#7a3900"
        }
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 70px -30px rgba(84, 110, 255, 0.45)"
      },
      backgroundImage: {
        "gradient-moon":
          "radial-gradient(circle at 10% 20%, rgba(255,236,179,0.15), rgba(84,110,255,0.05))"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};

export default config;
