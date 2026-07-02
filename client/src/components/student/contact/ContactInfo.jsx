import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow text-center">
            <MapPin className="mx-auto text-red-600" size={45} />

            <h3 className="text-2xl font-bold mt-6">
              Address
            </h3>

            <p className="text-gray-600 mt-4">
              Chikhli, Navsari,
              Gujarat, India
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow text-center">
            <Phone className="mx-auto text-red-600" size={45} />

            <h3 className="text-2xl font-bold mt-6">
              Phone
            </h3>

            <p className="text-gray-600 mt-4">
              +91 9876543210
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow text-center">
            <Mail className="mx-auto text-red-600" size={45} />

            <h3 className="text-2xl font-bold mt-6">
              Email
            </h3>

            <p className="text-gray-600 mt-4">
              info@computeracademy.com
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;