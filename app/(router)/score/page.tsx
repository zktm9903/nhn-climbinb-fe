"use client";

import GoBackArrow from "@/app/components/GoBackArrow";
import Title from "@/app/components/Title";
import { PATH } from "@/app/const/path";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const isEdit = searchParams.get("edit") === "true";

  return (
    <main className="relative flex flex-col items-center">
      <GoBackArrow />
      <Title title="SCORE" color="#F35D4D" />
      <Link
        href={`${PATH.SCORE}?edit=${!isEdit}`}
        className={`mb-[21px] rounded-[35px] border-[1px] border-[#F35D4D] bg-[#F35D4D] px-[40px] py-[15px] text-[1.125rem] leading-[1.313rem] text-white ${isEdit && "bg-white text-[#F35D4D]"}`}
      >
        {isEdit ? "점수 보러가기" : "내 점수 등록하기"}
      </Link>

      {isEdit ? (
        <div>test</div>
      ) : (
        <table className="w-[calc(100%-64px)] bg-white text-center">
          <thead className="bg-[#F35D4D] text-[1.563rem] leading-[1.875rem] text-white">
            <tr>
              <td className="py-[16px]">조별 등수</td>
            </tr>
          </thead>
        </table>
      )}
    </main>
  );
}
