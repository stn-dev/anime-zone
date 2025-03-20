/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Inclut tous les fichiers React
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B", // Bleu foncé
        secondary: "#64748B", // Bleu-gris
        accent: "#FACC15", // Jaune vif
      },
    },
  },
  plugins: [],
};
