const GoogleMap = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Find Us On Map
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-lg">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb="
            width="100%"
            height="500"
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default GoogleMap;