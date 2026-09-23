const BranchBanner = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#111844]">
      {/* Subtle Galaxy Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#4B5694]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#7288AE]/15 rounded-full blur-3xl" />

      {/* Small Stars */}
      <div className="absolute top-12 left-[18%] w-1 h-1 bg-[#EAE0CF] rounded-full opacity-70" />
      <div className="absolute top-20 right-[22%] w-1.5 h-1.5 bg-[#7288AE] rounded-full opacity-60" />
      <div className="absolute bottom-14 left-[30%] w-1 h-1 bg-[#EAE0CF] rounded-full opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Label */}
        <span className="inline-block px-4 py-2 rounded-full bg-[#7288AE]/20 text-[#EAE0CF] text-xs sm:text-sm font-medium">
          Our Locations
        </span>

        {/* Heading */}
        <h1
          className="
        mt-5
        text-3xl
        sm:text-4xl
        lg:text-5xl
        font-bold
        leading-tight
        text-[#EAE0CF]
      "
        >
          Our Branches
        </h1>

        {/* Description */}
        <p
          className="
        mt-4 sm:mt-5
        max-w-2xl
        mx-auto
        text-sm
        sm:text-base
        lg:text-lg
        leading-7
        text-white/75
      "
        >
          Build practical computer skills through guided training and a supportive
          learning environment.
        </p>
      </div>
    </section>
  );
};

export default BranchBanner;
