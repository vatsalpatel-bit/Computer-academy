import { CheckCircle, Award, Users, Laptop } from 'lucide-react';

const WhyEnroll = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-red-600 font-semibold uppercase">Benefits</span>

          <h2 className="text-4xl font-bold mt-4">Why Enroll With Us?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {[
            {
              icon: <Laptop size={40} />,
              title: 'Modern Lab',
            },
            {
              icon: <Users size={40} />,
              title: 'Expert Faculty',
            },
            {
              icon: <Award size={40} />,
              title: 'Certification',
            },
            {
              icon: <CheckCircle size={40} />,
              title: 'Placement Support',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white shadow rounded-3xl p-8 text-center">
              <div className="text-red-600 flex justify-center">{item.icon}</div>

              <h3 className="text-xl font-bold mt-5">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEnroll;
