import { FightLabel } from "./FightLabel";
import { DrawButton } from "./DrawButton";

import { IFight, Level } from "@/app/_types/types";
import { serverFetchData } from "@/app/_utils/fetch/server";

interface Props {
  tournamentId: string;
  level: Level;
}

export async function LevelFights({ tournamentId, level }: Readonly<Props>) {
  const fights: { data: IFight[] } = await serverFetchData(
    `/fights?tournament=${tournamentId}&level=${level}`,
  );

  if (!fights.data) return null;

  return (
    <section>
      <div className="mb-24">
        <h2 className="bg-primary-500/10 py-2 text-center text-2xl  font-bold uppercase text-primary-500 md:text-3xl lg:text-4xl">
          {level.replace("_", " ")}
        </h2>
        <div className="flex flex-col">
          {fights.data.map((el: IFight, index: number) => (
            <FightLabel data={el} key={index} />
          ))}
        </div>
        {!fights.data[0].blueFighterId &&
          fights.data[0].level === "ROUND_1" && (
            <div className="my-12 flex items-center justify-center">
              <DrawButton
                tournamentId={tournamentId}
                level={level}
                label="Draw opponents"
              />
            </div>
          )}
      </div>
    </section>
  );
}
