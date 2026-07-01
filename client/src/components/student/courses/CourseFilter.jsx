import { Search } from "lucide-react";

const CourseFilter = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-5">

          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Course..."
              className="w-full pl-14 pr-5 py-4 border rounded-xl outline-none focus:border-red-500"
            />
          </div>

          <select className="border rounded-xl px-5 py-4">
            <option>All Categories</option>
            <option>Programming</option>
            <option>Web Development</option>
            <option>Design</option>
          </select>

        </div>

      </div>
    </section>
  );
};

export default CourseFilter;