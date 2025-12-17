import productImg from "../assets/Img-product.png";

export default function InstallSection() {
  const products = [
    { title: "Aluminum Sliding DOOR", price: "AED 7,500" },
    { title: "ALUMINIUM Bi–FOLDING DOORS", price: "AED 7,500" },
    { title: "ALUMINIUM Windows", price: "AED 7,500" },
    { title: "ALUMINIUM DOORS", price: "AED 7,500" },
    { title: "PVCu Windows & Door", price: "AED 7,500" }
  ];

  return (
    <section id = "services" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#075a4f]">What We Install</h2>
          <p className="text-gray-500 mt-2">
            Premium installation services for doors, windows, skylights, and outdoor living solutions.

          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 border hover:-translate-y-2 transition duration-300"
            >
              <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
                <img src={productImg} alt={item.title} className="w-full h-full object-cover" />

                {/* Featured Labels */}
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  Featured
                </span>
                <span className="absolute top-8 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  For sale
                </span>
              </div>

              <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>

              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                📍 Downtown, Dubai, UAE
              </p>

              <p className="text-[#0b6b57] font-bold mt-3">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center mt-10">
          <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className="bg-[#0b6b57] text-white px-10 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-[#0a504c] transition">
            Submit Enquiry
          </button>
        </div>

      </div>
    </section>
  );
}
