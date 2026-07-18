import BranchBanner from '@/components/student/branches/BranchBanner';
import BranchList from '@/components/student/branches/BranchList';
import WhyVisit from '@/components/student/branches/WhyVisit';
import BranchCTA from '@/components/student/branches/BranchCTA';

const Branches = () => {
  return (
    <>
      <BranchBanner />
      <BranchList />
      <WhyVisit />
      <BranchCTA />
    </>
  );
};

export default Branches;
