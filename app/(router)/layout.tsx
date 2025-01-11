import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import GoHomeButton from "../components/GoHomeButton";
import { Suspense } from "react";
import TanStackQueryProvider from "../components/TanStackQueryProvider";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "NHN MOVE | 서울숲 잠실 대회",
  description: "made by nhn move",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} bg-[#F8F5EF] font-pretendard`}>
        <div className="flex min-h-[852px] w-screen justify-center">
          <div className="relative h-full w-full max-w-[450px]">
            <TanStackQueryProvider>
              <Suspense>{children}</Suspense>
            </TanStackQueryProvider>
            <GoHomeButton />
          </div>
        </div>
      </body>
    </html>
  );
}
