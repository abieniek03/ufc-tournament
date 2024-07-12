import { z } from "zod";

export const TournamentSchema = z.object({
  fightersCount: z.string().min(1),
  weightclassId: z.string().min(1),
});

export type Tournament = z.infer<typeof TournamentSchema>;
