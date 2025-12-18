import testimg from "../assets/user.jpg";
import bgImg from "../assets/Testimonial-bg.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "zohair dashtin",
      text: "As always the best of service, big thank you to Imran and his team for their tidy workmanship 👍",
      img: testimg,
    },
    {
      name: "Willem Moelker",
      text: "As always the best of service, big thank you to Imran and his team for their tidy workmanship.",
      img: testimg,
    },
    {
      name: "Salma Kayali",
      text: "The team was absolutely brilliant. Super friendly, explained the issue, was proactive, and didn't overcharge.",
      img: testimg,
    },
    {
      name: "Vishnu .v",
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
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Testimonials & Reviews
        </h2>
        <p className="text-gray-700 mt-2">
          What our customers say about working with Swift Rooms.
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          centeredSlides={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
          className="pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-xl shadow-lg h-full mx-1">
                {/* Rating */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-blue-500">★★★★★</div>
                  <span className="text-gray-500 text-sm">Testimonial</span>
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  {t.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="font-semibold text-sm">{t.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
