import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}

          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">
              🌱 Farm2Plate
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Fresh from Farm.
              <br />
              Trusted at Every Plate.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Products</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Technology</li>
              <li>Company</li>
              <li>Resources</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Support</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Social</h4>

            <div className="flex gap-4 text-gray-400">
              <FaLinkedin />
              <FaGithub />
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex justify-between flex-col md:flex-row gap-4 text-gray-500">
          <p>© 2026 Farm2Plate</p>

          <p>Built with ❤️ for Sustainable Agriculture</p>
        </div>
      </div>
    </footer>
  );
}