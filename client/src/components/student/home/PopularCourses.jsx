import {
  FaCode,
  FaJava,
  FaPython,
  FaMobileAlt,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    slug: "full-stack-development",
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React, Node.js & MongoDB.",
    icon: <FaCode />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    slug: "java-programming",
    title: "Java Programming",
    description: "Core Java, OOP, JDBC, Collections & Projects.",
    icon: <FaJava />,
    color: "bg-red-50 text-red-600",
  },
  {
    id: 3,
    slug: "python-programming",
    title: "Python Programming",
    description: "Python, Django, Flask & Automation.",
    icon: <FaPython />,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    id: 4,
    slug: "android-app-development",
    title: "App Development",
    description: "Android, Flutter & Firebase Development.",
    icon: <FaMobileAlt />,
    color: "bg-green-50 text-green-600",
  },
  {
    id: 5,
    slug: "database-management",
    title: "Database",
    description: "SQL, MySQL, MongoDB & Databas e Design.",
    icon: <FaDatabase />,
    color: "bg-purple-50 text-purple-600",
  },
];

const PopularCourses = () => {
  const navigate = useNavigate();
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7 mt-14">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group"
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${course.color}`}
              >
                {course.icon}
              </div>

              <h3 className="text-xl font-bold mt-6">
                {course.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-7">
                {course.description}
              </p>

              <button
                onClick={() => navigate(`/course-detail/${course.slug}`)}
                className="mt-8 flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                View Details
                <FaArrowRight />
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