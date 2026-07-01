import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Build Your Career In IT",
    subtitle:
      "Join industry-oriented courses and become job-ready with practical learning.",
  },
  {
    id: 2,
    title: "Learn From Industry Experts",
    subtitle:
      "Master programming, web development, and modern technologies through hands-on projects.",
  },
  {
    id: 3,
    title: "Start Your Success Journey",
    subtitle:
      "Upgrade your skills with professional courses and placement assistance.",
  },
];

const Hero = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="h-[90vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[90vh]">
              {/* Background Placeholder */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-800 to-slate-700" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
                <div className="max-w-2xl text-white">
                  <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-5">
                    Welcome to Computer Academy
                  </span>

                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-lg text-gray-200 leading-8">
                    {slide.subtitle}
                  </p>

                  <div className="mt-10 flex gap-5">
                    <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition">
                      Explore Courses
                    </button>

                    <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transition">
                      Contact Us
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8 mt-16">
                    <div>
                      <h2 className="text-4xl font-bold text-red-500">
                        15+
                      </h2>
                      <p className="text-gray-300 mt-2">
                        Years Experience
                      </p>
                    </div>

                    <div>
                      <h2 className="text-4xl font-bold text-red-500">
                        5000+
                      </h2>
                      <p className="text-gray-300 mt-2">
                        Students
                      </p>
                    </div>

                    <div>
                      <h2 className="text-4xl font-bold text-red-500">
                        100%
                      </h2>
                      <p className="text-gray-300 mt-2">
                        Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;