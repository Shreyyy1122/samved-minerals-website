import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
            About Us
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-slate-900">
            Trusted Mining &
            <br />
            Export Company
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            SAMVED MINERALS specializes in mining, processing,
            and exporting premium-quality bauxite from India.
            We are committed to responsible mining,
            strict quality standards,
            and delivering reliable mineral solutions
            to customers across the globe.
          </p>

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-2xl text-yellow-500" />
              <p className="text-xl text-slate-800">
                Premium Quality Bauxite
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-2xl text-yellow-500" />
              <p className="text-xl text-slate-800">
                Sustainable Mining Practices
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-2xl text-yellow-500" />
              <p className="text-xl text-slate-800">
                Reliable Global Export Network
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-2xl text-yellow-500" />
              <p className="text-xl text-slate-800">
                Customer-Focused Solutions
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="group relative overflow-hidden rounded-[35px] shadow-2xl">

            <img
              src={aboutImage}
              alt="SAMVED MINERALS Mining Site"
              className="h-[620px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>

            {/* Caption */}
            <div className="absolute bottom-10 left-10">

              <p className="uppercase tracking-[4px] text-yellow-400">
                Since 2023
            
              </p>

              <h3 className="mt-3 text-4xl font-bold text-white">
                Premium Bauxite
                <br />
                Mining Operations
              </h3>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;