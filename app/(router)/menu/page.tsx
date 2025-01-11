import GoBackArrow from "@/app/components/GoBackArrow";
import { PATH } from "@/app/const/path";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative flex flex-col items-center">
      <GoBackArrow />
      <div className="my-[184px] flex flex-col items-center gap-[21px]">
        <Link
          href={PATH.RULE}
          className="rounded-[40px] bg-[#333333] px-[35px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
        >
          RULE
        </Link>
        <Link
          href={PATH.TIME_TABLE}
          className="rounded-[40px] bg-[#557961] px-[35px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
        >
          TIME TABLE
        </Link>
        <Link
          href={`${PATH.TEAM}?id=1`}
          className="rounded-[40px] bg-[#F35D4D] px-[35px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
        >
          TEAM
        </Link>
        <Link
          href={`${PATH.SCORE}?type=team`}
          className="rounded-[40px] bg-[#F7C3CB] px-[35px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
        >
          SCORE
        </Link>
        <Link
          href={`${PATH.LUCKY_DRAW}?type=rank`}
          className="rounded-[40px] bg-[#FFC728] px-[35px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
        >
          LUCKY DRAW
        </Link>
      </div>
    </main>
  );
}
