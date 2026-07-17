import { motion } from "framer-motion";

export default function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
      rounded-3xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-8
      text-center
      transition
      "
    >
      <h2 className="text-5xl font-black text-white mb-3">
        {number}
      </h2>

      <p className="text-zinc-400">
        {label}
      </p>
    </motion.div>
  );
}