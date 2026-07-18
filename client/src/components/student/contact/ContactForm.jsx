import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const contactSchema = z.object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(100, 'Name cannot exceed 100 characters'),

    email: z.email('Please enter a valid email address'),

    phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit phone number'),

    course: z.string().min(1, 'Please select a course'),

    message: z
      .string()
      .min(20, 'Message must be at least 20 characters')
      .max(1000, 'Message cannot exceed 1000 characters'),
  });

  const eventHandler = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = contactSchema.safeParse(input);

      if (!result.success) {
        const allErrors = {};

        result.error.issues.forEach((err) => {
          allErrors[err.path[0]] = err.message;
        });

        setErrors(allErrors);

        toast.error('Please fix the highlighted fields.');

        return;
      }

      setErrors({});

      const text = `
📚 Computer Academy Inquiry

👤 Name: ${input.name}

📧 Email: ${input.email}

📱 Phone: ${input.phone}

💻 Course: ${input.course}

📝 Message:
${input.message}
`;

      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');

      setInput({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-4xl font-bold text-center">Send Us A Message</h2>

          <form onSubmit={submitHandler} className="grid md:grid-cols-2 gap-6 mt-10">
            <div>
              <input
                name="name"
                value={input.name}
                onChange={eventHandler}
                type="text"
                placeholder="Full Name"
                className={`w-full border rounded-xl p-4 outline-none transition
      ${errors.name ? 'border-red-500' : 'focus:border-red-500'}`}
              />

              <p className="text-red-500 text-sm mt-1 h-5">{errors.name}</p>
            </div>
            <div>
              <input
                name="email"
                value={input.email}
                onChange={eventHandler}
                type="email"
                placeholder="Email"
                className={`w-full border rounded-xl p-4 outline-none transition
      ${errors.email ? 'border-red-500' : 'focus:border-red-500'}`}
              />

              <p className="text-red-500 text-sm mt-1 h-5">{errors.email}</p>
            </div>
            <div>
              <input
                name="phone"
                value={input.phone}
                onChange={eventHandler}
                type="tel"
                placeholder="Phone Number"
                className={`w-full border rounded-xl p-4 outline-none transition
      ${errors.phone ? 'border-red-500' : 'focus:border-red-500'}`}
              />

              <p className="text-red-500 text-sm mt-1 h-5">{errors.phone}</p>
            </div>
            <div>
              <input
                name="course"
                value={input.course}
                onChange={eventHandler}
                type="text"
                placeholder="Course"
                className={`w-full border rounded-xl p-4 outline-none transition
      ${errors.course ? 'border-red-500' : 'focus:border-red-500'}`}
              />

              <p className="text-red-500 text-sm mt-1 h-5">{errors.course}</p>
            </div>
            <div className="md:col-span-2">
              <textarea
                name="message"
                value={input.message}
                onChange={eventHandler}
                rows="6"
                placeholder="Your Message"
                className={`w-full border rounded-xl p-4 outline-none resize-none transition
      ${errors.message ? 'border-red-500' : 'focus:border-red-500'}`}
              />

              <p className="text-red-500 text-sm mt-1 h-5">{errors.message}</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`md:col-span-2 py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2
    ${loading ? 'bg-red-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'} text-white`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
