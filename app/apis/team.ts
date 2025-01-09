import { CommonApiResponse, Team } from "../types/common";
import { apiClient } from "./apiClient";

export const getTeams = () =>
  apiClient
    .get<CommonApiResponse & { teamList: Team[] }>(`/nhn-move/teams/`)
    .then((res) => res.data);
