import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
} from "lucide-react";

const BranchCard = ({ branch }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">

      {/* Image */}

      <div className="h-64 bg-slate-200 flex items-center justify-center">
        Branch Image
      </div>

      {/* Content */}

      <div className="p-6">

        <span className="text-red-600 font-semibold">
          {branch.city}
        </span>

        <h3 className="text-3xl font-bold mt-2">
          {branch.name}
        </h3>

        <div className="mt-6 space-y-4">

          <div className="flex gap-3">
            <MapPin className="text-red-600" />
            <p className="text-gray-600">
              {branch.address}
            </p>
          </div>

          <div className="flex gap-3">
            <Phone className="text-red-600" />
            <span>{branch.phone}</span>
          </div>

          <div className="flex gap-3">
            <Clock className="text-red-600" />
            <span>Mon - Sat : 8:00 AM - 8:00 PM</span>
          </div>

        </div>

        <button className="mt-8 flex items-center gap-3 text-red-600 font-semibold">
          View On Google Map
          <ArrowRight size={18} />
        </button>

      </div>
    </div>
  );
};

export default BranchCard;