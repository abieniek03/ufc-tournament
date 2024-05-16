import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-ufc-tournament.vercel.app",
});

export default instance;
