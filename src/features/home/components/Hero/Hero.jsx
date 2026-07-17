import hero from "../../../../data/hero";
import Button from "../../../../components/ui/Button/Button";
import Badge from "../../../../components/ui/Badge/Badge";
import Container from "../../../../components/ui/Container/Container";
import { PROFILE_IMAGE } from "../../../../utils/constants";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-24">

      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-6">
              {hero.badge}
            </p>

            <h1 className="font-['Space_Grotesk'] font-extrabold leading-[1.05] text-5xl md:text-6xl lg:text-7xl mb-8">

              {hero.title.map((line) => (
                <div key={line}>{line}</div>
              ))}

            </h1>

            <p className="text-zinc-400 text-lg leading-8 max-w-xl mb-10">
              {hero.description}
            </p>

            <div className="flex gap-5 flex-wrap mb-10">

              <Button>
                {hero.buttons.primary}
              </Button>

              <Button variant="secondary">
                {hero.buttons.secondary}
              </Button>

            </div>

            <div className="flex flex-wrap gap-3">

              {hero.technologies.map((tech)=>(
                <Badge key={tech}>
                  {tech}
                </Badge>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity:0, scale:.9 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:.8 }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative">

              <div className="absolute -inset-8 rounded-full bg-blue-600/20 blur-[100px]" />

              <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">

                <img
                  src={PROFILE_IMAGE}
                  alt="Asif Iqbal"
                  className="w-[420px] rounded-[24px]"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}