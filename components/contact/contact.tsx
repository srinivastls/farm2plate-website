import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}

          <div>
            <p className="text-green-600 font-semibold">
              CONTACT
            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Let's Build
              <br />
              The Future of Agriculture Together
            </h2>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <Mail className="text-green-600" />
                hello@farm2plate.app
              </div>

              <div className="flex gap-4">
                <Phone className="text-green-600" />
                +91 98765 43210
              </div>

              <div className="flex gap-4">
                <MapPin className="text-green-600" />
               Vijayawada, Andhra Pradesh, India
              </div>

              <div className="flex gap-5 pt-4 text-2xl">
            <FaLinkedin className="cursor-pointer hover:text-green-600" />
            <FaGithub className="cursor-pointer hover:text-green-600" />
            <FaInstagram className="cursor-pointer hover:text-green-600" />
            </div>
            
            </div>
          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-lg border p-8">
            <form className="space-y-5">
              <input
                placeholder="Full Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                placeholder="Email Address"
                className="w-full border rounded-xl p-4"
              />

              <input
                placeholder="Subject"
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows={6}
                placeholder="Message"
                className="w-full border rounded-xl p-4"
              />

              <button className="bg-green-600 hover:bg-green-700 transition text-white rounded-xl px-8 py-4 w-full font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}