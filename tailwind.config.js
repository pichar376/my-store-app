/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    height: {
      "card": "250px",
      "80": "80vh",
      "full": "100vh"
    },
    width: {
      "desktop": "960px",
      "80": "80%",
      "10": "40px",
      "60": "60%",
      "card": "250px",
      "full": "100%",
      "tablet": "400px"
    },
    borderWidth: {
      "1": "1px"
    }
  },
  plugins: [],
}

