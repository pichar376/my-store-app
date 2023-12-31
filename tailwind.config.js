/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    height: {
      "card": "250px",
      "36": "360px",
      "80": "80vh",
      "60": "60vh",
      "1/4": "25vh",
      "1/2": "50vh",
      "3/4": "75vh",
      "full": "100vh",
    },
    width: {
      "md": "600px",
      "desktop": "960px",
      "80": "80%",
      "10": "40px",
      "60": "60%",
      "card": "250px",
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
      "10": "1000",
      "0": "0"
    }
  },
  plugins: [],
}

