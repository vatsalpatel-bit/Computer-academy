import { CheckCircle } from "lucide-react";

const topics = [
  "HTML & CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
];

const LearnSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">
          <span className="text-red-600 uppercase font-semibold">
            Course Content
          </span>

          <h2 className="text-4xl font-bold mt-4">
            What You'll Learn
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          {topics.map((topic) => (
            <div
              key={topic}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm"
            >
              <CheckCircle className="text-green-500" />

              <span>{topic}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LearnSection;