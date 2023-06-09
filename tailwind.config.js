

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      sky: '#0ea5e9',
      // voilet:'#8b5cf6',
      // fyuchia:'#d946ef',
      // emerald:'#10b981',
      zinc: colors.zinc,
      neutral : colors.neutral,
     stone: colors.stone,
     emerald: colors.emerald,
     cyan: colors.cyan,
     violet: colors.violet,
     fuchsia:colors.fuchsia,
     rose:colors.rose,
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'Bonita':['Bonita'],
      'Lobster':['Lobster'],
      'NOOB':['NOOB'],
      'Zighead':['Zighead']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
});