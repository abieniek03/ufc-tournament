import axios from "@/app/_utils/axios/axiosInstance";

export const clientFetchData = async (
  endpoint: string,
  token: string | null,
) => {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error;
  }
};
