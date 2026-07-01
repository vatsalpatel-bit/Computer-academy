import {
  FaGraduationCap,
  FaUserTie,
  FaCertificate,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "Industry Oriented Courses",
    description:
      "Learn practical skills with industry-standard curriculum.",
  },
  {
    id: 2,
    icon: <FaUserTie />,
    title: "Placement Assistance",
    description:
      "Get career guidance and placement support from experts.",
  },
  {
    id: 3,
    icon: <FaCertificate />,
    title: "Certified Programs",
    description:
      "Receive recognized certificates after course completion.",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "Student Support",
    description:
      "Dedicated faculty and continuous learning support.",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-8 text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-red-50 mx-auto flex items-center justify-center text-red-600 text-4xl group-hover:bg-red-600 group-hover:text-white transition">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;