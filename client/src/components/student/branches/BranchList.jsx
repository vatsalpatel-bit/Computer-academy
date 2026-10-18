import BranchCard from './BranchCard';

const branches = [
  {
    id: 1,
    name: 'Sarsa Branch',
    city: 'Sarsa',
    address: 'Near Bus Stand, Sarsa, Gujarat',
    phone: '+91 99247 63536',
  },
  {
    id: 3,
    name: 'Umreth Branch',
    city: 'Umreth',
    address:
      'Second Floor, Velkam Market, Vada Bazar, Near BOB Bank, Umreth.',
    phone: '+91 97254 20986',
  },
];

const BranchList = () => {
  return (
    <section className="py-20 bg-[#EAE0CF]/20">
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
