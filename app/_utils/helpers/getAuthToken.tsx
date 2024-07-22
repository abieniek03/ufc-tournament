"use client";
import "client-only";

export const getAuthToken = () => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "__session") {
      return value;
    }
  }
  return null;
};
