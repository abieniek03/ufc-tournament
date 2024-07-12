import clsx from "clsx";
import { RankingPosition } from "@/app/_types/types";

interface Props {
  position: RankingPosition;
}

export function RankingLabel({ position }: Readonly<Props>) {
  const isChampion = position === 0;
  return (
    <span
      className={clsx(
        "flex h-5 w-5 items-center justify-center text-xs text-black",
        isChampion ? "bg-gold" : "bg-gray-300",
      )}
    >
      {isChampion ? "C" : position || "NR"}
    </span>
  );
}
