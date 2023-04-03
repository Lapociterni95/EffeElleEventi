/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "client-blue": "#002ea5",
        "client-beige": "#FFFBF2",
      },
    },
  },
  plugins: [],
};
