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
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    routing: {
      // Ensure both default and secondary locales are prefixed, e.g. /en/* and /ar/*
      prefixDefaultLocale: true,
    },
  },
});
