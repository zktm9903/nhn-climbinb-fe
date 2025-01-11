"use client";

import { getMembers } from "@/app/apis/all";
import GoBackArrow from "@/app/components/GoBackArrow";
import Title from "@/app/components/Title";

import { PATH } from "@/app/const/path";
import { BottomArrow } from "@/app/shared/svgs";
import { Member } from "@/app/types/common";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const admin = searchParams.get("admin") === "777";
  const type = searchParams.get("type") as "rank" | "forest" | "etc";
  const [isOpen, setIsOpen] = useState(false);
  const [candidate, setCandidate] = useState<Member[]>([]);
  const [luckyRank, setLuckyRank] = useState<Member[]>([]);
  const [luckyForest, setLuckyForest] = useState<Member[]>([]);
  const [luckyEtc, setLuckyEtc] = useState<Member[]>([]);

  useEffect(() => {
    console.log("---후보자---\n", candidate);
  }, [candidate]);

  const membersQuery = useQuery({
    queryKey: ["members"],
    queryFn: () => getMembers(),
    select: (data) =>
      data.memberList.sort((a, b) => b.totalScore - a.totalScore),
  });

  useEffect(() => {
    if (membersQuery.data) {
      setCandidate(membersQuery.data);
    }
  }, [membersQuery.data]);

  useEffect(() => {
    console.log("---당첨자---", luckyRank, luckyForest, luckyEtc);
    const winners = [...luckyRank, ...luckyForest, ...luckyEtc];
    const newCandidate = candidate.filter((e) =>
      winners.every(
        (w) => !(w.name + w.organization === e.name + e.organization),
      ),
    );
    if (JSON.stringify(candidate) === JSON.stringify(newCandidate)) {
      return;
    }
    setCandidate(newCandidate);
  }, [luckyRank, luckyForest, luckyEtc, candidate]);

  const draw = () => {
    if (!admin) {
      alert("관리자 전용입니다.");
      return;
    }
    if (type === "rank") {
      if (luckyRank.length === 4) {
        alert("이미 추첨되었습니다.");
        return;
      }
      if (candidate.length) {
        setLuckyRank([candidate[0], candidate[4], candidate[9], candidate[14]]);
      }
    } else if (type === "forest") {
      if (luckyForest.length === 2) {
        alert("이미 추첨되었습니다.");
        return;
      }
      if (candidate.length) {
        const boys = candidate.filter((e) => e.gender === "BOY");
        const girls = candidate.filter((e) => e.gender === "GIRL");

        const randomBoy = boys[Math.floor(Math.random() * boys.length)];
        const randomGirl = girls[Math.floor(Math.random() * girls.length)];

        setLuckyForest([randomBoy, randomGirl]);
      }
    } else if (type === "etc") {
      if (luckyEtc.length === 1) {
        alert("이미 추첨되었습니다.");
        return;
      }
      if (candidate.length) {
        const random = candidate[Math.floor(Math.random() * candidate.length)];
        setLuckyEtc([random]);
      }
    }
  };

  return (
    <main className="relative mb-[150px] flex flex-col items-center">
      <GoBackArrow />
      <Title title="LUCKY DRAW" color="#FFC728" />
      <button
        className={`mb-[21px] rounded-[35px] border-[1px] bg-[#FFC728] px-[40px] py-[15px] text-[1.125rem] leading-[1.313rem] text-white`}
        disabled={!candidate.length}
        onClick={draw}
      >
        추첨하기
      </button>
      <table className="w-[calc(100%-64px)] border-[1px] border-[#FFC728] bg-white text-center text-[1.563rem] leading-[1.875rem] text-[#333333]">
        <colgroup>
          <col style={{ width: "30%" }} />
          <col style={{ width: "70%" }} />
        </colgroup>
        <thead
          className="relative bg-[#FFC728] text-white"
          onClick={() => setIsOpen((e) => !e)}
        >
          <tr>
            <td colSpan={2} className="py-[16px]">
              {type === "rank" && "등수 별 수상"}
              {type === "forest" && "서울숲 티셔츠"}
              {type === "etc" && "소소한 경품"}
              <BottomArrow
                className={`absolute right-[12px] top-1/2 -translate-y-1/2 ${isOpen && "rotate-180"}`}
              />
              {isOpen && (
                <div className="absolute bottom-0 left-0 z-10 flex w-full translate-y-full flex-col border-[1px] border-white bg-white text-[1.563rem] font-bold leading-[1.875rem] text-[#FFC728] drop-shadow-lg">
                  {type !== "rank" && (
                    <Link
                      href={`${PATH.LUCKY_DRAW}?type=rank${admin ? "&admin=777" : ""}`}
                      className="py-[16px]"
                    >
                      등수 별 수상
                    </Link>
                  )}
                  {type !== "forest" && (
                    <Link
                      href={`${PATH.LUCKY_DRAW}?type=forest${admin ? "&admin=777" : ""}`}
                      className="py-[16px]"
                    >
                      서울숲 티셔츠
                    </Link>
                  )}
                  {type !== "etc" && (
                    <Link
                      href={`${PATH.LUCKY_DRAW}?type=etc${admin ? "&admin=777" : ""}`}
                      className="py-[16px]"
                    >
                      소소한 경품
                    </Link>
                  )}
                </div>
              )}
            </td>
          </tr>
        </thead>
        <tbody>
          {type === "rank" && (
            <>
              <tr>
                <td
                  className={`border-[1px] border-[#FFC728] py-[15px] ${!luckyRank[0] && "text-white"}`}
                >
                  1등
                </td>
                <td className="border-[1px] border-[#FFC728] py-[15px]">
                  {luckyRank[0]?.name}
                </td>
              </tr>
              <tr>
                <td
                  className={`border-[1px] border-[#FFC728] py-[15px] ${!luckyRank[0] && "text-white"}`}
                >
                  5등
                </td>
                <td className="border-[1px] border-[#FFC728] py-[15px]">
                  {luckyRank[1]?.name}
                </td>
              </tr>
              <tr>
                <td
                  className={`border-[1px] border-[#FFC728] py-[15px] ${!luckyRank[0] && "text-white"}`}
                >
                  10등
                </td>
                <td className="border-[1px] border-[#FFC728] py-[15px]">
                  {luckyRank[2]?.name}
                </td>
              </tr>
              <tr>
                <td
                  className={`border-[1px] border-[#FFC728] py-[15px] ${!luckyRank[0] && "text-white"}`}
                >
                  15등
                </td>
                <td className="border-[1px] border-[#FFC728] py-[15px]">
                  {luckyRank[3]?.name}
                </td>
              </tr>
            </>
          )}

          {type === "forest" && (
            <>
              <tr>
                <td className={`} border-[1px] border-[#FFC728] py-[15px]`}>
                  남자
                </td>
                <td className="border-[1px] border-[#FFC728] py-[15px]">
                  {luckyForest[0]?.name}
                </td>
              </tr>
              <tr>
                <td className={`border-[1px] border-[#FFC728] py-[15px]`}>
                  여자
                </td>
                <td className="border-[1px] border-[#FFC728] py-[15px]">
                  {luckyForest[1]?.name}
                </td>
              </tr>
            </>
          )}

          {type === "etc" && (
            <>
              {luckyEtc.map((etc, index) => (
                <tr key={index}>
                  <td
                    colSpan={2}
                    className={`border-[1px] border-[#FFC728] py-[15px]`}
                  >
                    {etc.name}
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </main>
  );
}
