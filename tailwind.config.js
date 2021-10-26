module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        techBlue: {
          DEFAULT: "#3DB7E4",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
};
