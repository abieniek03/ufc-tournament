import type { ReactNode } from "react";

export interface IServerComponentProps {
  params: {
    id: string;
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
