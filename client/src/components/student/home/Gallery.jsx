import { FaArrowRight } from 'react-icons/fa';

import gallery1 from '@/svg/gallery/gallery1.jpg';
import gallery2 from '@/svg/gallery/gallery2.jpg';
import gallery3 from '@/svg/gallery/gallery3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const galleryImages = [gallery1, gallery2, gallery3];

const Gallery = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-9 sm:mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[#4B5694] text-xs sm:text-sm uppercase font-bold tracking-[0.2em]">
              <span className="w-7 h-[2px] bg-[#4B5694]" />
              Gallery
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-[#111844] leading-tight">
              Our Campus Moments
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-xl leading-6">
              Explore classroom sessions, workshops, seminars, events and memorable moments from our
              academy.
            </p>
          </div>
        </div>

        {/* Gallery Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={galleryImages.length > 3}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="gallery-swiper !pb-12"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  border border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  transition-all duration-300
                "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Jankalyan Computer Center gallery ${index + 1}`}
                    className="
                      w-full
                      h-64
                      sm:h-72
                      lg:h-80
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/0
                      group-hover:bg-black/10
                      transition-all duration-500
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      absolute
                      top-4 left-4
                      w-9 h-9
                      rounded-lg
                      bg-white/90
                      backdrop-blur-sm
                      flex items-center justify-center
                      text-[#111844]
                      text-xs
                      font-bold
                      shadow-sm
                    "
                  >
                    0{index + 1}
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

export default Gallery;
