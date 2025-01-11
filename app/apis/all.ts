import { CommonApiResponse, Member, Team } from "../types/common";
import { apiClient } from "./apiClient";

export const getTeams = () =>
  apiClient
    .get<CommonApiResponse & { teamList: Team[] }>(`/nhn-move/teams/`)
    .then((res) => res.data);

export const getMembers = () =>
  apiClient
    .get<CommonApiResponse & { memberList: Member[] }>(`/nhn-move/members/`)
    .then((res) => res.data);

export const postScore = (member: string, scores: Member["scores"]) =>
  apiClient.post(`/nhn-move/members/${member}/scores`, { scores });
