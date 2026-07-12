import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import api from "../services/api";

function ContactSection() {
  const [formData, setFormData] = useState({
    full_name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await api.post("/contact/", formData);

      alert(response.data.message);

      setFormData({
        full_name: "",
        company: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-slate-100 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-yellow-500">
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Let's Build Long-Term Partnerships
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Interested in sourcing high-quality bauxite or discussing export
            opportunities? Fill out the form below and our team will get back
            to you as soon as possible.
          </p>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="space-y-8">

              <div className="flex items-start gap-5">

                <div className="rounded-xl bg-yellow-500 p-4 text-white text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Office Address
                  </h3>

                  <p className="text-gray-600">
                    Your Office Address
                    <br />
                    Maharashtra, India
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="rounded-xl bg-yellow-500 p-4 text-white text-xl">
                  <FaPhoneAlt />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Phone Number
                  </h3>

                  <p className="text-gray-600">
                    +91 7058173800
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="rounded-xl bg-yellow-500 p-4 text-white text-xl">
                  <FaEnvelope />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Email Address
                  </h3>

                  <p className="text-gray-600">
                    info@samvedminerals.com
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="rounded-xl bg-yellow-500 p-4 text-white text-xl">
                  <FaClock />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Business Hours
                  </h3>

                  <p className="text-gray-600">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-10 shadow-xl"
            >

              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="mb-5 w-full rounded-xl border p-4 outline-none transition focus:border-yellow-500"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                required
                className="mb-5 w-full rounded-xl border p-4 outline-none transition focus:border-yellow-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="mb-5 w-full rounded-xl border p-4 outline-none transition focus:border-yellow-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mb-5 w-full rounded-xl border p-4 outline-none transition focus:border-yellow-500"
              />

              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="mb-5 w-full rounded-xl border p-4 outline-none transition focus:border-yellow-500"
              >
                <option value="">Select Requirement</option>
                <option value="Bauxite">Bauxite</option>
                <option value="Bulk Supply">Bulk Supply</option>
                <option value="Export Inquiry">Export Inquiry</option>
              </select>

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="mb-6 w-full rounded-xl border p-4 outline-none transition focus:border-yellow-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-yellow-500 py-4 font-semibold text-white transition hover:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;