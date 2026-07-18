import EnquiryBanner from '@/components/student/enquiry/EnquiryBanner';
import EnquiryForm from '@/components/student/enquiry/EnquiryForm';
import WhyEnroll from '@/components/student/enquiry/WhyEnroll';
import AdmissionProcess from '@/components/student/enquiry/AdmissionProcess';
import EnquiryFAQ from '@/components/student/enquiry/EnquiryFAQ';

const Enquiry = () => {
  return (
    <>
      <EnquiryBanner />
      <EnquiryForm />
      <WhyEnroll />
      <AdmissionProcess />
      <EnquiryFAQ />
    </>
  );
};

export default Enquiry;
