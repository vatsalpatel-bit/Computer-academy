import instituteImage from '@/svg/gallery/institute.png';

const AboutInstitute = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Placeholder */}
        <img
          src={instituteImage}
          alt="Computer Academy Classroom"
          className="w-full h-112.5 rounded-3xl object-cover"
        />
        {/* Content */}
        <div>
          <span className="text-red-600 uppercase font-semibold">About Computer Academy</span>

          <h2 className="text-4xl font-bold mt-4">Building Future IT Professionals</h2>

          <p className="mt-6 text-gray-600 leading-8">
            Computer Academy has been providing quality computer education for many years. Our
            mission is to prepare students with practical knowledge, modern technologies, and
            industry-relevant skills.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            We believe learning should be practical, interactive, and career oriented. Our
            experienced trainers guide students through real projects and hands-on practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;
