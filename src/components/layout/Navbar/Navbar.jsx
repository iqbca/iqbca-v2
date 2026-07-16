import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  "Home",
  "About",
  "Experience",
  "Platforms",
  "Projects",
  "Resume",
  "Contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/50 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        <h1 className="font-bold tracking-[4px] text-xl">
          ASIF IQBAL
        </h1>

        <div className="hidden lg:flex gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={30}/> : <HiMenu size={30}/>}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#111217] border-t border-white/10">

          {links.map((link)=>(
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              className="block px-8 py-5 border-b border-white/5 hover:bg-white/5"
              onClick={()=>setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}