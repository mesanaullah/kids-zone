import { Monitor, Palette, Globe } from 'lucide-react';

/**
 * Subjects We Teach Section
 * Matches reference image design:
 * - Rounded white card container with subtle shadow
 * - Heading: "Subjects We" in Navy + "Teach" in Red
 * - Dual red & yellow accent line below the heading
 * - 7 Subject Cards with delicate pastel backgrounds and distinctive icons:
 *   1. English (Red A B C blocks)
 *   2. Mathematics (Blue Calculator & symbols)
 *   3. EVS (Green Leaf)
 *   4. Hindi (Amber Devnagari 'अ')
 *   5. Computer (Purple Monitor)
 *   6. Art & Craft (Rose Paint Palette)
 *   7. General Knowledge (Teal Globe)
 * - Fully responsive across mobile (2-col), tablet (4-col), and desktop (7-col)
 */
export default function SubjectsWeTeach() {
  const subjects = [
    {
      id: 'english',
      title: 'English',
      desc: 'Communication and language development',
      bg: 'bg-[#fef2f4]',
      border: 'border-rose-100',
      icon: (
        // 3 Red Blocks with A, B, C matching reference image
        <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" aria-hidden="true">
          <rect x="10" y="2" width="12" height="12" rx="2.5" fill="#f0243c" />
          <text x="16" y="11" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="system-ui, sans-serif">A</text>
          <rect x="3" y="16" width="12" height="12" rx="2.5" fill="#f0243c" />
          <text x="9" y="25" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="system-ui, sans-serif">B</text>
          <rect x="17" y="16" width="12" height="12" rx="2.5" fill="#f0243c" />
          <text x="23" y="25" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="system-ui, sans-serif">C</text>
        </svg>
      ),
    },
    {
      id: 'mathematics',
      title: 'Mathematics',
      desc: 'Logical thinking and problem solving',
      bg: 'bg-[#eff6ff]',
      border: 'border-blue-100',
      icon: (
        // Blue calculator with math operators matching reference image
        <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="5" y="3" width="22" height="26" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2.2" />
          <line x1="9" y1="8" x2="23" y2="8" strokeWidth="2" />
          <line x1="11" y1="14" x2="15" y2="14" strokeWidth="2" />
          <line x1="13" y1="12" x2="13" y2="16" strokeWidth="2" />
          <line x1="18" y1="14" x2="22" y2="14" strokeWidth="2" />
          <line x1="10" y1="21" x2="14" y2="23" strokeWidth="2" />
          <line x1="14" y1="21" x2="10" y2="23" strokeWidth="2" />
          <line x1="18" y1="21" x2="22" y2="21" strokeWidth="2" />
          <line x1="18" y1="24" x2="22" y2="24" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'evs',
      title: 'EVS',
      desc: 'Understanding our surroundings',
      bg: 'bg-[#f0fdf4]',
      border: 'border-emerald-100',
      icon: (
        // Green leaf matching reference image
        <svg viewBox="0 0 24 24" className="h-9 w-9 text-[#16a34a]" fill="currentColor" aria-hidden="true">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5c1-1.5 3-2.5 5-2.5 4 0 6.5 1.5 7.5 3.5" />
        </svg>
      ),
    },
    {
      id: 'hindi',
      title: 'Hindi',
      desc: 'Language skills and cultural values',
      bg: 'bg-[#fffbeb]',
      border: 'border-amber-100',
      icon: (
        // Orange Devnagari 'अ' matching reference image
        <span className="font-display text-[34px] font-black text-[#ea580c] leading-none select-none">
          अ
        </span>
      ),
    },
    {
      id: 'computer',
      title: 'Computer',
      desc: 'Digital literacy for the modern world',
      bg: 'bg-[#f5f3ff]',
      border: 'border-purple-100',
      icon: (
        <Monitor className="h-9 w-9 text-[#7c3aed]" strokeWidth={2.2} aria-hidden="true" />
      ),
    },
    {
      id: 'art-craft',
      title: 'Art & Craft',
      desc: 'Creativity and self-expression',
      bg: 'bg-[#fff1f2]',
      border: 'border-pink-100',
      icon: (
        <Palette className="h-9 w-9 text-[#e11d48]" strokeWidth={2.2} aria-hidden="true" />
      ),
    },
    {
      id: 'gk',
      title: 'General Knowledge',
      desc: 'Awareness and curiosity about the world',
      bg: 'bg-[#ecfdf5]',
      border: 'border-emerald-100',
      icon: (
        <Globe className="h-9 w-9 text-[#0d9488]" strokeWidth={2.2} aria-hidden="true" />
      ),
    },
  ];

  return (
    <section aria-label="Subjects We Teach" className="w-full">
      {/* White Card Container */}
      <div className="w-full rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 lg:p-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.08)]">
        
        {/* Section Heading: "Subjects We Teach" */}
        <div>
          <h2 className="font-bubble text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight leading-tight select-none">
            <span className="text-brand-navy">Subjects We </span>
            <span className="text-brand-red">Teach</span>
          </h2>
          {/* Dual Red & Yellow Accent Line */}
          <div
            className="mt-1.5 sm:mt-2 mb-5 sm:mb-6 flex h-1 sm:h-1.5 w-14 sm:w-16 items-center overflow-hidden rounded-full select-none"
            aria-hidden="true"
          >
            <span className="h-full w-1/2 bg-[#f0243c]" />
            <span className="h-full w-1/2 bg-[#ffd21f]" />
          </div>
        </div>

        {/* 7 Cards Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 lg:gap-3 items-stretch">
          {subjects.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-start rounded-2xl border ${item.border} ${item.bg} p-3.5 sm:p-4 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default h-full min-h-[190px] sm:min-h-[200px]`}
            >
              {/* Icon Container: Fixed size, centered */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center shrink-0">
                {item.icon}
              </div>

              {/* Title Container: Fixed height so all titles align horizontally */}
              <div className="mt-2.5 sm:mt-3 flex h-9 sm:h-10 w-full items-center justify-center px-0.5 shrink-0">
                <h3 className="font-display text-[13px] sm:text-[14px] lg:text-[14.5px] font-bold text-brand-navy leading-tight select-none text-center">
                  {item.title}
                </h3>
              </div>

              {/* Subheading / Description: Starts at exact same vertical position */}
              <div className="mt-1 flex flex-1 w-full items-start justify-center px-0.5">
                <p className="font-body text-[11px] sm:text-[11.5px] font-medium text-slate-500 leading-snug select-none text-center">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
