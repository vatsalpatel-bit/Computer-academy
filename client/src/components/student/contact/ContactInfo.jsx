import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#EAE0CF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {/* Address */}
          <div
            className="
          bg-white
          rounded-2xl sm:rounded-3xl
          p-6 sm:p-8
          shadow-sm
          border border-gray-100
          text-center
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
          >
            <div
              className="
            mx-auto
            w-14 h-14
            sm:w-16 sm:h-16
            rounded-full
            bg-[#111844]/10
            flex items-center justify-center
          "
            >
              <MapPin className="text-[#111844]" size={28} />
            </div>

            <h3
              className="
            text-xl
            sm:text-2xl
            font-bold
            text-[#111844]
            mt-5
          "
            >
              Address
            </h3>

            <p
              className="
            text-sm
            sm:text-base
            text-[#7288AE]
            mt-3
            leading-6
          "
            >
              Parshwa Complex, Opp. Bus Depo, Beside I.C.I.C. Bank, Vasad 388 306  
            </p>
          </div>

          {/* Phone */}
          <div
            className="
          bg-white
          rounded-2xl sm:rounded-3xl
          p-6 sm:p-8
          shadow-sm
          border border-gray-100
          text-center
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
          >
            <div
              className="
            mx-auto
            w-14 h-14
            sm:w-16 sm:h-16
            rounded-full
            bg-[#111844]/10
            flex items-center justify-center
          "
            >
              <Phone className="text-[#111844]" size={28} />
            </div>

            <h3
              className="
            text-xl
            sm:text-2xl
            font-bold
            text-[#111844]
            mt-5
          "
            >
              Phone
            </h3>

            <a
              href="tel:+919876543210"
              className="
            block
            text-sm
            sm:text-base
            text-[#7288AE]
            hover:text-[#4B5694]
            mt-3
            transition-colors
          "
            >
              +91 99988 68445
            </a>
          </div>

          {/* Email */}
          <div
            className="
          bg-white
          rounded-2xl sm:rounded-3xl
          p-6 sm:p-8
          shadow-sm
          border border-gray-100
          text-center
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
          >
            <div
              className="
            mx-auto
            w-14 h-14
            sm:w-16 sm:h-16
            rounded-full
            bg-[#111844]/10
            flex items-center justify-center
          "
            >
              <Mail className="text-[#111844]" size={28} />
            </div>

            <h3
              className="
            text-xl
            sm:text-2xl
            font-bold
            text-[#111844]
            mt-5
          "
            >
              Email
            </h3>

            <a
              href="mailto:info@computeracademy.com"
              className="
            block
            text-sm
            sm:text-base
            text-[#7288AE]
            hover:text-[#4B5694]
            mt-3
            transition-colors
            break-all
          "
            >
              jankayancomputercenter@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
