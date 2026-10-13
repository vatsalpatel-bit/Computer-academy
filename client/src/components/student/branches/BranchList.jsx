import BranchCard from './BranchCard';

const branches = [
  {
    id: 1,
    name: 'Sarsa Branch',
    city: 'Sarsa',
    address: 'Near Bus Stand, Sarsa, Gujarat',
    phone: '+91 78254 20988',
  },
  {
    id: 2,
    name: 'Vadodara Branch',
    city: 'Vadodara',
    address:
      'F–2, Aditya Enclave, Near Uma Crossing, Waghodia Road, Vadodara-390025, Gujarat, India',
    phone: '+91 93775 36147',
  },
  {
    id: 3,
    name: 'Umreth Branch',
    city: 'Umreth',
    address:
      'Vadalj Bazar, Near Bhidbhanjan Hanuman Temple, Bilimora Road, Umreth, Gujarat',
    phone: '+91 78254 20988',
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
