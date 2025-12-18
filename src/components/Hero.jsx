import heroImage from "../assets/hero-img.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    location: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_9mi4xc9",       // ✅ Service ID
        "template_s86a7ha",      // ✅ Template ID
        formData,
        "w0cj1NthlgaWvcBNi"      // ✅ Public Key
      )
      .then(() => {
        alert("Your request has been submitted successfully!");
        setFormData({
          name: "",
          number: "",
          email: "",
          location: "",
          projectType: "",
          message: "",
        });
        navigate("/thank-you");
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="home"
      className="relative w-full bg-cover bg-center pt-[120px] lg:pt-0"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Your Vision. <br />
            Our Systems. <br />
            One Exceptional Space.
          </h1>

          <p className="text-base sm:text-lg max-w-lg">
            Swift Rooms UAE’s premier provider of garden rooms, aluminium windows and doors.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-md mx-auto lg:mx-0">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Request a Quote
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              placeholder="Name*"
              required
            />

            {/* Number & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="border p-3 rounded"
                placeholder="Number*"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-3 rounded"
                placeholder="Email*"
                required
              />
            </div>

            {/* Location */}
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              placeholder="Location*"
              required
            />

            {/* Project Type */}
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full border p-3 rounded text-gray-700"
              required
            >
              <option value="">Project Type*</option>
              <option value="New Villa Build">New Villa Build</option>
              <option value="Renovation">Renovation</option>
              <option value="Garden Room / Glass Room">Garden Room / Glass Room</option>
              <option value="Other">Other</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-24 border p-3 rounded"
              placeholder="Message..."
            />

            {/* Consent */}
            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" required />
              I agree to be contacted regarding my enquiry.
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
