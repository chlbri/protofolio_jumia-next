import { z } from 'zod';

export const articleSchema = z.object({
  img: z.string(),
  title: z.string(),
  price: z.number(),
  currency: z.string(),
  discount: z
    .number()
    .refine(x => x >= 0 && x <= 1)
    .optional(),
  remaining: z
    .number()
    .refine(x => x >= 0)
    .optional(),
  total: z
    .number()
    .refine(x => x >= 0)
    .optional(),
  id: z.string(),
});
