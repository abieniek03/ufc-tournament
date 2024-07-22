"use client";

import { useMutation } from "@tanstack/react-query";

import { Modal } from "../Modal";
import { Button } from "../Button";

import axios from "@/app/_utils/axios/axiosInstance";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";

interface Props {
  tournamentId: string;
}

export function DeleteTournament({ tournamentId }: Readonly<Props>) {
  const token = getAuthToken();

  const deleteTournament = useMutation({
    mutationKey: ["deleteTournament", tournamentId],
    mutationFn: async () => {
      try {
        await axios.delete(`/tournaments/${tournamentId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        window.location.href = "/tournaments";
      } catch (error: any) {
        console.error(error);
      }
    },
  });

  return (
    <Modal
      triggerButtonStyle="icon"
      trigger={<i className="ri-delete-bin-line text-xl text-error" />}
      title="Delete tournament"
    >
      <>
        <p className="mb-4">
          Are you sure you want to delete this tournament? All data will be
          lost.
        </p>
        <Button
          styleType="delete"
          wFull={true}
          onClick={() => deleteTournament.mutate()}
          loading={deleteTournament.isPending || deleteTournament.isSuccess}
        >
          Yes
        </Button>
      </>
    </Modal>
  );
}
