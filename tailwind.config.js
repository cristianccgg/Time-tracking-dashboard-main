/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // ### Primary

        "1-Blue": "hsl(246, 80%, 60%)",

        "Work-Light-red": "hsl(15, 100%, 70%)",
        "Play-Soft-blue": "hsl(195, 74%, 62%)",
        "Study-Light-red": "hsl(348, 100%, 68%)",
        "Exercise-Lime-green": "hsl(145, 58%, 55%)",
        "Social-Violet": "hsl(264, 64%, 52%)",
        "Self-Soft-orange": "hsl(43, 84%, 65%)",

        // ### Neutral

        "1-Very-dark-blue": "hsl(226, 43%, 10%)",
        "2-Dark-blue": "hsl(235, 46%, 20%)",
        "3-Desaturated-blue": "hsl(235, 45%, 61%)",
        "4-Pale-Blue": "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
