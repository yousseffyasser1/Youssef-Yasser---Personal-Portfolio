/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0c",
        card: "#111214",
        border: "#1f1f22",
        accent: "#ff7a18",
      },
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(255,122,24,0.15)",
        "glow-md": "0 0 50px rgba(255,122,24,0.25)",
      },
    },
  },
  plugins: [],
};

