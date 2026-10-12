/**
 * AdmissionProcess Component:
 * - Floats gently over the bottom of the hero banner (-mt-2 sm:-mt-3 lg:-mt-5) matching Contact Us
 * - Compact refined inner padding (p-5 sm:p-6 lg:py-6 lg:px-8)
 * - Title: "Admission" in brand navy + "Process" in vibrant red
 * - Segmented red & yellow accent underline
 * - 5 Steps with colorful circular badges and connecting arrows
 */
export default function AdmissionProcess() {
  const steps = [
    {
      step: 'Step 1',
      bg: 'bg-[#f0243c]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-6.5 sm:w-6.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" strokeWidth={2.4} />
          <line x1="16" y1="17" x2="8" y2="17" strokeWidth={2.4} />
          <line x1="10" y1="9" x2="8" y2="9" strokeWidth={2.4} />
        </svg>
      ),
      line1: 'Fill the Enquiry Form',
      line2: '(Online/Offline)',
    },
    {
      step: 'Step 2',
      bg: 'bg-[#1d6fe0]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-6.5 sm:w-6.5 text-white" fill="currentColor" aria-hidden="true">
          <circle cx="10" cy="8" r="3.2" />
          <path d="M4 19c0-3.2 2.7-5.5 6-5.5s6 2.3 6 5.5v1H4v-1z" />
          <circle cx="17.5" cy="9.5" r="2.5" />
          <path d="M16.5 14.5c1.8.3 3.5 1.8 3.5 4.5v1h-3.2v-1c0-1.6-.7-3-1.8-3.9.5-.4 1-.6 1.5-.6z" />
        </svg>
      ),
      line1: 'Interaction with',
      line2: 'Counselor',
    },
    {
      step: 'Step 3',
      bg: 'bg-[#f59e0b]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-6.5 sm:w-6.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" strokeWidth={2.4} />
          <line x1="16" y1="17" x2="8" y2="17" strokeWidth={2.4} />
          <line x1="12" y1="9" x2="8" y2="9" strokeWidth={2.4} />
        </svg>
      ),
      line1: 'Submission of',
      line2: 'Documents',
    },
    {
      step: 'Step 4',
      bg: 'bg-[#00c868]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-6.5 sm:w-6.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 3.5h12" />
          <path d="M6 8.5h12" />
          <path d="M6 13.5l7 7.5" />
          <path d="M6 13.5h3.5a4.5 4.5 0 0 0 0-9H6" />
        </svg>
      ),
      line1: 'Fee Payment',
      line2: '',
    },
    {
      step: 'Step 5',
      bg: 'bg-[#7048e8]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-6.5 sm:w-6.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" />
          <polyline points="8 12 11 15 16 9" strokeWidth={2.6} />
        </svg>
      ),
      line1: 'Admission',
      line2: 'Confirmation',
    },
  ];

  return (
    <section className="container-page relative z-20 -mt-2 sm:-mt-3 lg:-mt-5 pb-8 sm:pb-10 lg:pb-14">
      <div className="rounded-[24px] sm:rounded-[26px] bg-white p-5 sm:p-6 lg:py-6 lg:px-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.08)]">
        
        {/* ============================================================= */}
        {/* Header: Title with red & yellow segmented underline           */}
        {/* ============================================================= */}
        <div>
          <h2 className="font-bubble text-xl sm:text-2xl lg:text-[28px] font-black tracking-tight leading-tight select-none">
            <span className="text-brand-navy">Admission </span>
            <span className="text-brand-red">Process</span>
          </h2>

          {/* Red & Yellow Accent Line */}
          <div className="flex h-1 sm:h-1.5 w-12 overflow-hidden rounded-full mt-1.5 mb-5 sm:mb-6 lg:mb-7" aria-hidden="true">
            <span className="w-1/2 bg-[#f0243c]" />
            <span className="w-1/2 bg-[#ffd21f]" />
          </div>
        </div>

        {/* ============================================================= */}
        {/* 5 Steps Progression Row with Connecting Arrows                */}
        {/* ============================================================= */}
        <div className="grid grid-cols-2 gap-y-7 gap-x-3 sm:grid-cols-3 md:flex md:items-start md:justify-between md:gap-2 lg:gap-3 xl:gap-4">
          {steps.map((item, idx) => (
            <div key={idx} className={`contents md:flex md:items-center ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
              
              {/* Step Card */}
              <div className="group flex flex-col items-center text-center mx-auto md:mx-0 w-full md:w-auto md:max-w-[160px]">
                {/* Round Colorful Icon Badge */}
                <div
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full shadow-md transition-transform duration-300 group-hover:scale-105 ${item.bg}`}
                >
                  {item.icon}
                </div>

                {/* Step Number */}
                <h3 className="mt-2.5 font-display text-sm sm:text-[15px] font-extrabold text-brand-navy leading-tight">
                  {item.step}
                </h3>

                {/* Step Description */}
                <p className="mt-1 font-body text-xs sm:text-[13px] font-semibold text-brand-navy/85 leading-tight text-center">
                  {item.line1}
                  {item.line2 && (
                    <>
                      <br />
                      {item.line2}
                    </>
                  )}
                </p>
              </div>

              {/* Connecting Arrow between steps (shown on tablet & desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-[#7390cc] shrink-0 self-center -mt-6 px-1 lg:px-2" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 sm:h-5.5 sm:w-5.5 transition-transform duration-300 hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
