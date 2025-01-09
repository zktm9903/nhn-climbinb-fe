"use client";

import GoHomeArrow from "@/app/components/GoHomeArrow";
import Title from "@/app/components/Title";
import { BottomArrow } from "@/app/shared/svgs";
import { ReactNode, useState } from "react";

export default function Page() {
  const [isOpenBouldering, setIsOpenBouldering] = useState(false);
  const [isOpenMiniGame, setIsOpenMiniGame] = useState(false);

  return (
    <main className="relative flex flex-col items-center">
      <GoHomeArrow />
      <Title title="TIME TABLE" color="#557961" />
      <div className="flex w-[calc(100%-54px)] flex-col gap-[21px]">
        <Button>{<>19:30-19:45&nbsp;&nbsp;&nbsp;입장 및 스트레칭</>}</Button>
        <Button>{<>19:45-20:00&nbsp;&nbsp;&nbsp;게임방식 설명</>}</Button>
        <Button onClick={() => setIsOpenBouldering(!isOpenBouldering)}>
          {
            <>
              20:00-22:05&nbsp;&nbsp;&nbsp;볼더링
              <BottomArrow
                className={`absolute right-[16px] top-1/2 -translate-y-1/2 ${isOpenBouldering && "rotate-180"}`}
              />
              {isOpenBouldering && <Bouldering />}
            </>
          }
        </Button>
        <Button onClick={() => setIsOpenMiniGame(!isOpenMiniGame)}>
          {
            <>
              22:05-22:35&nbsp;&nbsp;&nbsp;미니게임
              <BottomArrow
                className={`absolute right-[16px] top-1/2 -translate-y-1/2 ${isOpenMiniGame && "rotate-180"}`}
              />
              {isOpenMiniGame && <MiniGame />}
            </>
          }
        </Button>
        <Button>{<>22:35-22:45&nbsp;&nbsp;&nbsp;시상식 및 경품추첨</>}</Button>
        <Button>{<>22:45-23:00&nbsp;&nbsp;&nbsp;정리 및 귀가</>}</Button>
      </div>
    </main>
  );
}

function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="relative rounded-md bg-[#557961] py-[27px] pl-[17px] text-left text-[1.375rem] font-bold text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Bouldering() {
  return (
    <table className="absolute bottom-[-6px] left-0 z-10 h-[370px] w-full table-fixed translate-y-full bg-white text-center text-[1.125rem] font-bold text-[#333333]">
      <tbody>
        <tr>
          <td className="border-[2px] border-[#557961]"></td>
          <td className="border-[2px] border-[#557961]">1섹터</td>
          <td className="border-[2px] border-[#557961]">2섹터</td>
          <td className="border-[2px] border-[#557961]">3섹터</td>
          <td className="border-[2px] border-[#557961]">4섹터</td>
          <td className="border-[2px] border-[#557961]">5섹터</td>
        </tr>
        <tr>
          <td className="border-[2px] border-[#557961] font-medium">20:00</td>
          <td className="border-[2px] border-[#557961] text-[#FF0000]">1조</td>
          <td className="border-[2px] border-[#557961] text-[#FFC300]">2조</td>
          <td className="border-[2px] border-[#557961] text-[#11C011]">3조</td>
          <td className="border-[2px] border-[#557961] text-[#0800FF]">4조</td>
          <td className="border-[2px] border-[#557961] text-[#8B1CE0]">5조</td>
        </tr>
        <tr>
          <td className="border-[2px] border-[#557961] font-medium">20:00</td>
          <td className="border-[2px] border-[#557961] text-[#FFC300]">2조</td>
          <td className="border-[2px] border-[#557961] text-[#11C011]">3조</td>
          <td className="border-[2px] border-[#557961] text-[#0800FF]">4조</td>
          <td className="border-[2px] border-[#557961] text-[#8B1CE0]">5조</td>
          <td className="border-[2px] border-[#557961] text-[#FF0000]">1조</td>
        </tr>
        <tr>
          <td className="border-[2px] border-[#557961] font-medium">20:00</td>
          <td className="border-[2px] border-[#557961] text-[#11C011]">3조</td>
          <td className="border-[2px] border-[#557961] text-[#0800FF]">4조</td>
          <td className="border-[2px] border-[#557961] text-[#8B1CE0]">5조</td>
          <td className="border-[2px] border-[#557961] text-[#FF0000]">1조</td>
          <td className="border-[2px] border-[#557961] text-[#FFC300]">2조</td>
        </tr>
        <tr>
          <td className="border-[2px] border-[#557961] font-medium">20:00</td>
          <td className="border-[2px] border-[#557961] text-[#0800FF]">4조</td>
          <td className="border-[2px] border-[#557961] text-[#8B1CE0]">5조</td>
          <td className="border-[2px] border-[#557961] text-[#FF0000]">1조</td>
          <td className="border-[2px] border-[#557961] text-[#FFC300]">2조</td>
          <td className="border-[2px] border-[#557961] text-[#11C011]">3조</td>
        </tr>
        <tr>
          <td className="border-[2px] border-[#557961] font-medium">20:00</td>
          <td className="border-[2px] border-[#557961] text-[#8B1CE0]">5조</td>
          <td className="border-[2px] border-[#557961] text-[#FF0000]">1조</td>
          <td className="border-[2px] border-[#557961] text-[#FFC300]">2조</td>
          <td className="border-[2px] border-[#557961] text-[#11C011]">3조</td>
          <td className="border-[2px] border-[#557961] text-[#0800FF]">4조</td>
        </tr>
      </tbody>
    </table>
  );
}

function MiniGame() {
  return (
    <table className="absolute bottom-[-6px] left-0 z-10 h-[294px] w-full table-fixed translate-y-full border-[2px] border-[#557961] bg-white text-center text-[1.125rem] font-bold text-[#333333]">
      <tbody>
        <tr>
          <td className="bg-[#557961] text-white">미니게임</td>
          <td className="bg-[#557961] text-white">점수</td>
        </tr>
        <tr>
          <td className="border-[1px] border-[#557961]">노랑</td>
          <td className="border-[1px] border-[#557961]">10</td>
        </tr>
        <tr>
          <td className="border-[1px] border-[#557961]">초록</td>
          <td className="border-[1px] border-[#557961]">20</td>
        </tr>
        <tr>
          <td className="border-[1px] border-[#557961]">파랑</td>
          <td className="border-[1px] border-[#557961]">30</td>
        </tr>
        <tr>
          <td className="border-[1px] border-[#557961]">남색</td>
          <td className="border-[1px] border-[#557961]">40</td>
        </tr>
        <tr>
          <td className="border-[1px] border-[#557961]">보라</td>
          <td className="border-[1px] border-[#557961]">50</td>
        </tr>
        <tr>
          <td className="border-[1px] border-[#557961]">갈색</td>
          <td className="border-[1px] border-[#557961]">60</td>
        </tr>
        <tr>
          <td className="border-[1px] border-[#557961]">검정</td>
          <td className="border-[1px] border-[#557961]">70</td>
        </tr>
      </tbody>
    </table>
  );
}
