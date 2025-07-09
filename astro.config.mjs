// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // ✅ correct import

export default defineConfig({
  output: 'static',
  base: '/portfolio-website', // ✅ set the base path for your project-website
  integrations: [tailwind()], // ✅ use Astro's integration
});
