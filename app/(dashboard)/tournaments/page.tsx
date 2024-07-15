import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/app/_components/Button";
import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import { TournamentItem } from "@/app/_components/dashboard/TournamentItem";
import { serverFetchData } from "@/app/_utils/fetch/server";
import { ITournament } from "@/app/_types/types";
import { AllTournaments } from "@/app/_components/dashboard/AllTournaments";

export const metadata: Metadata = {
  title: "Tournaments",
};

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

      <AllTournaments />

    </>
  );
}
