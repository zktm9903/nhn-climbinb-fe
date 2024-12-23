import type { Metadata } from "next";
import "../globals.css";

import localFont from "next/font/local";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "NHN MOVE | 서울숲 잠실 대회",
  description: "드궤자~",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard bg-[#F8F5EF]`}>
        {children}
      </body>
    </html>
  );
}
