"use client";

import { PATH } from "@/app/const/path";
import { LeftArrow } from "@/app/shared/svgs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <main className="relative flex flex-col items-center">
      <LeftArrow
        className="absolute left-[14px] top-[20px] cursor-pointer"
        onClick={() => router.back()}
      />
      <div className="mt-[184px] flex flex-col items-center gap-[21px]">
        <Link
          href={PATH.MENU}
          className="rounded-[40px] bg-[#333333] px-[35px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
        >
          RULE
        </Link>
        <Link
          href={PATH.MENU}
          className="rounded-[40px] bg-[#557961] px-[35px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
        >
          TIME TABLE
        </Link>
        <Link
          href={PATH.MENU}
          className="rounded-[40px] bg-[#F35D4D] px-[35px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
        >
          TEAM
        </Link>
        <Link
          href={PATH.MENU}
          className="rounded-[40px] bg-[#F7C3CB] px-[35px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
        >
          SCORE
        </Link>
        <Link
          href={PATH.MENU}
          className="rounded-[40px] bg-[#FFC728] px-[35px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
        >
          LUCKY DRAW
        </Link>
      </div>
    </main>
  );
}
