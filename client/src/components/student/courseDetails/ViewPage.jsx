import { setSingleCourse } from '@/redux/slices/courseSlices';
import { getCourseApi } from '@/services/coursesApi';

import {
  BadgeCheck,
  Clock3,
  GraduationCap,
  IndianRupee,
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
      <div className="min-h-[70vh] flex items-center justify-center bg-[#EAE0CF]/20 px-4">
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
      value: `Contact Us`,
    },
  ];

  return (
    <main className="bg-[#EAE0CF]/20">

      {/*HERO*/}
      <section className="relative overflow-hidden bg-[#111844]">
        {/* Subtle Galaxy Glow */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#4B5694]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#7288AE]/15 blur-3xl" />

        {/* Small Stars */}
        <span className="absolute left-[18%] top-12 h-1 w-1 rounded-full bg-[#EAE0CF] opacity-70" />
        <span className="absolute right-[22%] top-20 h-1.5 w-1.5 rounded-full bg-[#7288AE] opacity-60" />
        <span className="absolute bottom-14 left-[30%] h-1 w-1 rounded-full bg-[#EAE0CF] opacity-50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back
          </button>

          {/* Hero Content */}
          <div className="mt-6 max-w-4xl">
            {/* Label */}
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-sm">
              Professional Course
            </span>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#EAE0CF] sm:text-4xl lg:text-5xl">
              {course?.title}
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              {course?.description}
            </p>

            {/* Contact Button */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:text-base"
              >
                Contact Us
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*COURSE OVERVIEW*/}

      <section className="py-12 sm:py-16 lg:py-20 bg-[#EAE0CF]/20">
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
            {details?.map((item) => {
              const Icon = item?.icon;

              return (
                <div
                  key={item?.label}
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
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{item?.label}</p>

                    <p
                      className="
                      mt-1
                      text-sm sm:text-base
                      font-semibold
                      text-[#111844]
                      truncate
                    "
                    >
                      {item?.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*CURRICULUM*/}

      <section className="py-14 sm:py-16 lg:py-20 bg-[#EAE0CF]/20">
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
            {course?.topics?.map((topic, index) => (
              <div
                key={`${topic}-${index}`}
                className="
    group
    flex items-start gap-3
    p-4 sm:p-5
    rounded-2xl
    bg-white
    border border-gray-100
    shadow-sm
    hover:shadow-md
    transition
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
