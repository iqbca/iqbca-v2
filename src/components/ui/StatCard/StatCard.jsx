import { motion } from "framer-motion";

export default function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-lg
      p-8
      text-center
      "
    >
      <h2 className="text-4xl font-bold mb-2">
        {number}
      </h2>

      <p className="text-zinc-400">
        {label}
      </p>
    </motion.div>
  );
}