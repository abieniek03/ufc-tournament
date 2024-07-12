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
    `/fights/${tournamentId}?level=${level}`,
  );

  if (!fights.data) return null;

  return (
    <section>
      <div className="mb-24">
        <h2 className="text-center text-xl font-bold uppercase text-primary-500 lg:text-2xl">
          {level.replace("_", " ")}
        </h2>
        <div className="my-16 flex flex-col gap-4">
          {fights.data.map((el: IFight, index: number) => (
            <FightLabel data={el} key={index} />
          ))}
        </div>
        {!fights.data[0].blueFighterId &&
          fights.data[0].level === "ROUND_1" && (
            <DrawButton
              tournamentId={tournamentId}
              level={level}
              label="Draw opponents"
            />
          )}
      </div>
    </section>
  );
}
