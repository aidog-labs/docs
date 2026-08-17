// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

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
      sidebar: [
        {
          label: 'Introduction',
          items: [{ autogenerate: { directory: 'introduction' } }],
        },
        {
          label: 'Getting Started',
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: 'Core Products',
          items: [{ autogenerate: { directory: 'products' } }],
        },
        {
          label: '$AIDOG Token',
          items: [{ autogenerate: { directory: 'token' } }],
        },
        {
          label: 'NFT',
          items: [{ autogenerate: { directory: 'nft' } }],
        },
        {
          label: 'Protocol Mechanics',
          items: [{ autogenerate: { directory: 'protocol' } }],
        },
        {
          label: 'Security & Risks',
          items: [{ autogenerate: { directory: 'security' } }],
        },
      ],
    }),
  ],
})
