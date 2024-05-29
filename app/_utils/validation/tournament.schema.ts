import { z } from "zod";

export const TournamentSchema = z.object({
  name: z.string(),
  weightclassId: z.string(),
});

export type Tournament = z.infer<typeof TournamentSchema>;
