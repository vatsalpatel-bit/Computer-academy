import { useState } from 'react';
import { Star } from 'lucide-react';
import { feedbackApi } from '@/services/feedbackApi';
import { useDispatch, useSelector } from 'react-redux';
import { setAllFeddback } from '@/redux/slices/feedbackSlices';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

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
    try {
      setLoading(true);
      e.preventDefault();
      const data = await feedbackApi(input, Number(rating));
      dispatch(setAllFeddback([...allFeedback, data.feedback]));
      setInput({
        name: '',
        comment: '',
      });

      setRating(0);
      toast.success('Feedback submited');
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
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-bold mt-3">Share Your Learning Experience</h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            {`Have you completed a course at Computer Academy? We'd love to hear about your learning
            experience. Your feedback helps future students make informed decisions and helps us
            continue improving our training.`}
          </p>
          {/* Rating */}

          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} type="button" onClick={() => setRating(star)}>
                <Star
                  size={36}
                  className={`transition ${
                    star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          {errors.rating && <p className="text-red-500 text-sm ">{errors.rating}</p>}
          <form onSubmit={submitHandler} className="mt-8 space-y-6">
            <input
              name="name"
              value={input.name}
              onChange={eventHandler}
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl p-4 outline-none focus:border-red-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <textarea
              name="comment"
              value={input.comment}
              onChange={eventHandler}
              rows="5"
              placeholder="Write your feedback..."
              className="w-full border rounded-xl p-4 outline-none focus:border-red-500"
            />
            {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
            <button
              type="submit"
              disabled={loading}
              className="
    w-full
    bg-red-600 hover:bg-red-700
    text-white
    py-4
    rounded-xl
    font-semibold
    transition
    disabled:opacity-50
    disabled:pointer-events-none
  "
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </span>
              ) : (
                'Submit Feedback'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
