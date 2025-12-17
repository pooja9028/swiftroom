import testimg from "../assets/user.jpg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Prashant Karuthasen",
      role: "",
      text: "Absolutely great service! The team were very responsive and Jibran was an excellent project manager. Would highly recommend them.",
      img: testimg, // avatar image
    },
    {
      name: "Willem Moelker",
      role: "",
      text: "As always the best of service, big thank you to Imran and his team for their tidy workmanship ",
      img: testimg,
    },
    {
      name: "Salma Kayali",
      role: "",
      text: "The team was absolutely brilliant. Super friendly, explained the issue, was proactive, and didn't over charge.",
      img: testimg,
    },
    {
      name: "Vishnu .v",
      role: "",
      text: "Mr. Maaz Khan and team done bifold windows and mashrabiya cladding installation",
      img: testimg,
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
          What our customers say about working with Swift Rooms.

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
