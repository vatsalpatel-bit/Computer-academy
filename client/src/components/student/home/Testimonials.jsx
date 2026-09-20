import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getAllFeedback } from '@/services/feedbackApi';
import { setAllFeddback } from '@/redux/slices/feedbackSlices';

const Testimonials = () => {
  const testimonials = useSelector((state) => state.feedback.allFeedback);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFeedbackApi = async () => {
      try {
        const data = await getAllFeedback();
        dispatch(setAllFeddback(data.allFeedback));
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeedbackApi();
  }, [dispatch]);

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-12 lg:mb-14">
          <span
            className="
              inline-flex items-center gap-2
              text-[#4B5694]
              text-xs sm:text-sm
              uppercase
              font-bold
              tracking-[0.2em]
            "
          >
            <span className="w-6 sm:w-8 h-[2px] bg-[#4B5694]" />
            Testimonials
            <span className="w-6 sm:w-8 h-[2px] bg-[#4B5694]" />
          </span>

          <h2
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold
              text-[#111844]
              mt-3
              leading-tight
            "
          >
            What Our Students Say
          </h2>

          <p
            className="
              text-gray-500
              text-sm sm:text-base
              mt-4
              leading-6
            "
          >
            Hear from our students about their learning journey and experience at Computer Academy.
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
          loop={testimonials?.length > 3}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="testimonials-swiper !pb-12"
        >
          {testimonials?.map((student) => (
            <SwiperSlide key={student?._id} className="!h-auto">
              <div
                className="
                  group
                  bg-white
                  rounded-2xl sm:rounded-3xl
                  border border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  p-5 sm:p-7 lg:p-8

                  h-[380px]
                  sm:h-[400px]
                  lg:h-[420px]

                  flex flex-col
                  overflow-hidden

                  transition-all duration-300
                "
              >
                {/* Quote Icon */}
                <div
                  className="
                    shrink-0
                    w-11 h-11
                    sm:w-12 sm:h-12
                    rounded-xl
                    bg-[#EAE0CF]/70
                    flex items-center justify-center
                    text-[#4B5694]
                    mb-5
                  "
                >
                  <FaQuoteLeft className="text-lg sm:text-xl" />
                </div>

                {/* Comment */}
                <p
                  className="
                    text-gray-600
                    text-sm sm:text-base
                    leading-6 sm:leading-7
                    line-clamp-4
                    break-all
                    overflow-hidden
                  "
                >
                  "{student?.comment}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-6 shrink-0">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={star <= student?.rating ? 'text-yellow-400' : 'text-gray-200'}
                      size={15}
                    />
                  ))}

                  <span className="ml-2 text-xs text-gray-400">{student?.rating}/5</span>
                </div>

                {/* Student */}
                <div
                  className="
                    mt-auto
                    pt-5
                    border-t border-gray-100
                    flex items-center gap-3
                    shrink-0
                  "
                >
                  <div
                    className="
                      w-10 h-10
                      sm:w-11 sm:h-11
                      rounded-full
                      bg-[#111844]
                      text-white
                      flex items-center justify-center
                      font-bold
                      text-sm
                      shrink-0
                    "
                  >
                    {student?.name?.charAt(0)?.toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="
                        font-bold
                        text-sm sm:text-base
                        text-[#111844]
                        truncate
                      "
                    >
                      {student?.name}
                    </h3>

                    <p className="text-xs text-gray-400 mt-0.5">Student</p>
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
