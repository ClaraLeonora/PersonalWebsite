import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5EAEA",
        red: "#F16767",
        orange: "#FFB84C",
        purple: "#A459D1",
        black: {
            100: "#313131",
        } 
      },
    },
  },
  plugins: [],
} satisfies Config;
