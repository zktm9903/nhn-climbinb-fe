import GoBackArrow from "@/app/components/GoBackArrow";
import Title from "@/app/components/Title";

export default function Page() {
  return (
    <main className="relative flex flex-col items-center">
      <GoBackArrow />
      <Title title="RULE" color="#333333" />
      <table className="w-[calc(100%-54px)] border-[2px] border-[#333333] bg-white">
        <thead>
          <tr className="bg-[#333333] text-white">
            <td className="py-[18px] text-center text-[1.375rem]">
              점수계산방식
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-[17px] pb-[36px] pt-[17px]">
              <div className="mb-[33px]">
                <h1 className="mb-[5px] text-[1.25rem] font-bold">
                  1&#x29; 난이도별 기본점수
                </h1>
                <div className="grid w-[180px] grid-cols-2 text-[1.125rem] font-light leading-[1.563rem]">
                  <div className="flex flex-col">
                    <p>초록:100</p>
                    <p>파랑:300</p>
                    <p>남색:500</p>
                  </div>
                  <div className="flex flex-col">
                    <p>초록:100</p>
                    <p>파랑:300</p>
                    <p>남색:500</p>
                  </div>
                </div>
              </div>

              <div className="mb-[33px]">
                <h1 className="mb-[5px] text-[1.25rem] font-bold">
                  2&#x29; 같은 난이도를 반복하면 20점 추가
                </h1>
                <div className="mb-[5px] text-[1.125rem] font-light leading-[1.563rem]">
                  <p>1번째 : 기본점수</p>
                  <p>2번째 : 기본점수 + 20</p>
                  <p>3번째 : 기본점수 + 40</p>
                </div>
                <span className="font-semibold">예시&#x29;</span>
                <div className="mb-[5px] text-[1.125rem] font-light leading-[1.563rem]">
                  <p>남색2+보라2 =&#x3E; 500+520+700+720</p>
                  <p>파랑1+남색3 =&#x3E; 300+500+520+540</p>
                </div>
              </div>

              <div>
                <h1 className="mb-[5px] text-[1.25rem] font-bold">
                  3&#x29; 가장 높은 점수 10개까지만 반영
                </h1>
                <div className="flex gap-[3px]">
                  <span className="font-semibold">예시&#x29;</span>
                  <div className="mb-[5px] text-[1.125rem] font-light leading-[1.563rem]">
                    <p>초록3+남색4+보라4+갈색2</p>
                    <p>=&#x3E; 초록3개 미반영</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
