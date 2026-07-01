import {
  FaUserGraduate,
  FaBookOpen,
  FaAward,
  FaChalkboardTeacher,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate />,
    value: "5000+",
    label: "Students",
  },
  {
    icon: <FaBookOpen />,
    value: "50+",
    label: "Courses",
  },
  {
    icon: <FaAward />,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: <FaChalkboardTeacher />,
    value: "20+",
    label: "Expert Trainers",
  },
];

const Statistics = () => {
  return (
    <section className="bg-[#0B1E45] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white"
            >
              <div className="text-5xl text-red-500 flex justify-center mb-5">
                {stat.icon}
              </div>

              <h2 className="text-5xl font-bold">
                {stat.value}
              </h2>

              <p className="mt-3 text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Statistics;