import { FaCheckCircle } from 'react-icons/fa';

const journey = [
  {
    year: '2010',
    title: 'Academy Established',
    description: 'Started with a vision to provide quality computer education.',
  },
  {
    year: '2015',
    title: '1000+ Students',
    description: 'Successfully trained over 1000 students across multiple courses.',
  },
  {
    year: '2020',
    title: 'New Branches',
    description: 'Expanded our institute with modern classrooms and labs.',
  },
  {
    year: '2025',
    title: 'Industry Training',
    description: 'Focused on real-world projects, internships and placement support.',
  },
];

const OurJourney = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 uppercase font-semibold">Journey</span>

          <h2 className="text-4xl font-bold mt-3">Our Journey</h2>
        </div>

        <div className="space-y-10">
          {journey.map((item) => (
            <div key={item.year} className="flex gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                {item.year}
              </div>

              <div className="bg-white rounded-2xl shadow p-6 flex-1">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>

                <p className="mt-4 text-gray-600 leading-7">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
