import { IFight } from "@/app/_types/types";

import { serverFetchData } from "../fetch/server";

export const canCreateBracket = async (
  tournamentId: string,
): Promise<boolean | any> => {
  try {
    const fightsFirstRound: { data: IFight[] } = await serverFetchData(
      `/fights?tournament=${tournamentId}&level=ROUND_1`,
    );

    const fightsSecondRound: { data: IFight[] } = await serverFetchData(
      `/fights?tournament=${tournamentId}&level=ROUND_2`,
    );

    const allGroupStageFights = [
      ...fightsFirstRound.data,
      ...fightsSecondRound.data,
    ];

    return allGroupStageFights.every(
      (el: IFight) => el.winner !== null && el.winner !== "",
    );
  } catch (error: any) {
    console.error(error);
    return false;
  }
};
