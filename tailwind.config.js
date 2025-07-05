/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        light_gray: "#F7F7F9",
        dark_gray: "#7D848D",
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
