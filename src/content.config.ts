import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        sidebar: z.object({
          order: z.preprocess(blankToUndefined, z.number().optional()),
          label: z.preprocess(blankToUndefined, z.string().optional()),
        }).prefault({}),
      }),
    }),
  }),
}

function blankToUndefined(value: unknown): unknown {
  if (value == null) {
    return undefined
  }
  if (typeof value === 'string' && value.trim() === '') {
    return undefined
  }
  if (typeof value === 'number' && Number.isNaN(value)) {
    return undefined
  }
  return value
}
