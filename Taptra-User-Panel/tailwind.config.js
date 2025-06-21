/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#10b981",
        accent: "#f59e0b",
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        xl: "0 4px 20px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
