import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import contactBanner from "../assets/images/contact-banner.jpg";

function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.hash === "#inquiry-form") {
      const element = document.getElementById("inquiry-form");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

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
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success(
          "Inquiry submitted successfully! Our team will contact you shortly."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        toast.error("Failed to send inquiry.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 pt-36 pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${contactBanner})` }}
        />

        <div className="absolute inset-0 bg-slate-900/60" />

        <div className="relative mx-auto max-w-7xl px-6 text-center text-white">
          <motion.p className="uppercase tracking-[5px] text-yellow-500">
            Contact Us
          </motion.p>

          <motion.h1 className="mt-6 text-6xl font-black">
            Get in Touch
          </motion.h1>

          <motion.p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            We are ready to help with exports, pricing, and business inquiries.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

          {/* CONTACT FORM */}
          <div
            id="inquiry-form"
            className="rounded-3xl bg-white p-10 shadow-xl"
          >
            <h2 className="text-4xl font-bold text-slate-900">
              Send Inquiry
            </h2>

            <p className="mt-4 text-gray-600">
              Fill out the form below and our team will contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-xl border p-4 outline-none focus:border-yellow-500"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl border p-4 outline-none focus:border-yellow-500"
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-xl border p-4 outline-none focus:border-yellow-500"
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full rounded-xl border p-4 outline-none focus:border-yellow-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl border p-4 outline-none focus:border-yellow-500"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-yellow-500 py-4 font-bold text-white transition hover:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-xl">
            <h2 className="text-4xl font-bold">
              Contact Information
            </h2>

            <p className="mt-5 text-gray-300">
              Reach us through any of the following methods.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-xl text-yellow-500" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">+91 70581 73800</p>
                  <p className="text-gray-400">+91 85117 03800</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="mt-1 text-xl text-yellow-500" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">samvedgoa@gmail.com</p>
                  <p className="text-gray-400">sachin@samvedminerals.com</p>
                  <p className="text-gray-400">sammed@samvedminerals.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-xl text-yellow-500" />
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-gray-400">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="mt-1 text-xl text-yellow-500" />
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-gray-400">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-12 rounded-2xl bg-yellow-500 p-8 text-slate-900">
              <h3 className="text-2xl font-bold">
                Export Worldwide
              </h3>

              <p className="mt-3">
                We supply premium-quality Cement Grade Bauxite,
                Iron Ore and Bauxite Ore to domestic and international
                markets with reliable logistics and consistent quality.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}

export default Contact;