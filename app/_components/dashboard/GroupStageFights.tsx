"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FightLabel } from "./FightLabel";
import { IFight, Level } from "@/app/_types/types";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";
import { DrawButton } from "./DrawButton";
import { drawSecondRound } from "@/app/_utils/features/drawSecondRound";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { clientFetchData } from "@/app/_utils/fetch/client";

interface Props {
  tournamentId: string;
  level: Level;
}

export function GroupStageFights({ tournamentId, level }: Readonly<Props>) {
  const [can2ndDraw, setCan2ndDraw] = useState<boolean>(false);

  const token = getAuthToken();

  const fights = useQuery({
    queryKey: ["levelFights", level, tournamentId],
    queryFn: async () =>
      await clientFetchData(`/fights/${tournamentId}?level=${level}`, token),
  });

  useEffect(() => {
    const fetchCan2ndDraw = async () => {
      try {
        const result = await drawSecondRound(tournamentId);
        setCan2ndDraw(result);
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchCan2ndDraw();
  }, [tournamentId]);

  if (fights.isPending) {
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 4 }, (_, index) => (
          <LoadingSkeleton key={index} variant="fight-label" />
        ))}
      </div>
    );
  }

  return fights.data ? (
    <section>
      <div className="mb-24">
        <h2 className="text-center text-xl font-bold uppercase text-primary-500 lg:text-2xl">
          {level.replace("_", " ")}
        </h2>
        <div className="my-16 flex flex-col gap-4">
          {fights.data.data.map((el: IFight, index: number) => (
            <FightLabel data={el} key={index} />
          ))}
        </div>
        {!fights.data.data[0].blueFighterId && (
          <DrawButton
            label="Draw oponents"
            tournamentId={tournamentId}
            level={level}
          />
        )}
      </div>
    </section>
  ) : (
    can2ndDraw && (
      <DrawButton
        label="Draw second round"
        tournamentId={tournamentId}
        level="ROUND_2"
      />
    )
  );
}
