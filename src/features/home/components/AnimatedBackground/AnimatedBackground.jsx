import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb20,transparent_45%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-32 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 left-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
      />
    <motion.div
  animate={{
    rotate: [0, 360],
  }}
  transition={{
    repeat: Infinity,
    duration: 80,
    ease: "linear",
  }}
  className="
  absolute
  right-10
  top-20
  w-[700px]
  h-[700px]
  rounded-full
  border
  border-white/5
  "
/>

<motion.div
  animate={{
    rotate: [360, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 120,
    ease: "linear",
  }}
  className="
  absolute
  left-[-150px]
  bottom-[-150px]
  w-[800px]
  h-[800px]
  rounded-full
  border
  border-blue-500/5
  "
/>
    </div>
  );
}