import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import {
  IFight,
  IScore,
  IServerComponentProps,
} from "../../../../_types/types";
import { fetchData } from "@/app/_utils/fetch/fetchData";
import { ITournament } from "../../../../_types/types";
import { Fight } from "@/app/_components/dashboard/Fight";

export default async function TournamentDetailsPage({
  params,
}: Readonly<IServerComponentProps>) {
  const tournament: { data: ITournament } = await fetchData(
    `/tournaments/${params.id}`,
  );

  const score: { data: IScore[] } = await fetchData(`/score/${params.id}`);

  const firstRoundFights: { data: IFight[] } = await fetchData(
    `/fights/${params.id}?level=ROUND_1`,
  );

  const secondRoundFights: { data: IFight[] } = await fetchData(
    `/fights/${params.id}?level=ROUND_2`,
  );

  return (
    <>
      <header className="mb-8">
        <DashboardPageTitle>{tournament.data.name}</DashboardPageTitle>
        <p className="text-sm uppercase opacity-75">
          {tournament.data.weightclass.name} |{" "}
          {tournament.data.weightclass.limit} lbs
        </p>
      </header>
      <section className="mb-16 border-b border-content/5 pb-16">
        <table className="w-full bg-background text-left text-sm">
          <thead className="h-10 bg-content/5 bg-gray-50 text-xs uppercase">
            <tr>
              <th scope="col" colSpan={2} className="w-16 pl-10 lg:w-20 ">
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
            {score.data.map((el: IScore, index: number) => (
              <tr
                className="h-10 border-b border-content/5 even:bg-hover"
                key={index}
              >
                <td className="w-10 text-center">{index + 1}</td>
                <td scope="row">
                  {el.fighter.firstName} {el.fighter.lastName}
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
      <section>
        <div className="mb-24">
          <h2 className="text-center text-xl font-bold uppercase lg:text-2xl">
            Round 1
          </h2>
          <div className="my-16 flex flex-col gap-4">
            {firstRoundFights.data.map((el: IFight, index: number) => (
              <Fight data={el} key={index} />
            ))}
          </div>
        </div>
        <div className="mb-24">
          <h2 className="text-center text-xl font-bold uppercase lg:text-2xl">
            Round 2
          </h2>
          <div className="my-16 flex flex-col gap-4">
            {secondRoundFights.data.map((el: IFight, index: number) => (
              <Fight data={el} key={index} />
            ))}
          </div>{" "}
        </div>
      </section>
    </>
  );
}
