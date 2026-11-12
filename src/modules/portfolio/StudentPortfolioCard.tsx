
import Image from "next/image";

const students = [
  {
    name: "Ayesha Khan",
    country: "UK",
    flag: "🇬🇧",
    university: "University of Manchester",
    course: "MSc Data Science",
    intake: "Sep 2026",
    image: "/images/students/ayesha.jpg",
  },
  {
    name: "Muhammad Ahmed",
    country: "Canada",
    flag: "🇨🇦",
    university: "University of Toronto",
    course: "MSc Computer Science",
    intake: "Jan 2026",
    image: "/images/students/ahmed.jpg",
  },
  {
    name: "Fatima Noor",
    country: "Australia",
    flag: "🇦🇺",
    university: "Monash University",
    course: "Master of Business Analytics",
    intake: "Feb 2026",
    image: "/images/students/fatima.jpg",
  },
  {
    name: "Ali Raza",
    country: "Germany",
    flag: "🇩🇪",
    university: "Technical University of Munich",
    course: "MSc Mechanical Engineering",
    intake: "Oct 2025",
    image: "/images/students/ali.jpg",
  },
  {
    name: "Sara Malik",
    country: "USA",
    flag: "🇺🇸",
    university: "New York University",
    course: "MS Data Science",
    intake: "Jan 2026",
    image: "/images/students/sara.jpg",
  },
  {
    name: "Usman Tariq",
    country: "UK",
    flag: "🇬🇧",
    university: "University of Warwick",
    course: "MSc Finance",
    intake: "Sep 2026",
    image: "/images/students/usman.jpg",
  },
];

export default function StudentPortfolioCard() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

        {students.map((student, index) => (
          <div
            key={student.name}
            className="group h-full flex min-w-0 items-center gap-3 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"          >
            {/* Student Image */}
            <div className="relative h-[125px] w-[42%] shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-[42%]">
              <Image
                // src={student.image}
                src="/portfolio1.png"
                alt={student.name}
                fill
                sizes="(max-width: 640px) 42vw, (max-width: 1280px) 21vw, 14vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Student Details */}
            <div className="flex min-w-0 flex-1 flex-col justify-center py-1">

              {/* Country */}
              <div className="mb-1 flex items-center gap-1.5">
                <span className="text-lg leading-none">
                  {student.flag}
                </span>
                <span className="text-sm font-bold text-blue-700">
                  {student.country}
                </span>
              </div>

              {/* Name */}
              <h3 className="truncate text-sm font-bold text-[#14264F] sm:text-[15px]">
                {student.name}
              </h3>

              {/* University */}
              <p className="mt-1 text-xs leading-[1.4] text-slate-700">
                {student.university}
              </p>

              {/* Course */}
              <p className="mt-0.5 text-xs leading-[1.4] text-slate-600">
                {student.course}
              </p>

              {/* Intake */}
              <div className="mt-2 flex items-center gap-1 text-[11px] font-medium text-slate-700">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </svg>
                <span>Intake: {student.intake}</span>
              </div>

              {/* Admission Badge */}
              <div className="mt-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#32B65A] px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle cx="10" cy="10" r="9" fill="white" />
                    <path
                      d="m6 10 2.5 2.5L14 7"
                      stroke="#32B65A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Admitted
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
