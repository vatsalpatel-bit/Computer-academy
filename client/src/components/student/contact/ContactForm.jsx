const ContactForm = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-4xl font-bold text-center">
            Send Us A Message
          </h2>

          <form className="grid md:grid-cols-2 gap-6 mt-10">

            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <input
              type="text"
              placeholder="Course"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="border rounded-xl p-4 outline-none focus:border-red-500 md:col-span-2"
            ></textarea>

            <button className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold md:col-span-2 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;