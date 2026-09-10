import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mahindra-mahalunge.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
