import { ArrowRight } from "lucide-react";

const CourseCTA = () => {
  return (
    <section className="py-20 bg-[#0B1E45]">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        <h2 className="text-5xl font-bold">
          Ready To Join This Course?
        </h2>

        <p className="mt-5 text-lg text-gray-300">
          Enroll today and start your journey toward becoming a skilled
          Full Stack Developer.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition">
            Enroll Now
          </button>

          <button className="border border-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-white hover:text-[#0B1E45] transition">
            Contact Us
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default CourseCTA;