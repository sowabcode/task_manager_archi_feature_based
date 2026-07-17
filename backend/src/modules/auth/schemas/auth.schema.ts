import z from "zod";

export const registerSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required"),
  lastName: z.string().trim().min(2, "Last name is required"),
  email: z
    .string()
    .email("Invalid email")
    .transform((value) => value.toLowerCase()),
  password: z.string().min(8, "Password must contain at least 8 characters"),
});

export const loginSchema = z.object({
  email: z.email("Invalid email").transform((value) => value.toLowerCase()),
  password: z.string().min(8),
});
