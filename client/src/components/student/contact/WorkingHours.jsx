import { Clock3 } from "lucide-react";

const WorkingHours = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <Clock3
          size={50}
          className="mx-auto text-red-600"
        />

        <h2 className="text-4xl font-bold mt-6">
          Working Hours
        </h2>

        <div className="mt-8 space-y-3 text-lg">

          <p>Monday - Friday : 8:00 AM - 8:00 PM</p>

          <p>Saturday : 8:00 AM - 6:00 PM</p>

          <p>Sunday : Closed</p>

        </div>

      </div>
    </section>
  );
};

export default WorkingHours;