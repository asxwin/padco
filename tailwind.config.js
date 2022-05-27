
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend:{
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '20px 20px 50px 10px rgba(98, 98, 98, 0.328)',
        '4xl':'0px 0px 10px 4px rgba(98, 98, 98, 0.328)',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

