import { z } from "zod";

const createLunchMenuSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "title is required",
    }),
    description: z.string().optional(),
    date: z
      .string({
        required_error: "date is required",
      })
      .transform((str) => new Date(str)),
  }),
});

const updateLunchMenuSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
  }),
});

export const lunchMenuValidation = {
  createLunchMenuSchema,
  updateLunchMenuSchema,
};
