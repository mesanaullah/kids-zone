import Button from '../common/Button.jsx';
import { Sun, Star, Plane } from '../common/Decor.jsx';
import heroImg from '../../assets/images/hero-students.jpg';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white py-6 sm:py-8 lg:py-0 lg:-mt-[20px]">
      {/* ------------------------------------------------------------- */}
      {/* RIGHT PHOTO (Full-width in background on mobile, right half on desktop) */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-y-0 right-0 z-0 w-full sm:w-[90%] md:w-[75%] lg:w-[50%] xl:w-[52%]">
        <img
          src={heroImg}
          alt="Kids Zone students - Learning Today for a Brighter Tomorrow"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[right_bottom] lg:rounded-l-[36px]"
        />

        {/* Gradient blend on smaller screens: fades photo from left so text is crisp over white */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 sm:via-white/90 sm:to-transparent lg:hidden" />

        {/* Soft blend gradient on left edge on desktop */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-white via-white/40 to-transparent lg:block" />

        {/* Top-Right Yellow Star */}
        <Star
          className="pointer-events-none absolute right-4 top-4 hidden h-7 w-7 drop-shadow-sm sm:right-6 sm:top-6 sm:block sm:h-8 sm:w-8"
          color="#ffd21f"
        />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* FOREGROUND CONTENT: Text & Playful Doodles                     */}
      {/* ------------------------------------------------------------- */}
      <div className="container-page relative z-10">
        <div className="grid items-center lg:min-h-[480px] lg:grid-cols-2 xl:min-h-[520px]">
          {/* Left Column: Headings & CTA */}
          <div className="relative py-4 sm:py-8 lg:py-12 lg:pr-8">
            {/* Top-Right Yellow Sun */}
            <Sun className="absolute right-4 top-0 h-10 w-10 sm:right-8 sm:top-2 sm:h-14 sm:w-14" />

            {/* Far-Left Yellow Star */}
            <Star
              className="absolute -left-6 top-28 hidden h-6 w-6 -rotate-12 sm:-left-10 sm:top-32 sm:block sm:h-7 sm:w-7"
              color="#ffd21f"
            />

            {/* Right Blue Plane with Flight Trail */}
            <div className="absolute right-4 top-24 hidden sm:block lg:right-6">
              <div className="relative">
                <svg
                  className="absolute -left-5 top-3 h-8 w-10 text-sky-400 opacity-70"
                  viewBox="0 0 50 40"
                  fill="none"
                >
                  <path
                    d="M5 35 C 10 15, 30 30, 45 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                </svg>
                <Plane className="h-10 w-10 rotate-6" />
              </div>
            </div>

            {/* Right Yellow Star aligned with Tomorrow */}
            <Star
              className="absolute right-4 top-52 hidden h-6 w-6 rotate-12 sm:right-8 sm:top-56 sm:block sm:h-7 sm:w-7"
              color="#ffd21f"
            />

            {/* Main Headline */}
            <h1 className="select-none font-bubble text-[38px] font-black leading-[1.06] tracking-tight text-brand-navy sm:text-6xl lg:text-[64px] xl:text-[68px]">
              A Brighter
              <br />
              Start for a
              <br />
              <span className="text-brand-red">Brighter</span>
              <br />
              <span className="text-brand-yellow">Tomorrow</span>
            </h1>

            {/* Curved red brush underline */}
            <svg
              className="mt-2 h-2.5 w-36 text-brand-red sm:w-48"
              viewBox="0 0 180 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M3 5C45 2 135 2 177 5.5"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Subtitle */}
            <p className="mt-5 max-w-sm font-body text-base font-medium text-brand-navy/90 sm:text-lg">
              Nurturing curious minds through play, learning and values.
            </p>

            {/* Action CTA Button */}
            <div className="relative mt-6 flex max-w-sm items-center justify-between">
              <Button to="/about" variant="navy" arrow>
                Explore Our School
              </Button>

              {/* Blue Star aligned with button */}
              <Star className="hidden h-7 w-7 -rotate-6 sm:block sm:h-8 sm:w-8" color="#1d4fd8" />
            </div>
          </div>

          {/* Spacer so grid column respects right half on desktop */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
