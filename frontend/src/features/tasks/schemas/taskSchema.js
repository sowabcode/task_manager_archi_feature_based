import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(3, "Le titre est obligatoire"),

  description: z.string().optional(),
});
