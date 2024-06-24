/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#242D34",
        "custom-dark": "rgb(0, 0, 0)",
        "custom-mavi": "#00b9ff",
        "custom-blue": "#18a1d6",
        "custom-open": "#e2eff8",
      },
    },
  },
  plugins: [],
};
