import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaCheckCircle,
  FaGlobeAsia,
  FaIndustry,
  FaUsers,
} from "react-icons/fa";

import aboutBanner from "../assets/images/hero.jpg";
import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <Layout>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-32 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${aboutBanner})`,
          }}
        />

        <div className="absolute inset-0 bg-slate-950/75"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[5px] text-yellow-500"
          >
            About Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-5xl font-black md:text-7xl"
          >
            Building Trust Through
            <br />
            Quality Minerals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
          >
            SAMVED MINERALS is committed to supplying premium-quality
            bauxite through responsible mining, efficient processing,
            and dependable export solutions across global markets.
          </motion.p>

        </div>

      </section>

      {/* Company Story */}
      <section className="bg-white py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <img
              src={aboutImage}
              alt="SAMVED MINERALS"
              className="rounded-3xl shadow-2xl"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[4px] text-yellow-500">
              Who We Are
            </p>

            <h2 className="mt-5 text-5xl font-black text-slate-900">
              About SAMVED MINERALS
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              SAMVED MINERALS is a trusted mining and export company
              specializing in premium-quality bauxite. With a strong
              commitment to excellence, sustainability, and customer
              satisfaction, we deliver reliable mineral solutions to
              industries worldwide.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our operations follow responsible mining practices while
              maintaining high-quality standards from extraction to
              international delivery.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-500 text-xl" />
                <span>Premium Grade Bauxite</span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-500 text-xl" />
                <span>Responsible Mining Practices</span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-500 text-xl" />
                <span>Reliable Global Export Network</span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-500 text-xl" />
                <span>Customer-Focused Approach</span>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Statistics */}
      <section className="bg-slate-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center text-white md:grid-cols-2 lg:grid-cols-4">

          <div>
            <FaIndustry className="mx-auto text-5xl text-yellow-500" />
            <h3 className="mt-6 text-5xl font-black">10+</h3>
            <p className="mt-2 text-gray-300">Years Experience</p>
          </div>

          <div>
            <FaGlobeAsia className="mx-auto text-5xl text-yellow-500" />
            <h3 className="mt-6 text-5xl font-black">20+</h3>
            <p className="mt-2 text-gray-300">Export Destinations</p>
          </div>

          <div>
            <FaUsers className="mx-auto text-5xl text-yellow-500" />
            <h3 className="mt-6 text-5xl font-black">100+</h3>
            <p className="mt-2 text-gray-300">Happy Clients</p>
          </div>

          <div>
            <FaIndustry className="mx-auto text-5xl text-yellow-500" />
            <h3 className="mt-6 text-5xl font-black">24/7</h3>
            <p className="mt-2 text-gray-300">Customer Support</p>
          </div>

        </div>

      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-100 py-24">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            className="rounded-3xl bg-white p-10 shadow-xl"
          >

            <FaBullseye className="text-5xl text-yellow-500" />

            <h3 className="mt-8 text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              To supply premium-quality minerals while maintaining the
              highest standards of sustainability, innovation, and
              customer satisfaction.
            </p>

          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white p-10 shadow-xl"
          >

            <FaEye className="text-5xl text-yellow-500" />

            <h3 className="mt-8 text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              To become one of India's leading exporters of premium
              minerals by delivering consistent quality and building
              lasting global partnerships.
            </p>

          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-yellow-500 py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-5xl font-black text-slate-900">
            Let's Build Long-Term Partnerships
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-800">
            Whether you're looking for premium-quality bauxite,
            dependable export solutions, or long-term mineral supply,
            SAMVED MINERALS is ready to serve your business.
          </p>

          <button className="mt-12 rounded-full bg-slate-900 px-10 py-4 text-lg font-bold text-white transition hover:bg-black">
            Contact Us
          </button>

        </div>

      </section>

    </Layout>
  );
}

export default About;