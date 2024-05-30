"use client";

import { useQuery } from "@tanstack/react-query";
import { FightLabel } from "./FightLabel";
import { IFight } from "@/app/_types/types";
import axios from "@/app/_utils/axios/axiosInstance";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";

interface Props {
  tournamentId: string;
  level: string;
}

export function GroupStageFights({ tournamentId, level }: Readonly<Props>) {
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

  return (
    fights.data && (
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
        </div>
      </section>
    )
  );
}
