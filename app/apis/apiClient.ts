import axios from "axios";
import { ENV } from "../const/env";

export const apiClient = axios.create({
  baseURL: ENV.API_URL,
});
