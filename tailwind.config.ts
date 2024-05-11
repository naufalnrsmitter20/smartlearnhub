import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#F4F9F4",
        "green-1": "#A7D7C5",
        "green-2": "#74B49B",
        "green-3": "#5C8D89",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
