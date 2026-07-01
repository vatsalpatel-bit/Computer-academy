import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "What courses are available at Computer Academy?",
    answer:
      "We offer Web Development, Java, Python, C/C++, Graphic Design, Tally, MS Office, Spoken English, and many more professional courses.",
  },
  {
    id: "item-2",
    question: "Do you provide certificates after course completion?",
    answer:
      "Yes, every student receives a course completion certificate after successfully finishing the training program.",
  },
  {
    id: "item-3",
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we provide career guidance, interview preparation, resume building, and placement assistance for eligible students.",
  },
  {
    id: "item-4",
    question: "Can beginners join the courses?",
    answer:
      "Absolutely! Our courses are designed for beginners as well as advanced learners.",
  },
  {
    id: "item-5",
    question: "How can I enroll?",
    answer:
      "You can visit our institute, call us, or submit the online enquiry form to start your enrollment process.",
  },
];

const Faq = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-red-600 uppercase tracking-widest font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl font-bold mt-3 text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4">
            Find answers to the most common questions about our courses,
            admissions, and training programs.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border rounded-2xl bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-gray-600 leading-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;