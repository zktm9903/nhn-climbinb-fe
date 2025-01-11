"use client";

import { Close } from "@/app/shared/svgs";
import { PATH } from "@/app/const/path";
import { Search } from "@/app/shared/svgs";
import { Member } from "@/app/types/common";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { getMembers, postScore } from "@/app/apis/all";
import { CACHE_KEY } from "@/app/const/cacheKey";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function EditScore() {
  const searchParams = useSearchParams();
  const member = searchParams.get("member");

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState(member ?? "");
  const [searchResult, setSearchResult] = useState<Member[]>([]);

  useEffect(() => {
    setSearchTerm(member ?? "");
  }, [member]);

  const [greenScore, setGreenScore] = useState("0");
  const [blueScore, setBlueScore] = useState("0");
  const [indigoScore, setIndigoScore] = useState("0");
  const [purpleScore, setPurpleScore] = useState("0");
  const [orangeScore, setOrangeScore] = useState("0");
  const [blackScore, setBlackScore] = useState("0");

  const [totalScore, setTotalScore] = useState("0");

  const membersQuery = useQuery({
    queryKey: [CACHE_KEY.MEMBERS],
    queryFn: getMembers,
    enabled: true,
    select: (data) => data.memberList,
  });

  useEffect(() => {
    setSearchResult(membersQuery.data ?? []);

    if (member) {
      const scores = membersQuery.data?.find(
        (el) => el.name === member,
      )?.scores;
      const { GREEN, BLUE, NAVY, PURPLE, BROWN, BLACK } = scores ?? {};
      setGreenScore(GREEN?.toString() ?? "0");
      setBlueScore(BLUE?.toString() ?? "0");
      setIndigoScore(NAVY?.toString() ?? "0");
      setPurpleScore(PURPLE?.toString() ?? "0");
      setOrangeScore(BROWN?.toString() ?? "0");
      setBlackScore(BLACK?.toString() ?? "0");

      const totalScore = membersQuery.data?.find(
        (el) => el.name === member,
      )?.totalScore;
      setTotalScore(totalScore?.toString() ?? "0");
    }
  }, [membersQuery.data, member]);

  useEffect(() => {
    const result = membersQuery.data?.filter((member) =>
      member.name.includes(searchTerm.toLowerCase()),
    );
    setSearchResult(result ?? []);
  }, [searchTerm, membersQuery.data]);

  const queryClient = useQueryClient();

  const editScoreMutation = useMutation({
    mutationFn: (data: { member: string; scores: Member["scores"] }) =>
      postScore(data.member, data.scores),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CACHE_KEY.MEMBERS] });
      queryClient.invalidateQueries({ queryKey: [CACHE_KEY.TEAMS] });
      alert("점수 수정 완료");
    },
  });

  return (
    <>
      <div
        className="relative w-[calc(100%-64px)]"
        onFocus={() => {
          setIsSearchFocused(true);
        }}
        onBlur={() => {
          setTimeout(() => {
            setIsSearchFocused(false);
          }, 300);
        }}
      >
        <input
          ref={ref}
          type="text"
          className="w-full rounded-sm bg-white py-[16px] pl-[44px] pr-[20px] text-left font-bold text-[#333333] outline-none drop-shadow-lg placeholder:font-normal"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <Search className="absolute left-[12px] top-[50%] translate-y-[-50%]" />
        {member && (
          <Link
            href={`${PATH.SCORE}?edit=true`}
            onClick={() => setIsSearchFocused(false)}
          >
            <Close className="absolute right-[12px] top-[50%] translate-y-[-50%]" />
          </Link>
        )}
        {isSearchFocused && (
          <div className="absolute bottom-[-6px] left-0 z-10 max-h-[500px] w-full translate-y-full overflow-y-auto rounded-sm bg-white text-[1.125rem] leading-[1.313rem] text-[#999999] drop-shadow-lg">
            {searchResult
              ?.sort((a, b) => a.name.localeCompare(b.name))
              .map((member, idx) => (
                <Link
                  key={member.name + idx}
                  href={`${PATH.SCORE}?edit=true&member=${member.name}`}
                >
                  <button className="w-full px-[40px] py-[16px] text-left hover:bg-[#F4F4F4]">
                    {member.name}
                  </button>
                </Link>
              ))}
          </div>
        )}
      </div>
      {member && (
        <form
          className="relative z-10 mt-[6px] grid w-[calc(100%-64px)] grid-cols-2 bg-white px-[20px] pb-[35px] pt-[19px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col items-center">
            <h1 className="mb-[10px] text-[1.25rem] font-bold leading-[2.313rem]">
              난이도
            </h1>
            <div className="mb-[19px] flex flex-col gap-[10px]">
              <p className="rounded-[3px] bg-green-500 px-[17px] py-[5px] text-[1.25rem] font-semibold leading-[2.313rem] text-white">
                초록
              </p>
              <p className="rounded-[3px] bg-blue-500 px-[17px] py-[5px] text-[1.25rem] font-semibold leading-[2.313rem] text-white">
                파랑
              </p>
              <p className="rounded-[3px] bg-indigo-700 px-[17px] py-[5px] text-[1.25rem] font-semibold leading-[2.313rem] text-white">
                남색
              </p>
              <p className="rounded-[3px] bg-purple-500 px-[17px] py-[5px] text-[1.25rem] font-semibold leading-[2.313rem] text-white">
                보라
              </p>
              <p className="rounded-[3px] bg-orange-800 px-[17px] py-[5px] text-[1.25rem] font-semibold leading-[2.313rem] text-white">
                갈색
              </p>
              <p className="rounded-[3px] bg-black px-[17px] py-[5px] text-[1.25rem] font-semibold leading-[2.313rem] text-white">
                검정
              </p>
            </div>
            <button
              className="rounded-[22px] border-[1px] border-[#8D8D8D] px-[20px] py-[15px] text-[0.938rem] leading-[0.875rem] text-[#333333]"
              onClick={() =>
                editScoreMutation.mutate({
                  member,
                  scores: {
                    GREEN: Number(greenScore),
                    BLUE: Number(blueScore),
                    NAVY: Number(indigoScore),
                    PURPLE: Number(purpleScore),
                    BROWN: Number(orangeScore),
                    BLACK: Number(blackScore),
                  },
                })
              }
            >
              총 점수 계산하기
            </button>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="mb-[10px] text-[1.25rem] font-bold leading-[2.313rem]">
              난이도
            </h1>
            <div className="mb-[26px] flex flex-col gap-[10px]">
              <input
                type="text"
                className="h-[47.02px] w-[68.58px] appearance-none rounded-[3px] border-[1px] border-[#8D8D8D] bg-white py-[5px] text-center text-[1.25rem] font-bold leading-[2.313rem] outline-none"
                value={greenScore}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || /^\d+$/.test(value)) {
                    setGreenScore(value);
                  }
                }}
              />
              <input
                type="text"
                className="h-[47.02px] w-[68.58px] appearance-none rounded-[3px] border-[1px] border-[#8D8D8D] bg-white py-[5px] text-center text-[1.25rem] font-bold leading-[2.313rem] outline-none"
                value={blueScore}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || /^\d+$/.test(value)) {
                    setBlueScore(value);
                  }
                }}
              />
              <input
                type="text"
                className="h-[47.02px] w-[68.58px] appearance-none rounded-[3px] border-[1px] border-[#8D8D8D] bg-white py-[5px] text-center text-[1.25rem] font-bold leading-[2.313rem] outline-none"
                value={indigoScore}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || /^\d+$/.test(value)) {
                    setIndigoScore(value);
                  }
                }}
              />
              <input
                type="text"
                className="h-[47.02px] w-[68.58px] appearance-none rounded-[3px] border-[1px] border-[#8D8D8D] bg-white py-[5px] text-center text-[1.25rem] font-bold leading-[2.313rem] outline-none"
                value={purpleScore}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || /^\d+$/.test(value)) {
                    setPurpleScore(value);
                  }
                }}
              />
              <input
                type="text"
                className="h-[47.02px] w-[68.58px] appearance-none rounded-[3px] border-[1px] border-[#8D8D8D] bg-white py-[5px] text-center text-[1.25rem] font-bold leading-[2.313rem] outline-none"
                value={orangeScore}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || /^\d+$/.test(value)) {
                    setOrangeScore(value);
                  }
                }}
              />
              <input
                type="text"
                className="h-[47.02px] w-[68.58px] appearance-none rounded-[3px] border-[1px] border-[#8D8D8D] bg-white py-[5px] text-center text-[1.25rem] font-bold leading-[2.313rem] outline-none"
                value={blackScore}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || /^\d+$/.test(value)) {
                    setBlackScore(value);
                  }
                }}
              />
            </div>
            <p className="w-[100px] border-b-[3px] border-black text-center text-[1.25rem] font-bold leading-[2.313rem] text-[#333333]">
              {totalScore}
            </p>
          </div>
        </form>
      )}
    </>
  );
}
