/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#f8f9fa",
        "bg-secondary-color": "#e9ecef",
        "main": "#4f5e7b",
        "main-darker": "#3b4356",
        "secondary": "#7e8494",
        "third": "#9e9da2",
        "fourth": "#f5f5f5",
        "white": "#fff",
        "amber": "#f59e0b",
        "amber-dark": "#d97706",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      height: {
        "containerHeight": "calc(100vh - 60px)",
      },
    },
  },
  plugins: [],
};
