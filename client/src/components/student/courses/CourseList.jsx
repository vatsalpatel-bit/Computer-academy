import { setAllCourses, setLatestCourse } from "@/redux/slices/courseSlices";
import { getAllCourse } from "@/services/coursesApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const CourseList = () => {

  const [search, setSearch] = useState("")
  const [debounceSearch, setDebounceSearch] = useState("")
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const limit = 8;
  const allCourses = useSelector((state) => state.course.allCourses);
  
  useEffect(() => {
    const fetchAllCourse = async () => {
      try {
        setLoading(true)

        const data = await getAllCourse(
          debounceSearch,
          page,
          duration,
          limit,
        );

        dispatch(setAllCourses(data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    fetchAllCourse();
  }, [page, duration, debounceSearch])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
      setPage(1);
    }, 500);
    return () => clearTimeout(timer);
  }, [search,])


  return (<>

    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">
        <section className="py-4 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">

            <div className="flex flex-col lg:flex-row gap-5">

              <div className="relative flex-1">
                <Search
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                {/*Searchbar*/}

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search Course..."
                  className="w-full pl-14 pr-5 py-4 border rounded-xl outline-none focus:border-red-500"
                />

                {/* Filter */}
              </div>

              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="border rounded-xl px-5 py-4">
                <option value="">Duration</option>
                <option value="1 Months">1 months</option>
                <option value="2 Months">2 months</option>
                <option value="3 Months">3 months</option>
                <option value="4 Months">4 months</option>
                <option value="5 Months">5 months</option>
                <option value="6 Months">6 months</option>
              </select>

            </div>

          </div>
        </section>
        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14 items-start">
          {allCourses?.course?.map((course) => (
            <div
              key={course._id}
              className="group bg-white border border-gray-200 rounded-3xl p-7 hover:border-red-500 hover:shadow-2xl transition-all duration-300'"
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
      <div className="mt-12 flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-3">

          {/* Previous */}
          <button
            disabled={page === 1}
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
            className={`
        h-11 px-5 rounded-xl
        text-sm font-medium transition-all duration-300

        ${page === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 shadow-sm"
              }
      `}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {[...Array(allCourses?.totalPage || 1)].map((_, index) => {
            const pageNumber = index + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`
            h-11 w-11 rounded-xl
            text-sm font-semibold transition-all duration-300

            ${page === pageNumber
                    ? "bg-black text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                  }
          `}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next */}
          <button
            disabled={page === allCourses?.totalPage}
            onClick={() => {
              if (page < allCourses?.totalPage) {
                setPage(page + 1);
              }
            }}
            className={`
        h-11 px-5 rounded-xl
        text-sm font-medium transition-all duration-300

        ${page === allCourses?.totalPage
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 shadow-sm"
              }
      `}
          >
            Next
          </button>

        </div>
      </div>


    </section></>
  );
};

export default CourseList;