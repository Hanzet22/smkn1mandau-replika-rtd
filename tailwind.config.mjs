/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Token warna institusional — amber ukir, navy malam, hijau hutan
        ukir: {
          DEFAULT: "#b85c14",
          light: "#d9843f",
          dark: "#8a4410"
        },
        malam: {
          DEFAULT: "#0f2545",
          deep: "#09183a",
          light: "#1a3a63"
        },
        rimba: {
          DEFAULT: "#1a4d2e",
          light: "#2d6b45",
          dark: "#0f3420"
        },
        kapas: "#fdf8f0",
        gading: "#f6efe6",
        tinta: "#1a1a1a",
        "tinta-pudar": "#4a4a4a"
      },
      fontFamily: {
        judul: ["'Paprika'", "cursive"],
        badan: ["'Josefin Sans'", "system-ui", "sans-serif"],
        rapat: ["'Pragati Narrow'", "sans-serif"]
      },
      maxWidth: {
        laman: "1180px"
      }
    }
  },
  plugins: []
};
