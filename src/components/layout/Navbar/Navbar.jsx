import navigation from "../../../data/navigation";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <h1 className="font-bold tracking-[4px] text-lg">
          ASIF IQBAL
        </h1>

        <div className="hidden lg:flex gap-8">

          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-zinc-400 hover:text-white transition"
            >
              {item.title}
            </a>
          ))}

        </div>

      </div>
    </nav>
  );
}