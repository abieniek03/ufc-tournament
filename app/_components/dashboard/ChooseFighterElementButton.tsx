"use client";

import Image from "next/image";
import { type ComponentProps } from "react";
import clsx from "clsx";

import { RankingLabel } from "./RankingLabel";

import { useCreateTournamentStore } from "@/app/_store/store";
import { IFighter } from "@/app/_types/types";

interface Props {
  fighterData: IFighter;
}

export function ChooseFighterElementButton({
  fighterData,

  ...rest
}: Readonly<ComponentProps<"button"> & Props>) {
  const selectedFighters = useCreateTournamentStore((state) => state.fighters);

  const isChampion = fighterData.ranking?.position === 0;
  const id = `${fighterData.id}#${fighterData.ranking?.position || isChampion ? fighterData.ranking?.position : "NR"}`;

  return (
    <button
      type="button"
      className={clsx(
        "py-2focus:border-border-active w-full rounded-md border bg-input px-3 py-1.5 text-sm focus:outline-none",
        selectedFighters.includes(id)
          ? "border-primary-500 bg-primary-500/10"
          : "border-border",
      )}
      data-id={id}
      {...rest}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Image
            src={`https://flagsapi.com/${fighterData.nationalityId}/flat/64.png`}
            alt=""
            width={25}
            height={25}
          />
          <div className="flex items-center">
            <div className="mr-2">
              <span>{fighterData.firstName}</span>{" "}
              <span className="font-semibold uppercase">
                {fighterData.lastName}
              </span>
            </div>
            <RankingLabel position={fighterData.ranking?.position} />
          </div>
        </div>
        <span className="hidden font-bold sm:inline">{`${fighterData.win}-${fighterData.lose}-${fighterData.draw} ${fighterData.noContest ? `, ${fighterData.noContest}NC` : ""}`}</span>
      </div>
    </button>
  );
}
