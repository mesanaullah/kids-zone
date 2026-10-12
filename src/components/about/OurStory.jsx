import colorfulPreschoolImg from '../../assets/images/About-images/Colorful Preschool.png';
import certificateImg from '../../assets/images/About-images/Certificate.png';
import yellowBorderImg from '../../assets/images/yellow-fancy-border.png';
import { Star } from '../common/Decor.jsx';

/**
 * OurStory Component for About Us page:
 * - Layers seamlessly below the hero section with a gentle negative top margin
 * - Left column:
 *   - "OUR STORY" in brand red
 *   - Bubbly heading: "Building a Strong Foundation for Bright Futures"
 *   - Rounded yellow accent bar beneath "for Bright Futures"
 *   - Clean, readable paragraph describing Kids Zone's vision and approach in Saharsa
 *   - Premium "Know More →" action button in brand red
 * - Right column:
 *   - Two-image collage (Colorful Preschool & Certificate)
 *   - Fancy yellow brush badge bridging both images with "Learning Today for a Brighter Tomorrow"
 *   - Stars placed on top-right and bottom-right of the yellow badge
 *   - Yellow star on the bottom-right border of the Certificate image
 * - Fully responsive across mobile, tablet, and PC
 */
export default function OurStory() {
  return (
    <section className="container-page relative z-20 pt-3 sm:pt-4 md:pt-6 lg:pt-8 md:-mt-5 lg:-mt-[30px] pb-12 sm:pb-16 lg:pb-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1.35fr] lg:gap-12 xl:gap-16">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: Story Content & Action Button               */}
        {/* ========================================================= */}
        <div className="flex flex-col items-start justify-center">
          {/* Eyebrow Label */}
          <span className="font-display text-xs sm:text-sm font-bold tracking-wider text-brand-red uppercase">
            OUR STORY
          </span>

          {/* Main Section Heading */}
          <h2 className="mt-1.5 sm:mt-2 font-bubble text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-black leading-[1.12] tracking-tight text-brand-navy">
            Building a Strong Foundation <br className="hidden sm:inline" />
            for <span className="text-brand-red">Bright Futures</span>
          </h2>

          {/* Yellow brush border bar below "for Bright Futures" */}
          <div
            className="mt-2.5 sm:mt-3 h-1 sm:h-1.5 w-12 sm:w-14 rounded-full bg-brand-yellow shadow-sm"
            aria-hidden="true"
          />

          {/* Description Paragraph */}
          <p className="mt-4 sm:mt-5 max-w-xl font-body text-xs sm:text-sm md:text-[15px] font-medium text-slate-600 leading-relaxed">
            Kids Zone was established with a vision to provide quality early education to young learners in Saharsa. We focus on modern teaching methods, activity-based learning and overall personality development, so that every child grows into a confident, responsible and successful individual.
          </p>

          {/* Call to Action Button */}
          <div className="mt-6 sm:mt-7">
            <a
              href="#our-story"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-2.5 sm:px-7 sm:py-3 font-display text-sm sm:text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-red-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Know More</span>
              <span className="text-base sm:text-lg leading-none" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Interactive Two-Image Collage               */}
        {/* ========================================================= */}
        <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
          <div className="relative flex items-end justify-center gap-1 sm:gap-1.5 pt-8 sm:pt-10">

            {/* Left Image: Colorful Preschool Activity with natural fancy border */}
            <div className="relative z-0 w-[56%] transition-transform duration-300 hover:scale-[1.01]">
              <img
                src={colorfulPreschoolImg}
                alt="Young learners playing with colorful educational blocks at Kids Zone"
                className="w-full h-auto drop-shadow-sm select-none"
                draggable={false}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right Image: Certificate Presentation with natural light-blue frame */}
            <div className="relative z-10 w-[44%] transition-transform duration-300 hover:scale-[1.01]">
              <img
                src={certificateImg}
                alt="Kids Zone students proudly holding certificates with teachers"
                className="w-full h-auto drop-shadow-sm select-none"
                draggable={false}
                loading="lazy"
                decoding="async"
              />

              {/* Star on the bottom-right border of the Certificate image (10px up, 2px right, filled yellow) */}
              <div
                className="pointer-events-none absolute bottom-[10px] -right-[2px] sm:bottom-[12px] sm:-right-[3px] z-20 rotate-12 transition-transform duration-300 hover:scale-110"
                style={{
                  width: 'clamp(24px, 3.8vw, 38px)',
                  height: 'clamp(24px, 3.8vw, 38px)',
                }}
                aria-hidden="true"
              >
                <Star className="h-full w-full fill-[#ffd21f] drop-shadow-md" color="#ffd21f" strokeWidth={2.4} />
              </div>
            </div>

            {/* Fancy Yellow Brush Badge centered over seam between images (moved 10px down) */}
            <div
              className="absolute -top-[10px] left-[56%] -translate-x-1/2 z-20 -rotate-2 select-none"
              style={{
                width: 'clamp(168px, 26vw, 240px)',
              }}
            >
              <div className="relative w-full">
                {/* Yellow brush image */}
                <img
                  src={yellowBorderImg}
                  alt="Quote ribbon banner"
                  className="w-full h-auto drop-shadow-md pointer-events-none"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />

                {/* Text centered inside the yellow brush */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-3 py-1.5 text-center">
                  <span className="font-bubble font-black text-brand-navy leading-[1.15] text-[10.5px] xs:text-[11.5px] sm:text-[13px] md:text-[14px] lg:text-[14.5px]">
                    “Learning Today
                    <br />
                    for a Brighter
                    <br />
                    Tomorrow”
                  </span>
                </div>

                {/* Star: Top-right of yellow badge */}
                <div
                  className="pointer-events-none absolute -top-3 -right-2 sm:-top-3.5 sm:-right-2.5 rotate-12"
                  style={{
                    width: 'clamp(14px, 2.2vw, 24px)',
                    height: 'clamp(14px, 2.2vw, 24px)',
                  }}
                  aria-hidden="true"
                >
                  <Star className="h-full w-full fill-[#ffd21f] drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
                </div>

                {/* Star: Bottom-right of yellow badge */}
                <div
                  className="pointer-events-none absolute -bottom-2.5 -right-2 sm:-bottom-3 sm:-right-2.5 -rotate-12"
                  style={{
                    width: 'clamp(14px, 2.2vw, 24px)',
                    height: 'clamp(14px, 2.2vw, 24px)',
                  }}
                  aria-hidden="true"
                >
                  <Star className="h-full w-full fill-[#ffd21f] drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
