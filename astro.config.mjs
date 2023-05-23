import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://giansake.github.io",
  base: "/",
  integrations: [tailwind(), svelte(), image(), sitemap()],
  output: "server",
  adapter: netlify(),
});
