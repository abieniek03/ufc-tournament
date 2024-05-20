import clsx from "clsx";
import { IFight } from "@/app/_types/types";

interface Props {
  data: IFight;
}

export function WinnerLabel() {
  return (
    <span className="mb-3 mt-1 bg-green-600 px-3 py-1 text-xs font-bold uppercase">
      Winner
    </span>
  );
}

export function Fight({ data }: Readonly<Props>) {
  return (
    <div className="mx-auto mb-4 w-full border-b border-content/5 px-4 pb-4 text-xl">
      <div className="mb-4 grid w-full grid-cols-3 font-bold uppercase">
        <div className="inline-flex flex-col items-start">
          <span
            className={clsx(
              data.winner &&
                data.winner !== data.redFighterId &&
                data.winner !== "DRAW" &&
                "opacity-25",
            )}
          >
            {data.redFighter
              ? `${data.redFighter.firstName} ${data.redFighter.lastName}`
              : "TBD"}
          </span>
          {data.winner && data.winner === data.redFighterId && <WinnerLabel />}
        </div>
        <span className="text-center text-sm">vs</span>
        <div className="inline-flex flex-col items-end">
          <span
            className={clsx(
              "text-right",
              data.winner &&
                data.winner !== data.blueFighterId &&
                data.winner !== "DRAW" &&
                "opacity-25",
            )}
          >
            {data.blueFighter
              ? `${data.blueFighter.firstName} ${data.blueFighter.lastName}`
              : "TBD"}
          </span>
          {data.winner && data.winner === data.blueFighterId && <WinnerLabel />}
        </div>
      </div>
      {data.winner && (
        <div className="flex flex-col items-center justify-center">
          {data.winner === "DRAW" && (
            <span className="mb-3 bg-orange-400 px-3 py-1 text-xs font-bold uppercase">
              Draw
            </span>
          )}
          <span className="border-t border-content/5 px-5 pt-2 text-center text-sm font-bold">
            R{data.round}, {data.method}
          </span>
        </div>
      )}
    </div>
  );
}
