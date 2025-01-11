"use client";

import { usePathname, useRouter } from "next/navigation";
import { LeftArrow } from "../shared/svgs";
import { PATH } from "../const/path";

export default function GoBackArrow() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      onClick={() => {
        if (pathname === PATH.SCORE) {
          router.back();
          return;
        }
        router.push(pathname === PATH.MENU ? PATH.HOME : PATH.MENU);
      }}
    >
      <LeftArrow className="absolute left-[14px] top-[20px] cursor-pointer" />
    </button>
  );
}
