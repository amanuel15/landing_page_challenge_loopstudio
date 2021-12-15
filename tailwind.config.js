module.exports = {
  content: [
    "./public/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "white-color": "hsl(0, 0%, 100%)",
        "black-color": "hsl(0, 0%, 0%)",
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      fontSize: {
        '5.5xl': ['3.3rem', '3.3rem']
      },
      height: {
        '2/3': '70%',
      }
    },
    fontFamily: {
      Alata: ["Alata, sans-serif"],
      "Josefin Sans": ["Josefin Sans, sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        // sm: "640px",
        // md: "768px",
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  plugins: [],
}
