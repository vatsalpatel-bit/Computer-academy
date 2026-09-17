import { setAllCourses } from '@/redux/slices/courseSlices';
import { getAllCourse } from '@/services/coursesApi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const CourseList = () => {
  const [search, setSearch] = useState('');
  const [debounceSearch, setDebounceSearch] = useState('');
  const [page, setPage] = useState(1);
  const [duration, setDuration] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const limit = 8;

  const allCourses = useSelector((state) => state.course.allCourses);

  useEffect(() => {
    const fetchAllCourse = async () => {
      try {
        const data = await getAllCourse(
          debounceSearch,
          page,
          duration,
          limit
        );

        dispatch(setAllCourses(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllCourse();
  }, [dispatch, page, duration, debounceSearch, limit]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <section className="bg-slate-50 py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Search + Filter */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={19}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#7288AE]
                "
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search course..."
                className="
                  w-full
                  h-12
                  pl-11
                  pr-4
                  rounded-xl
                  border border-gray-200
                  bg-gray-50
                  text-sm
                  text-[#111844]
                  outline-none
                  placeholder:text-gray-400
                  focus:bg-white
                  focus:border-[#4B5694]
                  transition
                "
              />
            </div>

            {/* Duration */}
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="
                w-full
                sm:w-48
                h-12
                px-4
                rounded-xl
                border border-gray-200
                bg-gray-50
                text-sm
                text-[#111844]
                outline-none
                focus:bg-white
                focus:border-[#4B5694]
                transition
              "
            >
              <option value="">All Durations</option>
              <option value="1 Months">1 month</option>
              <option value="2 Months">2 months</option>
              <option value="3 Months">3 months</option>
              <option value="4 Months">4 months</option>
              <option value="5 Months">5 months</option>
              <option value="6 Months">6 months</option>
              <option value="7 Months">7 months</option>
              <option value="8 Months">8 months</option>
              <option value="9 Months">9 months</option>
              <option value="10 Months">10 months</option>
              <option value="11 Months">11 months</option>
              <option value="12 Months">12 months</option>
            </select>
          </div>
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
    sm:mt-10
  "
        >
          {allCourses?.course?.map((course) => (
            <div
              key={course._id}
              className="
        group
        relative
        bg-white
        rounded-2xl
        border border-gray-100
        overflow-hidden
        flex flex-col
        transition-all duration-300
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
              px-3 py-1.5
              rounded-full
              text-[11px]
              font-semibold
            "
                  >
                    Professional Course
                  </span>

                  <div
                    className="
              w-9 h-9
              rounded-lg
              bg-[#111844]/5
              text-[#4B5694]
              flex items-center justify-center
              group-hover:bg-[#4B5694]
              group-hover:text-white
              transition-all duration-300
            "
                  >
                    🎓
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
            mt-5
            text-xl
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

                {/* Course Details */}
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
                    <p className="text-[11px] text-gray-400">
                      Duration
                    </p>

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
                    <p className="text-[11px] text-gray-400">
                      Level
                    </p>

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
                  <span className="text-sm text-gray-500">
                    Course Fee
                  </span>

                  <span
                    className="
              text-xl
              font-bold
              text-[#111844]
            "
                  >
                    ₹{course.fees}
                  </span>
                </div>

                {/* Button */}
                <button
                  onClick={() =>
                    navigate(`/course-detail/${course.slug}`)
                  }
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
            transition-all duration-300
            flex items-center justify-center
            gap-2
          "
                >
                  View Course
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="flex items-center gap-2">

            {/* Previous */}
            <button
              disabled={page === 1}
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
              className={`
                h-10
                sm:h-11
                px-3
                sm:px-5
                rounded-lg
                sm:rounded-xl
                text-xs
                sm:text-sm
                font-medium
                transition-all

                ${page === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border border-gray-200 text-[#111844] hover:border-[#4B5694]'
                }
              `}
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1.5 sm:gap-2">
              {[...Array(allCourses?.totalPage || 1)].map(
                (_, index) => {
                  const pageNumber = index + 1;

                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      className={`
                        h-10
                        w-10
                        sm:h-11
                        sm:w-11
                        rounded-lg
                        sm:rounded-xl
                        text-xs
                        sm:text-sm
                        font-semibold
                        transition-all

                        ${page === pageNumber
                          ? 'bg-[#111844] text-white shadow-md'
                          : 'bg-white border border-gray-200 text-[#111844] hover:border-[#4B5694]'
                        }
                      `}
                    >
                      {pageNumber}
                    </button>
                  );
                }
              )}
            </div>

            {/* Next */}
            <button
              disabled={page === allCourses?.totalPage}
              onClick={() => {
                if (page < allCourses?.totalPage) {
                  setPage(page + 1);
                }
              }}
              className={`
                h-10
                sm:h-11
                px-3
                sm:px-5
                rounded-lg
                sm:rounded-xl
                text-xs
                sm:text-sm
                font-medium
                transition-all

                ${page === allCourses?.totalPage
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border border-gray-200 text-[#111844] hover:border-[#4B5694]'
                }
              `}
            >
              Next
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseList;