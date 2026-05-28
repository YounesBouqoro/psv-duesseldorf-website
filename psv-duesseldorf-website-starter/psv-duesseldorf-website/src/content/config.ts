import { defineCollection, z } from 'astro:content';

const sportarten = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    targetGroups: z.array(z.string()),
    tags: z.array(z.string()),
    contact: z.object({
      name: z.string(),
      role: z.string(),
      email: z.string().email().optional()
    }).optional(),
    training: z.array(z.object({
      groupName: z.string(),
      weekday: z.string(),
      startTime: z.string(),
      endTime: z.string(),
      location: z.string(),
      notes: z.string().optional()
    })).default([])
  })
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

const kurse = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    targetGroups: z.array(z.string()),
    status: z.enum(['aktiv', 'pausiert', 'ausgebucht']).default('aktiv')
  })
});

export const collections = { sportarten, news, kurse };
