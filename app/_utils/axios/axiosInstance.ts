import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  // "https://ufc-tournament-backend-6cxuobdvr-abieniek03s-projects.vercel.app/",
});

export default instance;
