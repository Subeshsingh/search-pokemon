import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#ffffff",
      gray: "#f3f3f3",
      golden: "#f4bc62",
      black: "#282e2a",
      "link-color": "#accadd",
      "secondary-button": "#61dec8",
      "button-background": "#004368",
    },
  },
  plugins: [],
};
export default config;
