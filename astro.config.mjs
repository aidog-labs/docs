// @ts-check
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import { loadStarlightSidebar } from './src/sidebar.mjs'

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const site = process.env.SITE ?? 'https://docs.aidog.xyz'
const base = process.env.BASE ?? '/'

// https://astro.build/config
export default defineConfig({
  site,
  base,
  redirects: {
    '/': '/getting-started/',
  },
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
