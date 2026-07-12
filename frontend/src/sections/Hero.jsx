import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import heroImage from "../assets/images/hero.jpg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/70"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[6px] text-yellow-500"
        >
          Premium Bauxite Mining & Export
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-5xl font-black leading-tight md:text-7xl lg:text-8xl"
        >
          <span className="text-white">SAM</span>

          <span className="text-yellow-500">VED</span>

          <br />

          <span className="text-white">
            MINERALS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          Delivering premium-quality bauxite through responsible mining,
          efficient processing, and reliable export services to industries
          around the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Explore Products Button */}
          <button
            onClick={() => navigate("/products")}
            className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-yellow-600 hover:scale-105"
          >
            Explore Products
          </button>

          {/* Contact Button */}
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-900 hover:scale-105"
          >
            Contact Us
            <FaArrowRight />
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white">
          <div className="mt-2 h-3 w-1 rounded-full bg-white"></div>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;