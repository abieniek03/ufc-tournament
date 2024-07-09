"use client";

import axios from "@/app/_utils/axios/axiosInstance";
import { getAuthToken } from "../helpers/getAuthToken";

export const clientFetchData = async (endpoint: string) => {
  const token = getAuthToken();

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
