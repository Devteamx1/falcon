/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A6CF1",
        secondary: "#00C2FF",
        darkNavy: "#0B1F3A",
        bgLight: "#F8FBFF",
        accent: "#FFD54F",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "ocean-gradient": "linear-gradient(135deg, #0A6CF1 0%, #00C2FF 100%)",
        "dark-gradient": "linear-gradient(180deg, #0B1F3A 0%, #081527 100%)",
        "glass-shine": "linear-gradient(120deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)",
      },
      animation: {
        wave: "wave 8s ease-in-out infinite",
        "wave-slow": "wave 12s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        ripple: "ripple 0.7s ease-out",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(-25px) translateY(-8px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};