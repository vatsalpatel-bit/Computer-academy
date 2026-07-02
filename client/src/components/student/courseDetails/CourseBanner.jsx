const CourseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#0B1E45] to-[#1F4B99] py-24">
      <div className="max-w-7xl mx-auto px-6 text-white">

        <span className="bg-red-600 px-4 py-2 rounded-full text-sm">
          Programming Course
        </span>

        <h1 className="text-5xl font-bold mt-6">
          Full Stack Web Development
        </h1>

        <p className="mt-5 max-w-2xl text-gray-200">
          Become a professional Full Stack Developer by learning HTML,
          CSS, JavaScript, React, Node.js, Express and MongoDB.
        </p>

      </div>
    </section>
  );
};

export default CourseBanner;