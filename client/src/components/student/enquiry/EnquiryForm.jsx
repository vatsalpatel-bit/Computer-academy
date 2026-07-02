const EnquiryForm = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold text-center">
            Admission Enquiry Form
          </h2>

          <form className="grid md:grid-cols-2 gap-6 mt-10">

            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <select className="border rounded-xl p-4 outline-none">
              <option>Select Course</option>
              <option>Full Stack Development</option>
              <option>Java Programming</option>
              <option>Python</option>
              <option>Tally Prime</option>
              <option>Graphic Design</option>
            </select>

            <select className="border rounded-xl p-4 outline-none">
              <option>Preferred Batch</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <input
              type="text"
              placeholder="City"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="border rounded-xl p-4 md:col-span-2 outline-none focus:border-red-500"
            ></textarea>

            <button className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold md:col-span-2 transition">
              Submit Enquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default EnquiryForm;