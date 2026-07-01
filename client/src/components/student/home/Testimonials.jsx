import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Patel",
    course: "Full Stack Development",
    rating: 5,
    review:
      "The faculty is excellent and the practical sessions helped me build real-world projects. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Priya Shah",
    course: "Python Programming",
    rating: 5,
    review:
      "Friendly environment, experienced trainers and great placement guidance. I learned a lot here.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Amit Kumar",
    course: "Java Development",
    rating: 5,
    review:
      "Best computer academy in our city. Every concept was explained with practical examples.",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 4,
    name: "Neha Patel",
    course: "Graphic Design",
    rating: 5,
    review:
      "Amazing experience! The trainers are supportive and the learning atmosphere is very motivating.",
    image: "https://i.pravatar.cc/150?img=48",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#0B1E45]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="text-red-500 uppercase font-semibold tracking-widest">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-white mt-3">
            What Our Students Say
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Hear from our students about their learning journey and
            experience at Computer Academy.
          </p>
        </div>

        {/* Slider */}

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((student) => (
            <SwiperSlide key={student.id}>
              <div className="bg-white rounded-3xl p-8 shadow-xl h-full">
                <FaQuoteLeft className="text-4xl text-red-600 mb-6" />

                <p className="text-gray-600 leading-7">
                  {student.review}
                </p>

                <div className="flex mt-6 mb-5">
                  {[...Array(student.rating)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-yellow-400 mr-1"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-red-100"
                  />

                  <div>
                    <h3 className="font-bold text-lg">
                      {student.name}
                    </h3>

                    <p className="text-gray-500">
                      {student.course}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;