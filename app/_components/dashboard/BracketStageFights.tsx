"use client";

import { useQuery } from "@tanstack/react-query";
import { FightLabel } from "./FightLabel";
import { IFight } from "@/app/_types/types";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { clientFetchData } from "@/app/_utils/fetch/client";

interface Props {
  tournamentId: string;
}

export function BracketStageFights({ tournamentId }: Readonly<Props>) {
  const token = getAuthToken();

  const quarterFinals = useQuery({
    queryKey: ["tournament", tournamentId, "quarterfinals"],
    queryFn: async (): Promise<{ data: IFight[] | undefined }> =>
      await clientFetchData(
        `/fights/${tournamentId}?level=QUARTERFINAL`,
        token,
      ),
  });

  const semiFinals = useQuery({
    queryKey: ["tournament", tournamentId, "semifinals"],
    queryFn: async (): Promise<{ data: IFight[] | undefined }> =>
      await clientFetchData(`/fights/${tournamentId}?level=SEMIFINAL`, token),
  });

  const final = useQuery({
    queryKey: ["tournament", tournamentId, "final"],
    queryFn: async (): Promise<{ data: IFight[] | undefined }> =>
      await clientFetchData(`/fights/${tournamentId}?level=FINAL`, token),
  });

  if (quarterFinals.isPending || semiFinals.isPending) {
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 4 }, (_, index) => (
          <LoadingSkeleton key={index} variant="fight-label" />
        ))}
      </div>
    );
  }

  return (
    <section>
      {quarterFinals.data?.data && (
        <div className="mb-24">
          <h2 className="text-center text-xl font-bold uppercase text-primary-500 lg:text-2xl">
            QUARTERFINALS
          </h2>
          <div className="my-16 flex flex-col gap-4">
            {quarterFinals.data?.data?.map((el: IFight, index: number) => (
              <FightLabel data={el} key={index} />
            ))}
          </div>
        </div>
      )}

      {semiFinals.data?.data && (
        <div className="mb-24">
          <h2 className="text-center text-xl font-bold uppercase text-primary-500 lg:text-2xl">
            SEMIFINALS
          </h2>
          <div className="my-16 flex flex-col gap-4">
            {semiFinals.data?.data?.map((el: IFight, index: number) => (
              <FightLabel data={el} key={index} />
            ))}
          </div>
        </div>
      )}
      {final.data?.data && (
        <div>
          <h2 className="text-center text-xl font-bold uppercase text-primary-500 lg:text-2xl">
            FINAL
          </h2>
          <div className="my-16">
            <FightLabel data={final.data.data[0]} />
          </div>
        </div>
      )}
    </section>
  );
}
