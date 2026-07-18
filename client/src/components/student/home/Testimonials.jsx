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
    <section className="py-20 bg-[#0B1E45]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="text-red-500 uppercase font-semibold tracking-widest">Testimonials</span>

          <h2 className="text-4xl font-bold text-white mt-3">What Our Students Say</h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
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
          {testimonials?.map((student) => (
            <SwiperSlide key={student?.id}>
              <div className="bg-white rounded-3xl p-8 shadow-xl h-full">
                <FaQuoteLeft className="text-4xl text-red-600 mb-6" />

                <p className="text-gray-600 leading-7">{student?.comment}</p>

                <div className="flex mt-6 mb-5">
                  {[...Array(student?.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 mr-1" />
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-8">
                  {/* <img
                    src={student.image}
                    alt={student.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-red-100"
                  /> */}

                  <div>
                    <h3 className="font-bold text-lg">{student.name}</h3>
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
