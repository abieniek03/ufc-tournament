import Link from "next/link";
import { DeleteTournament } from "@/app/_components/dashboard/DeleteTournament";
import { Score } from "@/app/_components/dashboard/Score";
import { GroupStageFights } from "@/app/_components/dashboard/GroupStageFights";
import { IBracket, IServerComponent, ITournament } from "@/app/_types/types";
import { serverFetchData } from "@/app/_utils/fetch/server";
import { BracketStageFights } from "@/app/_components/dashboard/BracketStageFights";
import { CreateBracket } from "@/app/_components/dashboard/CreateBracket";

export default async function TournamentGroupPage({
  params,
}: Readonly<IServerComponent>) {
  const tournament: { data: ITournament } = await serverFetchData(
    `/tournaments/${params.id}`,
  );

  const bracket: { data: IBracket[] } = await serverFetchData(
    `/bracket/${params.id}`,
  );

  return (
    <>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <Link href="/tournaments" className="text-primary-500">
            <i className="ri-arrow-left-line font-bold" />
            <span className="ml-1 text-sm uppercase">Go back</span>
          </Link>
          <h1 className="uppercase">
            {tournament.data.weightclass.name} |{" "}
            {tournament.data.weightclass.limit} lbs
          </h1>
        </div>
        <DeleteTournament tournamentId={params.id} />
      </header>
      <Score tournamentId={params.id} />
      <GroupStageFights tournamentId={params.id} level="ROUND_1" />
      <GroupStageFights tournamentId={params.id} level="ROUND_2" />
      {!bracket.data.length && (
        <div className="text-center">
          <p className="mb-4 text-xl font-semibold">
            The tournament will go to Knockout Stage
          </p>
          <CreateBracket tournamentId={params.id} />
        </div>
      )}
      <BracketStageFights tournamentId={params.id} />
    </>
  );
}
