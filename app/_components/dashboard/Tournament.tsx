import Link from "next/link";
import { fetchData } from "@/app/_utils/fetch/fetchData";
import { formatDate } from "../../_utils/helpers/formatDate";
import {
  IFight,
  IFighter,
  ITournament,
  IWeightclass,
} from "@/app/_types/types";

export interface Props {
  data: ITournament;
}

export async function Tournament({ data }: Readonly<Props>) {
  const weightclass: { data: IWeightclass } = await fetchData(
    `/weightclass/${data.weightclassId}`,
  );

  const finalFight: { data: IFight[] } = await fetchData(
    `/fights/${data.id}?level=FINAL`,
  );

  const winnerId = finalFight.data?.[0]?.winner ?? null;

  const winnerData: { data: IFighter } =
    winnerId && (await fetchData(`/fighters/${winnerId}`));

  return (
    <Link
      href={`/tournaments/${data.id}`}
      className="flex flex-col justify-between rounded-md border border-content/10 bg-gradient-to-t from-primary-100/10 to-transparent px-4 text-center transition-all duration-500 hover:border-primary-200/50 hover:from-transparent hover:to-primary-100/10 lg:max-w-[240px]"
    >
      <div className="font-black uppercase opacity-25">
        <p className="-mb-8 -mt-4 text-[128px]">{weightclass.data.limit}</p>
        <p className="text-lg lg:text-xl"> {weightclass.data.name}</p>
      </div>

      <div className="mb-4 mt-6 font-bold uppercase">
        {winnerId ? (
          <>
            <p className="-mb-1 text-lg">
              {winnerData.data?.firstName} {winnerData.data?.lastName}
            </p>
            <p className="text-[0.6rem] font-normal">
              Winner of the tournament
            </p>
          </>
        ) : (
          <p className="mt-[18px] text-sm text-primary-500">In progress</p>
        )}
      </div>
      <p className="mb-2.5 border-t pt-2.5 text-xs uppercase opacity-50">
        {formatDate(data.createdAt)}
      </p>
    </Link>
  );
}
