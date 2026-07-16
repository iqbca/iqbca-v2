export default function Badge({ children }) {
  return (
    <span
      className="
      inline-flex
      px-4
      py-2
      rounded-full
      bg-white/5
      border
      border-white/10
      text-sm
      text-zinc-300
      backdrop-blur-md
      "
    >
      {children}
    </span>
  );
}