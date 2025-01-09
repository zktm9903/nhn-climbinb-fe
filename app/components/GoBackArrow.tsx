"use client";

import { useRouter } from "next/navigation";
import { LeftArrow } from "../shared/svgs";

export default function GoBackArrow() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <LeftArrow className="absolute left-[14px] top-[20px] cursor-pointer" />
    </button>
  );
}
