/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    height: {
      "card": "250px",
      "card-sm": "200px",
      "80": "80vh",
      "60": "60vh",
      "1/4": "25vh",
      "1/2": "50vh",
      "3/4": "75vh",
      "full": "100vh",
      "1": "1rem",
    },
    width: {
      "1": "1rem",
      "md": "600px",
      "desktop": "960px",
      "80": "80%",
      "100": "100%",
      "10": "40px",
      "60": "60%",
      "card": "250px",
      "card-sm": "200px",
      "tablet": "400px",
      "1/4": "25%",
      "1/2": "50%",
      "3-4": "75%",
      "full": "100%",
    },
    borderWidth: {
      "1": "1px"
    },
    zIndex: {
      "10": "999",
      "0": "0"
    },
    fontWeight: {
      "xt": "150"
    }
  },
  plugins: [],
}

