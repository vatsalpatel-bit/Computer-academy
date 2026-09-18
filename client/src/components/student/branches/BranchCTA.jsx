import { useNavigate } from 'react-router-dom';

const BranchCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#111844]">

      {/* Subtle Galaxy Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#4B5694]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#7288AE]/15 rounded-full blur-3xl" />

      {/* Small Stars */}
      <div className="absolute top-10 left-[15%] w-1 h-1 bg-[#EAE0CF] rounded-full opacity-70" />
      <div className="absolute top-20 right-[20%] w-1.5 h-1.5 bg-[#7288AE] rounded-full opacity-60" />
      <div className="absolute bottom-16 left-[25%] w-1 h-1 bg-[#EAE0CF] rounded-full opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Label */}
        <span
          className="
            inline-block
            px-4 py-2
            rounded-full
            bg-[#7288AE]/20
            text-[#EAE0CF]
            text-xs sm:text-sm
            font-medium
          "
        >
          Visit Our Branch
        </span>

        {/* Heading */}
        <h2
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
          Find The Nearest Branch
        </h2>

        {/* Description */}
        <p
          className="
            mt-4 sm:mt-5
            max-w-2xl
            mx-auto
            text-sm
            sm:text-base
            lg:text-lg
            leading-6 sm:leading-7
            text-white/75
          "
        >
          Visit any of our branches and start your learning journey today.
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={() => navigate('/contact')}
          className="
            mt-7 sm:mt-8
            w-full sm:w-auto
            min-h-12
            bg-red-600
            hover:bg-red-700
            active:bg-red-800
            text-white
            px-7 sm:px-8
            py-3.5 sm:py-4
            rounded-xl
            font-semibold
            text-sm sm:text-base
            shadow-lg
            transition-all duration-300
            hover:-translate-y-0.5
            focus:outline-none
            focus:ring-2
            focus:ring-red-400
            focus:ring-offset-2
            focus:ring-offset-[#111844]
          "
        >
          Contact Our Team
        </button>

      </div>
    </section>
  );
};

export default BranchCTA;