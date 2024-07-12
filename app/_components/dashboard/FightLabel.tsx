import clsx from "clsx";
import { IFight } from "@/app/_types/types";
import { UpdateFightResult } from "./UpdateFightResult";

interface Props {
  data: IFight;
}

export function WinnerLabel() {
  return (
    <span className="mb-3 mt-1 bg-primary-500 px-3 py-1 text-xs font-bold uppercase text-primary-content">
      Win
    </span>
  );
}

export function FightLabel({ data }: Readonly<Props>) {
  return (
    <div className="mx-auto mb-4 w-full border-b border-content/5 px-4 pb-4 text-xl">
      <div className="mb-4 grid w-full grid-cols-3">
        <div className="inline-flex items-start justify-between">
          <span
            className={clsx(
              data.winner &&
                data.winner !== data.redFighterId &&
                data.winner !== "DRAW" &&
                "opacity-25",
            )}
          >
            {data.redFighter ? (
              <div>
                <p className="text-sm md:text-lg lg:text-xl">
                  {data.redFighter.firstName}
                </p>
                <p className="text-xl font-bold uppercase md:text-2xl lg:text-3xl">
                  {data.redFighter.lastName}
                </p>
              </div>
            ) : (
              "TBD"
            )}
          </span>
          {data.winner && data.winner === data.redFighterId && <WinnerLabel />}
        </div>
        <span className="text-center text-sm">vs</span>

        <div
          className={clsx(
            "flex items-start",
            data.winner && data.winner === data.blueFighterId
              ? "justify-between"
              : "justify-end",
          )}
        >
          {data.winner && data.winner === data.blueFighterId && <WinnerLabel />}
          <span
            className={clsx(
              data.winner &&
                data.winner !== data.blueFighterId &&
                data.winner !== "DRAW" &&
                "opacity-25",
            )}
          >
            {data.blueFighter ? (
              <div className="text-right">
                <p className="text-sm md:text-lg lg:text-xl">
                  {data.blueFighter.firstName}
                </p>
                <p className="text-xl font-bold uppercase md:text-2xl lg:text-3xl">
                  {data.blueFighter.lastName}
                </p>
              </div>
            ) : (
              "TBD"
            )}
          </span>
        </div>
      </div>
      {data.winner ? (
        <div className="flex flex-col items-center justify-center">
          {data.winner === "DRAW" && (
            <span className="mb-3 bg-orange-400 px-3 py-1 text-xs font-bold uppercase">
              Draw
            </span>
          )}
          <div className="grid w-full grid-cols-3 gap-3 border-t border-primary-500 pt-4 text-center text-sm font-bold">
            <div>
              <p className="uppercase text-primary-500">Round</p>
              <p>{data.round}</p>
            </div>
            <div>
              <p className="uppercase text-primary-500">Time</p>
              <p>{data.time}</p>
            </div>
            <div>
              <p className="uppercase text-primary-500">Method</p>
              <p>
                {data.method} ({data.description})
              </p>
            </div>
          </div>
        </div>
      ) : (
        data.blueFighterId && (
          <div className="flex justify-center">
            <UpdateFightResult
              fightId={data.id}
              fightLevel={data.level}
              fighters={[
                {
                  id: data.redFighterId,
                  label: `${data.redFighter.firstName} ${data.redFighter.lastName}`,
                },
                {
                  id: data.blueFighterId,
                  label: `${data.blueFighter?.firstName} ${data.blueFighter?.lastName}`,
                },
                {
                  id: "DRAW",
                  label: "DRAW",
                },
              ]}
            />
          </div>
        )
      )}
    </div>
  );
}
