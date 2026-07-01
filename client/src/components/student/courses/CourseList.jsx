import CourseCard from "./CourseCard";

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

const CourseList = () => {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default CourseList;