import { CheckCircle } from "lucide-react";

const points = [
  "Experienced Trainers",
  "Practical Learning",
  "Industry Projects",
  "Placement Assistance",
  "Modern Computer Lab",
  "Certification",
];

const WhyLearn = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        <div className="h-112.5 rounded-3xl bg-slate-300 flex items-center justify-center">
          Image
        </div>

        <div>

          <span className="text-red-600 font-semibold uppercase">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Learn With Confidence
          </h2>

          <div className="mt-8 space-y-5">

            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3"
              >
                <CheckCircle className="text-green-500" />

                <span>{point}</span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyLearn;