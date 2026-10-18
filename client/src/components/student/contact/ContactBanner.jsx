const ContactBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#111844]">
      {/* Subtle Galaxy Glow */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#4B5694]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#7288AE]/15 blur-3xl" />

      {/* Small Stars */}
      <span className="absolute left-[18%] top-12 h-1 w-1 rounded-full bg-[#EAE0CF] opacity-70" />
      <span className="absolute right-[22%] top-20 h-1.5 w-1.5 rounded-full bg-[#7288AE] opacity-60" />
      <span className="absolute bottom-14 left-[30%] h-1 w-1 rounded-full bg-[#EAE0CF] opacity-50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[220px] max-w-7xl flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[260px] sm:px-6 sm:py-16">
        {/* Label */}
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-sm">
          Get In Touch
        </span>

        {/* Heading */}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#EAE0CF] sm:text-4xl lg:text-5xl">
          Contact Us
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
          Have questions about our courses? Contact us for admissions, course details, and guidance.
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;