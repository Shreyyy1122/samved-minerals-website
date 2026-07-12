import { motion } from "framer-motion";
import {
  FaSearch,
  FaTruckMoving,
  FaCogs,
  FaShip,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch size={40} />,
    title: "Exploration",
    description:
      "Identifying high-quality bauxite reserves through geological surveys and detailed site analysis.",
  },
  {
    icon: <FaTruckMoving size={40} />,
    title: "Extraction",
    description:
      "Responsible mining using modern machinery while following sustainable mining practices.",
  },
  {
    icon: <FaCogs size={40} />,
    title: "Processing",
    description:
      "Crushing, grading, and quality inspection to meet industrial and export standards.",
  },
  {
    icon: <FaShip size={40} />,
    title: "Export",
    description:
      "Secure packaging, documentation, and worldwide shipping through trusted logistics partners.",
  },
];

function MiningProcess() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-yellow-600 font-semibold">
            Our Process
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            From Mine to Global Markets
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Every shipment follows a carefully managed process to ensure
            consistent quality, timely delivery, and customer satisfaction.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-yellow-500 lg:block"></div>

          <div className="grid gap-12 lg:grid-cols-4">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative text-center"
              >

                {/* Circle */}

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500 text-white shadow-xl">

                  {step.icon}

                </div>

                {/* Step Number */}

                <div className="mt-6 text-sm font-bold uppercase tracking-[3px] text-yellow-600">
                  Step {index + 1}
                </div>

                {/* Card */}

                <div className="mt-6 rounded-3xl bg-slate-50 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-600">
                    {step.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default MiningProcess;