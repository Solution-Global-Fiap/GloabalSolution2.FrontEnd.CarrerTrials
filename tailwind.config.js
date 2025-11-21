// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["peer-data-[state=checked]:hidden"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        cardBg: "var(--card-bg)",
        cardBorder: "var(--card-border)",
        primary: "var(--primary)",
        "primary-foreground": "var(--text-inverted)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(to right, var(--brand-gradient-start), var(--brand-gradient-mid), var(--brand-gradient-end))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
