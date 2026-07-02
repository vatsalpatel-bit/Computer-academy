const steps = [
  "Submit Enquiry",
  "Counselling",
  "Choose Course",
  "Complete Admission",
];

const AdmissionProcess = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Admission Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={step}
              className="bg-white rounded-3xl shadow p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto text-2xl font-bold">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AdmissionProcess;