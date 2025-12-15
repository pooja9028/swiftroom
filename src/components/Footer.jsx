import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import Footer from "/src/assets/Swiftrooms-footer.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* FIVE COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">

          {/* COLUMN 1 */}
          <div>
            <img src={Footer} alt="SwiftRooms" className="w-40 mb-4" />

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue at lorem
              pretium feugiat vel quis magna.
            </p>

            <div className="border border-gray-700 w-full my-4"></div>

            <p className="text-xs text-gray-500">© 2025 All Rights Reserved</p>
          </div>

          {/* COLUMN 2 – Social + Phone */}
          <div>
            <h3 className="font-semibold mb-4">Follow us</h3>

            <div className="flex items-center gap-5 text-xl mb-6">
              <FaFacebookF className="cursor-pointer hover:text-emerald-400" />
              <FaTelegramPlane className="cursor-pointer hover:text-emerald-400" />
              <FaInstagram className="cursor-pointer hover:text-emerald-400" />
            </div>

            <h3 className="font-semibold mb-2">Call us</h3>
            <p className="text-gray-300 text-sm">+1 800 854-36-80</p>
          </div>

          {/* COLUMN 3 – Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Lorem ipsum</li>
              <li>Dolor sit amet</li>
              <li>Consectetur</li>
              <li>Adipiscing elit</li>
              <li>Sed do eiusmod</li>
            </ul>
          </div>

          {/* COLUMN 4 – Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Lorem support</li>
              <li>Help center</li>
              <li>Contact lorem</li>
              <li>Terms & conditions</li>
            </ul>
          </div>

          {/* COLUMN 5 – Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Lorem ipsum</li>
              <li>Dolor sit amet</li>
              <li>Consectetur</li>
              <li>Adipiscing elit</li>
              <li>Sed do eiusmod</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM LINKS */}
        <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-500 justify-center md:justify-start">
          <a className="hover:text-white">Privacy Policy</a>
          <a className="hover:text-white">Terms of Use</a>
          <a className="hover:text-white">Sales and Refunds</a>
          <a className="hover:text-white">Legal</a>
          <a className="hover:text-white">Site Map</a>
        </div>

      </div>
    </footer>
  );
}
