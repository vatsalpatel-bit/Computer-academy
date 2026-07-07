import ContactBanner from "@/components/student/contact/ContactBanner";
import ContactInfo from "@/components/student/contact/ContactInfo";
import ContactForm from "@/components/student/contact/ContactForm";
import WorkingHours from "@/components/student/contact/WorkingHours";

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      <WorkingHours />
    </>
  );
};

export default Contact;