
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        header: "560px",
        rate: "400px",
      },
      fontSize: {
        h1: '475px',
      },
      screen: {
        xs: '2.6rem',
      },
      colors: {
        sub:  '#F20000',
        dyr:   '#0B0F29',
        maint: '#080A1A',
        str:   '#F2C94C',
        txt:   '#C0C0C0',
        brd:   '#4b5563',
        dyd:   '#E0D5D5',
       
      },
    },
  },
  plugins: [],
};

