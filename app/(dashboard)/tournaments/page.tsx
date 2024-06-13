import { Button } from "@/app/_components/Button";
import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import { Tournament } from "@/app/_components/dashboard/Tournament";
import { fetchData } from "@/app/_utils/fetch/fetchData";
import { ITournament } from "@/app/_types/types";

export default async function TournamentsPage() {
  const userTournaments: { data: ITournament[] } =
    await fetchData("/tournaments");

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <DashboardPageTitle>Your tournaments</DashboardPageTitle>
        <Button styleType="primary" path="/create-tournament">
          Create new
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {userTournaments.data ? (
          userTournaments.data.map((el: ITournament, index: number) => (
            <Tournament key={index} data={el} />
          ))
        ) : (
          <p className="text-center">No tournament found.</p>
        )}
      </div>
    </>
  );
}
