const CourseBanner = () => {
  return (
    <section
      className="
        bg-[#111844]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          text-center
          text-white
        "
      >
        {/* Small Label */}
        <p
          className="
            text-xs
            sm:text-sm
            font-semibold
            tracking-widest
            uppercase
            text-[#7288AE]
            mb-3
          "
        >
          Learn & Grow
        </p>

        {/* Heading */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-[#EAE0CF]
            leading-tight
          "
        >
          Our Courses
        </h1>

        {/* Description */}
        <p
          className="
            mt-4
            sm:mt-5
            text-sm
            sm:text-base
            lg:text-lg
            text-white/75
            leading-6
            sm:leading-7
            max-w-2xl
            mx-auto
          "
        >
          Learn the latest technologies with practical training,
          experienced trainers and industry-focused curriculum.
        </p>
      </div>
    </section>
  );
};

export default CourseBanner;