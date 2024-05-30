import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import { GroupStageFights } from "@/app/_components/dashboard/GroupStageFights";
import { Score } from "@/app/_components/dashboard/Score";
import { IServerComponent, ITournament } from "@/app/_types/types";
import { fetchData } from "@/app/_utils/fetch/fetchData";

export default async function TournamentGroupPage({
  params,
}: Readonly<IServerComponent>) {
  const tournament: { data: ITournament } = await fetchData(
    `/tournaments/${params.id}`,
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
      <Score tournamentId={params.id} />
      <GroupStageFights tournamentId={params.id} level="ROUND_1" />
      <GroupStageFights tournamentId={params.id} level="ROUND_2" />
    </>
  );
}
