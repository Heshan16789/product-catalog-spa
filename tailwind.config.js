/** @type {import('tailwindcss').Config} */
export default {
  // 1. Tell Tailwind where to look for your classes
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // 2. Disable Preflight inside the corePlugins object
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
