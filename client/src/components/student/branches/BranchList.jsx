import BranchCard from "./BranchCard";

const branches = [
  {
    id: 1,
    name: "Head Office",
    city: "Chikhli",
    address:
      "Near Bus Stand, Chikhli, Navsari, Gujarat",
    phone: "+91 9876543210",
  },
  {
    id: 2,
    name: "Navsari Branch",
    city: "Navsari",
    address:
      "Station Road, Navsari, Gujarat",
    phone: "+91 9876543211",
  },
  {
    id: 3,
    name: "Valsad Branch",
    city: "Valsad",
    address:
      "Tithal Road, Valsad, Gujarat",
    phone: "+91 9876543212",
  },
];

const BranchList = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-8">

          {branches.map((branch) => (
            <BranchCard
              key={branch.id}
              branch={branch}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default BranchList;