import BranchCard from './BranchCard';

const branches = [
  {
    id: 1,
    name: 'Sarsa Branch',
    city: 'Anand',
    address: 'Sarsa Near Bus Stand Khabhodaj Road Virat Cinema',
    phone: '+91 99247 63536',
  },
  {
    id: 2,
    name: 'Navsari Branch',
    city: 'Anand',
    address: 'Station Road, Navsari, Gujarat',
    phone: '+91 97254 20986',
  },
  {
    id: 3,
    name: 'Valsad Branch',
    city: 'Valsad',
    address: 'Tithal Road, Valsad, Gujarat',
    phone: '+91 9876543212',
  },
];

const BranchList = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchList;
