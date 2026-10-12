import { Star } from '../common/Decor.jsx';

/**
 * WhyChooseKidsZone Component for About Us page:
 * - Deep navy blue background banner (#063989) with rounded corners and card shadow
 * - Left: Blue-whitish outline star before "Why Choose" in white and "KIDS ZONE?" in bright yellow
 * - Dashed guide trail connecting the badges across the strip
 * - 5 Round Feature Badges:
 *   1. Red (#f0243c): 3 students icon + "500+" / "Happy Students"
 *   2. Yellow (#ffbe1a): Teacher & board icon + "Experienced" / "Teachers"
 *   3. Blue (#0084ff): Bookmark icon with star-dot + "Play Group" / "to Class 5"
 *   4. Green (#00c868): Shield with checkmark + "Safe & Hygienic" / "Environment"
 *   5. Purple (#9353ff): Star outline + "Activity Based" / "Learning"
 * - Far right: Bright yellow outline star
 * - Responsive: Clean flex row on desktop/laptop, responsive balanced grid on tablet & mobile
 */
export default function WhyChooseKidsZone() {
  const items = [
    {
      bg: 'bg-[#f0243c]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="currentColor" aria-hidden="true">
          {/* Center student */}
          <circle cx="12" cy="7" r="2.8" />
          <path d="M7 19c0-2.8 2.2-4.8 5-4.8s5 2 5 4.8v0.8H7V19z" />
          {/* Left student */}
          <circle cx="6" cy="9" r="2.1" />
          <path d="M2.2 19c0-2 1.5-3.6 3.4-3.8.3.8.7 1.4 1.3 2H2.2v1.8z" />
          {/* Right student */}
          <circle cx="18" cy="9" r="2.1" />
          <path d="M21.8 19c0-2-1.5-3.6-3.4-3.8-.3.8-.7 1.4-1.3 2h4.7v1.8z" />
        </svg>
      ),
      title: '500+',
      subtitle: 'Happy Students',
      isStat: true,
    },
    {
      bg: 'bg-[#ffbe1a]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 text-[#08205f]" fill="currentColor" aria-hidden="true">
          {/* Screen / Presentation board */}
          <rect x="7.5" y="3.5" width="13" height="8.5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12.5 8.5l4-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Easel Stand */}
          <path d="M14 12v4.5M12 16.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          {/* Teacher figure */}
          <circle cx="4.8" cy="9" r="2.1" />
          <path d="M2 17.5c0-2.2 1.4-3.8 3.2-4 1.8.2 3.2 1.8 3.2 4v0.8H2v-0.8z" />
        </svg>
      ),
      title: 'Experienced',
      subtitle: 'Teachers',
    },
    {
      bg: 'bg-[#0084ff]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 3.5a1.5 1.5 0 011.5-1.5h9A1.5 1.5 0 0118 3.5v17l-6-3.8-6 3.8v-17z" />
          <circle cx="12" cy="8.5" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      ),
      title: 'Play Group',
      subtitle: 'to Class 5',
    },
    {
      bg: 'bg-[#00c868]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3s6.8 1.8 6.8 7.5c0 5-4.2 8.5-6.8 9.8-2.6-1.3-6.8-4.8-6.8-9.8C5.2 4.8 12 3 12 3z" />
          <path d="M9 11.2l2.2 2.2 4.2-4.2" strokeWidth="2.6" />
        </svg>
      ),
      title: 'Safe & Hygienic',
      subtitle: 'Environment',
    },
    {
      bg: 'bg-[#9353ff]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3.2l2.6 5.4 5.9.8-4.3 4.2 1 5.9L12 16.7 6.8 19.5l1-5.9-4.3-4.2 5.9-.8L12 3.2z" />
        </svg>
      ),
      title: 'Activity Based',
      subtitle: 'Learning',
    },
  ];

  return (
    <section className="container-page relative z-20 pb-12 sm:pb-16 lg:pb-20">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#063989] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-6 shadow-card">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 xl:gap-8">

          {/* ========================================================= */}
          {/* LEFT: Section Title with Light Blue-Whitish Star           */}
          {/* ========================================================= */}
          <div className="relative flex items-center gap-2.5 sm:gap-3.5 shrink-0 -rotate-2">
            {/* Soft blue-whitish outline star before Why Choose */}
            <div className="pointer-events-none shrink-0 -rotate-12" aria-hidden="true">
              <Star className="h-6 w-6 sm:h-7 sm:w-7" color="#60a5fa" strokeWidth={2.4} />
            </div>

            <div className="flex flex-col">
              <span className="font-bubble text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-black tracking-tight leading-none text-white select-none drop-shadow-sm">
                Why Choose
              </span>
              <span className="font-bubble text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-black tracking-tight leading-none text-[#ffd21f] select-none mt-1 sm:mt-1.5 drop-shadow-sm">
                KIDS ZONE?
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: 5 Round Feature Badges with Dashed Trail & Star    */}
          {/* ========================================================= */}
          <div className="relative flex-1">
            {/* Subtle dashed connector line behind badges on medium/large screens */}
            <div
              className="pointer-events-none absolute top-6 sm:top-7 left-4 right-10 hidden h-0 border-t-2 border-dashed border-sky-300/35 md:block"
              aria-hidden="true"
            />

            <div className="grid grid-cols-2 gap-y-5 gap-x-3 sm:grid-cols-3 md:flex md:items-start md:justify-between md:gap-3 lg:gap-3 xl:gap-5">
              {items.map((item, idx) => (
                <div key={idx} className="group relative z-10 flex flex-col items-center text-center">
                  {/* Round Icon Badge with bevel ring */}
                  <div
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full ring-2 ring-white/25 shadow-md transition-transform duration-300 group-hover:scale-105 ${item.bg}`}
                  >
                    {item.icon}
                  </div>

                  {/* Label Text below badge */}
                  <div className="mt-2 sm:mt-2.5 flex flex-col items-center text-center">
                    {item.isStat ? (
                      <>
                        <span className="font-display font-extrabold text-sm sm:text-base text-white leading-tight">
                          {item.title}
                        </span>
                        <span className="font-body text-[11px] sm:text-xs font-semibold text-white/95 whitespace-nowrap leading-tight mt-0.5">
                          {item.subtitle}
                        </span>
                      </>
                    ) : (
                      <span className="font-display font-bold text-xs sm:text-[13px] text-white leading-tight text-center">
                        {item.title}
                        <br />
                        <span className="font-semibold text-white/95 font-body text-[11px] sm:text-xs">
                          {item.subtitle}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Far right bright yellow star */}
              <div className="col-span-2 sm:col-span-1 md:self-center flex items-center justify-center md:block pt-1 md:pt-0">
                <div className="pointer-events-none rotate-12 transition-transform duration-300 hover:scale-110" aria-hidden="true">
                  <Star className="h-6 w-6 sm:h-7 sm:w-7 drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
