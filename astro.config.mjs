import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  integrations: [react()],
  site: "https://lively-butterfly-fd3f.lanber1027.workers.dev"
});
