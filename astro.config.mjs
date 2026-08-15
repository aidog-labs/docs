// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://aidog-labs.github.io/',
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
        { slug: 'introduction' },
        { slug: 'getting-started' },
        { slug: 'products' },
        { slug: 'token' },
        { slug: 'nft' },
        { slug: 'protocol' },
        { slug: 'security' },
      ],
    }),
  ],
})
