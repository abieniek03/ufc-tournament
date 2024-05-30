import { type ReactNode } from "react";

export type ButtonStyleType = "primary" | "secondary" | "delete";
export type Step = "Data" | "Choose Fighters";
export type Level = "ROUND_1" | "ROUND_2";

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
  id: string;
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
  redScore: {
    ranking: number;
  };
  blueScore: {
    ranking: number;
  };
  winner: string | null;
  round: number | null;
  time: string | null;
  method: string | null;
  description: string | null;
}

export interface IOption {
  id: string;
  label: string;
}
