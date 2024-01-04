import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Open Sans",
    },
    fontSize: {
      "base": ["1rem", "1.3"],
      "xl": ["1.618rem", "1.3"],
      "2xl": ["2.618rem", "1.3"],
      "3xl": ["4.236rem", "1.3"],
    },
  },
  plugins: [],
} satisfies Config;
