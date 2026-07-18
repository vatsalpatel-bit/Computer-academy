import { FaArrowRight } from 'react-icons/fa';

import gallery1 from '@/svg/gallery/gallery1.jpg';
import gallery2 from '@/svg/gallery/gallery2.jpg';
import gallery3 from '@/svg/gallery/gallery3.jpg';
import gallery4 from '@/svg/gallery/gallery4.jpg';
import gallery5 from '@/svg/gallery/gallery5.jpg';
import gallery6 from '@/svg/gallery/gallery6.jpg';

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-red-600 uppercase font-semibold tracking-widest">Gallery</span>

            <h2 className="text-4xl font-bold mt-2 text-slate-900">Our Campus Moments</h2>

            <p className="text-gray-600 mt-3 max-w-xl">
              Explore classroom sessions, workshops, seminars, events and memorable moments from our
              academy.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {galleryImages.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl shadow-lg bg-white">
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt="Gallery"
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}

        <div className="flex justify-center mt-12 md:hidden">
          <button className="bg-[#0B1E45] hover:bg-red-600 transition text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
            See More
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
