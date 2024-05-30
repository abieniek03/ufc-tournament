import { Button } from "@/app/_components/Button";
import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import { Tournament } from "@/app/_components/dashboard/Tournament";
import { fetchData } from "@/app/_utils/fetch/fetchData";
import { Props as ITournament } from "@/app/_components/dashboard/Tournament";

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
      <div className="flex flex-col gap-4">
        {userTournaments.data ? (
          userTournaments.data.map((el: ITournament, index: number) => (
            <Tournament
              key={index}
              id={el.id}
              name={el.name}
              weightclassId={el.weightclassId}
            />
          ))
        ) : (
          <p className="text-center">No tournament found.</p>
        )}
      </div>
    </>
  );
}
