import { motion } from "framer-motion";

import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.jpg";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg";
import img6 from "../assets/images/gallery6.jpg";

const gallery = [
  {
    image: img1,
    title: "Mining Operations",
  },
  {
    image: img2,
    title: "Bauxite Extraction",
  },
  {
    image: img3,
    title: "Processing Plant",
  },
  {
    image: img4,
    title: "Heavy Machinery",
  },
  {
    image: img5,
    title: "Quality Inspection",
  },
  {
    image: img6,
    title: "Export Logistics",
  },
];

function GallerySection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-yellow-500">
            Our Gallery
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Inside Samved Minerals
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            A glimpse into our mining operations, processing facilities,
            equipment, and export activities.
          </p>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 opacity-0 transition duration-500 group-hover:opacity-100">

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default GallerySection;