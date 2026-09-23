import { setSingleCourse } from '@/redux/slices/courseSlices';
import { getCourseApi } from '@/services/coursesApi';

import {
  BadgeCheck,
  Clock3,
  GraduationCap,
  IndianRupee,
  Languages,
  Users,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const CourseView = () => {
  const { slug } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const courseData = useSelector((state) => state.course.singleCourse);
  console.log(courseData)
  // Your current API appears to return an array
  const course = Array.isArray(courseData) ? courseData[0] : courseData;

  useEffect(() => {
    const fetchCourseApi = async () => {
      try {
        const data = await getCourseApi(slug);
        dispatch(setSingleCourse(data.course));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourseApi();
  }, [dispatch, slug]);

  if (!course) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F5F6FA] px-4">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#111844]">Course not found</h2>

          <button
            onClick={() => navigate('/courses')}
            className="
              mt-5
              inline-flex items-center gap-2
              px-5 py-3
              rounded-xl
              bg-[#111844]
              text-white
              text-sm font-semibold
              hover:bg-[#4B5694]
              transition
            "
          >
            <ArrowLeft size={17} />
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const details = [
    {
      icon: Clock3,
      label: 'Duration',
      value: course.duration,
    },
    {
      icon: GraduationCap,
      label: 'Eligibility',
      value: course.eligibility,
    },
    {
      icon: BadgeCheck,
      label: 'Certificate',
      value: 'Included',
    },
    {
      icon: IndianRupee,
      label: 'Course Fee',
      value: `₹${course.fees}`,
    },
  ];

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative bg-[#111844] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 lg:py-20">
            {/* Back */}
            <button
              onClick={() => navigate(-1)}
              className="
                inline-flex items-center gap-2
                text-white/70
                hover:text-white
                text-sm
                font-medium
                transition
              "
            >
              <ArrowLeft size={17} />
              Back to Courses
            </button>

            {/* Hero Content */}
            <div className="mt-8 sm:mt-10 max-w-4xl">
              <span
                className="
                inline-flex
                px-3 py-1.5
                rounded-full
                bg-white/10
                border border-white/10
                text-[#EAE0CF]
                text-xs sm:text-sm
                font-semibold
              "
              >
                Professional Course
              </span>

              <h1
                className="
                mt-5
                text-3xl sm:text-4xl lg:text-5xl
                font-bold
                text-white
                leading-tight
              "
              >
                {course.title}
              </h1>

              <p
                className="
                mt-5
                max-w-3xl
                text-sm sm:text-base lg:text-lg
                text-white/65
                leading-6 sm:leading-7
              "
              >
                {course.description}
              </p>

              {/* Hero Actions */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate('/contact')}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-6
                    py-3.5
                    rounded-xl
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    text-sm sm:text-base
                    font-semibold
                    transition
                  "
                >
                  Contact
                  <ArrowRight size={17} />
                </button>

                <div
                  className="
                  flex items-center justify-center
                  px-6 py-3.5
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  text-white
                "
                >
                  <IndianRupee size={18} className="mr-1 text-[#EAE0CF]" />
                  <span className="text-lg font-bold">{course.fees}</span>

                  <span className="ml-1 text-sm text-white/50">course fee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE OVERVIEW
      ===================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <span
              className="
              text-[#4B5694]
              text-xs sm:text-sm
              uppercase
              font-bold
              tracking-[0.2em]
            "
            >
              Course Information
            </span>

            <h2
              className="
              mt-2
              text-2xl sm:text-3xl
              font-bold
              text-[#111844]
            "
            >
              Course Overview
            </h2>
          </div>

          {/* Details Grid */}
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
          >
            {details.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    bg-white
                    rounded-2xl
                    border border-gray-100
                    p-5
                    flex items-center gap-4
                    shadow-sm
                    hover:shadow-md
                    transition
                  "
                >
                  <div
                    className="
                    w-11 h-11
                    shrink-0
                    rounded-xl
                    bg-[#EAE0CF]/60
                    text-[#4B5694]
                    flex items-center justify-center
                  "
                  >
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</p>

                    <p
                      className="
                      mt-1
                      text-sm sm:text-base
                      font-semibold
                      text-[#111844]
                      truncate
                    "
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Fee Card */}
            <div
              className="
              bg-[#111844]
              rounded-2xl
              p-5
              flex items-center gap-4
              shadow-sm
            "
            >
              <div
                className="
                w-11 h-11
                shrink-0
                rounded-xl
                bg-white/10
                text-[#EAE0CF]
                flex items-center justify-center
              "
              >
                <IndianRupee size={20} />
              </div>

              <div>
                <p className="text-xs text-white/50 uppercase tracking-wide">Course Fee</p>

                <p className="mt-1 text-xl font-bold text-white">₹{course.fees}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRICULUM
      ===================================================== */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl">
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
              <span className="w-7 h-[2px] bg-[#4B5694]" />
              Course Curriculum
            </span>

            <h2
              className="
              mt-3
              text-3xl sm:text-4xl
              font-bold
              text-[#111844]
            "
            >
              What You'll Learn
            </h2>

            <p
              className="
              mt-3
              text-sm sm:text-base
              text-gray-500
              leading-6
            "
            >
              Explore the practical topics covered throughout this course.
            </p>
          </div>

          {/* Topics */}
          <div
            className="
            mt-8 sm:mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
          >
            {course.topic?.map((topic, index) => (
              <div
                key={`${topic}-${index}`}
                className="
                  group
                  flex items-start gap-3
                  p-4 sm:p-5
                  rounded-2xl
                  bg-[#F5F6FA]
                  border border-transparent
                  hover:border-[#EAE0CF]
                  hover:bg-white
                  hover:shadow-sm
                  transition-all duration-300
                "
              >
                <div
                  className="
                  mt-0.5
                  shrink-0
                  text-[#4B5694]
                "
                >
                  <CheckCircle size={19} />
                </div>

                <span
                  className="
                  text-sm sm:text-base
                  font-medium
                  text-[#111844]
                  leading-6
                "
                >
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseView;
