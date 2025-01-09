import { getTeams } from "@/app/apis/team";
import GoBackArrow from "@/app/components/GoBackArrow";
import Title from "@/app/components/Title";
import { PATH } from "@/app/const/path";
import { Star } from "@/app/shared/svgs";
import Link from "next/link";

async function getAllTeams() {
  const teams = await getTeams();
  return teams;
}

export default async function Page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const id = (await searchParams.id) as string;
  const teams = (await getAllTeams()).teamList
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((team) => ({
      ...team,
      memberList: team.memberList.sort((a, b) => a.name.localeCompare(b.name)),
    }));

  return (
    <main className="relative flex flex-col items-center">
      <GoBackArrow />
      <Title title="TEAM" color="#F7C3CB" />

      <div className="mb-[24px] flex w-full flex-wrap justify-center gap-[18px]">
        {teams.map((_, idx) => (
          <Link
            key={idx}
            href={`${PATH.TEAM}?id=${idx + 1}`}
            className={`flex aspect-square w-[51px] items-center justify-center rounded-full border-[1px] border-[#F7C3CB] text-[1.875rem] font-bold`}
            style={{
              color: idx + 1 === Number(id) ? "#F7C3CB" : "white",
              backgroundColor: idx + 1 === Number(id) ? "white" : "#F7C3CB",
            }}
          >
            {idx + 1}
          </Link>
        ))}
      </div>

      <table className="w-[calc(100%-24px)] table-fixed bg-white text-center text-[1.563rem] font-bold leading-[2.031rem]">
        <thead className="bg-[#F7C3CB] text-white">
          <tr>
            <td className="border-[1px] border-[#F7C3CB] py-[14px]">{id}조</td>
            <td className="border-[1px] border-[#F7C3CB] py-[14px]">소속</td>
          </tr>
        </thead>
        <tbody>
          {teams[parseInt(id) - 1]?.memberList.map((member) => (
            <tr key={member.name}>
              <td className="flex justify-center border-[1px] border-[#F7C3CB] py-[14px]">
                <p className="relative">
                  {member.name}
                  {member.leaderFlag && (
                    <Star className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full" />
                  )}
                </p>
              </td>
              <td className="border-[1px] border-[#F7C3CB] py-[14px]">
                {member.organization}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
