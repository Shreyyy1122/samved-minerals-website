import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <h2 className="text-3xl font-black tracking-wider">
              SAMVED
            </h2>

            <p className="font-semibold text-yellow-500">
              MINERALS
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              A trusted supplier and exporter of premium-quality
              bauxite minerals from India. We are committed to
              sustainable mining, consistent quality, and long-term
              partnerships across global markets.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-yellow-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/#about"
                  className="transition hover:text-yellow-500"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/#products"
                  className="transition hover:text-yellow-500"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/exports"
                  className="transition hover:text-yellow-500"
                >
                  Exports
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="transition hover:text-yellow-500"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-yellow-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-yellow-500" />

                <div>
                  <p>+91 70581 73800</p>
                  <p>+91 85117 03800</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="mt-1 text-yellow-500" />

                <div>
                  <p>sachin@samvedminerals.com</p>
                  <p>sammed@samvedminerals.com</p>
                  <p>samvedgoa@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-yellow-500" />

                <p>
                  Pune,
                  <br />
                  Maharashtra,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-6 text-xl font-bold">
              Follow Us
            </h3>

            <p className="text-gray-400">
              Stay connected with SAMVED MINERALS.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-xl bg-slate-800 p-4 transition hover:bg-yellow-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-4 transition hover:bg-yellow-500"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-4 transition hover:bg-yellow-500"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SAMVED MINERALS. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Developed by Shrey Kinikar
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;