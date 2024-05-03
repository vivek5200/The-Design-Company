/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  },
  plugins: [
    function ({ addUtilities }){
        const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": { 
          display: "none",
        },
        ".no-scrollbar": {
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
    require('taos/plugin')
  ],
  content: ["./*.html"],
  theme: {
    colors:{
      'light-purple':'#403B9A',
      'black':'#000000',
      'light-black':'#181515',
      'white':'#FFFFFF'
    },
    fontFamily:{
      'Inter':["Inter", "sans-serif"],
      'Inria-serif':["Inria Serif", "serif"],
      'Qwitcher-Grypen': ["Qwitcher Grypen", "cursive"],
      'Kanit': ["Kanit", "sans-serif"]
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },                   
      spacing:{
        '200':'12.5rem',
        '229':'14.313rem'
      },
      boxShadow: {
        '3xl': '0 35px 60px rgba(255, 165, 0, 0.25)',
        '3xl':
            '0 45px 65px rgba(155, 48, 255, 0.15)'
       
      },
      
    },
  },
  plugins: [],
};
