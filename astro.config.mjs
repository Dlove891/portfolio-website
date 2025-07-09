// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  base: '/portfolio-website', // <- replace with actual repo name
  vite: {
    plugins: [tailwindcss()]
  }
});