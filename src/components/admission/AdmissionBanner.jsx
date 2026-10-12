import admissionImage from '../../assets/images/Admission-image/admission-image.png';
import { Star } from '../common/Decor.jsx';

export default function AdmissionBanner() {
  return (
    <section
      className="banner-cq @container relative w-full overflow-hidden bg-[#dbeafe] select-none h-[52vh] min-h-[390px] sm:h-[54vh] sm:min-h-[420px] lg:h-auto lg:min-h-[440px] lg:[aspect-ratio:2172/724] lg:-mt-[20px]"
      style={{ containerType: 'inline-size' }}
    >
      {/* Background artwork spanning full width */}
      <img
        src={admissionImage}
        alt="Kids Zone Admission Open Banner Artwork"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-[68%_center] lg:object-center"
        draggable={false}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Soft gradient blend on smaller screens so text stays ultra-crisp over background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-100/95 via-sky-100/65 to-transparent sm:from-sky-100/80 sm:via-transparent lg:hidden" />

      {/* TEXT CONTENT: Starts with standard top padding matching Contact/About/Home hero */}
      <div className="container-page relative z-10 h-full flex flex-col justify-start pt-[28px] sm:pt-[36px] md:pt-[44px] lg:justify-center lg:pt-[4px]">
        <div className="w-[74%] sm:w-[64%] md:w-[56%] lg:w-[46%] xl:w-[44%] flex flex-col justify-start lg:justify-center">
          
          {/* Main Title Block */}
          <div className="relative inline-block">
            {/* STAR 1: Between Admission and Open on the left with proper gap */}
            <div
              className="pointer-events-none absolute -left-6 sm:-left-8 md:-left-10 top-[48%] -translate-y-1/2 rotate-12 transition-transform duration-300 hover:scale-110"
              style={{
                width: 'clamp(14px, 2.3cqw, 32px)',
                height: 'clamp(14px, 2.3cqw, 32px)',
              }}
              aria-hidden="true"
            >
              <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
            </div>

            <h1 className="select-none font-bubble font-black tracking-tight leading-[1.02] text-[38px] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] -rotate-[4deg] origin-left">
              <span className="block text-brand-navy drop-shadow-sm">
                Admission
              </span>
              <span className="relative inline-block text-brand-red drop-shadow-sm mt-0.5 sm:mt-1">
                Open
                {/* Curved yellow brush underline directly under "Open" with proper gap */}
                <svg
                  viewBox="0 0 160 14"
                  fill="none"
                  className="pointer-events-none absolute left-0 -bottom-[18px] sm:-bottom-[22px] md:-bottom-[26px] h-2 sm:h-2.5 md:h-3.5 w-full min-w-[110px] sm:min-w-[140px]"
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

          {/* Subheading with STAR 2 after 'based on' */}
          <div className="relative mt-6 sm:mt-7 md:mt-8">
            <p className="font-body text-xs sm:text-sm md:text-[15px] lg:text-base font-semibold text-brand-navy/90 leading-relaxed select-none max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
              Give your child the right start for a brighter future at Kids Zone. We offer a safe, caring and stimulating environment with quality education based on
              <span className="inline-block sm:hidden">&nbsp;</span>
              <br className="hidden sm:inline" />
              CBSE curriculum.
              {/* STAR 2: Positioned after 'based on' / beside 'CBSE curriculum.' */}
              <span className="inline-block ml-2 sm:ml-3 align-middle -mt-1">
                <span
                  className="pointer-events-none inline-block -rotate-12 transition-transform duration-300 hover:scale-110"
                  style={{
                    width: 'clamp(14px, 2.1cqw, 28px)',
                    height: 'clamp(14px, 2.1cqw, 28px)',
                  }}
                  aria-hidden="true"
                >
                  <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
                </span>
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
