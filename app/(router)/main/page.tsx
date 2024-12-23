import { PATH } from "@/app/const/path";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col items-center">
      <p className="relative mt-[91px] max-w-[359px] whitespace-pre-line text-[2.063rem] font-bold leading-[2.475rem] text-[#557961]">
        {"SEOULFOREST JAMSIL\nJAN 12 2025\n20:00-23:00"}
        <Image
          src={"/sticker.png"}
          alt="sticker"
          width={200}
          height={100}
          className="absolute bottom-[-14px] right-[8px] h-auto w-[140px]"
        />
      </p>
      <Image
        src={"/climbing.png"}
        alt="climbing"
        width={400}
        height={200}
        className="mt-[129px] h-auto w-[239px]"
      />
      <Image
        src={"/contest.png"}
        alt="contest"
        width={400}
        height={200}
        className="h-auto w-[235px]"
      />
      <p className="mt-[19px] whitespace-pre-line text-center text-[1.25rem] leading-[1.288rem] text-[#333333]">
        {"NHN MOVE & AJAJ\nw. guest"}
      </p>
      <Link
        href={PATH.MENU}
        className="mb-[173px] mt-[78px] rounded-[40px] bg-[#333333] px-[65px] py-[13px] text-[2.813rem] font-bold leading-[3.375rem] text-white"
      >
        GO!
      </Link>
    </main>
  );
}
