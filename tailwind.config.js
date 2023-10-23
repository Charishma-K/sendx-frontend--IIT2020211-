/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}", // added other common file types
    // removed '*.{html,js}' as the above line covers all files in the src folder with those extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}