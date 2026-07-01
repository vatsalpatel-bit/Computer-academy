import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLocationArrow,
} from "react-icons/fa";

const branches = [
  {
    id: 1,
    city: "Chikhli (Head Office)",
    address:
      "First Floor, Opp HP Petrol Pump, Chikhli, Navsari, Gujarat",
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    city: "Navsari",
    address:
      "K.K Plaza, Opp Bus Depot, Navsari, Gujarat",
    phone: "+91 98765 43211",
  },
  {
    id: 3,
    city: "Dharampur",
    address:
      "Main Road, Dharampur, Valsad, Gujarat",
    phone: "+91 98765 43212",
  },
];

const Branches = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="text-red-600 font-semibold uppercase tracking-widest">
            Our Branches
          </span>

          <h2 className="text-4xl font-bold mt-3 text-slate-900">
            Visit Our Training Centers
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            We have multiple branches equipped with modern labs,
            experienced faculty and a comfortable learning environment.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="relative rounded-3xl overflow-hidden bg-[#0B1E45] text-white p-8 shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Badge */}

              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 px-8 py-3 rounded-b-2xl">
                <h3 className="font-semibold">
                  {branch.city}
                </h3>
              </div>

              <div className="mt-20 space-y-6">
                <div className="flex gap-4">
                  <FaMapMarkerAlt
                    size={22}
                    className="text-red-500 mt-1"
                  />

                  <p className="text-gray-200 leading-7">
                    {branch.address}
                  </p>
                </div>

                <div className="flex gap-4">
                  <FaPhoneAlt
                    size={18}
                    className="text-red-500 mt-1"
                  />

                  <p>{branch.phone}</p>
                </div>

                <button className="mt-6 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl flex items-center gap-3 font-semibold">
                  <FaLocationArrow />
                  View on Map
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;