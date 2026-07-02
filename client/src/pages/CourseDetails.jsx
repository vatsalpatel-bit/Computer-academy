import CourseBanner from "@/components/student/courseDetails/CourseBanner";
import CourseContent from "@/components/student/courseDetails/CourseContent";
import LearnSection from "@/components/student/courseDetails/LearnSection";
import CourseCTA from "@/components/student/courseDetails/CourseCTA";

const CourseDetails = () => {
  return (
    <>
      <CourseBanner />
      <CourseContent />
      <LearnSection />
      <CourseCTA />
    </>
  );
};

export default CourseDetails;