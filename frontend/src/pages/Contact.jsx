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
      setTimeout(() => {
        const element = document.getElementById("inquiry-form");

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);
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
      const API =
        import.meta.env.VITE_API_URL || "http://localhost:8000";

      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
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
        toast.error(data.message || "Failed to send inquiry.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Unable to connect to server.");
    }

    setLoading(false);
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-900 pt-36 pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${contactBanner})`,
          }}
        />

        <div className="absolute inset-0 bg-slate-900/60" />

        <div className="relative mx-auto max-w-7xl px-6 text-center text-white">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[6px] text-yellow-500"
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-5xl font-black md:text-7xl"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-300"
          >
            We'd love to hear from you. Send us your inquiry and we'll get
            back to you as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

          {/* FORM */}
          <div
            id="inquiry-form"
            className="rounded-3xl bg-white p-10 shadow-xl"
          >
            <h2 className="text-4xl font-black text-slate-900">
              Send Inquiry
            </h2>

            <p className="mt-4 text-gray-600">
              Fill out the form and our team will contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 focus:border-yellow-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 focus:border-yellow-500 outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border p-4 focus:border-yellow-500 outline-none"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-xl border p-4 focus:border-yellow-500 outline-none"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 focus:border-yellow-500 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-yellow-500 py-4 font-bold text-white transition hover:bg-yellow-600"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-xl">
            <h2 className="text-4xl font-black">
              Contact Information
            </h2>

            <div className="mt-10 space-y-8">

              <div className="flex gap-4">
                <FaPhoneAlt className="mt-1 text-yellow-500 text-xl" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+91 70581 73800</p>
                  <p>+91 85117 03800</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 text-yellow-500 text-xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>sachin@samvedminerals.com</p>
                  <p>sammed@samvedminerals.com</p>
                  <p>samvedgoa@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-yellow-500 text-xl" />
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p>Pune, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClock className="mt-1 text-yellow-500 text-xl" />
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p>Monday - Saturday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>

            </div>

            <div className="mt-12 rounded-2xl bg-yellow-500 p-8 text-slate-900">
              <h3 className="text-2xl font-bold">
                Export Worldwide
              </h3>

              <p className="mt-4">
                We export premium Cement Grade Bauxite, Iron Ore and Bauxite
                Ore with reliable logistics and consistent quality across
                domestic and international markets.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}

export default Contact;