"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FightLabel } from "./FightLabel";
import { IFight, Level } from "@/app/_types/types";
import axios from "@/app/_utils/axios/axiosInstance";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";
import { DrawButton } from "./DrawButton";
import { drawSecondRound } from "@/app/_utils/features/drawSecondRound";

interface Props {
  tournamentId: string;
  level: Level;
}

export function GroupStageFights({ tournamentId, level }: Readonly<Props>) {
  const [can2ndDraw, setCan2ndDraw] = useState<boolean>(false);

  const token = getAuthToken();

  const fights = useQuery({
    queryKey: ["levelFights", level],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `/fights/${tournamentId}?level=${level}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        return response.data;
      } catch (error: any) {
        console.error(error);
      }
    },
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

  return fights.data ? (
    <section>
      <div className="mb-24">
        <h2 className="text-center text-xl font-bold uppercase lg:text-2xl">
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
