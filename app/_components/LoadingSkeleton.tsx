import clsx from "clsx";
import { Skeleton } from "../_types/types";

interface Props {
  variant: Skeleton;
}

export function LoadingSkeleton({ variant }: Readonly<Props>) {
  return (
    <div
      className={clsx(
        "w-full animate-pulse bg-content/5",
        variant === "fight-label" && "h-[158px]",
      )}
    />
  );
}
