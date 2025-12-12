export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#D4EFE8]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
          
        {/* LEFT SIDE IMAGE */}
        <div>
          <img
            src="/src/assets/about-us.png"
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
            Built to Last. Designed to Elevate  
            <br />
            Your Living Space.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed 
            tristique metus proin id lorem odio.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-700 mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu 
            a felis placerat tincidunt. Curabitur lacinia, ligula vitae aliquam 
            faucibus, justo risus laoreet neque, non suscipit sapien lorem vel erat. 
            Integer ac ipsum at orci cursus ultricies. Duis nec sem id nunc 
            consectetur sollicitudin. Vestibulum ante ipsum primis in faucibus.
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
