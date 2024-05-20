import { useQuery } from "@tanstack/react-query";
import { Stage } from "../_types/types";
import axios from "@/app/_utils/axios/axiosInstance";
import { getAuthToken } from "../_utils/helpers/getAuthToken";

interface Props {
  id: string;
}

export function useStage({ id }: Readonly<Props>): Stage {
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

  return "LOADING";
}
