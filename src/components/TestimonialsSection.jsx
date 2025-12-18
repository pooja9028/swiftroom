import testimg from "../assets/user.jpg";
import bgImg from "../assets/testimonial-bg.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Prashant Karuthasen",
      text: "Absolutely great service! The team were very responsive and Jibran was an excellent project manager. Would highly recommend them.",
      img: testimg,
    },
    {
      name: "Willem Moelker",
      text: "As always the best of service, big thank you to Imran and his team for their tidy workmanship.",
      img: testimg,
    },
    {
      name: "Salma Kayali",
      text: "The team was absolutely brilliant. Super friendly, explained the issue, was proactive, and didn't over charge.",
      img: testimg,
    },
    {
      name: "Vishnu V",
      text: "Mr. Maaz Khan and team done bifold windows and mashrabiya cladding installation.",
      img: testimg,
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-white/80 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-black">
              Testimonials & Reviews
            </h2>
            <p className="text-gray-700 mt-2">
              What our customers say about working with Swift Rooms.
            </p>
          </div>

          {/* Carousel */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col">

                  {/* Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-500 text-lg">★★★★★</div>
                    <span className="text-gray-500 text-sm">Testimonial</span>
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-sm mb-6 flex-grow">
                    {t.text}
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <img
                      src={t.img}
                      className="w-10 h-10 rounded-full object-cover"
                      alt={t.name}
                    />
                    <p className="font-semibold text-black text-sm">
                      {t.name}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}
