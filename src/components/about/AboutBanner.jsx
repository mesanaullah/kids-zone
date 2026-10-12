import aboutImage from '../../assets/images/About-images/about-us.png';
import { Star } from '../common/Decor.jsx';

export default function AboutBanner() {
  return (
    <section
      className="banner-cq @container relative w-full overflow-hidden bg-[#dbeafe] select-none h-[54vh] min-h-[410px] sm:h-[56vh] sm:min-h-[440px] md:h-[54vh] md:min-h-[440px] lg:h-auto lg:min-h-[440px] lg:[aspect-ratio:2172/724] lg:-mt-[20px]"
      style={{ containerType: 'inline-size' }}
    >
      {/* Background artwork spanning full width */}
      <img
        src={aboutImage}
        alt="Kids Zone About Us Banner Artwork"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-[68%_center] lg:object-center"
        draggable={false}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Soft gradient blend on smaller screens so text stays ultra-crisp over background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-100/95 via-sky-100/60 to-transparent sm:from-sky-100/80 sm:via-transparent lg:hidden" />

      {/* ------------------------------------------------------------- */}
      {/* STAR 2: Above the paper airplane / arrow doodle (top-center)  */}
      {/* ------------------------------------------------------------- */}
      <div
        className="pointer-events-none absolute rotate-12 transition-transform duration-300 hover:scale-110"
        style={{
          left: '49%',
          top: '10.5%',
          width: 'clamp(14px, 2.3cqw, 32px)',
          height: 'clamp(14px, 2.3cqw, 32px)',
        }}
        aria-hidden="true"
      >
        <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STAR 3: Bottom right on yellow wave swoosh                    */}
      {/* ------------------------------------------------------------- */}
      <div
        className="pointer-events-none absolute -rotate-12 transition-transform duration-300 hover:scale-110"
        style={{
          left: '86%',
          top: '90%',
          width: 'clamp(12px, 2.1cqw, 28px)',
          height: 'clamp(12px, 2.1cqw, 28px)',
        }}
        aria-hidden="true"
      >
        <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TEXT CONTENT: Starts with standard top padding like Home hero */}
      {/* ------------------------------------------------------------- */}
      <div className="container-page relative z-10 h-full flex flex-col justify-start pt-[28px] sm:pt-[36px] md:pt-[44px] lg:justify-center lg:pt-[4px]">
        <div className="w-[76%] sm:w-[66%] md:w-[58%] lg:w-[48%] xl:w-[46%] flex flex-col justify-start lg:justify-center">
          
          {/* Main Title: "About" in navy + "KIDS ZONE" in red */}
          <div className="relative inline-block">
            <h1 className="select-none font-bubble font-black tracking-tight leading-[1.04] text-[30px] sm:text-[40px] md:text-5xl lg:text-[58px] xl:text-[66px]">
              <span className="text-brand-navy">About </span>
              <span className="relative inline-block text-[#e51a34]">
                KIDS ZONE
                {/* Decorative sparkles beside underline */}
                <span className="pointer-events-none absolute -left-2.5 sm:-left-3.5 -bottom-2 text-[9px] sm:text-[11px] text-amber-400 select-none" aria-hidden="true">✦</span>
                <span className="pointer-events-none absolute -right-2.5 sm:-right-3.5 -bottom-2 text-[9px] sm:text-[11px] text-[#e51a34] select-none" aria-hidden="true">✦</span>

                {/* Curved yellow brush underline directly under "KIDS ZONE" */}
                <svg
                  viewBox="0 0 160 14"
                  fill="none"
                  className="pointer-events-none absolute left-0 -bottom-2 sm:-bottom-2.5 md:-bottom-3 h-2 sm:h-2.5 md:h-3.5 w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10 C 50 3, 110 3, 156 7"
                    stroke="#ffd21f"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Subheading 1 with Yellow Star right before "Nurturing" */}
          <div className="relative mt-4 sm:mt-5 md:mt-5.5">
            {/* STAR 1: Placed before Nurturing on the left */}
            <div
              className="pointer-events-none absolute -left-4 sm:-left-6 md:-left-8 top-0.5 sm:top-1 -rotate-[14deg] transition-transform duration-300 hover:scale-110"
              style={{
                width: 'clamp(14px, 2.2cqw, 30px)',
                height: 'clamp(14px, 2.2cqw, 30px)',
              }}
              aria-hidden="true"
            >
              <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
            </div>

            <h2 className="font-body text-sm sm:text-base md:text-lg lg:text-xl font-bold text-brand-navy select-none leading-snug">
              Nurturing Today, For a Brighter Tomorrow
            </h2>
          </div>

          {/* Subheading 2: Descriptive mission paragraph */}
          <p className="mt-2 sm:mt-2.5 md:mt-3 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl font-body text-xs sm:text-sm md:text-[15px] font-medium text-brand-navy/85 leading-relaxed select-none">
            At Kids Zone, we believe every child is unique and has the potential to shine. Our aim is to provide a safe, happy and stimulating environment where children learn, play and grow with confidence.
          </p>

        </div>
      </div>
    </section>
  );
}
