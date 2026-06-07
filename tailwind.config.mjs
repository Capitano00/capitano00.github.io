/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#131719",
        "ink-soft": "#3d484d",
        paper: "#f7f5ef",
        "paper-warm": "#ece6d8",
        field: "#dcebdc",
        copper: "#a6532d",
        solar: "#e0b43a",
        slate: "#36525c"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter Tight", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        lift: "0 20px 70px rgba(19, 23, 25, 0.14)"
      }
    }
  },
  plugins: []
};
