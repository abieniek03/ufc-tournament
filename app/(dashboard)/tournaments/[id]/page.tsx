import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import { IScore, IServerComponentProps } from "../../../_types/types";
import { fetchData } from "@/app/_utils/fetch/fetchData";
import { ITournament } from "../../../_types/types";

export default async function TournamentDetailsPage({
  params,
}: Readonly<IServerComponentProps>) {
  const tournament: { data: ITournament } = await fetchData(
    `/tournaments/${params.id}`,
  );

  const score: { data: IScore[] } = await fetchData(`/score/${params.id}`);
  console.log(score);
  return (
    <>
      <header className="mb-8">
        <DashboardPageTitle>{tournament.data.name}</DashboardPageTitle>
        <p className="text-sm uppercase opacity-75">
          {tournament.data.weightclass.name} |{" "}
          {tournament.data.weightclass.limit} lbs
        </p>
      </header>
      <section>
        <table className="w-full table-auto rounded-lg border border-content/10 rtl:text-right">
          <thead className="bg-hover ">
            <tr className="h-10">
              <td colSpan={2} className="pl-10">
                Fighter
              </td>
              <td>Fights</td>
              <td className="hidden text-center">Win</td>
              <td className="hidden text-center">Lose</td>
              <td className="hidden text-center">Draw</td>
              <td className="hidden text-center">1RF</td>
              <td className="hidden text-center">2RF</td>
              <td className="hidden text-center">3RF</td>
              <td>Points</td>
            </tr>
          </thead>
          <tbody>
            {score.data.map((el: IScore, index: number) => (
              <tr className="h-10 bg-lime-400">
                <td className="bg-red-500 text-center">{index + 1}</td>
                <td>
                  {el.fighter.firstName} {el.fighter.lastName}
                </td>
                <td className="text-center">{el.fights}</td>
                <td className="hidden text-center">{el.win}</td>
                <td className="hidden text-center">{el.lose}</td>
                <td className="hidden text-center">{el.draw}</td>
                <td className="hidden text-center"> {el.firstRoundFinish}</td>
                <td className="hidden text-center">{el.secondRoundFinish}</td>
                <td className="hidden text-center">{el.thirdRoundFinish}</td>
                <td className="text-center">{el.points}</td>
              </tr>
            ))}
            <td></td>
          </tbody>
        </table>
      </section>
    </>
  );
}
