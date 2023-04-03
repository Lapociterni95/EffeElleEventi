import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://giansake.github.io",
  base: "/effe-elle-eventi/",
  integrations: [tailwind()],
});
