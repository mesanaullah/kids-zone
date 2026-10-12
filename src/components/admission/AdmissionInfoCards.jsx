import { Check } from 'lucide-react';

/**
 * AdmissionInfoCards Component:
 * - 3 colorful cards directly below the Admission Process section
 * - Card 1: Eligibility Criteria (soft rose/pink background, navy 3-people icon, golden checkmarks)
 * - Card 2: Documents Required (soft sky-blue background, red document icon, blue checkmarks)
 * - Card 3: Why Choose Kids Zone? (soft warm-yellow background, golden star icon, golden checkmarks)
 * - Fully responsive: 3 columns on desktop, clean stacking on tablet & mobile
 */
export default function AdmissionInfoCards() {
  const card1Items = [
    { text: 'Play Group: 2.5+ years' },
    { text: 'Nursery: 3+ years' },
    { text: 'LKG: 4+ years' },
    { text: 'UKG: 5+ years' },
    { text: 'Class 1 to 8: As per age criteria' },
  ];

  const card2Items = [
    { text: 'Birth Certificate (Photocopy)' },
    { text: 'Passport Size Photographs' },
    {
      text: 'Previous School Report Card',
      sub: '(For Class 1 to 8)',
    },
    { text: 'Aadhaar Card (Child & Parent)' },
    { text: 'Address Proof' },
  ];

  const card3Items = [
    { text: 'CBSE Based Curriculum' },
    { text: 'Experienced & Caring Teachers' },
    { text: 'Activity Based Learning' },
    { text: 'Safe & Hygienic Environment' },
    { text: 'Modern Classrooms' },
    { text: 'Focus on Overall Development' },
  ];

  return (
    <section className="container-page pb-8 sm:pb-10 lg:pb-12">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-7">
        
        {/* ============================================================= */}
        {/* CARD 1: Eligibility Criteria                                  */}
        {/* ============================================================= */}
        <div className="flex flex-col justify-start rounded-2xl sm:rounded-3xl border border-rose-100 bg-[#fff1f2]/75 p-6 sm:p-7 shadow-card transition-all duration-300 hover:shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="shrink-0">
              <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8 text-[#0b2a7a]" fill="currentColor" aria-hidden="true">
                <circle cx="12" cy="7" r="3" />
                <path d="M7 19c0-2.8 2.2-5 5-5s5 2.2 5 5v1H7v-1z" />
                <circle cx="6" cy="9" r="2.2" />
                <path d="M2 19c0-2 1.6-3.8 3.6-4 .2.7.6 1.4 1.1 2H2v2z" />
                <circle cx="18" cy="9" r="2.2" />
                <path d="M22 19c0-2-1.6-3.8-3.6-4-.2.7-.6 1.4-1.1 2H22v2z" />
              </svg>
            </div>
            <h3 className="font-bubble text-xl sm:text-2xl font-black tracking-tight leading-tight select-none">
              <span className="text-brand-navy">Eligibility </span>
              <span className="text-brand-red">Criteria</span>
            </h3>
          </div>

          {/* Checklist */}
          <ul className="mt-5 space-y-3 sm:space-y-3.5">
            {card1Items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5 sm:gap-3 font-body text-xs sm:text-[13.5px] font-semibold text-slate-700">
                <span className="flex h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-white shadow-sm">
                  <Check size={11} strokeWidth={3.5} />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ============================================================= */}
        {/* CARD 2: Documents Required                                    */}
        {/* ============================================================= */}
        <div className="flex flex-col justify-start rounded-2xl sm:rounded-3xl border border-sky-100 bg-[#f0f9ff]/90 p-6 sm:p-7 shadow-card transition-all duration-300 hover:shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="shrink-0">
              <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8 text-[#f0243c]" fill="currentColor" aria-hidden="true">
                <path d="M6 2h9l5 5v15a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
                <rect x="7" y="6" width="3.5" height="3.5" rx="0.5" fill="white" />
                <rect x="7" y="12" width="10" height="1.8" rx="0.9" fill="white" />
                <rect x="7" y="15.5" width="10" height="1.8" rx="0.9" fill="white" />
                <rect x="7" y="19" width="10" height="1.8" rx="0.9" fill="white" />
              </svg>
            </div>
            <h3 className="font-bubble text-xl sm:text-2xl font-black tracking-tight leading-tight select-none text-brand-navy">
              Documents Required
            </h3>
          </div>

          {/* Checklist */}
          <ul className="mt-5 space-y-3 sm:space-y-3.5">
            {card2Items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 sm:gap-3 font-body text-xs sm:text-[13.5px] font-semibold text-slate-700">
                <span className="flex h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0 items-center justify-center rounded-full bg-[#1d6fe0] text-white shadow-sm mt-0.5">
                  <Check size={11} strokeWidth={3.5} />
                </span>
                <span className="leading-tight">
                  {item.text}
                  {item.sub && (
                    <>
                      <br />
                      <span className="font-normal text-slate-500 text-[11px] sm:text-xs">
                        {item.sub}
                      </span>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ============================================================= */}
        {/* CARD 3: Why Choose Kids Zone?                                 */}
        {/* ============================================================= */}
        <div className="flex flex-col justify-start rounded-2xl sm:rounded-3xl border border-amber-100 bg-[#fefce8]/90 p-6 sm:p-7 shadow-card transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="shrink-0">
              <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8 text-[#ffb703]" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.2 6 20.4l1.3-6.7-5-4.7 6.8-.8L12 2z" />
              </svg>
            </div>
            <h3 className="font-bubble text-xl sm:text-2xl font-black tracking-tight leading-tight select-none">
              <span className="text-brand-navy">Why Choose </span>
              <span className="text-brand-red">Kids Zone?</span>
            </h3>
          </div>

          {/* Checklist */}
          <ul className="mt-5 space-y-3 sm:space-y-3.5">
            {card3Items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5 sm:gap-3 font-body text-xs sm:text-[13.5px] font-semibold text-slate-700">
                <span className="flex h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-white shadow-sm">
                  <Check size={11} strokeWidth={3.5} />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
