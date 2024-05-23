import { z } from "zod";

const createSelectMenuSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: "user id is required",
    }),
    lunchMenuId: z.string({
      required_error: "lunch menu id is required",
    }),
    date: z
      .string({
        required_error: "date is required",
      })
      .transform((str) => new Date(str)),
  }),
});

export const selectMenuValidation = {
  createSelectMenuSchema,
};
