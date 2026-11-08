import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mahindralifespaceshomes.in',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      target: 'esnext',
      modulePreload: { polyfill: false },
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
