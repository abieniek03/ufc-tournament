import { z } from "zod";

export const TournamentSchema = z.object({
  name: z.string(),
  weightclassId: z.string(),
  // fighters: z.string().array(),
});

export type Tournament = z.infer<typeof TournamentSchema>;
