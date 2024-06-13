import { DeleteTournament } from "@/app/_components/dashboard/DeleteTournament";
import { Score } from "@/app/_components/dashboard/Score";
import { GroupStageFights } from "@/app/_components/dashboard/GroupStageFights";
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
      <header className="mb-8 flex items-center justify-between">
        <h1 className="uppercase">
          {tournament.data.weightclass.name} |{" "}
          {tournament.data.weightclass.limit} lbs
        </h1>
        <DeleteTournament tournamentId={params.id} />
      </header>
      <Score tournamentId={params.id} />
      <GroupStageFights tournamentId={params.id} level="ROUND_1" />

      <GroupStageFights tournamentId={params.id} level="ROUND_2" />
    </>
  );
}
