import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

const BranchCard = ({ branch }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl sm:rounded-3xl
        overflow-hidden
        border border-gray-100
        shadow-sm
        hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="h-48 sm:h-56 lg:h-64 bg-[#EAE0CF] flex items-center justify-center">
        <span className="text-[#7288AE] font-medium">
          Branch Image
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 lg:p-7">

        {/* City */}
        <span className="inline-block text-sm font-semibold text-[#4B5694]">
          {branch.city}
        </span>

        {/* Branch Name */}
        <h3
          className="
            text-2xl
            sm:text-3xl
            font-bold
            text-[#111844]
            mt-2
            leading-tight
          "
        >
          {branch.name}
        </h3>

        {/* Details */}
        <div className="mt-5 sm:mt-6 space-y-4">

          {/* Address */}
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-9 h-9 rounded-full bg-[#111844]/10 flex items-center justify-center">
              <MapPin size={18} className="text-[#111844]" />
            </div>

            <p className="text-sm sm:text-base text-[#7288AE] leading-6 pt-1">
              {branch.address}
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-9 h-9 rounded-full bg-[#111844]/10 flex items-center justify-center">
              <Phone size={18} className="text-[#111844]" />
            </div>

            <a
              href={`tel:${branch.phone}`}
              className="text-sm sm:text-base text-[#111844] font-medium hover:text-[#4B5694] transition"
            >
              {branch.phone}
            </a>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-9 h-9 rounded-full bg-[#111844]/10 flex items-center justify-center">
              <Clock size={18} className="text-[#111844]" />
            </div>

            <span className="text-sm sm:text-base text-[#7288AE] leading-6 pt-1">
              Mon - Sat : 8:00 AM - 8:00 PM
            </span>
          </div>

        </div>

        {/* Google Map Button */}
        <button
          className="
            mt-7 sm:mt-8
            w-full
            flex items-center justify-center gap-2
            bg-[#111844]
            hover:bg-[#4B5694]
            text-white
            px-5
            py-3.5
            rounded-xl
            font-semibold
            text-sm sm:text-base
            transition-all duration-300
            group
          "
        >
          View On Google Map

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>
    </div>
  );
};

export default BranchCard;