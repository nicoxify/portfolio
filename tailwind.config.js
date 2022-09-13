module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"]
      },
      colors: {
        "gray-dark": "#222831",
        "gray-light": "#393E46",
        "blue-light": "#00ADB5"
      },
      animation: {
        mouse: "mouse 2s infinite"
      },
      keyframes: {
        mouse: {
          "100%": { top: "2.25rem", opacity: "0" }
        }
      }
    }
  },
  plugins: []
}
