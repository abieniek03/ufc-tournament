import { IServerComponent, IScore, IFight } from "@/app/_types/types";
import { fetchData } from "@/app/_utils/fetch/fetchData";
import { redirect } from "next/navigation";

export default async function TournamrntPage({
  params,
}: Readonly<IServerComponent>) {
  const allFights: { data: IFight[] } = await fetchData(
    `/fights/${params.id}?level=ROUND_2`,
  );
  const score: { data: IScore[] } = await fetchData(`/score/${params.id}`);

  allFights.data.length > score.data.length
    ? redirect(`/tournaments/${params.id}/knockout`)
    : redirect(`/tournaments/${params.id}/group`);
}
