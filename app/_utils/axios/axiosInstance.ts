import axios from "axios";

const instance = axios.create({
  baseURL: "https://ufc-tournament-backend-git-development-abieniek03s-projects.vercel.app",
});

export default instance;
