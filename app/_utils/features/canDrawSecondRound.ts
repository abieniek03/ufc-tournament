import { IFight } from "@/app/_types/types";

import { serverFetchData } from "../fetch/server";

export const canDrawSecondRound = async (
  tournamentId: string,
): Promise<boolean> => {
  try {
    const fightsFirstRound: { data: IFight[] } = await serverFetchData(
      `/fights/${tournamentId}?level=ROUND_1`,
    );

    const fightsSecondRound: { data: IFight[] } = await serverFetchData(
      `/fights/${tournamentId}?level=ROUND_2`,
    );

    if (fightsSecondRound.data) return false;

    return fightsFirstRound.data.every(
      (el: IFight) => el.winner !== null && el.winner !== "",
    );
  } catch (error: any) {
    console.error(error);
    return false;
  }
};
