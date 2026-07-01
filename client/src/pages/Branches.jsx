import BranchBanner from "@/components/website/branches/BranchBanner";
import BranchList from "@/components/website/branches/BranchList";
import WhyVisit from "@/components/website/branches/WhyVisit";
import BranchCTA from "@/components/website/branches/BranchCTA";

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