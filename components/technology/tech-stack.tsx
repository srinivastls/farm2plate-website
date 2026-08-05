"use client";

const tech = [
  "Flutter",
  "Dart",
  "NestJS",
  "TypeScript",
  "Prisma ORM",
  "PostgreSQL",
  "Redis",
  "JWT Authentication",
  "Docker",
  "AWS",
  "GitHub Actions",
  "Razorpay",
];

export default function TechStack() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Technology Stack
          </h2>

        </div>

        <div className="flex flex-wrap justify-center gap-4">

          {tech.map((item)=>(
            <div
              key={item}
              className="rounded-full border bg-white px-6 py-4 font-semibold shadow-sm hover:shadow-md transition"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}