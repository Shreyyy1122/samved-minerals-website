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

            <p className="text-yellow-500 font-semibold">
              MINERALS
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              A trusted supplier and exporter of premium quality
              bauxite minerals from India. We believe in long-term
              partnerships, quality assurance and sustainable mining.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link className="transition hover:text-yellow-500" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="transition hover:text-yellow-500" to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link className="transition hover:text-yellow-500" to="/products">
                  Products
                </Link>
              </li>

              <li>
                <Link className="transition hover:text-yellow-500" to="/exports">
                  Exports
                </Link>
              </li>

              <li>
                <Link className="transition hover:text-yellow-500" to="/contact">
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

                <p>
                  +91 7058173800 <br />
                  +91 85117 03800
                </p>

              </div>

              <div className="flex items-start gap-4">

                <FaEnvelope className="mt-1 text-yellow-500" />

                <p>
                  sachin@samvedminerals.com
                  sammed@samvedminerals.com 
                  Samvedgoa@gmail.com

                </p>

              </div>

              <div className="flex items-start gap-4">

                <FaMapMarkerAlt className="mt-1 text-yellow-500" />

                <p>
                pune, Maharashtra, India
                  <br />
                  
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
              Stay connected with us.
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
            Designed with React + FastAPI
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;