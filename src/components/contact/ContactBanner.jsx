import contactImage from '../../assets/images/Contact-Images/contact-image.png';
import { Star } from '../common/Decor.jsx';

export default function ContactBanner() {
  return (
    <section
      className="banner-cq @container relative w-full overflow-hidden bg-[#dbeafe] select-none h-[52vh] min-h-[380px] sm:h-[54vh] sm:min-h-[420px] lg:h-auto lg:min-h-[440px] lg:[aspect-ratio:2172/724] lg:-mt-[20px]"
      style={{ containerType: 'inline-size' }}
    >
      {/* Background artwork spanning full width */}
      <img
        src={contactImage}
        alt="Kids Zone Contact Us Banner Artwork"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-[68%_center] lg:object-center"
        draggable={false}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Soft gradient blend on smaller screens so text stays ultra-crisp over background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-100/95 via-sky-100/60 to-transparent sm:from-sky-100/80 sm:via-transparent lg:hidden" />

      {/* ------------------------------------------------------------- */}
      {/* BLUE STAR: Below the boy's thumbs-up hand on artwork          */}
      {/* ------------------------------------------------------------- */}
      <div
        className="pointer-events-none absolute -rotate-12 transition-transform duration-300 hover:scale-110"
        style={{
          left: '48%',
          top: '76%',
          width: 'clamp(14px, 2.4cqw, 34px)',
          height: 'clamp(14px, 2.4cqw, 34px)',
        }}
        aria-hidden="true"
      >
        <Star className="h-full w-full drop-shadow-sm" color="#1d4fd8" strokeWidth={2.4} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TEXT CONTENT: Starts with standard top padding like Home hero */}
      {/* ------------------------------------------------------------- */}
      <div className="container-page relative z-10 h-full flex flex-col justify-start pt-[29px] sm:pt-[37px] md:pt-[45px] lg:justify-center lg:pt-[5px]">
        <div className="w-[72%] sm:w-[62%] md:w-[54%] lg:w-[44%] flex flex-col justify-start lg:justify-center">
          {/* Main Title: "Contact" in navy + "Us" in red on the same line */}
          <div className="relative inline-block">
            {/* Yellow Star beside 'Contact' */}
            <div
              className="pointer-events-none absolute -left-4 sm:-left-6 md:-left-8 top-1 sm:top-2 -rotate-[14deg] transition-transform duration-300 hover:scale-110"
              style={{
                width: 'clamp(14px, 2.4cqw, 32px)',
                height: 'clamp(14px, 2.4cqw, 32px)',
              }}
              aria-hidden="true"
            >
              <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
            </div>

            <h1 className="select-none font-bubble text-[38px] font-black leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px]">
              <span className="text-brand-navy">Contact </span>
              <span className="text-brand-red">Us</span>
            </h1>

            {/* Curved yellow brush underline under "Contact" */}
            <svg
              viewBox="0 0 160 14"
              fill="none"
              className="pointer-events-none mt-1 sm:mt-1.5 h-2.5 sm:h-3 w-32 sm:w-44 md:w-52"
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
          </div>

          {/* Subheading 1 (matching Home Hero subtitle font style) */}
          <h2 className="mt-4 sm:mt-5 font-body text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-navy select-none leading-snug">
            We are always here to help you!
          </h2>

          {/* Subheading 2 (matching Home Hero subtitle font style) */}
          <p className="mt-1.5 sm:mt-2 max-w-sm sm:max-w-md font-body text-xs sm:text-sm md:text-base font-medium text-brand-navy/85 leading-relaxed select-none">
            Have a question about admissions or classes? Reach out to us through any of our contact channels.
          </p>
        </div>
      </div>
    </section>
  );
}
