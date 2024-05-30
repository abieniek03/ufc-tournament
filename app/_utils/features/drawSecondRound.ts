"use client";

import { IFight } from "@/app/_types/types";
import { getAuthToken } from "../helpers/getAuthToken";
import axios from "@/app/_utils/axios/axiosInstance";

export const drawSecondRound = async (
  tournamentId: string,
): Promise<boolean> => {
  const token = getAuthToken();

  try {
    const response = await axios.get(`/fights/${tournamentId}?level=ROUND_1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const fights: { data: IFight[] } = response.data;

    return fights.data.every(
      (el: IFight) => el.winner !== null && el.winner !== "",
    );
  } catch (error: any) {
    console.error(error);
    return false;
  }
};
