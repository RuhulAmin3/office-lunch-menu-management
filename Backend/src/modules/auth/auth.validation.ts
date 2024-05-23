import { ROLE } from "@prisma/client";
import { z } from "zod";

const registerSchema = z.object({
  body: z.object({
    firstName: z.string({
      required_error: "first name is required",
    }),
    lastName: z.string({
      required_error: "last name is required",
    }),
    email: z.string({ required_error: "email is required" }).email({
      message: "provide valid email address",
    }),
    password: z.string({
      required_error: "password is required",
    }),
    role: z.enum(Object.values(ROLE) as [string, ...string[]]).optional(),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "email is required",
      })
      .email({
        message: "please provide a valid email",
      }),
    password: z.string({
      required_error: "passowrd is required",
    }),
  }),
});

export const authValidation = {
  registerSchema,
  loginSchema,
};
