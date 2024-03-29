/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  //  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  //    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('../images/background.png')",
      },
    },
  },
  plugins: [require("daisyui")],
});
