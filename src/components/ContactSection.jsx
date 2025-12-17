import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
  .send(
    "service_9mi4xc9",       // Service ID
    "template_s86a7ha",      // Template ID
    {
      from_name: formData.name,
      reply_to: formData.email,   // ✅ REQUIRED
      name: formData.name,
      number: formData.number,
      email: formData.email,
      industry: formData.industry,
      message: formData.message,
    },
    "w0cj1NthlgaWvcBNi"       // Public Key
  )
  .then(() => {
    alert("Your request has been submitted successfully!");
    setFormData({
      name: "",
      number: "",
      email: "",
      industry: "",
      message: "",
    });
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    alert("Something went wrong. Please try again.");
  });

  };

  return (
    <section id="contact" className="w-full bg-[#F1FCFA] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Lorem Ipsum <br /> Simply Dummy
          </h2>

          <p className="text-gray-700 mb-6">
            Lorem Ipsum Is Simply Dummy Printing And Typesetting
          </p>

          <p className="text-gray-700 mb-6">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.
          </p>

          <h3 className="font-semibold text-gray-900 mb-4">LOREM IPSUM</h3>

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-[#006F5F] text-xl" />
            <a href="mailto:info@loremipsum.com" className="text-lg text-gray-900">
              info@loremipsum.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-[#006F5F] text-xl" />
            <a href="tel:+0987654321" className="text-lg text-gray-900">
              +0 9876-54321
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="number"
                placeholder="Number*"
                required
                value={formData.number}
                onChange={handleChange}
                className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <input
              type="text"
              name="industry"
              placeholder="Industry*"
              required
              value={formData.industry}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Lorem Ipsum is simply?"
              value={formData.message}
              onChange={handleChange}
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