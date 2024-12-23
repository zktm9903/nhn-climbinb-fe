export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="h-full w-full max-w-[450px]">{children}</div>
    </div>
  );
}
