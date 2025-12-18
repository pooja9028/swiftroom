import { FaWhatsapp } from "react-icons/fa";

export default function StickyWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=%2B971505269149&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999] w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
