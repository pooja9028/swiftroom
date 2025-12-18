import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function ThankYou() {
  return (
    <>
 

     <section className="min-h-screen bg-[#F1FCFA] px-4 pt-28 md:pt-40 pb-24">



       <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10 text-center">

          
          {/* Icon */}
          <FaCheckCircle className="text-emerald-600 text-6xl mx-auto mb-6" />

          {/* Heading */}
          <h1 className="text-3xl font-bold text-[#006F5F] mb-3">
            Thank You!
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-6">
            Your enquiry has been successfully received.  
            Our team will contact you within <b>24 hours</b>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 rounded-lg border border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-50 transition"
            >
              Back to Home
            </Link>

            <a
              href="https://wa.me/971XXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-emerald-700 transition"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>

          {/* Trust Line */}
          <p className="text-xs text-gray-400 mt-6">
            Swiftrooms • Windows • Doors • Glass Rooms
          </p>
        </div>
      </section>

  
    </>
  );
}
