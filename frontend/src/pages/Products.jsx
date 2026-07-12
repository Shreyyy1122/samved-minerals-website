import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import {
  FaMountain,
  FaIndustry,
  FaBoxes,
  FaGlobeAsia,
} from "react-icons/fa";

const products = [
  {
    icon: <FaMountain size={40} />,
    title: "Bauxite Mining",
    description:
      "Extraction of premium-grade bauxite using responsible mining practices.",
  },
  {
    icon: <FaIndustry size={40} />,
    title: "Mineral Processing",
    description:
      "Efficient processing and preparation of minerals to customer specifications.",
  },
  {
    icon: <FaBoxes size={40} />,
    title: "Bulk Supply",
    description:
      "Reliable supply capabilities for industrial and commercial requirements.",
  },
  {
    icon: <FaGlobeAsia size={40} />,
    title: "Global Export",
    description:
      "Export solutions with dependable logistics and documentation support.",
  },
];

function Products() {
  return (
    <Layout>

      {/* Hero */}
      <section className="bg-slate-900 pt-40 pb-24 text-center text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="uppercase tracking-[6px] text-yellow-500">
            Products & Services
          </p>

          <h1 className="mt-5 text-6xl font-black">
            Premium Bauxite Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            SAMVED MINERALS supplies high-quality bauxite, mineral
            processing services and global export solutions with
            reliability, consistency and strict quality standards.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="uppercase tracking-[5px] text-yellow-500">
              What We Offer
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Our Products & Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Delivering premium-quality minerals and reliable export
              services to industries worldwide.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-500 text-white">
                  {product.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {product.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </Layout>
  );
}

export default Products;