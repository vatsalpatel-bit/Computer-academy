import { useState } from 'react';
import { Star, Loader2 } from 'lucide-react';
import { feedbackApi } from '@/services/feedbackApi';
import { useDispatch, useSelector } from 'react-redux';
import { setAllFeddback } from '@/redux/slices/feedbackSlices';
import { toast } from 'sonner';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: '',
    comment: '',
  });

  const dispatch = useDispatch();
  const allFeedback = useSelector((state) => state.feedback.allFeedback);

  const eventHandler = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      const newError = { ...prev };
      delete newError[name];
      return newError;
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await feedbackApi(input, Number(rating));

      dispatch(setAllFeddback([...allFeedback, data.feedback]));

      setInput({
        name: '',
        comment: '',
      });

      setRating(0);

      toast.success('Feedback submitted');
    } catch (error) {
      const data = error.response?.data;

      if (data?.error) {
        const allErrors = {};

        data.error.forEach((err) => {
          allErrors[err.path[0]] = err.message;
        });

        setErrors(allErrors);

        toast.error('Please fix the highlighted fields.');
      } else if (data?.message) {
        toast.error(data.message);
      } else {
        toast.error('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-0 pb-8 sm:pb-10 lg:pb-12 bg-[#F5F6FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="text-center">
            <span
              className="
              inline-flex items-center gap-2
              text-[#4B5694]
              text-xs sm:text-sm
              uppercase
              font-bold
              tracking-[0.2em]
            "
            >
              <span className="w-6 h-[2px] bg-[#4B5694]" />
              Feedback
              <span className="w-6 h-[2px] bg-[#4B5694]" />
            </span>

            <h2
              className="
              mt-3
              text-2xl sm:text-3xl lg:text-4xl
              font-bold
              text-[#111844]
              leading-tight
            "
            >
              Share Your Learning Experience
            </h2>

            <p
              className="
              mt-4
              text-sm sm:text-base
              text-gray-500
              leading-6
              max-w-2xl
              mx-auto
            "
            >
              Have you completed a course at Computer Academy? We'd love to hear about your learning
              experience. Your feedback helps future students and helps us improve our training.
            </p>
          </div>

          {/* Rating */}
          <div className="mt-8">
            <p className="text-center text-sm font-semibold text-[#111844] mb-3">
              How was your experience?
            </p>

            <div className="flex justify-center gap-1.5 sm:gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                  onClick={() => {
                    setRating(star);
                    setErrors((prev) => {
                      const newError = { ...prev };
                      delete newError.rating;
                      return newError;
                    });
                  }}
                  className="
                    p-1
                    rounded-lg
                    transition-transform
                    hover:scale-110
                    active:scale-95
                  "
                >
                  <Star
                    size={30}
                    className={`transition ${
                      star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>

            {errors.rating && (
              <p className="text-red-500 text-xs sm:text-sm text-center mt-2">{errors.rating}</p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={submitHandler} className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#111844] mb-2">
                Your Name
              </label>

              <input
                id="name"
                name="name"
                value={input.name}
                onChange={eventHandler}
                type="text"
                placeholder="Enter your name"
                className="
                  w-full
                  px-4 py-3.5
                  rounded-xl
                  border border-gray-200
                  bg-gray-50
                  text-sm sm:text-base
                  text-[#111844]
                  placeholder:text-gray-400
                  outline-none
                  transition
                  focus:bg-white
                  focus:border-[#4B5694]
                  focus:ring-2
                  focus:ring-[#4B5694]/10
                "
              />

              {errors.name && (
                <p className="text-red-500 text-xs sm:text-sm mt-1.5">{errors.name}</p>
              )}
            </div>

            {/* Comment */}
            <div>
              <label htmlFor="comment" className="block text-sm font-semibold text-[#111844] mb-2">
                Your Feedback
              </label>

              <textarea
                id="comment"
                name="comment"
                value={input.comment}
                onChange={eventHandler}
                rows={5}
                placeholder="Write your feedback..."
                className="
                  w-full
                  px-4 py-3.5
                  rounded-xl
                  border border-gray-200
                  bg-gray-50
                  text-sm sm:text-base
                  text-[#111844]
                  placeholder:text-gray-400
                  outline-none
                  resize-none
                  transition
                  focus:bg-white
                  focus:border-[#4B5694]
                  focus:ring-2
                  focus:ring-[#4B5694]/10
                "
              />

              {errors.comment && (
                <p className="text-red-500 text-xs sm:text-sm mt-1.5">{errors.comment}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
    group
    w-full
    flex items-center justify-center gap-2
    bg-[#111844]
    hover:bg-[#4B5694]
    text-white
    py-3.5
    rounded-xl
    text-sm sm:text-base
    font-semibold
    shadow-md
    shadow-[#111844]/15
    transition-all duration-300
    hover:-translate-y-0.5
    active:scale-[0.98]
    disabled:opacity-50
    disabled:pointer-events-none
  "
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Feedback
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
