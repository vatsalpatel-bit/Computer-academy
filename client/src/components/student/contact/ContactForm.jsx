import { useState } from "react";

const ContactForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    course: "",
    message: "",
  })

  const enventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const text = `
📚 Computer Academy Inquiry

👤 Name: ${input.name}

📧 Email: ${input.email}

📱 Phone: ${input.phone}

💻 Course: ${input.course}

📝 Message:
${input.message}
`;

    window.open(
      `https://wa.me/7284852881?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-4xl font-bold text-center">
            Send Us A Message
          </h2>

          <form
            onSubmit={submitHandler}
            className="grid md:grid-cols-2 gap-6 mt-10">

            <input
              name="name"
              value={input.name}
              onChange={enventHandler}
              type="text"
              placeholder="Full Name"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <input
              name="email"
              value={input.email}
              onChange={enventHandler}
              type="email"
              placeholder="Email"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <input
              name="number"
              value={input.number}
              onChange={enventHandler}
              type="tel"
              placeholder="Phone Number"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <input
              name="course"
              value={input.course}
              onChange={enventHandler}
              type="text"
              placeholder="Course"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <textarea
              name="message"
              value={input.message}
              onChange={enventHandler}
              rows="6"
              placeholder="Your Message"
              className="border rounded-xl p-4 outline-none focus:border-red-500 md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold md:col-span-2 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;