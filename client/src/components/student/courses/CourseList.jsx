import { setAllCourses, setLatestCourse } from "@/redux/slices/courseSlices";
import { getAllCourse } from "@/services/coursesApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.course.allCourses);


  useEffect(() => {
    const fetchAllCourse = async () => {
      try {
        const data = await getAllCourse();
        // console.log(data)
        dispatch(setAllCourses(data.course))
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllCourse();
  })

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

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


      </div>
    </section>
  );
};

export default CourseList;