import Link from "next/link";
import { DeleteTournament } from "@/app/_components/dashboard/DeleteTournament";
import { Score } from "@/app/_components/dashboard/Score";
import { LevelFights } from "@/app/_components/dashboard/LevelFights";
import { IBracket, IServerComponent, ITournament } from "@/app/_types/types";
import { serverFetchData } from "@/app/_utils/fetch/server";
import { CreateBracket } from "@/app/_components/dashboard/CreateBracket";
import { Bracket } from "@/app/_components/dashboard/Bracket";
import { canDrawSecondRound } from "@/app/_utils/features/canDrawSecondRound";
import { DrawButton } from "@/app/_components/dashboard/DrawButton";
import { canCreateBracket } from "@/app/_utils/features/canCreateBracket";

export default async function TournamentGroupPage({
  params,
}: Readonly<IServerComponent>) {
  const tournament: { data: ITournament } = await serverFetchData(
    `/tournaments/${params.id}`,
  );

  const permissionCanDrawSecondRound = await canDrawSecondRound(params.id);

  const permissionCanCreateBracket = await canCreateBracket(params.id);

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
      <LevelFights tournamentId={params.id} level="ROUND_1" />
      {permissionCanDrawSecondRound ? (
        <DrawButton
          tournamentId={params.id}
          level="ROUND_2"
          label="Draw second round"
        />
      ) : (
        <LevelFights tournamentId={params.id} level="ROUND_2" />
      )}
      {bracket.data.length ? (
        <>
          <Bracket data={bracket.data} />
          <LevelFights tournamentId={params.id} level="QUARTERFINAL" />
          <LevelFights tournamentId={params.id} level="SEMIFINAL" />
          <LevelFights tournamentId={params.id} level="FINAL" />
        </>
      ) : (
        permissionCanCreateBracket && (
          <div className="mb-16 text-center">
            <p className="mb-4 text-xl font-semibold">
              The tournament will go to{" "}
              <span className="uppercase">knockout stage</span>
            </p>
            <CreateBracket tournamentId={params.id} />
          </div>
        )
      )}
    </>
  );
}
