import clsx from "clsx";

import { UpdateFightResult } from "./UpdateFightResult";
import { IFight } from "@/app/_types/types";

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
    <div className="mx-auto w-full border-b border-primary-500/50 py-8 text-xl">
      <div className="mb-4 grid w-full grid-cols-2 px-4">
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
              <div
                className={clsx(
                  data.winner &&
                    data.winner === data.redFighterId &&
                    "text-primary-500",
                )}
              >
                <p className="text-sm md:text-lg lg:text-xl">
                  {data.redFighter.firstName}
                </p>
                <p className="-mt-1 text-xl font-bold uppercase md:text-2xl lg:text-3xl">
                  {data.redFighter.lastName}
                </p>
              </div>
            ) : (
              <p className="font-bold">TBD</p>
            )}
          </span>
        </div>

        <div className="flex items-start justify-end">
          <span
            className={clsx(
              data.winner &&
                data.winner !== data.blueFighterId &&
                data.winner !== "DRAW" &&
                "opacity-25",
            )}
          >
            {data.blueFighter ? (
              <div
                className={clsx(
                  "text-right",
                  data.winner &&
                    data.winner === data.blueFighterId &&
                    "text-primary-500",
                )}
              >
                <p className="text-sm md:text-lg lg:text-xl">
                  {data.blueFighter.firstName}
                </p>
                <p className="-mt-1 text-xl font-bold uppercase md:text-2xl lg:text-3xl">
                  {data.blueFighter.lastName}
                </p>
              </div>
            ) : (
              <p className="font-bold">TBD</p>
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
          <div className="grid w-full grid-cols-3 gap-3 border-t border-content/10 pt-4 text-center text-sm font-bold">
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
