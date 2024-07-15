"use client";

import { useMutation } from "@tanstack/react-query";
import { Button } from "../Button";

import { Level } from "@/app/_types/types";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";
import axios from "@/app/_utils/axios/axiosInstance";

interface Props {
  tournamentId: string;
  level: Level;
  label: string;
}

export async function DrawButton({
  tournamentId,
  level,
  label,
}: Readonly<Props>) {
  const token = getAuthToken();

  const drawOponents = useMutation({
    mutationKey: ["draw", tournamentId, level],
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
    <Button styleType="primary" onClick={() => drawOponents.mutate()}>
      {label}
    </Button>
  );
}
