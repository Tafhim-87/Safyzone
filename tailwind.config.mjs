/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        figtree: ["Figtree", "serif"],
        Bricolage: ["Bricolage Grotesque", "serif"],
        syne: ["var(--font-syne)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
