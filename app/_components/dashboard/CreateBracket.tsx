"use client";

import { useMutation } from "@tanstack/react-query";
import { Button } from "../Button";

import axios from "@/app/_utils/axios/axiosInstance";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";

interface Props {
  tournamentId: string;
}

export function CreateBracket({ tournamentId }: Readonly<Props>) {
  const token = getAuthToken();

  const drawOponents = useMutation({
    mutationKey: ["bracket", tournamentId],
    mutationFn: async () => {
      try {
        await axios.post(
          `/bracket/${tournamentId}/`,
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
          Create bracket
        </Button>
      </div>
    </>
  );
}
