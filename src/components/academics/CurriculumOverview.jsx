/**
 * Curriculum Overview Section
 * Matches reference image design:
 * - 6-feature rounded floating card strip overlapping hero banner:
 *   1. CBSE Based Curriculum (Red)
 *   2. Activity Based Learning (Yellow)
 *   3. Experienced Teachers (Blue)
 *   4. Holistic Development (Green)
 *   5. Safe & Supportive Environment (Pink/Coral)
 *   6. Focus on Life Skills (Purple)
 * - Clean vertical dividers on desktop & tablet
 * - Responsive across mobile (2-col), tablet (3-col), and desktop (6-col)
 */
export default function CurriculumOverview() {
  const items = [
    {
      id: 'cbse',
      title: ['CBSE Based', 'Curriculum'],
      desc: 'Conceptual and structured learning',
      badgeColor: '#f0243c',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 sm:h-8 sm:w-8 text-white" aria-hidden="true">
          <path d="M11 5C8.8 4.2 5.5 4.1 2 5.2V19.5C5.5 18.4 8.8 18.5 11 19.3V5Z" />
          <path d="M13 5C15.2 4.2 18.5 4.1 22 5.2V19.5C18.5 18.4 15.2 18.5 13 19.3V5Z" />
        </svg>
      ),
    },
    {
      id: 'activity',
      title: ['Activity Based', 'Learning'],
      desc: 'Hands-on activities for better understanding',
      badgeColor: '#f5b800',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 sm:h-8 sm:w-8 text-white" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-2 17h4v1h-4v-1zm1 2h2v1h-2v-1z" />
        </svg>
      ),
    },
    {
      id: 'teachers',
      title: ['Experienced', 'Teachers'],
      desc: 'Caring and qualified faculty',
      badgeColor: '#1d6fe0',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 sm:h-8 sm:w-8 text-white" aria-hidden="true">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          <path d="M18.5 10c1.38 0 2.5-1.12 2.5-2.5S19.88 5 18.5 5c-.32 0-.62.07-.9.18 1.14.93 1.9 2.33 1.9 3.82 0 1.49-.76 2.89-1.9 3.82.28.11.58.18.9.18zm1.5 4.5c1.47.78 2.5 1.9 2.5 3.5v2h-3v-2c0-1.3-.64-2.45-1.63-3.23.75-.16 1.48-.27 2.13-.27z" />
          <path d="M5.5 10c.32 0 .62-.07.9-.18C5.26 8.89 4.5 7.49 4.5 6s.76-2.89 1.9-3.82C6.12 2.07 5.82 2 5.5 2 4.12 2 3 3.12 3 4.5S4.12 7 5.5 7zm-1.5 4.5c-.65 0-1.38.11-2.13.27C.86 12.55.22 13.7.22 15v2h3v-2c0-1.6 1.03-2.72 2.5-3.5z" />
        </svg>
      ),
    },
    {
      id: 'holistic',
      title: ['Holistic', 'Development'],
      desc: 'Academic, social, emotional & physical growth',
      badgeColor: '#00a854',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 sm:h-8 sm:w-8 text-white" aria-hidden="true">
          <rect x="3" y="13" width="4.5" height="8" rx="1.5" />
          <rect x="9.75" y="8" width="4.5" height="13" rx="1.5" />
          <rect x="16.5" y="3" width="4.5" height="18" rx="1.5" />
        </svg>
      ),
    },
    {
      id: 'safe',
      title: ['Safe & Supportive', 'Environment'],
      desc: 'A secure and nurturing campus',
      badgeColor: '#f23d6d',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 sm:h-8 sm:w-8 text-white" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'skills',
      title: ['Focus on', 'Life Skills'],
      desc: 'Building confidence and independence',
      badgeColor: '#8b5cf6',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 sm:h-8 sm:w-8 text-white" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  return (
    <section aria-label="Curriculum Overview" className="w-full">
      {/* Floating Card Strip matching reference image */}
      <div className="w-full rounded-2xl sm:rounded-3xl lg:rounded-[32px] bg-white p-5 sm:p-6 lg:py-7 lg:px-5 shadow-[0_12px_42px_-6px_rgba(11,42,122,0.10)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_18px_50px_-6px_rgba(11,42,122,0.14)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 sm:gap-y-6 lg:gap-y-0">
          {items.map((item, index) => {
            const isLastMobileCol = index % 2 === 1;
            const isLastTabletCol = index % 3 === 2;
            const isLastDesktopCol = index === 5;
            const isFirstRowMobile = index < 4;
            const isFirstRowTablet = index < 3;

            return (
              <div
                key={item.id}
                className={`group flex flex-col items-center text-center px-2 sm:px-3 lg:px-2 xl:px-3 ${
                  !isLastMobileCol ? 'border-r border-slate-200/70' : ''
                } ${
                  !isLastTabletCol ? 'sm:border-r sm:border-slate-200/70' : 'sm:border-r-0'
                } ${
                  !isLastDesktopCol ? 'lg:border-r lg:border-slate-200/80' : 'lg:border-r-0'
                } ${
                  isFirstRowMobile ? 'pb-2 sm:pb-0' : ''
                } ${
                  isFirstRowTablet ? 'sm:pb-4 lg:pb-0' : ''
                }`}
              >
                {/* Colored Circular Icon Badge */}
                <div
                  className="flex h-14 w-14 sm:h-16 sm:w-16 lg:h-[64px] lg:w-[64px] items-center justify-center rounded-full text-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: item.badgeColor }}
                >
                  {item.icon}
                </div>

                {/* 2-line Title */}
                <h3 className="mt-3 sm:mt-3.5 font-display text-[14px] sm:text-[15px] lg:text-[15.5px] font-bold text-brand-navy leading-tight transition-colors group-hover:text-brand-blue select-none">
                  {item.title[0]}
                  <br />
                  {item.title[1]}
                </h3>

                {/* Subtitle / Description */}
                <p className="mt-1 sm:mt-1.5 font-body text-xs sm:text-[12px] lg:text-[12.5px] font-medium text-slate-500 leading-snug max-w-[155px] mx-auto select-none">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
