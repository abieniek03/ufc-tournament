import { serverFetchData } from "@/app/_utils/fetch/server";
import { IFight } from "@/app/_types/types";

interface Props {
  fightId: string;
}

export async function BracketElement({ fightId }: Readonly<Props>) {
  const fight: { data: IFight } = await serverFetchData(`/fights/${fightId}`);

  console.log(fight);
  return (
    <div>
      <p>{fight.data?.redFighter.firstName}</p>
    </div>
  );
}
