import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  output: 'static',
  site: 'https://saudi-adhd-society.github.io',
  base: '/res.adhd.org.sa-concept/',
  trailingSlash: 'always',
});
