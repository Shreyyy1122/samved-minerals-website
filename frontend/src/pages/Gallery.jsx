import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import galleryBanner from "../assets/images/gallery-banner.jpg";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const images = [
  {
    image: gallery1,
    title: "Mining Operations",
  },
  {
    image: gallery2,
    title: "Processing Plant",
  },
  {
    image: gallery3,
    title: "Heavy Equipment",
  },
  {
    image: gallery4,
    title: "Export Activities",
  },
  {
    image: gallery5,
    title: "Stock Yard",
  },
  {
    image: gallery6,
    title: "Quality Inspection",
  },
];

function Gallery() {
  return (
    <Layout>
      {/* ================= HERO ================= */}

      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={galleryBanner}
          alt="Gallery Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/70"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="px-6 text-center text-white">
            <p className="uppercase tracking-[8px] text-yellow-400">
              Gallery
            </p>

            <h1 className="mt-6 text-5xl font-black md:text-7xl">
              Our Mining Journey
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300 md:text-xl">
              Explore our mining operations, heavy machinery,
              processing plants, stock yards and export activities
              through our gallery.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-yellow-500">
              Photo Gallery
            </p>

            <h2 className="mt-4 text-5xl font-black text-slate-900">
              Explore Our Operations
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              A glimpse into our mining excellence, world-class
              infrastructure and international export operations.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {images.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h2 className="text-5xl font-black text-yellow-500">
                150+
              </h2>

              <p className="mt-3 text-gray-300">
                Project Images
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-yellow-500">
                20+
              </h2>

              <p className="mt-3 text-gray-300">
                Mining Locations
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-yellow-500">
                10+
              </h2>

              <p className="mt-3 text-gray-300">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-yellow-500">
                100%
              </h2>

              <p className="mt-3 text-gray-300">
                Quality Commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="uppercase tracking-[5px] text-yellow-500">
            Let's Work Together
          </p>

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            Looking for a Trusted Mineral Supplier?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600">
            SAMVED MINERALS supplies premium-grade bauxite with
            dependable logistics, consistent quality and reliable
            export services across international markets.
          </p>

          <Link
            to="/contact#inquiry-form"
            className="mt-10 inline-block rounded-full bg-yellow-500 px-10 py-4 text-lg font-bold text-white transition duration-300 hover:bg-yellow-600 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default Gallery;