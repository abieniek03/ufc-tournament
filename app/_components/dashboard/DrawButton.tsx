"use client";

import { useMutation } from "@tanstack/react-query";
import { Button } from "../Button";

import axios from "@/app/_utils/axios/axiosInstance";
import { Level } from "@/app/_types/types";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";

interface Props {
  label: string;
  tournamentId: string;
  level: Level;
}

export function DrawButton({ label, tournamentId, level }: Readonly<Props>) {
  const token = getAuthToken();

  const drawOponents = useMutation({
    mutationKey: ["drawOponents", tournamentId],
    mutationFn: async () => {
      try {
        await axios.post(
          `/draw/${tournamentId}/${level}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        window.location.reload();
      } catch (error: any) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <div className="flex items-center justify-center">
        <Button styleType="primary" onClick={() => drawOponents.mutate()}>
          {label}
        </Button>
      </div>
    </>
  );
}
