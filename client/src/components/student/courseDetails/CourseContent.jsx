import {
  Clock3,
  Award,
  BookOpen,
  IndianRupee,
} from "lucide-react";

const CourseContent = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Image */}

        <div className="h-105 rounded-3xl bg-slate-200 flex items-center justify-center">
          Course Image
        </div>

        {/* Content */}

        <div>

          <span className="text-red-600 uppercase font-semibold">
            Course Overview
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Become A Professional Full Stack Developer
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Learn HTML, CSS, JavaScript, React, Node.js, Express and MongoDB
            with practical training, live projects and placement assistance.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="flex items-center gap-3">
              <Clock3 className="text-red-600" />
              <span>6 Months</span>
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-red-600" />
              <span>Certificate</span>
            </div>

            <div className="flex items-center gap-3">
              <BookOpen className="text-red-600" />
              <span>Beginner</span>
            </div>

            <div className="flex items-center gap-3">
              <IndianRupee className="text-red-600" />
              <span>₹25,000</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CourseContent;