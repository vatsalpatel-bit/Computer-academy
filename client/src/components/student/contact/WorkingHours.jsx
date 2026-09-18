import { Clock3 } from 'lucide-react';

const WorkingHours = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#EAE0CF]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Icon */}
        <div
          className="
            mx-auto
            w-16 h-16
            sm:w-20 sm:h-20
            rounded-full
            bg-[#111844]/10
            flex items-center justify-center
          "
        >
          <Clock3
            size={32}
            className="text-[#111844] sm:w-10 sm:h-10"
          />
        </div>

        {/* Heading */}
        <h2
          className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            text-[#111844]
            mt-5 sm:mt-6
          "
        >
          Working Hours
        </h2>

        {/* Hours Card */}
        <div
          className="
            max-w-2xl
            mx-auto
            mt-7 sm:mt-8
            bg-white
            rounded-2xl sm:rounded-3xl
            shadow-sm
            border border-gray-100
            overflow-hidden
          "
        >
          <div className="divide-y divide-gray-100">

            {/* Monday - Friday */}
            <div
              className="
                flex flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-1 sm:gap-4
                px-5 sm:px-8
                py-4 sm:py-5
                text-left
              "
            >
              <span className="font-semibold text-[#111844]">
                Monday - Friday
              </span>

              <span className="text-sm sm:text-base text-[#7288AE]">
                8:00 AM - 8:00 PM
              </span>
            </div>

            {/* Saturday */}
            <div
              className="
                flex flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-1 sm:gap-4
                px-5 sm:px-8
                py-4 sm:py-5
                text-left
              "
            >
              <span className="font-semibold text-[#111844]">
                Saturday
              </span>

              <span className="text-sm sm:text-base text-[#7288AE]">
                8:00 AM - 6:00 PM
              </span>
            </div>

            {/* Sunday */}
            <div
              className="
                flex flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-1 sm:gap-4
                px-5 sm:px-8
                py-4 sm:py-5
                text-left
              "
            >
              <span className="font-semibold text-[#111844]">
                Sunday
              </span>

              <span className="text-sm sm:text-base font-medium text-red-600">
                Closed
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkingHours;