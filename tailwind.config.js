/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class", // Enable dark mode support
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary-default)",
          light: "var(--color-primary-light)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary-default)",
          light: "var(--color-secondary-light)",
        },
        texinput: {
          DEFAULT: "var(--color-textinput-default)",
        },
        accent: {
          DEFAULT: "var(--color-accent-default)",
          light: "var(--color-accent-light)",
        },
        grey: {
          DEFAULT: "var(--color-grey-default)",
        },
        slate: {
          DEFAULT: "var(--color-slate-default)",
        },
        dark: {
          DEFAULT: "var(--color-dark-default)",
        },
        light: {
          DEFAULT: "var(--color-light-default)",
        },
        overlay: "var(--color-overlay)",
      },

      fontFamily: {
        poppins: ["Inter"],
        "inter-Bold": ["Inter-Bold"],
        "inter-ExtraBold": ["Inter-ExtraBold"],
        "inter-Light": ["Inter-Light"],
        "inter-Thin": ["Inter-Thin"],
        "inter-Regular": ["Inter-Regular"],
        "inter-Medium": ["Inter-Medium"],
        "inter-SemiBold": ["Inter-SemiBold"],
      },
    },
  },
  plugins: [],
};
