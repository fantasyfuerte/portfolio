import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2b2823",
        secondary: "#8fa691",
        middleColor: "#d4ceaa",
        basicBackground: "#fdfaee",
        cta: "#cc3917",
      },
    },
  },
  plugins: [],
} satisfies Config;
