import { setLatestCourse } from "@/redux/slices/courseSlices";
import { getLatestCourse } from "@/services/coursesApi";
import { useEffect } from "react";
import {
  FaCode,
  FaJava,
  FaPython,
  FaMobileAlt,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PopularCourses = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.course.latestCourse);
  

  useEffect(() => {
    const fetchLatestCourse = async () => {
      try {
        const data = await getLatestCourse();
        // console.log(data)
        dispatch(setLatestCourse(data.course))
      } catch (error) {
        console.log(error);
      }
    }
    fetchLatestCourse();
  })

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Our Courses
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Popular Courses
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Explore our industry-oriented courses designed to build practical
            skills and prepare students for successful careers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14">
          {allCourses?.map((course) => (
            <div
              key={course._id}
              className="group bg-white border border-gray-200 rounded-3xl p-7 hover:border-red-500 hover:shadow-2xl transition-all duration-300"
            >
              {/* Category */}

              <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-2 rounded-full">
                Professional Course
              </span>

              {/* Title */}

              <h3 className="text-2xl font-bold text-slate-900 mt-6">
                {course.title}
              </h3>

              {/* Description */}

              <p className="text-gray-600 leading-7 mt-4 line-clamp-3">
                {course.description}
              </p>

              {/* Details */}

              <div className="border-t mt-8 pt-6 space-y-3 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-semibold">
                    {course.duration}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Level</span>
                  <span className="font-semibold">
                    {course.level}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Fees</span>
                  <span className="font-semibold text-red-600">
                    ₹{course.fees}
                  </span>
                </div>

              </div>

              {/* Button */}

              <button
                onClick={() => navigate(`/course-detail/${course.slug}`)}
                className="w-full mt-8 bg-slate-900 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <button
            onClick={() => navigate("/courses")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;