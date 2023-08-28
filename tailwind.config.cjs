/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        desktop: "85.375rem",
        mobile: "22.5rem",
        screen: "100vw",
      },
      height: {
        18: "4.5rem",
        hero: "calc(100vh - 4.5rem)",
      },
      colors: {
        primary: {
          "prussian-blue": "#0E293D",
          aquamarine: "#6BEBB7",
        },
        accents: {
          "columbia-blue": "#D0EBFF",
          "crayola-blue": "#2176FF",
          "orange-peel": "#FF9F1C",
          "red-cerise": "#DA4167",
          "dark-green": "#013220",
          "slate-gray": "#808080",
        },
      },
      fontSize: {
        h1: ["4rem", "1.25"],
        h2: ["3rem", "1.25"],
        h3: ["2.25rem", "1.25"],
        h4: ["1.875rem", "1.25"],
        h5: ["1.5rem", "1.25"],
        h6: ["1rem", "1.25"],
        h7: [".75rem", "1.25"],
        p1: ["1.5rem", "1.5"],
        p2: ["1rem", "1.5"],
        p3: [".75rem", "1.5"],
      },
      padding: {
        layout: "7.5rem",
        18: "4.5rem",
      },
      screens: {
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
