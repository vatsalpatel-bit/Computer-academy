import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl p-10 shadow">
          <FaBullseye className="text-5xl text-red-600" />

          <h3 className="text-3xl font-bold mt-6">Our Mission</h3>

          <p className="mt-4 text-gray-600 leading-8">
            To provide practical computer education that prepares students for successful careers in
            the IT industry.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow">
          <FaEye className="text-5xl text-blue-700" />

          <h3 className="text-3xl font-bold mt-6">Our Vision</h3>

          <p className="mt-4 text-gray-600 leading-8">
            To become one of the most trusted computer training institutes by delivering
            high-quality education and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
