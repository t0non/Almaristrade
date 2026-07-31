import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#122239",
          800: "#1E3557",
          700: "#2B4975",
        },
        gold: {
          600: "#C5870E",
          500: "#DF9D1C",
          100: "rgba(197, 135, 14, 0.10)",
        },
        ivory: {
          50: "#F7F4EC",
        },
        graphite: {
          900: "#20242A",
        },
        gray: {
          600: "#666B72",
        },
        border: {
          200: "#DDD9D0",
          subtle: "#EBE7DF",
        },
        success: {
          700: "#2E7D32",
        },
        error: {
          700: "#C62828",
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Canela", "Cormorant Garamond", "Georgia", "serif"],
        interface: ["var(--font-sans)", "Neue Haas Unica", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        max: "8px",
      }
    },
  },
  plugins: [],
};
export default config;
