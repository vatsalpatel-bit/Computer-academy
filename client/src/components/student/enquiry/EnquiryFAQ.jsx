import { useNavigate } from 'react-router-dom';

const EnquiryFAQ = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Need More Information?</h2>

        <p className="mt-5 text-gray-600">
          Call us or visit our academy for a free counselling session.
        </p>

        <button
          onClick={() => navigate('/contact')}
          className="mt-8 bg-[#0B1E45] hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition"
        >
          Contact Now
        </button>
      </div>
    </section>
  );
};

export default EnquiryFAQ;
