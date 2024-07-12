import Image from "next/image";
import clsx from "clsx";
import noCountryFlag from "@/app/_assets/no-country-flag.png";
import { serverFetchData } from "@/app/_utils/fetch/server";
import { IFight } from "@/app/_types/types";

interface PropsBracketElementFighterLabel {
  fighter: {
    id: string;
    firstName: string;
    lastName: string;
    nationalityId: string;
  };
  winner: boolean | undefined;
}
interface Props {
  fightId: string;
}

function BracketElementFighterLabel({
  fighter,
  winner,
}: Readonly<PropsBracketElementFighterLabel>) {
  return (
    <div
      className={clsx(
        "flex gap-2 pr-8 lg:pr-12",
        !winner && winner !== undefined && "opacity-25",
      )}
    >
      <Image
        src={
          fighter?.nationalityId
            ? `https://flagsapi.com/${fighter?.nationalityId}/flat/64.png`
            : noCountryFlag
        }
        alt=""
        width={25}
        height={25}
      />
      <p className="font-semibold uppercase">
        {fighter.firstName
          ? `${fighter.firstName[0]}. ${fighter.lastName}`
          : "TBD"}
      </p>
    </div>
  );
}

export async function BracketElement({ fightId }: Readonly<Props>) {
  const fight: { data: IFight } = await serverFetchData(`/fights/${fightId}`);

  return (
    <div className="relative flex flex-col border border-content/5  bg-primary-500/5 p-2">
      <BracketElementFighterLabel
        fighter={{ id: fight.data.redFighterId, ...fight.data.redFighter }}
        winner={
          fight.data.winner
            ? fight.data.winner === fight.data.redFighterId
            : undefined
        }
      />
      <BracketElementFighterLabel
        fighter={{ id: fight.data.blueFighterId, ...fight.data.blueFighter }}
        winner={
          fight.data.winner
            ? fight.data.winner === fight.data.blueFighterId
            : undefined
        }
      />
      {fight.data.winner && (
        <div className="absolute -right-4 top-1/2 flex -translate-y-1/2 flex-col text-center text-xs lg:text-sm">
          <span className="bg-primary-500 px-1.5">{fight.data.method}</span>
          <span className="bg-primary-content px-1.5 text-primary-500">
            R{fight.data.round}
          </span>
        </div>
      )}
    </div>
  );
}
