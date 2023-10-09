/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: ['#1e293b'], //slate-800
        secondary: ['#475569'], //slate
        // tersier: ['#047857'],
        tersier: ['#b45309'], //emerald-700
        mawar: ['#9d174d'] //pink-800
      },
      screens: {
        "2xl": "1320px"
        // "2xl": "1536px",
      },
      fontFamily: {
        primary: "Jost",
        secondary: "A4SPEED",
        inter: ['Inter'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
