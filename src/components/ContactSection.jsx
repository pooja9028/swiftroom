import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#F1FCFA] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Let’s Build Something 
 <br /> Exceptional Together
          </h2>

          <p className="text-gray-700 mb-6">
            Have a project in mind?
          </p>

          <p className="text-gray-700 mb-6">
            Get in touch with our team today for a free consultation and site visit.
          </p>

          <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-[#006F5F] text-xl" />
            <a href="mailto:Hello@swiftrooms.ae" className="text-lg text-gray-900">
              Hello@swiftrooms.ae
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-[#006F5F] text-xl" />
            <a href="tel:+0987654321" className="text-lg text-gray-900">
             043474240
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaMap className="text-[#006F5F] text-xl" />
           Showroom:
ET JAR - J1 Complex

Block A,<br> Warehouse 11-12

Jebel Ali, Ind Area 1
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <form
            action="https://formsubmit.co/hello@swiftrooms.ae"
            method="POST"
            className="space-y-5"
          >
            {/* REQUIRED CONFIG */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Website Enquiry" />

            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Number*"
                required
                className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <input
              type="text"
              name="industry"
              placeholder="Industry*"
              required
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Lorem Ipsum is simply?"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <div className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1" />
              <p className="text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#006F5F] text-white py-3 rounded-md font-semibold hover:bg-[#005546] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
