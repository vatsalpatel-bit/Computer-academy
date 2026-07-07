import { setSingleCourse } from "@/redux/slices/courseSlices";
import { getCourseApi } from "@/services/coursesApi";
import {
    BadgeCheck,
    Clock3,
    GraduationCap,
    IndianRupee,
    Languages,
    Users,
    CheckCircle,
} from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CourseView = () => {
    const { slug } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const course = useSelector((state) => state.course.singleCourse)

    useEffect(() => {
        const fetchCourseApi = async () => {
            try {
                const data = await getCourseApi(slug);
                dispatch(setSingleCourse(data.course));
            } catch (error) {
                console.log(error);
            }
        }

        fetchCourseApi();

    }, [dispatch, slug])
    return (
        <>{course?.map((course) => (
            < div >
                {/* Hero */}
                < section className="bg-linear-to-r from-[#0B1E45] to-[#1F4B99] py-24" >
                    <div className="max-w-7xl mx-auto px-6 text-white">
                        <button
                            onClick={() => navigate(-1)}
                            className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-5 py-3 rounded-xl hover:bg-white hover:text-[#0B1E45] transition"
                        >
                            <ArrowLeft size={18} />
                            Back to Courses
                        </button>


                        <h1 className="text-5xl font-bold mt-6">
                            {course.title}
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg text-gray-200 leading-8">
                            {course.description}
                        </p>

                    </div>
                </section >

                {/* Course Details */}

                < section className="py-20 bg-slate-50" >
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="bg-white rounded-3xl shadow-lg p-10">

                            <h2 className="text-3xl font-bold">
                                Course Details
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

                                <div className="flex items-center gap-4">
                                    <Clock3 className="text-red-600" />
                                    <div>
                                        <p className="text-gray-500 text-sm">Duration</p>
                                        <h4 className="font-semibold">{course.duration}</h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <IndianRupee className="text-red-600" />
                                    <div>
                                        <p className="text-gray-500 text-sm">Fees</p>
                                        <h4 className="font-semibold">₹{course.fees}</h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <GraduationCap className="text-red-600" />
                                    <div>
                                        <p className="text-gray-500 text-sm">Level</p>
                                        <h4 className="font-semibold">{course.level}</h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Languages className="text-red-600" />
                                    <div>
                                        <p className="text-gray-500 text-sm">Language</p>
                                        <h4 className="font-semibold">{course.language}</h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Users className="text-red-600" />
                                    <div>
                                        <p className="text-gray-500 text-sm">Batch</p>
                                        <h4 className="font-semibold">{course.batch}</h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <BadgeCheck className="text-red-600" />
                                    <div>
                                        <p className="text-gray-500 text-sm">Certificate</p>
                                        <h4 className="font-semibold">
                                            {course.certificate ? "Included" : "No"}
                                        </h4>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <button
                                    onClick={() => navigate("/enquiry")}
                                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition">
                                    Enquire Now
                                </button>

                            </div>

                        </div>
                    </div>
                </section >

                {/* Topics */}

                < section className="py-20" >
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center">

                            <span className="text-red-600 uppercase tracking-widest font-semibold">
                                Course Curriculum
                            </span>

                            <h2 className="text-4xl font-bold mt-3">
                                What You'll Learn
                            </h2>

                            <p className="text-gray-500 mt-4">
                                Practical topics covered in this course.
                            </p>

                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

                            {course.topics.map((topic) => (
                                <div
                                    key={topic}
                                    className="bg-white border rounded-2xl p-5 flex items-center gap-3 hover:shadow-lg transition"
                                >
                                    <CheckCircle className="text-green-500" />

                                    <span>{topic}</span>
                                </div>
                            ))}

                        </div>

                    </div>
                </section >

                {/* CTA */}

                < section className="py-20 bg-[#0B1E45]" >
                    <div className="max-w-5xl mx-auto px-6 text-center text-white">

                        <h2 className="text-5xl font-bold">
                            Ready To Build Your Career?
                        </h2>

                        <p className="mt-6 text-lg text-gray-300">
                            Join our <span className="font-semibold">{course.title}</span> course
                            and gain practical skills with expert trainers.
                        </p>


                        <button
                            onClick={() => navigate("/enquiry")}
                            className="mt-10 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-semibold transition">
                            Enquire Now
                        </button>

                    </div>
                </section >
            </div >
        ))
        }
        </>
    );
};

export default CourseView;