/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dest_folder/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'DM_sans' : ["DM Sans", 'sans-serif'],
      'DM_mono': ['DM Mono', 'monospace'],
      'Poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

