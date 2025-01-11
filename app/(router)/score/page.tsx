import GoBackArrow from "@/app/components/GoBackArrow";
import Title from "@/app/components/Title";
import { PATH } from "@/app/const/path";
import Link from "next/link";
import EditScore from "./EditScore";
import RankScore from "./RankScore";

export default async function Page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const isEdit = (await searchParams.edit) === "true";

  return (
    <main className="relative mb-[150px] flex flex-col items-center">
      <GoBackArrow />
      <Title title="SCORE" color="#F35D4D" />
      <Link
        href={`${PATH.SCORE}?edit=${!isEdit}`}
        className={`mb-[21px] rounded-[35px] border-[1px] border-[#F35D4D] bg-[#F35D4D] px-[40px] py-[15px] text-[1.125rem] leading-[1.313rem] text-white`}
        style={{
          backgroundColor: isEdit ? "#FFFFFF" : "#F35D4D",
          color: isEdit ? "#F35D4D" : "#FFFFFF",
        }}
      >
        {isEdit ? "점수 보러가기" : "내 점수 등록하기"}
      </Link>
      {isEdit ? <EditScore /> : <RankScore />}
    </main>
  );
}
