import { motion } from "framer-motion";
import {
  FaAward,
  FaGlobeAsia,
  FaLeaf,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward size={40} />,
    title: "Premium Quality",
    description:
      "High-grade bauxite processed with strict quality standards.",
  },
  {
    icon: <FaGlobeAsia size={40} />,
    title: "Global Export",
    description:
      "Reliable international shipping with complete documentation support.",
  },
  {
    icon: <FaLeaf size={40} />,
    title: "Sustainable Mining",
    description:
      "Responsible mining practices with environmental commitment.",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Trusted Partnership",
    description:
      "Long-term relationships built on transparency and reliability.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[4px] text-yellow-600 font-semibold">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Why Industries Trust
            <br />
            SAMVED MINERALS
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We combine premium-quality minerals, modern mining techniques,
            dependable logistics, and customer-focused service to deliver
            exceptional value worldwide.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-500 text-white">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;