import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Exports from "./pages/Exports";

function App() {
  return (
    <>
      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Website Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exports" element={<Exports />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;