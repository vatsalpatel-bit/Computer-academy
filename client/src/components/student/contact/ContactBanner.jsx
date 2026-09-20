const ContactBanner = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#111844]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Subtle galaxy glow */}
      <div
        className="
          absolute
          -top-32
          -right-32
          w-80
          h-80
          rounded-full
          bg-[#4B5694]/30
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-32
          w-96
          h-96
          rounded-full
          bg-[#7288AE]/15
          blur-3xl
        "
      />

      {/* Small stars */}
      <span className="absolute top-10 left-[15%] w-1 h-1 rounded-full bg-[#EAE0CF]/60" />
      <span className="absolute top-20 right-[20%] w-1.5 h-1.5 rounded-full bg-[#EAE0CF]/40" />
      <span className="absolute bottom-12 left-[30%] w-1 h-1 rounded-full bg-[#7288AE]/60" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          text-center
        "
      >
        {/* Small label */}
        <span
          className="
            inline-block
            mb-4
            px-3.5
            py-1.5
            rounded-full
            border
            border-[#7288AE]/40
            bg-white/5
            text-[#7288AE]
            text-xs
            sm:text-sm
            font-medium
          "
        >
          Get In Touch
        </span>

        {/* Heading */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            text-[#EAE0CF]
          "
        >
          Contact Us
        </h1>

        {/* Description */}
        <p
          className="
            mt-4
            sm:mt-5
            text-sm
            sm:text-base
            lg:text-lg
            leading-6
            sm:leading-8
            text-white/75
            max-w-2xl
            mx-auto
          "
        >
          We'd love to hear from you. Reach out for course details, admissions or any queries.
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;
