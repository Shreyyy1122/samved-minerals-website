import { Link } from "react-router-dom";

import cementBauxite from "../assets/images/cement-grade-bauxite.jpg";
import ironOre from "../assets/images/iron-ore.jpg";
import bauxiteOre from "../assets/images/bauxite-ore.jpg";

function ProductsHighlight() {
  const products = [
    {
      title: "Cement Grade Bauxite",
      image: cementBauxite,
      description:
        "High-quality cement grade bauxite used in cement manufacturing and refractory applications.",
      applications: [
        "Cement Manufacturing",
        "High Alumina Cement",
        "Refractory Industry",
      ],
    },
    {
      title: "Iron Ore",
      image: ironOre,
      description:
        "Premium quality iron ore supplied for steel production and industrial applications.",
      applications: [
        "Steel Manufacturing",
        "Foundries",
        "Industrial Processing",
      ],
    },
    {
      title: "Bauxite Ore",
      image: bauxiteOre,
      description:
        "Export-grade bauxite ore suitable for aluminium and industrial applications.",
      applications: [
        "Aluminium Industry",
        "Refractory Industry",
        "Chemical Industry",
      ],
    },
  ];

  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-yellow-500">
            Our Products
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Our Core Products
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            SAMVED MINERALS supplies premium-quality minerals to domestic and
            international markets with consistent quality and reliable logistics.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="h-72 w-full object-cover"
              />

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {product.description}
                </p>

                <ul className="mt-6 space-y-3 text-gray-600">
                  {product.applications.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>

                <Link
                  to="/contact#inquiry-form"
                  className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-3 font-bold text-white transition hover:bg-yellow-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsHighlight;