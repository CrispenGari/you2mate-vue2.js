import axios from "axios";
import API_KEY from "./keys";
const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&maxResults=15&type=video&q=`;
const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
