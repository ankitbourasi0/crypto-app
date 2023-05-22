

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      sky: '#0ea5e9',
      voilet:'#8b5cf6',
      fyuchia:'#d946ef',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
});