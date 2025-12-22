import aboutImage from "../assets/about.jfif";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#D4EFE8]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
          
        {/* LEFT SIDE IMAGE */}
        <div>
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="px-10 lg:px-20 py-16 flex flex-col justify-center">
          
          {/* Small Title */}
          <p className="text-sm tracking-widest text-gray-600 mb-3">
            ABOUT US
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-[#0b3d2e] leading-snug">
            Built to Last. Designed to Elevate Your Living Space.
 
            <br />
            Your Living Space.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mt-4">
            At Swift Rooms, we specialise in designing and installing premium garden rooms, aluminium windows, doors, and glass systems that enhance modern living.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-700 mt-6 leading-relaxed">
           
Our focus is on delivering functional, elegant, and durable solutions that blend seamlessly with your home or commercial space. From concept to completion, we ensure quality, precision, and customer satisfaction at every step.

          </p>

          {/* Submit Button */}
          <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className="mt-10 px-10 py-3 rounded-full bg-[#0b6b57] text-white font-medium hover:bg-[#0a5947] transition">
            Submit Enquiry
          </button>
        </div>

      </div>
    </section>
  );
}
