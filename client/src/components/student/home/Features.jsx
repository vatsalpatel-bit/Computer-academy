import { FaGraduationCap, FaUserTie, FaCertificate, FaHeadset } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: 'Industry Oriented Courses',
    description: 'Learn practical skills with industry-standard curriculum.',
  },
  {
    id: 2,
    icon: <FaUserTie />,
    title: 'Placement Assistance',
    description: 'Get career guidance and placement support from experts.',
  },
  {
    id: 3,
    icon: <FaCertificate />,
    title: 'Certified Programs',
    description: 'Receive recognized certificates after course completion.',
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: 'Student Support',
    description: 'Dedicated faculty and continuous learning support.',
  },
];

const Features = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-9 sm:mb-12">
          <p className="text-sm font-semibold text-[#4B5694] mb-2">WHY CHOOSE US</p>

          <h2
            className="
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              text-[#111844]
            "
          >
            Learn With Confidence
          </h2>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-[#7288AE]
              max-w-2xl
              mx-auto
              leading-6
            "
          >
            Everything you need to build practical skills and move confidently toward your career.
          </p>
        </div>

        {/* Features */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-6
            lg:gap-7
          "
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="
                group
                bg-white
                border border-gray-100
                rounded-2xl
                p-6
                sm:p-7
                text-center
                shadow-sm
                hover:shadow-lg
                hover:border-[#EAE0CF]
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14 h-14
                  sm:w-16 sm:h-16
                  mx-auto
                  rounded-xl
                  bg-[#EAE0CF]/50
                  flex items-center justify-center
                  text-[#4B5694]
                  text-2xl
                  sm:text-3xl
                  group-hover:bg-[#4B5694]
                  group-hover:text-white
                  transition-all
                  duration-300
                "
              >
                {feature.icon}
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
                "
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2.5
                  text-sm
                  text-[#7288AE]
                  leading-6
                "
              >
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
