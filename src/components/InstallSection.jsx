import productImg from "../assets/Img-product.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const installs = [
  {
    title: "Aluminum Sliding Door",
    image:
      productImg,
  },
  {
    title: "Aluminium Bi-Folding Doors",
    image:
      productImg,
  },
  {
    title: "Aluminium Windows",
    image:
      productImg,
  },
  {
    title: "PVCu Windows & Door",
    image:
      productImg,
  },
];

export default function InstallSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <section className="w-full py-20 bg-white">
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
            onClick={() => setOpen(true)}
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
                <h3 className="text-xl font-semibold">
                  Enquiry Form
                </h3>
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

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <input
                  type="text"
                  placeholder="Industry"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <textarea
                  placeholder="Message"
                  rows="3"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
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
