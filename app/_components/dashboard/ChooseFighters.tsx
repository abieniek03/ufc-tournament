"use client";

import { useEffect, type ComponentProps } from "react";
import clsx from "clsx";
import { useCreateTournamentStore } from "@/app/_store/store";
import { useQuery } from "@tanstack/react-query";
import axios from "@/app/_utils/axios/axiosInstance";
import { Button } from "../Button";

interface Props {
  id: string;
  fullName: string;
  ranking: number | undefined;
}

function FighterElement({
  id,
  fullName,
  ranking,
  ...rest
}: Readonly<ComponentProps<"button"> & Props>) {
  const isChampion = ranking === 0;
  const selectedFighters = useCreateTournamentStore(
    (state) => state.selectedFighters,
  );

  return (
    <button
      className={clsx(
        "block w-full p-2",
        selectedFighters.includes(id)
          ? "bg-content text-background"
          : "bg-content/5",
      )}
      data-id={id}
      {...rest}
    >
      <div className="flex gap-2">
        <span
          className={clsx(
            "flex h-6 w-6 items-center justify-center text-xs font-semibold text-black",
            isChampion ? "bg-gold" : "bg-gray-300",
          )}
        >
          {isChampion ? "C" : ranking || "NR"}
        </span>{" "}
        <span>{fullName}</span>
      </div>
    </button>
  );
}

export function ChooseFighters() {
  const createTournamentStore = useCreateTournamentStore();

  const { isPending, data } = useQuery({
    queryKey: ["fighters"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `/fighters?weightclass=${createTournamentStore.weightclassId}`,
        );
        return response.data.data;
      } catch (error: any) {
        console.error(error);
      }
    },
  });

  const createTourmanent = () => {
    console.log(createTournamentStore.getData());
  };

  return (
    <div>
      <p>Choose 8 or 16 fighters to the tournament.</p>
      <div className="my-4 grid gap-2">
        {isPending
          ? Array.from({ length: 16 }, (_, index) => (
              <div
                key={index}
                className="h-[40px] animate-pulse bg-content/10"
              />
            ))
          : data?.map((el: any, index: number) => (
              <FighterElement
                key={index}
                id={`${el.id}#${el.ranking?.position || "NR"}`}
                fullName={`${el.firstName} ${el.lastName}`}
                ranking={el.ranking?.position}
                onClick={() =>
                  createTournamentStore.updateSelectedFighters(
                    `${el.id}#${el.ranking?.position || "NR"}`,
                  )
                }
              />
            ))}
      </div>
      <Button styleType="primary" onClick={createTourmanent}>
        Create tournament
      </Button>
    </div>
  );
}
