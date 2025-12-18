import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import FooterImage from "../assets/Swiftrooms-footer.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* FIVE COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">

          {/* COLUMN 1 */}
          <div>
            <img src={FooterImage} alt="SwiftRooms" className="w-40 mb-4" />

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Swift Rooms UAE’s premier provider of garden rooms, aluminium windows and doors.
            </p>

            <div className="border border-gray-700 w-full my-4"></div>

            <p className="text-xs text-gray-500">© 2025 All Rights Reserved</p>
          </div>

          {/* COLUMN 2 – Social + Phone */}
          <div>
            <h3 className="font-semibold mb-4">Follow us</h3>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-6 text-xl mb-6 text-white">
              <a
                href="https://www.facebook.com/swiftroomsUAE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/swiftrooms.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/uas/login-submit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=%2B971505269149&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.pinterest.com/swiftroomsuae/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
                aria-label="Pinterest"
              >
                <FaPinterestP />
              </a>
            </div>

            <h3 className="font-semibold mb-2">Call us</h3>
            <p className="text-gray-300 text-sm">+04 347 4240</p>
          </div>

          {/* COLUMN 3 – Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
           <ul className="space-y-2 text-gray-400 text-sm">
  <li>
    <a
      href="#about"
      className="hover:text-white cursor-pointer transition"
    >
      About Us
    </a>
  </li>

  <li>
    <a
      href="#services"
      className="hover:text-white cursor-pointer transition"
    >
      Services
    </a>
  </li>

  <li>
    <a
      href="#why-choose-us"
      className="hover:text-white cursor-pointer transition"
    >
      Why Choose Us
    </a>
  </li>

  <li>
    <a
      href="#testimonials"
      className="hover:text-white cursor-pointer transition"
    >
      Testimonials
    </a>
  </li>
</ul>

          </div>

          {/* COLUMN 4 – Showroom */}
          <div>
            <h3 className="font-semibold mb-4">SHOWROOM:</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>ET JAR - J1 Complex</li>
              <li>Block A, Warehouse 11-12</li>
              <li>Jebel Ali, Ind Area 1</li>
            </ul>
          </div>

          {/* COLUMN 5 – Factory */}
          <div>
            <h3 className="font-semibold mb-4">FACTORY:</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Dubai Real Estate Centre Ind Park</li>
              <li>Unit 1-B, Jebel Ali, Ind Area 1</li>
              <li>Factory: 04 323 1625</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
