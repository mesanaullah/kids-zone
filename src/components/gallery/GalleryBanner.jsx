import galleryImage from '../../assets/images/Gallery-Images/gallery-image.png';
import { Star } from '../common/Decor.jsx';

export default function GalleryBanner() {
  return (
    <section
      className="banner-cq @container relative w-full overflow-hidden bg-[#dbeafe] select-none h-[52vh] min-h-[380px] sm:h-[54vh] sm:min-h-[420px] lg:h-auto lg:min-h-[440px] lg:[aspect-ratio:2172/724] lg:-mt-[20px]"
      style={{ containerType: 'inline-size' }}
    >
      {/* Background artwork spanning full width */}
      <img
        src={galleryImage}
        alt="Kids Zone Gallery Banner Artwork"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-[68%_center] lg:object-center"
        draggable={false}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Soft gradient blend on smaller screens so text stays ultra-crisp over background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-100/95 via-sky-100/60 to-transparent sm:from-sky-100/80 sm:via-transparent lg:hidden" />

      {/* ------------------------------------------------------------- */}
      {/* STAR 2: Below the blue airplane trail, on artwork             */}
      {/* ------------------------------------------------------------- */}
      <div
        className="pointer-events-none absolute rotate-12 transition-transform duration-300 hover:scale-110"
        style={{
          left: '42%',
          top: '78%',
          width: 'clamp(14px, 2.3cqw, 32px)',
          height: 'clamp(14px, 2.3cqw, 32px)',
        }}
        aria-hidden="true"
      >
        <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STAR 3: Right side beside the top photo frame                 */}
      {/* ------------------------------------------------------------- */}
      <div
        className="pointer-events-none absolute rotate-12 transition-transform duration-300 hover:scale-110"
        style={{
          right: '3.6%',
          top: '13%',
          width: 'clamp(18px, 2.8cqw, 40px)',
          height: 'clamp(18px, 2.8cqw, 40px)',
        }}
        aria-hidden="true"
      >
        <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TEXT CONTENT: Starts with standard top padding like Home hero */}
      {/* ------------------------------------------------------------- */}
      <div className="container-page relative z-10 h-full flex flex-col justify-start pt-[29px] sm:pt-[37px] md:pt-[45px] lg:justify-center lg:pt-[5px]">
        <div className="w-[70%] sm:w-[60%] md:w-[52%] lg:w-[42%] flex flex-col justify-start lg:justify-center">
          {/* Word: Our */}
          <div className="font-bubble text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-black tracking-tight text-brand-navy select-none leading-none">
            Our
          </div>

          {/* Word: Gallery + Yellow Brush Underline */}
          <div className="relative inline-block mt-0.5 sm:mt-1">
            {/* STAR 1: Beside top curve of 'G' in 'Gallery' */}
            <div
              className="pointer-events-none absolute -left-4 sm:-left-6 md:-left-8 top-1 sm:top-2 -rotate-[15deg] transition-transform duration-300 hover:scale-110"
              style={{
                width: 'clamp(14px, 2.4cqw, 34px)',
                height: 'clamp(14px, 2.4cqw, 34px)',
              }}
              aria-hidden="true"
            >
              <Star className="h-full w-full drop-shadow-sm" color="#ffd21f" strokeWidth={2.4} />
            </div>

            <h1 className="select-none font-bubble font-black tracking-tight leading-[0.95] text-[38px] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] text-[#e51a34]">
              Gallery
            </h1>

            {/* Playful curved yellow brush underline with small neat gap */}
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

          {/* Subtitle snugly below the underline */}
          <p className="mt-3 sm:mt-4 md:mt-5 max-w-xs sm:max-w-sm md:max-w-md font-body text-xs sm:text-sm md:text-base font-medium text-brand-navy/90 leading-relaxed select-none">
            A glimpse of the joyful moments, activities and achievements at Kids Zone.
          </p>
        </div>
      </div>
    </section>
  );
}
