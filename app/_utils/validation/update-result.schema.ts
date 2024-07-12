import { z } from "zod";

const notEmptyString = z.string().trim().min(1, { message: "Required" });

export const ResultSchema = z.object({
  winner: z.string().pipe(notEmptyString),
  round: z
    .union([z.string(), z.number()])
    .transform((value) => parseInt(value.toString(), 10)),
  method: z.string().pipe(notEmptyString),
  time: z.string(),
  description: z.string(),
});

export type Result = z.infer<typeof ResultSchema>;
