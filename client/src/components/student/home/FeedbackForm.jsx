import { useState } from "react";
import { Star } from "lucide-react";

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [input, setInput] = useState({
        name: "",
        comment: "",
    })
    const eventHandler = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    console.log(input);
    console.log(rating)

    const submitHandler = async () => { 
        
    }
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-3xl mx-auto px-6">

                <div className="bg-white rounded-3xl shadow-lg p-8">
                    <h2 className="text-4xl font-bold mt-3">
                        Share Your Learning Experience
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Have you completed a course at Computer Academy? We'd love to hear about your learning experience. Your feedback helps future students make informed decisions and helps us continue improving our training.
                    </p>
                    {/* Rating */}

                    <div className="flex justify-center gap-2 mt-8">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                            >
                                <Star
                                    size={36}
                                    className={`transition ${star <= rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>

                    <form className="mt-8 space-y-6">

                        <input
                            name="name"
                            value={input.name}
                            onChange={eventHandler}
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-xl p-4 outline-none focus:border-red-500"
                        />

                        <textarea
                            name="comment"
                            value={input.comment}
                            onChange={eventHandler}
                            rows="5"
                            placeholder="Write your feedback..."
                            className="w-full border rounded-xl p-4 outline-none focus:border-red-500"
                        />

                        <button
                            onClick={submitHandler}
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition"
                        >
                            Submit Feedback
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
};

export default FeedbackForm;