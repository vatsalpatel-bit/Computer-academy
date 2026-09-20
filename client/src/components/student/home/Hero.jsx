import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import image1 from '@/svg/hero/image1.jpg';
import image1Mobile from '@/svg/hero/image1-mobile.jpg';

import image2 from '@/svg/hero/image2.jpg';
import image2Mobile from '@/svg/hero/image2-mobile.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: 'Build Your Career In IT',
    subtitle: 'Join industry-oriented courses and become job-ready with practical learning.',
    image: image1,
    mobileImage: image1Mobile,
  },
  {
    id: 2,
    title: 'Learn From Industry Experts',
    subtitle:
      'Master programming, web development, and modern technologies through hands-on projects.',
    image: image2,
    mobileImage: image2Mobile,
  },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="
  hero-swiper
  h-[calc(100svh-72px)]
  min-h-[500px]
  sm:h-[calc(100svh-72px)]
  md:h-[680px]
  lg:h-[90vh]
  lg:min-h-[650px]
"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full overflow-hidden">
              {/* Background */}
              <picture className="absolute inset-0 block">
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />

                <img
                  src={slide.image}
                  alt=""
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    object-center
                  "
                />
              </picture>

              {/* Main overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Bottom gradient */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/45
                  to-black/10
                "
              />

              {/* Mobile extra gradient */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-b
                  from-black/20
                  via-transparent
                  to-black/50
                  sm:hidden
                "
              />

              {/* Content */}
              <div
                className="
    relative z-10
    h-full
    max-w-7xl mx-auto
    flex
    items-center
    px-5
    sm:px-8
    lg:px-10
    xl:px-6

    lg:items-center
  "
              >
                <div
                  className="
    w-full
    max-w-3xl
    text-white
    translate-y-6
    sm:translate-y-0
  "
                >
                  {/* Badge */}
                  <span
                    className="
                      inline-flex
                      items-center
                      bg-black/50
                      backdrop-blur-sm
                      border border-white/20
                      text-[#EAE0CF]
                      px-3
                      py-1.5
                      sm:px-4
                      sm:py-2
                      rounded-full
                      text-[10px]
                      sm:text-sm
                      font-medium
                      mb-3
                      sm:mb-5
                    "
                  >
                    Jankalyan Computer Center
                  </span>

                  {/* Heading */}
                  <h1
                    className="
                      text-[30px]
                      leading-[1.1]
                      font-bold
                      tracking-tight
                      text-[#EAE0CF]
                      max-w-[340px]

                      sm:text-5xl
                      sm:max-w-2xl

                      md:text-6xl

                      lg:text-7xl
                    "
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-[1.55]
                      text-white/85
                      max-w-[340px]

                      sm:mt-5
                      sm:text-lg
                      sm:leading-8
                      sm:max-w-xl

                      lg:text-xl
                    "
                  >
                    {slide.subtitle}
                  </p>

                  {/* Buttons */}
                  <div
                    className="
                      mt-5
                      flex
                      flex-col
                      gap-2.5
                      max-w-[340px]

                      sm:mt-8
                      sm:flex-row
                      sm:gap-4
                      sm:max-w-md
                    "
                  >
                    <button
                      onClick={() => navigate('/courses')}
                      className="
                        w-full
                        px-5
                        py-3
                        rounded-xl
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        font-semibold
                        text-sm
                        transition
                        shadow-lg

                        sm:w-auto
                        sm:px-8
                        sm:py-4
                        sm:text-base
                      "
                    >
                      Explore Courses
                    </button>

                    <button
                      onClick={() => navigate('/contact')}
                      className="
                        w-full
                        px-5
                        py-3
                        rounded-xl
                        border
                        border-white/40
                        bg-black/30
                        backdrop-blur-sm
                        text-[#EAE0CF]
                        font-semibold
                        text-sm
                        hover:bg-white
                        hover:text-[#111844]
                        transition

                        sm:w-auto
                        sm:px-8
                        sm:py-4
                        sm:text-base
                      "
                    >
                      Contact Us
                    </button>
                  </div>

                  {/* Stats */}
                  <div
                    className="
                      flex
                      items-center
                      mt-5
                      gap-4

                      sm:mt-10
                      sm:gap-10
                    "
                  >
                    {/* Experience */}
                    <div className="flex-1 sm:flex-none">
                      <h2
                        className="
                          text-lg
                          font-bold
                          text-[#EAE0CF]

                          sm:text-3xl
                        "
                      >
                        15+
                      </h2>

                      <p
                        className="
                          mt-0.5
                          text-[9px]
                          text-white/65
                          whitespace-nowrap

                          sm:mt-1
                          sm:text-sm
                        "
                      >
                        Years Experience
                      </p>
                    </div>

                    <div
                      className="
                        h-7
                        w-px
                        bg-white/25

                        sm:h-10
                      "
                    />

                    {/* Students */}
                    <div className="flex-1 sm:flex-none">
                      <h2
                        className="
                          text-lg
                          font-bold
                          text-[#EAE0CF]

                          sm:text-3xl
                        "
                      >
                        5000+
                      </h2>

                      <p
                        className="
                          mt-0.5
                          text-[9px]
                          text-white/65
                          whitespace-nowrap

                          sm:mt-1
                          sm:text-sm
                        "
                      >
                        Students
                      </p>
                    </div>

                    <div
                      className="
                        h-7
                        w-px
                        bg-white/25

                        sm:h-10
                      "
                    />

                    {/* Support */}
                    <div className="flex-1 sm:flex-none">
                      <h2
                        className="
                          text-lg
                          font-bold
                          text-[#EAE0CF]

                          sm:text-3xl
                        "
                      >
                        100%
                      </h2>

                      <p
                        className="
                          mt-0.5
                          text-[9px]
                          text-white/65
                          whitespace-nowrap

                          sm:mt-1
                          sm:text-sm
                        "
                      >
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
