import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import studentLearningImg from '../../assets/images/Academic-images/student-learning.png';
import yellowFancyBorder from '../../assets/images/yellow-fancy-border.png';
import { Star } from '../common/Decor.jsx';

/**
 * Our Curriculum Section
 * Matches reference image design:
 * - Left column:
 *   - "Our Curriculum" title ("Our" in Navy, "Curriculum" in Red)
 *   - Dual red & yellow accent line below the heading
 *   - Child-centric CBSE curriculum narrative paragraph
 *   - "Know More ->" red rounded button
 * - Right column:
 *   - Classroom photo ("student-learning.png") with rounded corners and soft shadow
 *   - "Small Steps Big Achievements" text on "yellow-fancy-border.png" brush banner overlay on top-right
 *   - Yellow outline star at the right edge, slightly below middle
 * - Fully responsive across mobile, tablet, and desktop
 */
export default function OurCurriculum() {
  return (
    <section aria-label="Our Curriculum" className="relative w-full">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
        
        {/* Left Column: Heading, Dual Underline, Description & Know More Button */}
        <div className="flex flex-col items-start justify-center lg:col-span-5">
          {/* Main Title: "Our" (Navy) + "Curriculum" (Red) */}
          <h2 className="font-bubble text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight select-none">
            <span className="text-brand-navy">Our </span>
            <span className="text-brand-red">Curriculum</span>
          </h2>

          {/* Dual Red & Yellow Accent Line */}
          <div
            className="mt-2 sm:mt-2.5 mb-4 sm:mb-5 flex h-1 sm:h-1.5 w-14 sm:w-16 items-center overflow-hidden rounded-full select-none"
            aria-hidden="true"
          >
            <span className="h-full w-1/2 bg-[#f0243c]" />
            <span className="h-full w-1/2 bg-[#ffd21f]" />
          </div>

          {/* Descriptive Paragraph */}
          <p className="font-body text-sm sm:text-[15px] lg:text-base font-medium text-slate-700 leading-relaxed select-none max-w-xl">
            We follow the CBSE curriculum with a child-centric approach that encourages critical thinking, creativity and real-life learning. Our teaching methods are designed to make learning enjoyable and meaningful.
          </p>

          {/* "Know More ->" Red Button */}
          <div className="mt-5 sm:mt-6">
            <Link
              to="/admission"
              className="group inline-flex items-center gap-2.5 rounded-xl sm:rounded-2xl bg-brand-red px-6 py-3 sm:px-7 sm:py-3.5 font-display text-sm sm:text-base font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#d61b32] hover:shadow-md hover:translate-x-0.5 active:scale-95"
            >
              <span>Know More</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Right Column: Student Learning Image with Overlays */}
        <div className="relative lg:col-span-7">
          {/* Main Photo Card */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-md border border-slate-100 bg-slate-50">
            <img
              src={studentLearningImg}
              alt="Students learning and reading in classroom"
              className="h-full w-full object-cover aspect-[16/9] sm:aspect-[16/8.5] lg:aspect-[16/9] select-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Yellow Fancy Border Brush Overlay on Top-Right Corner */}
          <div
            className="pointer-events-none absolute -top-4 sm:-top-6 md:-top-7 -right-3 sm:-right-5 md:-right-6 z-10 w-44 sm:w-52 md:w-60 lg:w-64 -rotate-3 select-none drop-shadow-md"
            aria-hidden="true"
          >
            <div className="relative">
              <img
                src={yellowFancyBorder}
                alt="Decorative yellow brush badge"
                className="h-auto w-full object-contain"
                draggable={false}
              />
              {/* Centered Quote inside Brush Stroke */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                <span className="font-bubble text-xs sm:text-sm md:text-[15px] lg:text-base font-bold text-brand-navy leading-tight drop-shadow-xs">
                  &ldquo;Small Steps
                </span>
                <span className="font-bubble text-xs sm:text-sm md:text-[15px] lg:text-base font-bold text-brand-navy leading-tight drop-shadow-xs">
                  Big Achievements&rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* Yellow Outline Star at right edge, slightly below middle */}
          <div
            className="pointer-events-none absolute bottom-4 sm:bottom-6 md:bottom-8 -right-2 sm:-right-4 md:-right-5 z-10 rotate-12 transition-transform duration-300 hover:scale-110 drop-shadow-sm"
            style={{
              width: 'clamp(20px, 2.6vw, 32px)',
              height: 'clamp(20px, 2.6vw, 32px)',
            }}
            aria-hidden="true"
          >
            <Star className="h-full w-full" color="#ffd21f" strokeWidth={2.4} />
          </div>

        </div>

      </div>
    </section>
  );
}
