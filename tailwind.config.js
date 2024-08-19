/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0057B8",
          dark: "#003B7C",
        },
        secondary: "#2061AA",
        gray: {
          primary: "#EFF7FF",
          secondary: "#DAE3ED",
        },
        background: "#799FCA",
        gradient: "#47c0c0",
      },
      fontFamily: {
        sans: ["Poppins", "Lato", "Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/homepage/bg-hero2.jpg')",
        feature: "url('/src/assets/feature_bg.png')",
        client: "url('/src/assets/our_client.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradient: "animatedgradient 6s ease infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};
