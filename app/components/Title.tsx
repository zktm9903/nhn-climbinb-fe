export default function Title({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  return (
    <p
      className="mb-[35px] mt-[64px] text-center text-[1.875rem] font-bold leading-[2.25rem]"
      style={{ color }}
    >
      {title}
    </p>
  );
}
