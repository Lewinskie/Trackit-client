// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Use class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        "card-bg": "#374151",
        "text-h1": "#F9FAFB",
        "text-h2": "#E5E7EB",
        "text-p": "#9CA3AF",
        link: "#60A5FA",
        btn: "#2563EB",
        "footer-bg": "#111827",
        "footer-text": "#6B7280",
        // Light mode colors
        "light-primary": "#F9FAFB",
        "light-card-bg": "#FFFFFF",
        "light-text-h1": "#1F2937",
        "light-text-h2": "#4B5563",
        "light-text-p": "#6B7280",
        "light-link": "#3B82F6",
        "light-btn": "#3B82F6",
        "light-footer-bg": "#F1F5F9",
        "light-footer-text": "#9CA3AF",
      },
    },
  },
  plugins: [],
};
