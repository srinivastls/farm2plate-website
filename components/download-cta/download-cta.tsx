import { Download, Smartphone } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section className="py-24 bg-green-600 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div>
            <p className="uppercase tracking-widest text-green-100">
              Ready to Experience Fresh Farm Produce?
            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Download the
              <br />
              Farm2Plate App Today
            </h2>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-white text-black px-6 py-4 rounded-xl font-semibold flex items-center gap-2">
                <Download size={18} />
                Google Play
              </button>

              <button className="border border-white px-6 py-4 rounded-xl font-semibold flex items-center gap-2">
                <Smartphone size={18} />
                App Store
              </button>
            </div>
          </div>

          {/* Right */}

          <div className="relative flex justify-center">
            <div className="bg-white rounded-2xl p-8 text-black w-64 h-64 flex items-center justify-center shadow-xl">
              <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                QR Code
              </div>
            </div>

            <div className="absolute -top-4 -left-8 bg-white text-black rounded-xl px-5 py-3 shadow-lg">
              ✓ Fresh Harvest
            </div>

            <div className="absolute top-24 -right-10 bg-white text-black rounded-xl px-5 py-3 shadow-lg">
              ✓ Verified Farms
            </div>

            <div className="absolute -bottom-4 left-8 bg-white text-black rounded-xl px-5 py-3 shadow-lg">
              ✓ Complete Traceability
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}