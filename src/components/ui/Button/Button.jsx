import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  icon = false,
  onClick,
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-zinc-700 hover:border-white text-white bg-transparent",

    ghost:
      "hover:bg-white/10 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex
        items-center
        gap-2
        px-7
        py-4
        rounded-2xl
        font-medium
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        ${variants[variant]}
      `}
    >
      {children}

      {icon && (
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}