"use client";

import { getMembers, getTeams } from "@/app/apis/all";
import { CACHE_KEY } from "@/app/const/cacheKey";
import { PATH } from "@/app/const/path";
import { BottomArrow } from "@/app/shared/svgs";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RankScore() {
  const searchParams = useSearchParams();
  const isTeam = searchParams.get("type") === "team";
  const [isOpen, setIsOpen] = useState(false);

  const teamsRankQuery = useQuery({
    queryKey: [CACHE_KEY.TEAMS],
    queryFn: getTeams,
    enabled: true,
    select: (data) => data.teamList.sort((a, b) => b.totalScore - a.totalScore),
  });

  const membersRankQuery = useQuery({
    queryKey: [CACHE_KEY.MEMBERS],
    queryFn: getMembers,
    enabled: true,
    select: (data) =>
      data.memberList.sort((a, b) => b.totalScore - a.totalScore),
  });

  return (
    <table className="w-[calc(100%-64px)] border-[1px] border-[#F35D4D] bg-white text-center text-[1.563rem] leading-[1.875rem] text-[#333333]">
      <colgroup>
        <col style={{ width: "20%" }} />
        <col style={{ width: "40%" }} />
        <col style={{ width: "40%" }} />
      </colgroup>
      <thead className="bg-[#F35D4D] text-white">
        <tr>
          <td
            colSpan={3}
            className="relative py-[16px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isTeam ? "조별 등수" : "개인 등수"}
            <BottomArrow
              className={`absolute right-[12px] top-1/2 -translate-y-1/2 ${isOpen && "rotate-180"}`}
            />
            {isOpen && (
              <Link
                href={
                  isTeam
                    ? `${PATH.SCORE}?type=member`
                    : `${PATH.SCORE}?type=team`
                }
                className="absolute bottom-0 left-0 w-full translate-y-full border-[1px] border-white bg-white py-[16px] text-[1.563rem] font-bold leading-[1.875rem] text-[#F35D4D] drop-shadow-lg"
              >
                {isTeam ? "개인 등수" : "조별 등수"}
              </Link>
            )}
          </td>
        </tr>
      </thead>

      <tbody>
        {isTeam &&
          teamsRankQuery.data?.map((team, idx) => (
            <tr key={team.name}>
              <td className="border-[1px] border-[#F35D4D] py-[15px]">
                {idx + 1}
              </td>
              <td className="border-[1px] border-[#F35D4D] py-[15px]">
                {team.name}
              </td>
              <td className="border-[1px] border-[#F35D4D] py-[15px]">
                {team.totalScore}
              </td>
            </tr>
          ))}
        {!isTeam &&
          membersRankQuery.data?.map((member, idx) => (
            <tr key={member.name}>
              <td className="border-[1px] border-[#F35D4D] py-[15px]">
                {idx + 1}
              </td>
              <td className="border-[1px] border-[#F35D4D] py-[15px]">
                {member.name[0] + "*" + member.name.at(-1)}
              </td>
              <td className="border-[1px] border-[#F35D4D] py-[15px]">
                {member.totalScore}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
