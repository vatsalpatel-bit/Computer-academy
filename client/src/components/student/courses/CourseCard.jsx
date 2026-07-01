import { Clock3, Users, ArrowRight } from "lucide-react";

const courses = [
    {
        id: 1,
        title: "Full Stack Development",
        category: "Web Development",
        duration: "6 Months",
        description:
            "Learn HTML, CSS, JavaScript, React, Node.js and MongoDB.",
    },
    {
        id: 2,
        title: "Java Programming",
        category: "Programming",
        duration: "4 Months",
        description:
            "Master Java, OOP, Collections and JDBC.",
    },
    {
        id: 3,
        title: "Python Programming",
        category: "Programming",
        duration: "3 Months",
        description:
            "Learn Python from basics to advanced with projects.",
    },
    {
        id: 4,
        title: "Graphic Design",
        category: "Design",
        duration: "3 Months",
        description:
            "Learn Photoshop, Illustrator and Canva professionally.",
    },
    {
        id: 5,
        title: "Tally Prime",
        category: "Accounting",
        duration: "2 Months",
        description:
            "Accounting, GST and Payroll using Tally Prime.",
    },
    {
        id: 6,
        title: "MS Office",
        category: "Office",
        duration: "2 Months",
        description:
            "Word, Excel, PowerPoint and professional documentation.",
    },
];

const CourseCard = () => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">

            <div className="h-56 bg-slate-200 flex items-center justify-center">
                Course Image
            </div>
            {courses.map((course) => {
                <div className="p-6">

                    <span className="text-red-600 text-sm font-semibold">
                        {course.category}
                    </span>

                    <h3 className="text-2xl font-bold mt-3">
                        {course.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-7">
                        {course.description}
                    </p>

                    <div className="flex justify-between mt-6 text-sm">

                        <div className="flex items-center gap-2">
                            <Clock3 size={18} />
                            {course.duration}
                        </div>

                        <div className="flex items-center gap-2">
                            <Users size={18} />
                            Beginner
                        </div>

                    </div>

                    <button className="mt-8 flex items-center gap-3 text-red-600 font-semibold">
                        View Details
                        <ArrowRight size={18} />
                    </button>

                </div>
            })}

        </div>
    );
};

export default CourseCard;