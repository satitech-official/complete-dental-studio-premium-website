/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pearl: "var(--pearl)",
        ice: "var(--ice)",
        turquoise: "var(--turquoise)",
        teal: "var(--teal)",
        deep: "var(--deep-teal)",
        silver: "var(--silver)",
        slate: "var(--slate)",
        ink: "var(--ink)",
        success: "var(--success)",
        error: "var(--error)",
        amber: "var(--amber)"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        clinical: "0 18px 50px rgba(10, 81, 88, 0.12)",
        glow: "0 0 32px rgba(22, 125, 130, 0.18)"
      }
    }
  },
  plugins: []
};
