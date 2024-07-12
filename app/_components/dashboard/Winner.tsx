import Image from "next/image";
import { IFighter, IScore } from "@/app/_types/types";
import { serverFetchData } from "@/app/_utils/fetch/server";
import noCountryFlag from "@/app/_assets/no-country-flag.png";
import { differenceInYears } from "date-fns";

interface Props {
  id: string;
  tournamentId: string;
}

export async function Winner({ id, tournamentId }: Readonly<Props>) {
  const winnerData: { data: IFighter } = await serverFetchData(
    `/fighters/${id}`,
  );

  const score: { data: IScore[] } = await serverFetchData(
    `/score/${tournamentId}`,
  );

  const winnerScore = score.data.filter((el: IScore) => el.fighterId === id)[0];

  return (
    <div className="my-16 flex items-center justify-center">
      <div>
        <p className="mb-4 bg-primary-500 text-center font-bold uppercase">
          Winner
        </p>
        <div>
          <div>
            <div className="mb-4 flex justify-center gap-4 border-b border-primary-500/50 pb-4">
              <p className="text-7xl font-bold opacity-25">
                #{winnerScore.ranking}
              </p>
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-lg md:text-xl lg:text-2xl">
                    {winnerData.data.firstName}
                  </p>
                  <Image
                    src={
                      winnerData.data.nationalityId
                        ? `https://flagsapi.com/${winnerData.data.nationalityId}/flat/64.png`
                        : noCountryFlag
                    }
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
                <p className="text-2xl font-bold uppercase md:text-3xl lg:text-4xl">
                  {winnerData.data.lastName}
                </p>
              </div>
            </div>
            <div>
              <p>
                <span className="mr-1 text-xs uppercase">Age: </span>
                <span className="text-primary-500">
                  {differenceInYears(
                    winnerScore.createdAt,
                    winnerData.data.birthDate,
                  )}
                </span>
              </p>
              <p>
                <span className="mr-1 text-xs uppercase">Fighting out: </span>
                <span className="text-primary-500">
                  {winnerData.data.city},{" "}
                  {winnerData.data.nationalityId !== "US" &&
                    winnerData.data.nationality}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
