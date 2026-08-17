import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sportarten = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sportarten" }),
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
      email: z.email().optional(),
      phone: z.string().optional()
    }).optional(),
    training: z.array(z.object({
      groupName: z.string(),
      weekday: z.string(),
      startTime: z.string(),
      endTime: z.string(),
      location: z.string(),
      notes: z.string().optional()
    })).default([]),
    trialAvailability: z.enum(["available", "contact", "unavailable"]).default("contact"),
    trialNote: z.string().optional(),
    sourceUrl: z.url(),
    lastVerified: z.string()
  })
});

export const collections = { sportarten };
