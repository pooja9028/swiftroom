import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";
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
            
              <li>About Us</li>
              <li>Services</li>
              <li>Why Choose Us</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* COLUMN 4 – Support */}
          <div>
            <h3 className="font-semibold mb-4">Showroom:</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>ET JAR - J1 Complex</li>
              <li>Block A, Warehouse 11-12</li>
              <li>Contact lorem</li>
              <li>Jebel Ali, Ind Area 1</li>
            </ul>
          </div>

          {/* COLUMN 5 – Company */}
          <div>
            <h3 className="font-semibold mb-4">FACTORY:</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Dubai Real Estate Centre Ind Park</li>
              <li>Unit 1-B, Jebel Ali, Ind Area 1</li>
              <li>Factory: 04 323 1625</li>
              
            </ul>
          </div>

        </div>

        {/* BOTTOM LINKS */}
       

      </div>
    </footer>
  );
}
