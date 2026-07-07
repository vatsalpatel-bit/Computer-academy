
import { setAllCoursesTitle } from "@/redux/slices/courseSlices";
import { getAllCourseTitleApi } from "@/services/coursesApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EnquiryForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    batch: "",
    city: "",
    message: "",
  })
  const dispatch = useDispatch();

  const courseTitle = useSelector((state) => state.course.allCoursesTitle);

  const eventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  useEffect(() => {
    const fetchAllCourseTitleApi = async () => {
      try {
        const data = await getAllCourseTitleApi();
        // console.log(data.course);
        dispatch(setAllCoursesTitle(data.course));
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllCourseTitleApi();
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold text-center">
            Admission Enquiry Form
          </h2>

          <form className="grid md:grid-cols-2 gap-6 mt-10">

            <input
              name="name"
              value={input.name}
              onChange={eventHandler}
              type="text"
              placeholder="Full Name"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <input
              name="email"
              value={input.email}
              onChange={eventHandler}
              type="email"
              placeholder="Email Address"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <input
              name="phone"
              value={input.phone}
              onChange={eventHandler}
              type="tel"
              placeholder="Mobile Number"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <select
              name="course"
              value={input.course}
              onChange={eventHandler}
              className="border rounded-xl p-4 outline-none">
              <option value="">Select Course</option>
              {courseTitle?.map((course) => (
                <option value={course.title} key={course._id}>{course.title}</option>
              ))}

            </select>

            <select
              name="batch"
              value={input.batch}
              onChange={eventHandler}
              className="border rounded-xl p-4 outline-none">
              <option>Preferred Batch</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <input
              name="city"
              value={input.city}
              onChange={eventHandler}
              type="text"
              placeholder="City"
              className="border rounded-xl p-4 outline-none focus:border-red-500"
            />

            <textarea
              name="message"
              value={input.message}
              onChange={eventHandler}
              rows="5"
              placeholder="Your Message"
              className="border rounded-xl p-4 md:col-span-2 outline-none focus:border-red-500"
            ></textarea>

            <button className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold md:col-span-2 transition">
              Submit Enquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default EnquiryForm;