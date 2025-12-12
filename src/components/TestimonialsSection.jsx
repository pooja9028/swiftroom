export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Lana Bernier",
      role: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu a felis placerat tincidunt. Curabitur lacinia, ligula vitae aliquam faucibus.",
      img: "/src/assets/testi-img.png", // avatar image
    },
    {
      name: "Lana Bernier",
      role: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu a felis placerat tincidunt. Curabitur lacinia, ligula vitae aliquam faucibus.",
      img: "/src/assets/testi-img.png",
    },
    {
      name: "Lana Bernier",
      role: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu a felis placerat tincidunt. Curabitur lacinia, ligula vitae aliquam faucibus.",
      img: "/src/assets/testi-img.png",
    },
    {
      name: "Lana Bernier",
      role: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu a felis placerat tincidunt. Curabitur lacinia, ligula vitae aliquam faucibus.",
      img: "/src/assets/testi-img.png",
    },
  ];

  return (
    <section id="testimonials"
      className="w-full py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/testimonial-bg.jpg')",
      }}
    >
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-black">
          Testimonials & Reviews
        </h2>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          lobortis justo
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-lg backdrop-blur-sm"
          >
            {/* Rating + Tag */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-blue-500 text-lg">★★★★★</div>
              <span className="text-gray-500 text-sm">Testimonial</span>
            </div>

            {/* Text */}
            <p className="text-gray-700 text-sm mb-6">{t.text}</p>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <img
                src={t.img}
                className="w-10 h-10 rounded-full object-cover"
                alt={t.name}
              />
              <div>
                <p className="font-semibold text-black text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
