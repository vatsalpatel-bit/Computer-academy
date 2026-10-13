import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, SearchX } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-[75vh] flex items-center justify-center bg-[#F5F6FA] px-4 py-12 sm:py-16">
      <div className="w-full max-w-xl text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#111844]/10 text-[#4B5694]">
          <SearchX size={34} strokeWidth={1.8} />
        </div>

        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl font-extrabold tracking-tight text-[#111844]">
          404
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111844]">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
          Sorry, the page you are looking for doesn't exist or may have been moved.
          Let's get you back to learning.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => navigate('/')}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#111844] px-6 py-3 font-semibold text-white shadow-md shadow-[#111844]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4B5694]"
          >
            <Home size={18} />
            Back to Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#111844]/15 bg-white px-6 py-3 font-semibold text-[#111844] transition-colors hover:bg-[#EAE0CF]/40"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <p className="mt-10 text-sm font-medium text-[#7288AE]">
          Jankalyan Computer Center
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Learn • Build • Grow
        </p>

      </div>
    </main>
  );
};

export default NotFound;