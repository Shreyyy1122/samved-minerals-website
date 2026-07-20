import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProducts = () => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById("products");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 250);
    } else {
      const section = document.getElementById("products");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      action: scrollToProducts,
    },
    {
      name: "Exports",
      path: "/exports",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="text-3xl font-black tracking-widest">
            <span className={scrolled ? "text-slate-900" : "text-white"}>
              SAM
            </span>
            <span className="text-yellow-500">VED</span>
          </span>

          <span className="text-sm font-semibold tracking-[5px] text-yellow-500">
            MINERALS
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) =>
            item.action ? (
              <button
                key={item.name}
                onClick={item.action}
                className={`font-medium transition ${
                  scrolled
                    ? "text-slate-700 hover:text-yellow-500"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition ${
                  location.pathname === item.path
                    ? "text-yellow-500"
                    : scrolled
                    ? "text-slate-700 hover:text-yellow-500"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Quote Button */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-yellow-500 px-6 py-3 font-semibold text-white transition hover:bg-yellow-600 lg:block"
        >
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`text-3xl lg:hidden ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-white shadow-xl lg:hidden">
          <div className="flex flex-col px-6 py-5">
            {navLinks.map((item) =>
              item.action ? (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="border-b py-4 text-left text-slate-700 transition hover:text-yellow-500"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="border-b py-4 text-slate-700 transition hover:text-yellow-500"
                >
                  {item.name}
                </Link>
              )
            )}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-5 rounded-xl bg-yellow-500 py-3 text-center font-semibold text-white"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;