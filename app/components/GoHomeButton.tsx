"use client";

import Link from "next/link";
import { PATH } from "../const/path";
import { House } from "../shared/svgs";
import { usePathname } from "next/navigation";

export default function GoHomeButton() {
  const pathname = usePathname();

  if (pathname === PATH.HOME || pathname === PATH.MENU) return;
  return (
    <Link
      href={PATH.HOME}
      className="fixed bottom-[32px] left-1/2 flex aspect-square h-auto w-[50px] -translate-x-1/2 items-center justify-center rounded-[50%] bg-white"
    >
      <House />
    </Link>
  );
}
