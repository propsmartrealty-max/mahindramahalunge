import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mahindralifespaceshomes.in',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      target: 'es2022',
      cssCodeSplit: true,
      minify: 'esbuild',
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
