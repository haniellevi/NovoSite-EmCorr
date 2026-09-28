import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://emcorr.com.br',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
