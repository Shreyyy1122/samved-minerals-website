import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaShip,
  FaGlobeAsia,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";

import exportBanner from "../assets/images/export-banner.jpg";
import exportOverview from "../assets/images/export-overview.jpg";

function Exports() {
  return (
    <Layout>

      {/* ================= HERO ================= */}

      <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">

        <img
          src={exportBanner}
          alt="Export Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/60"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[8px] text-yellow-400"
          >
            Global Export Network
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-5xl font-black leading-tight md:text-7xl"
          >
            Exporting Premium Quality
            <br />
            <span className="text-yellow-400">
              Bauxite Worldwide
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
          >
            SAMVED MINERALS supplies premium-grade bauxite to industries
            across the world through reliable logistics, strict quality
            assurance, and timely deliveries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >

            <a
              href="/contact"
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-white transition hover:bg-yellow-600"
            >
              Request Quote
            </a>

            <a
              href="#overview"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Learn More
            </a>

          </motion.div>

        </div>

      </section>

      {/* ================= OVERVIEW ================= */}

      <section
        id="overview"
        className="bg-white py-24"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >

            <img
              src={exportOverview}
              alt="Export"
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="uppercase tracking-[5px] text-yellow-500">
              Export Excellence
            </p>

            <h2 className="mt-5 text-5xl font-black text-slate-900">
              Delivering Premium Bauxite Across The Globe
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              We provide premium-quality bauxite to industries around
              the world. Our efficient logistics network, experienced
              export team, and strict quality control ensure every
              shipment reaches its destination safely and on schedule.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-2xl text-yellow-500" />
                <span className="text-lg font-medium">
                  International Quality Standards
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaShip className="text-2xl text-yellow-500" />
                <span className="text-lg font-medium">
                  Reliable Global Shipping
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaFileAlt className="text-2xl text-yellow-500" />
                <span className="text-lg font-medium">
                  Complete Export Documentation
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaGlobeAsia className="text-2xl text-yellow-500" />
                <span className="text-lg font-medium">
                  Serving International Markets
                </span>
              </div>

            </div>

          </motion.div>

        </div>

      </section>
            {/* ================= EXPORT DESTINATIONS ================= */}
{/* Why Global Clients Choose Us */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <p className="uppercase tracking-[6px] text-yellow-500">
        WHY CHOOSE US
      </p>

      <h2 className="mt-4 text-5xl font-black text-slate-900">
        Trusted Export Partner
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
        We ensure every shipment meets international quality standards,
        reaches customers on time, and complies with export regulations.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900">
          Premium Quality
        </h3>
        <p className="mt-4 text-slate-600">
          Carefully processed bauxite with strict quality inspection.
        </p>
      </div>

      <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900">
          Timely Delivery
        </h3>
        <p className="mt-4 text-slate-600">
          Reliable shipping schedules for international customers.
        </p>
      </div>

      <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900">
          Export Documentation
        </h3>
        <p className="mt-4 text-slate-600">
          Complete handling of customs and export paperwork.
        </p>
      </div>

      <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900">
          Customer Support
        </h3>
        <p className="mt-4 text-slate-600">
          Dedicated assistance from inquiry to successful delivery.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ================= EXPORT PROCESS ================= */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-yellow-500">
              Export Workflow
            </p>

            <h2 className="mt-4 text-5xl font-black text-slate-900">
              Our Export Process
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Every shipment follows a carefully managed process,
              ensuring quality, safety and on-time international delivery.
            </p>

          </div>

          <div className="relative mt-24">

            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-yellow-200 lg:block"></div>

            {[
              {
                step: "01",
                title: "Quality Inspection",
                text: "Premium-grade bauxite is inspected and tested before dispatch.",
                icon: "✔",
              },
              {
                step: "02",
                title: "Packaging",
                text: "Materials are packed securely following export standards.",
                icon: "📦",
              },
              {
                step: "03",
                title: "Documentation",
                text: "Complete export documentation is prepared accurately.",
                icon: "📄",
              },
              {
                step: "04",
                title: "Global Shipping",
                text: "Cargo is transported safely to international destinations.",
                icon: "🚢",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                className={`mb-14 flex items-center ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >

                <div className="w-full lg:w-1/2">

                  <div className="rounded-3xl bg-slate-50 p-8 shadow-xl">

                    <div className="flex items-center gap-5">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-2xl text-white">
                        {item.icon}
                      </div>

                      <div>

                        <span className="text-sm font-bold tracking-widest text-yellow-500">
                          STEP {item.step}
                        </span>

                        <h3 className="mt-1 text-3xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                      </div>

                    </div>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      {item.text}
                    </p>

                  </div>

                </div>

                <div className="hidden lg:block lg:w-1/2"></div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* ================= STATISTICS ================= */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "15+",
                title: "Countries Served",
              },
              {
                number: "500K+",
                title: "Tons Exported",
              },
              {
                number: "100%",
                title: "Quality Checked",
              },
              {
                number: "24/7",
                title: "Customer Support",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="rounded-3xl bg-slate-800 p-10 text-center shadow-xl"
              >

                <h3 className="text-5xl font-black text-yellow-400">
                  {item.number}
                </h3>

                <p className="mt-4 text-lg text-gray-300">
                  {item.title}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-yellow-500">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-5xl font-black text-slate-900">
              Trusted Export Partner
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              We combine quality, efficiency, and reliability to deliver
              world-class mineral export solutions.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Premium Quality",
                text: "Every shipment undergoes strict quality inspection before export.",
                icon: "⭐",
              },
              {
                title: "Reliable Logistics",
                text: "Efficient transportation and timely worldwide deliveries.",
                icon: "🚢",
              },
              {
                title: "Global Reach",
                text: "Serving customers across Asia and international markets.",
                icon: "🌍",
              },
              {
                title: "Experienced Team",
                text: "Professional experts managing every export operation.",
                icon: "👷",
              },
              {
                title: "Transparent Process",
                text: "Complete documentation and customer communication.",
                icon: "📄",
              },
              {
                title: "Long-Term Partnerships",
                text: "Building trust through consistent quality and service.",
                icon: "🤝",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-3xl text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

<section className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-24">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <h2 className="text-5xl font-black text-white">
      Ready To Import Premium Bauxite?
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-yellow-100">
      Partner with SAMVED MINERALS for dependable global supply,
      premium quality, and professional export services tailored
      to your industrial requirements.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-5">

      <Link
  to="/contact#inquiry-form"
  className="rounded-full bg-white px-10 py-4 text-lg font-bold text-slate-900 transition hover:scale-105"
>
  Contact Us
</Link>

      <Link
        to="/products"
        className="rounded-full border-2 border-white px-10 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-slate-900"
      >
        View Products
      </Link>

    </div>

  </div>

</section>

    </Layout>
  );
}

export default Exports;