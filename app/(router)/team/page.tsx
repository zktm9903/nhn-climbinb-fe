import GoHomeArrow from "@/app/components/GoHomeArrow";
import Title from "@/app/components/Title";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const test = await searchParams.test;
  console.log("test", test);

  return (
    <main className="relative flex flex-col items-center">
      <GoHomeArrow />
      <Title title="TEAM" color="#F7C3CB" />

      <div className="flex w-full flex-wrap justify-center gap-[18px]">
        <button className="flex aspect-square w-[51px] items-center justify-center rounded-full border-[1px] border-[#F7C3CB] bg-[#F7C3CB] text-[1.875rem] font-bold text-white">
          1
        </button>
      </div>
    </main>
  );
}
