/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1e1e2e", // elegantno temno ozadje
        foreground: "#c9d1d9", // nevtralno svetlo siva za odlično berljivost
        accent: "#58a6ff", // prijetna modra za poudarke in interakcije
        card: "#1f2937", // nekoliko temnejša siva za kartice, da izstopajo od ozadja
        muted: "#8b949e", // umirjena siva za manj pomembne elemente
        highlight: "#f39c12", // topla oranžno-rumena za vizualno privlačne poudarke
        link: "#1f6feb", // močna modra za povezave, ki izstopajo
        secondary: "#b392f0", // svetlo vijolična za sekundarne poudarke
        tertiary: "#f47174", // subtilna roza za posebne poudarke
        elegantGreen: "#3ddc97", // elegantna zelena za svežino in živahnost
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // moderen sans-serif za eleganten videz
        heading: ["Poppins", "sans-serif"], // za naslove, poudarjanje sodobnosti
        display: ["Montserrat", "sans-serif"], // za večje, izrazne naslove
        body: ["Open Sans", "sans-serif"], // za običajno besedilo, prijetno in čitljivo
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};