import { motion } from "framer-motion";
import { FaGlobeAsia, FaShip } from "react-icons/fa";

const countries = [
  "India",
  "United Arab Emirates",
  "China",
  "Vietnam",
  "Malaysia",
  "Indonesia",
];

function ExportNetwork() {
  return (
    <section className="bg-[#0F172A] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-yellow-400">
            Global Presence
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Export Network
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            We strive to supply premium-quality bauxite to customers across
            domestic and international markets through reliable logistics and
            efficient export operations.
          </p>

        </div>

        {/* Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="rounded-3xl bg-white/5 p-10 border border-white/10">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500">
                  <FaShip size={28} />
                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Worldwide Distribution
                  </h3>

                  <p className="text-gray-400">
                    Reliable export logistics for global customers.
                  </p>

                </div>

              </div>

              <p className="mt-8 leading-8 text-gray-300">
                Our focus is to deliver high-quality bauxite while maintaining
                consistent standards, dependable shipping, and long-term
                business relationships with clients worldwide.
              </p>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="grid grid-cols-2 gap-4">

              {countries.map((country, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-yellow-400 hover:bg-white/10"
                >

                  <FaGlobeAsia className="mb-4 text-3xl text-yellow-400" />

                  <h4 className="font-semibold">
                    {country}
                  </h4>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default ExportNetwork;