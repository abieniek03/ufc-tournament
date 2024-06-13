"use client";

import { type ComponentProps } from "react";
import Image from "next/image";
import clsx from "clsx";
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
  const id = `${fighterData.id}#${fighterData.ranking?.position || "NR"}`;

  return (
    <button
      type="button"
      className={clsx(
        "py-2focus:border-border-active w-full rounded-md border bg-input px-3 py-1.5 text-sm focus:outline-none",
        // "block w-full p-2",
        selectedFighters.includes(id) ? "border-primary-500" : "border-border",
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
            <span
              className={clsx(
                "flex h-5 w-5 items-center justify-center text-xs font-semibold text-black",
                isChampion ? "bg-gold" : "bg-gray-300",
              )}
            >
              {isChampion ? "C" : fighterData.ranking?.position || "NR"}
            </span>
          </div>
        </div>
        <span className="hidden font-bold md:inline">{`${fighterData.win}-${fighterData.lose}-${fighterData.draw} ${fighterData.noContest ? `, ${fighterData.noContest}NC` : ""}`}</span>
      </div>
    </button>
  );
}
