"use client";

import { usePathname, useRouter } from "next/navigation";

import { useQuery } from "@tanstack/react-query";
import { IScore, IFight } from "@/app/_types/types";
import axios from "@/app/_utils/axios/axiosInstance";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";

import { Loading } from "@/app/_components/Loading";
import { useEffect } from "react";

export default function TournamrntPage() {
  const pathname = usePathname();
  const router = useRouter();

  const id = pathname.split("/")[2];
  const authToken = getAuthToken();

  const fights = useQuery({
    queryKey: ["fights"],
    queryFn: async () => {
      const response = await axios.get(`/fights/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    },
  });

  const score = useQuery({
    queryKey: ["fights"],
    queryFn: async () => {
      const response = await axios.get(`/score/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    },
  });

  const redirectToStage = (fights: IFight[], score: IScore[]) => {
    router.push(
      `${fights.length > score.length ? `/tournaments/${id}/knockout` : `/tournaments/${id}/group`}`,
    );
  };

  useEffect(() => {
    if (!fights.isLoading && !score.isLoading)
      redirectToStage(fights.data, score.data);
  }, [score, fights]);

  return <Loading />;
}
