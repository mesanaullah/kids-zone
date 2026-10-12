import academicImage from '../../assets/images/Academic-images/academic-image.png';
import { Star } from '../common/Decor.jsx';

export default function AcademicBanner() {
  return (
    <section
      className="banner-cq @container relative w-full overflow-hidden bg-[#e0f0fe] select-none h-[52vh] min-h-[380px] sm:h-[54vh] sm:min-h-[420px] lg:h-auto lg:min-h-[440px] lg:[aspect-ratio:2171/724] lg:-mt-[20px]"
      style={{ containerType: 'inline-size' }}
    >
      {/* Background artwork spanning full width */}
      <img
        src={academicImage}
        alt="Kids Zone Academics Banner Artwork"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-[68%_center] lg:object-center"
        draggable={false}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Soft gradient blend on smaller screens so text stays ultra-crisp over background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-100/95 via-sky-100/60 to-transparent sm:from-sky-100/80 sm:via-transparent lg:hidden" />

      {/* TEXT CONTENT: Starts with standard top padding matching Contact/Admission/Home hero */}
      <div className="container-page relative z-10 h-full flex flex-col justify-start pt-[28px] sm:pt-[36px] md:pt-[44px] lg:justify-center lg:pt-[4px]">
        <div className="w-[82%] sm:w-[72%] md:w-[62%] lg:w-[48%] xl:w-[46%] pl-7 sm:pl-9 md:pl-10 lg:pl-11 flex flex-col justify-start lg:justify-center">
          
          {/* Main Title Block */}
          <div className="relative inline-block -rotate-[3.5deg] origin-left self-start">
            <h1 className="select-none font-bubble font-black tracking-tight leading-none text-[38px] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] text-brand-navy drop-shadow-sm">
              Academics
            </h1>

            {/* Red '+' cross doodle above the 's' / 'c' */}
            <div
              className="pointer-events-none absolute -top-1 sm:-top-2 right-6 sm:right-9 select-none"
              aria-hidden="true"
            >
              <span className="font-bubble text-base sm:text-lg md:text-xl font-black text-[#f0243c] leading-none select-none">
                +
              </span>
            </div>

            {/* Tiny sparkle above 's' */}
            <div
              className="pointer-events-none absolute -top-1 sm:-top-1.5 right-1.5 sm:right-3 rotate-12"
              style={{
                width: 'clamp(10px, 1.4cqw, 16px)',
                height: 'clamp(10px, 1.4cqw, 16px)',
              }}
              aria-hidden="true"
            >
              <Star className="h-full w-full" color="#ffd21f" strokeWidth={2.4} />
            </div>

            {/* Yellow Star after 'Academics' on the right */}
            <div
              className="pointer-events-none absolute -right-6 sm:-right-8 md:-right-10 top-2 sm:top-3.5 rotate-12 transition-transform duration-300 hover:scale-110"
              style={{
                width: 'clamp(18px, 2.4cqw, 32px)',
                height: 'clamp(18px, 2.4cqw, 32px)',
              }}
              aria-hidden="true"
            >
              <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
            </div>

            {/* Smaller Yellow Star to upper-right */}
            <div
              className="pointer-events-none absolute -right-4 sm:-right-5 -top-2.5 sm:-top-3.5 rotate-[20deg]"
              style={{
                width: 'clamp(11px, 1.4cqw, 18px)',
                height: 'clamp(11px, 1.4cqw, 18px)',
              }}
              aria-hidden="true"
            >
              <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
            </div>

            {/* Curved yellow brush underline directly under "Academics" with proper gap */}
            <div className="mt-2 sm:mt-2.5 md:mt-3 lg:mt-3.5">
              <svg
                viewBox="0 0 160 14"
                fill="none"
                className="pointer-events-none h-2.5 sm:h-3 md:h-3.5 lg:h-4 w-36 sm:w-48 md:w-56 lg:w-64"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M4 10 C 50 3, 110 3, 156 7"
                  stroke="#ffd21f"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Subheading Block: "Strong Learning Today, A Brighter Tomorrow" */}
          <div className="relative mt-3.5 sm:mt-4 md:mt-5">
            {/* Yellow Star before "Strong" with clean gap */}
            <div
              className="pointer-events-none absolute -left-7 sm:-left-9 md:-left-10 top-0.5 sm:top-1 -rotate-12 transition-transform duration-300 hover:scale-110"
              style={{
                width: 'clamp(18px, 2.4cqw, 28px)',
                height: 'clamp(18px, 2.4cqw, 28px)',
              }}
              aria-hidden="true"
            >
              <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
            </div>

            <h2 className="font-body text-base sm:text-lg md:text-xl lg:text-[23px] xl:text-[26px] font-extrabold text-brand-navy leading-tight select-none tracking-tight">
              Strong Learning Today,
              <br />
              A Brighter Tomorrow
            </h2>
          </div>

          {/* Paragraph Below Subheading (same font family: font-body) */}
          <div className="relative mt-2 sm:mt-2.5 md:mt-3">
            <p className="font-body text-xs sm:text-[13px] md:text-sm lg:text-[14.5px] font-medium text-[#08205f]/90 leading-relaxed max-w-[460px] select-none">
              At Kids Zone, we follow a CBSE based curriculum that focuses on conceptual learning, practical knowledge and overall development of every child.
            </p>

            {/* Small yellow outline star at bottom-right of paragraph */}
            <div
              className="pointer-events-none absolute -bottom-3 sm:-bottom-4 right-2 sm:right-6 rotate-12 transition-transform duration-300 hover:scale-110"
              style={{
                width: 'clamp(14px, 1.8cqw, 22px)',
                height: 'clamp(14px, 1.8cqw, 22px)',
              }}
              aria-hidden="true"
            >
              <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
