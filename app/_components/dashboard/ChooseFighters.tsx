"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCreateTournamentStore } from "@/app/_store/store";
import { ChooseFighterElementButton } from "./ChooseFighterElementButton";
import { Button } from "../Button";
import { LoadingPopup } from "../LoadingPopup";
import { IFighter } from "@/app/_types/types";
import axios from "@/app/_utils/axios/axiosInstance";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";

interface Props {
  fightersCount: number;
  weightclassId: string;
}
export function ChooseFighters({
  fightersCount,
  weightclassId,
}: Readonly<Props>) {
  const router = useRouter();
  const createTournamentStore = useCreateTournamentStore();
  const token = getAuthToken();

  const fetchFighters = useQuery({
    queryKey: ["fighters", fightersCount, weightclassId],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `/fighters?weightclass=${weightclassId}`,
        );
        return response.data.data;
      } catch (error: any) {
        console.error(error);
      }
    },
  });

  const selectedFighters = useCreateTournamentStore((state) =>
    state.getSelectedFighters(),
  );

  const createTourmanent = useMutation({
    mutationKey: ["createTournament"],
    mutationFn: async () => {
      const data = {
        weightclassId: weightclassId,
        fighters: selectedFighters,
      };
      try {
        const response = await axios.post("/tournaments", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        router.push(`/tournaments/${response.data.data.id}`);
      } catch (error: any) {
        console.error(error);
      }
    },
  });

  const exceedLimit = selectedFighters.length > fightersCount;

  return (
    <div>
      <div className="my-4 grid gap-2">
        {fetchFighters.isPending &&
          Array.from({ length: 16 }, (_, index) => (
            <div key={index} className="h-[40px] animate-pulse bg-content/10" />
          ))}

        {fetchFighters.data?.length >= fightersCount ? (
          <>
            <div
              className={clsx(
                "mb-1 flex text-sm font-bold uppercase",
                exceedLimit ? "justify-between" : "justify-end",
              )}
            >
              {exceedLimit && (
                <p className=" text-error">You chose too many fighters</p>
              )}
              <p>
                Selected{" "}
                <span className={clsx(exceedLimit && "text-error")}>
                  {selectedFighters.length}
                </span>
                /{fightersCount}
              </p>
            </div>
            <div className="mb-4 flex flex-col gap-2.5">
              {fetchFighters.data.map((el: IFighter, index: number) => (
                <ChooseFighterElementButton
                  key={index}
                  fighterData={el}
                  onClick={() =>
                    createTournamentStore.updateFighters(
                      `${el.id}#${el.ranking?.position || "NR"}`,
                    )
                  }
                />
              ))}
            </div>
            <Button
              type="button"
              styleType="primary"
              disabled={selectedFighters.length !== fightersCount}
              onClick={() => {
                createTourmanent.mutate();
              }}
            >
              Create tournament
            </Button>
          </>
        ) : (
          <div className="mt-4 text-center md:mt-8 lg:mt-16">
            <p className="mb-2 text-2xl font-bold text-primary-500 md:text-3xl lg:text-4xl">
              Try again later
            </p>
            <p>You cannot create a tournament in this weightclass yet.</p>
          </div>
        )}
      </div>

      {(createTourmanent.isPending || createTourmanent.isSuccess) && (
        <LoadingPopup />
      )}
    </div>
  );
}
