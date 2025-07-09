// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  base: '/my-portfolio-ws', // <- replace with actual repo name
  vite: {
    plugins: [tailwindcss()]
  }
});