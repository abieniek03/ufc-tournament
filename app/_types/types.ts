import { type ReactNode } from "react";

export type ButtonStyleType = "primary" | "secondary" | "delete" | "icon";
export type Step = "Data" | "Choose Fighters";
export type Level =
  | "ROUND_1"
  | "ROUND_2"
  | "QUARTERFINAL"
  | "SEMIFINAL"
  | "FINAL";
export type RankingPosition = number | undefined | null;
export type Skeleton = "fight-label";
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
  ranking: RankingPosition;
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
  level: Level;
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

export interface IFighter {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  birthDate: string;
  sex: string;
  nationality: string;
  nationalityId: string;
  city: string;
  weightclassId: string;
  win: number;
  lose: number;
  draw: number;
  noContest: number;
  ranking: {
    position: number | undefined;
  };
}

export interface IBracket {
  id: string;
  tournamentId: string;
  fightId: string;
  level: Level;
  position: number;
}
