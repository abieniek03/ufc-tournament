"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../../_utils/helpers/formatDate";
import {
  IFight,
  IFighter,
  ITournament,
  IWeightclass,
} from "@/app/_types/types";
import { clientFetchData } from "@/app/_utils/fetch/client";

export interface Props {
  data: ITournament;
}

export function TournamentItem({ data }: Readonly<Props>) {
  const weightclass = useQuery({
    queryKey: ["weightclass", data.id],
    queryFn: async (): Promise<{ data: IWeightclass }> =>
      await clientFetchData(`/weightclass/${data.weightclassId}`),
  });

  const finalFight = useQuery({
    queryKey: ["finalFight", data.id],
    queryFn: async (): Promise<{ data: IFight[] }> =>
      await clientFetchData(`/fights?tournament=${data.id}&level=FINAL`),
  });

  const winnerId = finalFight.data?.data[0]?.winner ?? null;

  const winnerData = useQuery({
    queryKey: ["winner", winnerId],
    queryFn: async (): Promise<{ data: IFighter }> =>
      await clientFetchData(`/fighters/${winnerId}`),
  });

  return (
    <Link
      href={`/tournaments/${data.id}`}
      className="flex flex-col justify-between rounded-md border border-content/10 bg-gradient-to-t from-primary-100/10 to-transparent px-4 text-center transition-all duration-500 hover:border-primary-200/50 hover:from-transparent hover:to-primary-100/10 lg:max-w-[240px]"
    >
      <div className="font-black uppercase opacity-25">
        <p className="-mb-8 -mt-4 text-[128px]">
          {weightclass.data?.data?.limit}
        </p>
        <p className="text-lg lg:text-xl"> {weightclass.data?.data?.name}</p>
      </div>

      <div className="mb-4 mt-6 font-bold uppercase">
        {winnerData.data ? (
          <>
            <p className="-mb-1 text-lg text-primary-500">
              {winnerData.data.data?.firstName} {winnerData.data.data?.lastName}
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
