/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-hidden":
          "linear-gradient(90deg, rgba(251, 251, 251, 0) 0%, #F6F7F8 100%)",
      },
      backgroundSize: {
        "full": "100% 100%",
      },
      screens: {
        "xs": "480px",
      },
    },
  },
  plugins: [],
};
