import { setLatestCourse } from '@/redux/slices/courseSlices';
import { getLatestCourse } from '@/services/coursesApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const PopularCourses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allCourses = useSelector((state) => state.course.latestCourse);

  useEffect(() => {
    const fetchLatestCourse = async () => {
      try {
        const data = await getLatestCourse();

        dispatch(setLatestCourse(data.course));
      } catch (error) {
        console.log(error);
      }
    };

    fetchLatestCourse();
  }, [dispatch]);

  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p
            className="
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-widest
              text-[#4B5694]
            "
          >
            Our Courses
          </p>

          <h2
            className="
              mt-2
              sm:mt-3
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              text-[#111844]
            "
          >
            Popular Courses
          </h2>

          <p
            className="
              mt-3
              sm:mt-4
              text-sm
              sm:text-base
              text-[#7288AE]
              leading-6
              sm:leading-7
            "
          >
            Explore our industry-oriented courses designed to build practical skills and prepare
            students for successful careers.
          </p>
        </div>

        {/* Course Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
            sm:gap-6
            mt-8
            sm:mt-12
          "
        >
          {allCourses?.map((course) => (
            <div
              key={course._id}
              className="
                group
                relative
                bg-white
                rounded-2xl
                border
                border-gray-100
                overflow-hidden
                flex
                flex-col
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-[#EAE0CF]
              "
            >
              {/* Top Accent */}
              <div className="h-1 bg-[#4B5694]" />

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                {/* Category + Icon */}
                <div className="flex items-center justify-between">
                  <span
                    className="
                      inline-flex
                      items-center
                      bg-[#EAE0CF]/60
                      text-[#4B5694]
                      px-3
                      py-1.5
                      rounded-full
                      text-[11px]
                      font-semibold
                    "
                  >
                    Professional Course
                  </span>

                  <div
                    className="
                      w-9
                      h-9
                      rounded-lg
                      bg-[#111844]/5
                      text-[#4B5694]
                      flex
                      items-center
                      justify-center
                      group-hover:bg-[#4B5694]
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <GraduationCap size={18} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-5
                    text-lg
                    sm:text-xl
                    font-bold
                    text-[#111844]
                    leading-6
                    line-clamp-2
                    min-h-[48px]
                  "
                >
                  {course.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-sm
                    text-gray-500
                    leading-6
                    line-clamp-3
                    min-h-[72px]
                  "
                >
                  {course.description}
                </p>

                {/* Details */}
                <div
                  className="
                    mt-6
                    grid
                    grid-cols-2
                    gap-2
                  "
                >
                  {/* Duration */}
                  <div
                    className="
                      rounded-xl
                      bg-gray-50
                      px-3
                      py-3
                    "
                  >
                    <p className="text-[11px] text-gray-400">Duration</p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-[#111844]
                        truncate
                      "
                    >
                      {course.duration}
                    </p>
                  </div>

                  {/* Level */}
                  <div
                    className="
                      rounded-xl
                      bg-gray-50
                      px-3
                      py-3
                    "
                  >
                    <p className="text-[11px] text-gray-400">Level</p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-[#111844]
                        truncate
                      "
                    >
                      {course.level}
                    </p>
                  </div>
                </div>

                {/* Fee */}
                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    px-1
                  "
                >
                  <span className="text-sm text-gray-500">Course Fee</span>

                  <span
                    className="
                      text-lg
                      sm:text-xl
                      font-bold
                      text-[#111844]
                    "
                  >
                    ₹{course.fees}
                  </span>
                </div>

                {/* View Course */}
                <button
                  onClick={() => navigate(`/course-detail/${course.slug}`)}
                  className="
                    w-full
                    mt-5
                    py-3
                    rounded-xl
                    bg-[#111844]
                    text-white
                    text-sm
                    font-semibold
                    hover:bg-[#4B5694]
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  View Course
                  <span
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-9 sm:mt-12">
          <button
            onClick={() => navigate('/courses')}
            className="
    group
    inline-flex
    items-center
    justify-center
    gap-2
    bg-[#111844]
    hover:bg-[#4B5694]
    text-white
    px-6
    sm:px-8
    py-3
    sm:py-3.5
    rounded-xl
    text-sm
    sm:text-base
    font-semibold
    shadow-md
    shadow-[#111844]/15
    transition-all
    duration-300
    hover:-translate-y-0.5
  "
          >
            View All Courses
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
