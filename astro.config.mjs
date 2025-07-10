// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // ✅ correct import

export default defineConfig({
  output: 'static',
  site: 'https://dlove891.github.io',
  base: '/portfolio-website', // ✅ set the base path for your project-website
  integrations: [tailwind()], // ✅ use Astro's integration
});
