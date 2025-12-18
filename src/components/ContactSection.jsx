import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    location: "",
    products: "",
    projectType: "",
    visitDate: "",
    visitTime: "",
    role: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_9mi4xc9",
        "template_s86a7ha",
        {
          name: formData.name,
          number: formData.number,
          email: formData.email,
          location: formData.location,
          products: formData.products,
          projectType: formData.projectType,
          visitDate: formData.visitDate,
          visitTime: formData.visitTime,
          role: formData.role,
          message: formData.message,
          reply_to: formData.email,
        },
        "w0cj1NthlgaWvcBNi"
      )
      .then(() => {
        navigate("/thank-you");
        setFormData({
          name: "",
          number: "",
          email: "",
          location: "",
          products: "",
          projectType: "",
          visitDate: "",
          visitTime: "",
          role: "",
          message: "",
        });
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="w-full bg-[#F1FCFA] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something <br /> Exceptional Together
          </h2>

          <p className="mb-6">Have a project in mind?</p>

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-[#006F5F]" />
            <a href="mailto:hello@swiftrooms.ae">hello@swiftrooms.ae</a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-[#006F5F]" />
            <a href="tel:043474240">043474240</a>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" placeholder="Name*" required value={formData.name} onChange={handleChange} className="input" />
              <input name="number" placeholder="Number*" required value={formData.number} onChange={handleChange} className="input" />
              <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} className="input" />
              <input name="location" placeholder="Location*" required value={formData.location} onChange={handleChange} className="input" />
            </div>

            <input name="products" placeholder="Products of Interest*" required value={formData.products} onChange={handleChange} className="input" />

            {/* Project Type Dropdown */}
            <select name="projectType" required value={formData.projectType} onChange={handleChange} className="input text-gray-500">
              <option value="">Project Type*</option>
              <option value="New Villa Build">New Villa Build</option>
              <option value="Renovation">Renovation</option>
              <option value="Garden Room / Glass Room">Garden Room / Glass Room</option>
              <option value="Other">Other</option>
            </select>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                name="visitDate"
                required
                min={new Date().toISOString().split("T")[0]}
                value={formData.visitDate}
                onChange={handleChange}
                className="input"
              />

             <div>
  <label className="block text-sm text-gray-600 mb-1">
    Preferred Visit Time*
  </label>

  <input
    type="time"
    name="visitTime"
    required
    step="900"          // 👈 15-minute intervals
    value={formData.visitTime}
    onChange={handleChange}
    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
  />
</div>


            </div>

            <input name="role" placeholder="Your Role*" required value={formData.role} onChange={handleChange} className="input" />

            <textarea name="message" rows="4" placeholder="Message" value={formData.message} onChange={handleChange} className="input" />

            <div className="flex items-start gap-3 text-sm">
              <input type="checkbox" required />
              <span>I agree to be contacted regarding my enquiry</span>
            </div>

            <button className="w-full bg-[#006F5F] text-white py-3 rounded-md font-semibold hover:bg-[#005546]">
              Submit
            </button>

          </form>
        </div>
      </div>

      {/* Tailwind helper */}
      <style>
        {`
          .input {
            width: 100%;
            border: 1px solid #e5e7eb;
            border-radius: 0.375rem;
            padding: 0.75rem 1rem;
            outline: none;
          }
          .input:focus {
            border-color: #059669;
            box-shadow: 0 0 0 2px rgba(5,150,105,.2);
          }
        `}
      </style>
    </section>
  );
}
