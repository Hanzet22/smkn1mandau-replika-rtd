import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// SMKN 1 Mandau — Replika — konfigurasi Astro
// output: static, siap deploy ke Vercel sebagai situs statis
export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false })
  ],
  output: "static",
  site: "https://smkn1mandau-replika.vercel.app"
});
