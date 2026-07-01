const trainers = [
    {
        name: "Rahul Patel",
        role: "Full Stack Trainer",
    },
    {
        name: "Priya Shah",
        role: "Python Trainer",
    },
    {
        name: "Amit Kumar",
        role: "Java Trainer",
    },
];

const Trainers = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-red-600 uppercase font-semibold">
                        Our Faculty
                    </span>

                    <h2 className="text-4xl font-bold mt-3">
                        Meet Our Trainers
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {trainers.map((trainer) => (
                        <div
                            key={trainer.name}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden"
                        >
                            <div className="h-80 bg-slate-200 flex items-center justify-center">
                                Trainer Photo
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold">
                                    {trainer.name}
                                </h3>

                                <p className="text-red-600 mt-2">
                                    {trainer.role}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Trainers;