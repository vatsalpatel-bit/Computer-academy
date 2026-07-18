import { CheckCircle, Laptop, Users, BookOpen, Award } from 'lucide-react';

const features = [
  'Modern Computer Labs',
  'Experienced Trainers',
  'Industry Projects',
  'Placement Assistance',
  'Flexible Batch Timings',
  'Certification',
];

const WhyVisit = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}

        <div>
          <span className="text-red-600 uppercase font-semibold">Why Visit Our Branches</span>

          <h2 className="text-4xl font-bold mt-4">Learn In A Professional Environment</h2>

          <p className="mt-6 text-gray-600 leading-8">
            Every branch is equipped with modern infrastructure, experienced trainers and practical
            learning facilities.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-green-500" />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-3xl p-8 text-center">
            <Laptop className="mx-auto text-red-600" size={40} />
            <h3 className="mt-5 font-bold">Modern Labs</h3>
          </div>

          <div className="bg-blue-50 rounded-3xl p-8 text-center">
            <Users className="mx-auto text-blue-600" size={40} />
            <h3 className="mt-5 font-bold">Expert Faculty</h3>
          </div>

          <div className="bg-green-50 rounded-3xl p-8 text-center">
            <BookOpen className="mx-auto text-green-600" size={40} />
            <h3 className="mt-5 font-bold">Practical Learning</h3>
          </div>

          <div className="bg-yellow-50 rounded-3xl p-8 text-center">
            <Award className="mx-auto text-yellow-600" size={40} />
            <h3 className="mt-5 font-bold">Certified Courses</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVisit;
