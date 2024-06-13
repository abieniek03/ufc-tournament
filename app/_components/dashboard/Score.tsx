import { fetchData } from "@/app/_utils/fetch/fetchData";
import { IScore } from "@/app/_types/types";

interface Props {
  tournamentId: string;
}

export async function Score({ tournamentId }: Readonly<Props>) {
  const score: { data: IScore[] } = await fetchData(`/score/${tournamentId}`);

  return (
    <section className="mb-16 border-b border-content/5 pb-16">
      <table className="w-full bg-background text-left text-sm">
        <thead className="h-10 bg-primary-500 text-xs uppercase text-primary-content">
          <tr>
            <th scope="col" colSpan={2} className="w-16 pl-14 lg:w-20">
              Name
            </th>
            <th scope="col" className="w-16 text-center lg:w-20">
              Fights
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center md:table-cell lg:w-20"
            >
              Win
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center md:table-cell lg:w-20"
            >
              Lose
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center md:table-cell lg:w-20"
            >
              Draw
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center lg:table-cell lg:w-20"
            >
              1RF
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center lg:table-cell lg:w-20"
            >
              2RF
            </th>
            <th
              scope="col"
              className="hidden w-16 text-center lg:table-cell lg:w-20"
            >
              3RF
            </th>
            <th scope="col" className="w-16 text-center lg:w-20">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {score.data.map((el: IScore, index: number) => (
            <tr
              className="even:bg-hover h-10 border-b border-primary-500/25"
              key={index}
            >
              <td className="w-10 text-center font-bold">{index + 1}</td>
              <td scope="row" className="pl-4">
                {el.fighter.firstName}{" "}
                <span className="font-bold uppercase">
                  {el.fighter.lastName}
                </span>
              </td>
              <td className="w-16 text-center lg:w-20">{el.fights}</td>
              <td className="hidden w-16 text-center md:table-cell lg:w-20">
                {el.win}
              </td>
              <td className="hidden w-16 text-center md:table-cell lg:w-20">
                {el.lose}
              </td>
              <td className="hidden w-16 text-center md:table-cell lg:w-20">
                {el.draw}
              </td>
              <td className="hidden w-16 text-center lg:table-cell lg:w-20">
                {el.firstRoundFinish}
              </td>
              <td className="hidden w-16 text-center lg:table-cell lg:w-20">
                {el.secondRoundFinish}
              </td>
              <td className="hidden w-16 text-center lg:table-cell lg:w-20">
                {el.thirdRoundFinish}
              </td>
              <td className="w-16 text-center lg:w-20">{el.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
