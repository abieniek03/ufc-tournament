import { IBracket } from "@/app/_types/types";
import { BracketElement } from "./BracketElement";
import clsx from "clsx";

interface Props {
  data: IBracket[];
}

export function Bracket({ data }: Readonly<Props>) {
  const quarterfinals = data.filter(
    (el: IBracket) => el.level === "QUARTERFINAL",
  );

  const semifinals = data.filter((el: IBracket) => el.level === "SEMIFINAL");
  const final = data.filter((el: IBracket) => el.level === "FINAL");

  return (
    <div
      className={clsx(
        "mb-36 hidden items-center py-16 md:flex lg:gap-20 lg:text-lg",
        quarterfinals.length ? "justify-around" : "justify-center gap-20",
      )}
    >
      {quarterfinals.length ? (
        <div className="flex flex-col ">
          <p className="mb-2 text-center font-bold uppercase text-primary-500">
            QUARTERFINALS
          </p>
          <div className="flex flex-col gap-12">
            {quarterfinals.map((el: IBracket, index: number) => (
              <BracketElement key={index} fightId={el.fightId} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="flex h-full flex-col">
        <p className="mb-2 text-center font-bold uppercase text-primary-500">
          SEMIFINALS
        </p>
        <div className="flex flex-col justify-around gap-40">
          {semifinals.map((el: IBracket, index: number) => (
            <BracketElement key={index} fightId={el.fightId} />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="mb-2 text-center font-bold uppercase text-primary-500">
          FINAL
        </p>
        <BracketElement fightId={final[0]?.fightId || undefined} />
      </div>
    </div>
  );
}
