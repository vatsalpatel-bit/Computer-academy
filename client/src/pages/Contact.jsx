import ContactBanner from "@/components/student/contact/ContactBanner";
import ContactInfo from "@/components/student/contact/ContactInfo";
import ContactForm from "@/components/student/contact/ContactForm";
import WorkingHours from "@/components/student/contact/WorkingHours";
import GoogleMap from "@/components/student/contact/GoogleMap";
import ContactCTA from "@/components/student/contact/ContactCTA";

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      <WorkingHours />
      <GoogleMap />
      <ContactCTA />
    </>
  );
};

export default Contact;