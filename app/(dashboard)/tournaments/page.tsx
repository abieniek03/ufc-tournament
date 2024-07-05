import Link from "next/link";
import { Button } from "@/app/_components/Button";
import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import { Tournament } from "@/app/_components/dashboard/Tournament";
import { serverFetchData } from "@/app/_utils/fetch/server";
import { ITournament } from "@/app/_types/types";

export default async function TournamentsPage() {
  const userTournaments: { data: ITournament[] } =
    await serverFetchData("/tournaments");

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <DashboardPageTitle>Your tournaments</DashboardPageTitle>
        {userTournaments.data && (
          <Button styleType="primary" path="/create-tournament">
            Create new
          </Button>
        )}
      </div>

      {userTournaments.data ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {userTournaments.data.map((el: ITournament, index: number) => (
            <Tournament key={index} data={el} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="mb-2 text-center text-2xl md:text-4xl lg:text-6xl">
            No tournament found.
          </p>
          <Link
            href="/create-tournament"
            className="font-bold text-primary-500 hover:underline"
          >
            Create tournament
          </Link>
        </div>
      )}
    </>
  );
}
