import heroImage from "../assets/hero-img.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Hero() {
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
        "service_9mi4xc9",          // ✅ Service ID
        "template_s86a7ha",         // 🔴 REPLACE with your WORKING custom template ID
        {
          name: formData.name,
          number: formData.number,
          email: formData.email,
          industry: formData.industry,
          message: formData.message,
        },
        "w0cj1NthlgaWvcBNi"          // ✅ Public Key
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
    <section
      id="home"
      className="relative w-full h-[780px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* LEFT TEXT */}
      <div className="w-[55%] text-white pl-20">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Your Vision. <br />
          Our Systems. <br />
          One Exceptional Space.
        </h1>

        <p className="text-lg max-w-lg">
          Swift Rooms UAE’s premier provider of garden rooms, aluminium
          windows and doors.
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2">
        <div className="bg-white rounded-xl shadow-xl p-8 w-[380px]">

          <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              placeholder="Name*"
              required
            />

            <div className="grid grid-cols-2 gap-4">
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

            <input
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              placeholder="Industry*"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-24 border p-3 rounded"
              placeholder="Message..."
            />

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" required />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </label>

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