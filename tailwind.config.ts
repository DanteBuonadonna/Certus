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
        primary: {
          DEFAULT: "#534AB7",
          50: "#EEEDF9",
          100: "#D4D2F2",
          200: "#AAA5E5",
          300: "#7F78D8",
          400: "#554BCB",
          500: "#534AB7",
          600: "#443B9C",
          700: "#352D80",
          800: "#261F64",
          900: "#171148",
        },
        ats: {
          green: "#1D9E75",
          amber: "#BA7517",
          red: "#E24B4A",
        },
      },
      borderRadius: {
        card: "12px",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
