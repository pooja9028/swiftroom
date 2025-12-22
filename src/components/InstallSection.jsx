import productPVCu from "../assets/pvc-sercice.jpeg";
import productAluminum from "../assets/sliding-door-01.jpeg";
import productBi from "../assets/BI-FoldingDoors.jpeg";
import productWindow from "../assets/windows.jpeg";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


const installs = [
  { title: "Aluminum Sliding Door", image: productAluminum },
  { title: "Aluminium Bi-Folding Doors", image: productBi },
  { title: "Aluminium Windows", image: productWindow },
  { title: "PVCu Windows & Door", image: productPVCu },
];

export default function InstallSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
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
        "service_9mi4xc9",        // ✅ Service ID
        "template_s86a7ha",       // ✅ Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          name: formData.name,
          email: formData.email,
          number: formData.number,
          industry: formData.industry,
          message: `Product: ${selected}\n${formData.message}`,
        },
        "w0cj1NthlgaWvcBNi"        // ✅ Public Key
      )
      .then(() => {
        alert("Your enquiry has been sent successfully!");

        setFormData({
          name: "",
          email: "",
          number: "",
          industry: "",
          message: "",
        });

        setOpen(false);
        navigate("/thank-you"); // ✅ THIS WAS MISSING
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send enquiry. Please try again.");
      });
  };

  return (
    <section id="services" className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          What We Install
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto mb-12"
        >
          Premium aluminium & PVC solutions designed for modern living.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {installs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => {
                setSelected(item.title);
                setOpen(true);
              }}
              className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40" />

              <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14">
          <button
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  className="px-10 py-4 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition"
>
  Submit Enquiry
</button>

        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 text-left"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Enquiry Form</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-black"
                >
                  ✕
                </button>
              </div>

              {selected && (
                <p className="text-sm text-gray-600 mb-4">
                  Product: <span className="font-medium">{selected}</span>
                </p>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />

                <input
                  type="tel"
                  name="number"
                  placeholder="Phone Number"
                  required
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />

                <input
                  type="text"
                  name="industry"
                  placeholder="Industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition"
                >
                  Send Enquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
