import Link from "next/link";
import { fetchData } from "@/app/_utils/fetch/fetchData";
import { Weightclass } from "@/app/_types/types";

export interface Props {
  id: string;
  name: string;
  weightclassId: string;
}

export async function Tournament({ id, name, weightclassId }: Readonly<Props>) {
  const weightclass: { data: Weightclass } = await fetchData(
    `/weightclass/${weightclassId}`,
  );

  return (
    <Link
      href={`/tournaments${id}`}
      className="hover:bg-hover block rounded-md border border-content/10 p-4 transition-all duration-300"
    >
      <p className="text-lg lg:text-xl">{name}</p>
      <p className="text-sm uppercase opacity-75">
        {weightclass.data.name} | {weightclass.data.limit} lbs
      </p>
    </Link>
  );
}
