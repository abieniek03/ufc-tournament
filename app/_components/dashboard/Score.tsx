import { serverFetchData } from "@/app/_utils/fetch/server";
import { IFight, IScore } from "@/app/_types/types";
import { RankingLabel } from "./RankingLabel";
import clsx from "clsx";

interface Props {
  tournamentId: string;
}

export async function Score({ tournamentId }: Readonly<Props>) {
  const score: { data: IScore[] } = await serverFetchData(
    `/score/${tournamentId}`,
  );

  const topScore = score.data.slice(0, score.data.length / 2);
  const bottomScore = score.data.slice(score.data.length / 2);

  const fights: { data: IFight[] } = await serverFetchData(
    `/fights?tournament=${tournamentId}`,
  );

  let allWinners = true;
  for (const fight of fights.data) {
    if (!fight.winner) {
      allWinners = false;
    }
  }

  const knockoutRound = allWinners && score.data.length <= fights.data.length;

  return (
    <section className="mb-16 pb-16">
      <table className="w-full bg-background text-left text-sm">
        <thead className="h-10 bg-primary-500/15 text-xs uppercase text-primary-500">
          <tr>
            <th scope="col" colSpan={2} className="w-16 pl-14 lg:w-20">
              Name
            </th>
            <th scope="col" className="w-16 text-center lg:w-20">
              Fights
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center md:table-cell lg:w-20"
            >
              Win
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center md:table-cell lg:w-20"
            >
              Lose
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center md:table-cell lg:w-20"
            >
              Draw
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center lg:table-cell lg:w-20"
            >
              1RF
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center lg:table-cell lg:w-20"
            >
              2RF
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center lg:table-cell lg:w-20"
            >
              3RF
            </th>
            <th scope="col" className="w-16 text-center lg:w-20">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {topScore.map((el: IScore, index: number) => (
            <tr className="h-10 border-b border-primary-500/25" key={index}>
              <td className="w-10 text-center font-bold">{index + 1}</td>
              <td scope="row" className="inline-flex h-10 items-center pl-4">
                <span className="mr-1">{el.fighter.firstName} </span>
                <span className="mr-2 font-bold uppercase">
                  {el.fighter.lastName}
                </span>
                <RankingLabel position={el.ranking} />
              </td>
              <td className="w-16 text-center lg:w-20">{el.fights}</td>
              <td className="hidden w-16 text-center md:table-cell lg:w-20">
                {el.win}
              </td>
              <td className="hidden w-16 text-center md:table-cell lg:w-20">
                {el.lose}
              </td>
              <td className="hidden w-16 text-center md:table-cell lg:w-20">
                {el.draw}
              </td>
              <td className="hidden w-16 text-center lg:table-cell lg:w-20">
                {el.firstRoundFinish}
              </td>
              <td className="hidden w-16 text-center lg:table-cell lg:w-20">
                {el.secondRoundFinish}
              </td>
              <td className="hidden w-16 text-center lg:table-cell lg:w-20">
                {el.thirdRoundFinish}
              </td>
              <td className="w-16 text-center lg:w-20">{el.points}</td>
            </tr>
          ))}
          {bottomScore.map((el: IScore, index: number) => (
            <tr
              className={clsx(
                "h-10 border-b border-primary-500/25",
                knockoutRound && "opacity-25",
              )}
              key={index}
            >
              <td className="w-10 text-center font-bold">
                {index + topScore.length + 1}
              </td>
              <td scope="row" className="inline-flex h-10 items-center pl-4 ">
                <span className="mr-1">{el.fighter.firstName} </span>
                <span className="mr-2 font-bold uppercase">
                  {el.fighter.lastName}
                </span>
                <RankingLabel position={el.ranking} />
              </td>
              <td className="w-16 text-center lg:w-20">{el.fights}</td>
              <td className="hidden w-16 text-center md:table-cell lg:w-20">
                {el.win}
              </td>
              <td className="hidden w-16 text-center md:table-cell lg:w-20">
                {el.lose}
              </td>
              <td className="hidden w-16 text-center md:table-cell lg:w-20">
                {el.draw}
              </td>
              <td className="hidden w-16 text-center lg:table-cell lg:w-20">
                {el.firstRoundFinish}
              </td>
              <td className="hidden w-16 text-center lg:table-cell lg:w-20">
                {el.secondRoundFinish}
              </td>
              <td className="hidden w-16 text-center lg:table-cell lg:w-20">
                {el.thirdRoundFinish}
              </td>
              <td className="w-16 text-center lg:w-20">{el.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
