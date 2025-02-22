/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#05123C",
        sky: "#0494B8",
        orange: "#ED6F4D",
        slate: "#E2E8F0",
      },
      fontFamily: {
        onest: ["Onest", "serif"],
        outfit: ["Outfit", "serif"],
        fredoka: ["Fredoka", "serif"],
      },
      boxShadow: {
        faq: "0px 4px 114px 0px rgba(0, 48, 73, 0.06)",
        input: "0px 3.124px 73.404px 0px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
