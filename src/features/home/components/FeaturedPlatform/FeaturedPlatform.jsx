import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container/Container";
import Button from "../../../../components/ui/Button/Button";
import Badge from "../../../../components/ui/Badge/Badge";

export default function FeaturedPlatform() {
  return (
    <section className="py-32">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
        >

          <div className="grid lg:grid-cols-2">

            {/* Dashboard */}

            <div className="bg-gradient-to-br from-blue-950 to-zinc-900 p-12 flex items-center justify-center">

              <div className="w-full aspect-video rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center">

                <span className="text-zinc-500 text-lg">
                  MIZAN Dashboard Preview
                </span>

              </div>

            </div>

            {/* Content */}

            <div className="p-12">

              <Badge>
                Active Development
              </Badge>

              <h2 className="text-5xl font-black mt-6 mb-4">
                MIZAN
              </h2>

              <p className="text-blue-400 uppercase tracking-[4px] mb-6">
                Institutional Portfolio Analytics Platform
              </p>

              <p className="text-zinc-400 leading-8 mb-10">
                Enterprise-grade investment analytics platform
                for portfolio performance reporting,
                benchmark analysis, risk analytics and
                reporting automation built using Python,
                PostgreSQL, Power BI and React.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">

                <Badge>Python</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>SQL</Badge>
                <Badge>Power BI</Badge>
                <Badge>React</Badge>

              </div>

              <div className="flex gap-4 flex-wrap">

                <Button>
                  View Platform
                </Button>

                <Button variant="secondary">
                  GitHub
                </Button>

              </div>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}