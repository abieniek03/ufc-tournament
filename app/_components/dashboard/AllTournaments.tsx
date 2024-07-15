"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { TournamentItem } from "./TournamentItem";
import { LoadingSkeleton } from "../LoadingSkeleton";

import { clientFetchData } from "@/app/_utils/fetch/client";
import { ITournament } from "@/app/_types/types";
import { LoadingPopup } from "../LoadingPopup";
import { useState } from "react";

export function AllTournaments() {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ["tournaments"],
    queryFn: async () => await clientFetchData("/tournaments"),
  });

  return (
    <div>
      {isError && (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="mb-2 text-center text-2xl md:text-4xl lg:text-6xl">
            No tournament found.
          </p>
          <Link
            href="/create-tournament"
            className="font-bold text-primary-500 hover:underline"
          >
            Create tournament
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isPending &&
          Array.from({ length: 12 }).map((_, index: number) => (
            <LoadingSkeleton key={index} variant="tournament" />
          ))}
        {isSuccess &&
          data.data.map((el: ITournament, index: number) => (
            <button onClick={() => setIsRedirecting(true)}>
              <TournamentItem key={index} data={el} />
            </button>
          ))}
      </div>
      {isRedirecting && <LoadingPopup />}
    </div>
  );
}
