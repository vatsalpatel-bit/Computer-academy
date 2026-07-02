import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 overflow-hidden bg-linear-to-r from-[#0B1E45] via-[#15356F] to-[#0B1E45]">
      {/* Decorative Circles */}
      <div className="absolute w-80 h-80 bg-red-500/10 rounded-full -top-32 -left-20"></div>
      <div className="absolute w-96 h-96 bg-white/5 rounded-full -bottom-44 -right-32"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}
          <div className="max-w-2xl">
            <span className="text-red-600 uppercase tracking-widest font-semibold">
              Start Learning Today
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Build Your Future With
              <span className="text-red-600"> Computer Academy</span>
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Join thousands of successful students who have transformed their
              careers through practical training, experienced faculty, and
              industry-focused courses.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={()=>navigate("/enquiry")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition">
              Enquire Now
              <FaArrowRight />
            </button>

            <button className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition">
              <FaPhoneAlt />
              Call Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;