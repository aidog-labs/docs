// @ts-check
import { fileURLToPath } from 'node:url'
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import { loadStarlightSidebar } from './src/sidebar.mjs'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// https://astro.build/config
export default defineConfig({
  site: 'https://aidog-labs.github.io',
  base: '/docs',
  integrations: [
    starlight({
      title: 'AIDOG',
      favicon: '/favicon.png',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/aidog-labs/docs' }],
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        SocialIcons: './src/components/HeaderLinks.astro',
      },
      sidebar: loadStarlightSidebar(rootDir),
    }),
  ],
})
