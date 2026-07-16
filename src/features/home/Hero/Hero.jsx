import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-8 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-4">
            Investment Analytics Engineer
          </p>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 font-['Space_Grotesk']">

            Building Institutional
            <br />
            Analytics Platforms
            <br />
            for Modern
            <br />
            Investment Teams

          </h1>

          <p className="text-zinc-400 text-lg leading-8 max-w-xl mb-10">

            I build institutional-grade portfolio analytics,
            reporting automation, and investment intelligence
            platforms using Python, SQL, Power BI and Excel.

          </p>

          <div className="flex flex-wrap gap-5">

            <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold">

              Explore Platforms

            </button>

            <button className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-white transition">

              Download Resume

            </button>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute -inset-5 rounded-full bg-blue-600 blur-3xl opacity-20"/>

            <img
              src="/images/profile/profile.png"
              alt="Asif Iqbal"
              className="relative w-[360px] lg:w-[450px] rounded-3xl shadow-2xl border border-zinc-800"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}