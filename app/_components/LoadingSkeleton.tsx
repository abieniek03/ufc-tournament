import clsx from "clsx";
import { Skeleton } from "../_types/types";

interface Props {
  variant: Skeleton;
}

export function LoadingSkeleton({ variant }: Readonly<Props>) {
  return (
    <div
      className={clsx(
        "w-full animate-pulse bg-content/10",
        variant === "fight-label" && "h-[158px]",
        variant === "tournament" &&
          "h-[289px] rounded-md border border-content/10 lg:max-w-[240px]",
      )}
    />
  );
}
