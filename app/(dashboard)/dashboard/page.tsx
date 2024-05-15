import { CreateNewTournament } from "@/app/_components/dashboard/CreateNewTournament";

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1>Hello!</h1>
        <CreateNewTournament />
      </div>
    </>
  );
}
