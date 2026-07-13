import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919324127072?text=Hello%20SAMVED%20MINERALS,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppButton;