import type { ReactNode } from "react";

export type Stage = "GROUP" | "KNOCKOUT" | "LOADING";

export interface IServerComponent {
  params: {
    [key: string]: string;
  };
  searchParams: {};
}
export interface IChildren {
  children: ReactNode;
}

export interface IWeightclass {
  id: string;
  name: string;
  limit: number;
}

export interface ITournament {
  id: string;
  name: string;
  weightclassId: string;
  fighters: number;
  createdAt: string;
  updatedAt: string;
  weightclass: {
    name: string;
    limit: number;
  };
}

export interface IScore {
  fighter: {
    firstName: string;
    lastName: string;
  };
  fights: number;
  win: number;
  lose: number;
  draw: number;
  firstRoundFinish: number;
  secondRoundFinish: number;
  thirdRoundFinish: number;
  points: number;
}

export interface IFight {
  redFighterId: string;
  blueFighterId: string;
  redFighter: {
    firstName: string;
    lastName: string;
  };
  blueFighter: {
    firstName: string;
    lastName: string;
  };
  winner: string | null;
  method: string | null;
  round: number | null;
}
