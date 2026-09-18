import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState(() => {
    const saveInput = localStorage.getItem('contactForm');

    return saveInput
      ? JSON.parse(saveInput)
      : {
          name: '',
          email: '',
          phone: '',
          course: '',
          message: '',
        };
  });

  const contactSchema = z.object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(100, 'Name cannot exceed 100 characters'),

    email: z.email('Please enter a valid email address'),

    phone: z
      .string()
      .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit phone number'),

    course: z.string().min(1, 'Please select a course'),

    message: z
      .string()
      .min(20, 'Message must be at least 20 characters')
      .max(1000, 'Message cannot exceed 1000 characters'),
  });

  useEffect(() => {
    localStorage.setItem('contactForm', JSON.stringify(input));
  }, [input]);

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

      window.open(
        `https://wa.me/919876543210?text=${encodeURIComponent(text)}`,
        '_blank'
      );

      localStorage.removeItem('contactForm');

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

  const inputClass = (field) => `
    w-full
    h-12
    sm:h-14
    px-4
    rounded-xl
    border
    bg-white
    text-[#111844]
    placeholder:text-[#7288AE]/70
    outline-none
    transition-all
    duration-200
    text-sm
    sm:text-base
    ${
      errors[field]
        ? 'border-red-500 focus:ring-2 focus:ring-red-100'
        : 'border-gray-200 focus:border-[#4B5694] focus:ring-2 focus:ring-[#4B5694]/10'
    }
  `;

  return (
    <section className="relative bg-[#EAE0CF]/20 py-12 sm:py-16 lg:py-20 overflow-hidden">

      {/* Subtle background glow */}
      <div
        className="
          absolute
          -top-32
          -right-32
          w-80
          h-80
          rounded-full
          bg-[#4B5694]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          relative
          max-w-4xl
          mx-auto
          px-4
          sm:px-6
        "
      >
        {/* Form Card */}
        <div
          className="
            bg-white
            rounded-2xl
            sm:rounded-3xl
            shadow-xl
            shadow-[#111844]/5
            border
            border-gray-100
            p-5
            sm:p-8
            lg:p-10
          "
        >

          {/* Heading */}
          <div className="text-center mb-7 sm:mb-10">

            <span
              className="
                inline-block
                px-3
                py-1.5
                rounded-full
                bg-[#4B5694]/10
                text-[#4B5694]
                text-xs
                sm:text-sm
                font-semibold
                mb-3
              "
            >
              Get In Touch
            </span>

            <h2
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                text-[#111844]
              "
            >
              Send Us A Message
            </h2>

            <p
              className="
                mt-2
                text-sm
                sm:text-base
                text-[#7288AE]
              "
            >
              Have a question? We'd love to hear from you.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={submitHandler}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-x-5
              gap-y-1
            "
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-[#111844]"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                value={input.name}
                onChange={eventHandler}
                type="text"
                placeholder="Enter your name"
                className={inputClass('name')}
              />

              <p className="text-red-500 text-xs mt-1 h-5">
                {errors.name}
              </p>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#111844]"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                value={input.email}
                onChange={eventHandler}
                type="email"
                placeholder="Enter your email"
                className={inputClass('email')}
              />

              <p className="text-red-500 text-xs mt-1 h-5">
                {errors.email}
              </p>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-[#111844]"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                value={input.phone}
                onChange={eventHandler}
                type="tel"
                inputMode="numeric"
                maxLength="10"
                placeholder="10-digit phone number"
                className={inputClass('phone')}
              />

              <p className="text-red-500 text-xs mt-1 h-5">
                {errors.phone}
              </p>
            </div>

            {/* Course */}
            <div>
              <label
                htmlFor="course"
                className="block mb-2 text-sm font-medium text-[#111844]"
              >
                Course
              </label>

              <input
                id="course"
                name="course"
                value={input.course}
                onChange={eventHandler}
                type="text"
                placeholder="Interested course"
                className={inputClass('course')}
              />

              <p className="text-red-500 text-xs mt-1 h-5">
                {errors.course}
              </p>
            </div>

            {/* Message */}
            <div className="md:col-span-2 mt-1">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-[#111844]"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                value={input.message}
                onChange={eventHandler}
                rows="5"
                placeholder="Tell us how we can help..."
                className={`
                  w-full
                  px-4
                  py-3.5
                  rounded-xl
                  border
                  bg-white
                  text-[#111844]
                  placeholder:text-[#7288AE]/70
                  outline-none
                  resize-none
                  transition-all
                  duration-200
                  text-sm
                  sm:text-base
                  ${
                    errors.message
                      ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                      : 'border-gray-200 focus:border-[#4B5694] focus:ring-2 focus:ring-[#4B5694]/10'
                  }
                `}
              />

              <p className="text-red-500 text-xs mt-1 h-5">
                {errors.message}
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                md:col-span-2
                w-full
                mt-3
                h-12
                sm:h-14
                rounded-xl
                bg-red-600
                hover:bg-red-700
                disabled:bg-red-400
                disabled:cursor-not-allowed
                text-white
                font-semibold
                text-sm
                sm:text-base
                transition-all
                duration-300
                shadow-md
                hover:shadow-lg
                flex
                items-center
                justify-center
                gap-2
              "
            >
              {loading ? (
                <>
                  <span
                    className="
                      w-5
                      h-5
                      border-2
                      border-white
                      border-t-transparent
                      rounded-full
                      animate-spin
                    "
                  />
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