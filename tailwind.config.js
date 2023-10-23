/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    width: {
      "desktop": "960px",
      "80": "80%",
      "60": "60%",
      "full": "100%",
      "tablet": "400px"
    },
    borderWidth: {
      "1": "1px"
    }
  },
  plugins: [],
}

