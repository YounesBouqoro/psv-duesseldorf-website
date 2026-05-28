import { defineCollection, z } from "astro:content";

const sportarten = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    targetGroups: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
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

export const collections = { sportarten };
