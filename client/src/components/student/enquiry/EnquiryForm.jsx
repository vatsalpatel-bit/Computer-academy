import { setAllCoursesTitle } from '@/redux/slices/courseSlices';
import { getAllCourseTitleApi } from '@/services/coursesApi';
import { sendEnquiryApi } from '@/services/enquiry';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const EnquiryForm = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    batch: '',
    city: '',
    message: '',
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const courseTitle = useSelector((state) => state.course.allCoursesTitle);
  const [errors, setErrors] = useState({});
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

  useEffect(() => {
    const fetchAllCourseTitleApi = async () => {
      try {
        const data = await getAllCourseTitleApi();
        // console.log(data.course);
        dispatch(setAllCoursesTitle(data.course));
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllCourseTitleApi();
  }, [dispatch]);

  const submitHandler = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      await sendEnquiryApi(input);
      toast.success('Mail sent successfully');
    } catch (error) {
      const data = error.response?.data;
      if (data?.error) {
        const allErrors = {};

        data.error.forEach((err) => {
          allErrors[err.path[0]] = err.message;
        });

        setErrors(allErrors);
        toast.error('Please fix the highlighted fields.');

        return;
      } else if (data?.message) {
        toast.error(data?.message);
      } else {
        toast.error('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-4xl font-bold text-center">Admission Enquiry Form</h2>
          <form onSubmit={submitHandler} className="grid md:grid-cols-2 gap-6 mt-10">
            {/* Name */}
            <div>
              <input
                name="name"
                value={input.name}
                onChange={eventHandler}
                type="text"
                placeholder="Full Name"
                className={`w-full border rounded-xl p-4 outline-none ${
                  errors.name ? 'border-red-500' : 'focus:border-red-500'
                }`}
              />
              <p className="text-red-500 text-sm mt-1 h-5">{errors.name}</p>
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                value={input.email}
                onChange={eventHandler}
                type="email"
                placeholder="Email Address"
                className={`w-full border rounded-xl p-4 outline-none ${
                  errors.email ? 'border-red-500' : 'focus:border-red-500'
                }`}
              />
              <p className="text-red-500 text-sm mt-1 h-5">{errors.email}</p>
            </div>

            {/* Phone */}
            <div>
              <input
                name="phone"
                value={input.phone}
                onChange={eventHandler}
                type="tel"
                placeholder="Mobile Number"
                className={`w-full border rounded-xl p-4 outline-none ${
                  errors.phone ? 'border-red-500' : 'focus:border-red-500'
                }`}
              />
              <p className="text-red-500 text-sm mt-1 h-5">{errors.phone}</p>
            </div>

            {/* Course */}
            <div>
              <select
                name="course"
                value={input.course}
                onChange={eventHandler}
                className={`w-full border rounded-xl p-4 outline-none ${
                  errors.course ? 'border-red-500' : 'focus:border-red-500'
                }`}
              >
                <option value="">Select Course</option>

                {courseTitle?.map((course) => (
                  <option key={course._id} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </select>

              <p className="text-red-500 text-sm mt-1 h-5">{errors.course}</p>
            </div>

            {/* Batch */}
            <div>
              <select
                name="batch"
                value={input.batch}
                onChange={eventHandler}
                className={`w-full border rounded-xl p-4 outline-none ${
                  errors.batch ? 'border-red-500' : 'focus:border-red-500'
                }`}
              >
                <option value="">Preferred Batch</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>

              <p className="text-red-500 text-sm mt-1 h-5">{errors.batch}</p>
            </div>

            {/* City */}
            <div>
              <input
                name="city"
                value={input.city}
                onChange={eventHandler}
                type="text"
                placeholder="City"
                className={`w-full border rounded-xl p-4 outline-none ${
                  errors.city ? 'border-red-500' : 'focus:border-red-500'
                }`}
              />

              <p className="text-red-500 text-sm mt-1 h-5">{errors.city}</p>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <textarea
                name="message"
                value={input.message}
                onChange={eventHandler}
                rows="5"
                placeholder="Your Message"
                className={`w-full border rounded-xl p-4 outline-none resize-none ${
                  errors.message ? 'border-red-500' : 'focus:border-red-500'
                }`}
              />

              <p className="text-red-500 text-sm mt-1 h-5">{errors.message}</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`md:col-span-2 py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2 ${
                loading ? 'bg-red-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
              } text-white`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Submitting...
                </>
              ) : (
                'Submit Enquiry'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
