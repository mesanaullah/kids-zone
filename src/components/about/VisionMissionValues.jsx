import { Rocket, Gem, Check } from 'lucide-react';
import certificateImg from '../../assets/images/About-images/Certificate.png';

/**
 * Custom Target / Bullseye icon matching the reference screenshot:
 * Red concentric circles with a top-right arrow dart.
 */
function TargetIcon({ className = 'h-9 w-9 text-brand-red' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="21" cy="27" r="14" />
      <circle cx="21" cy="27" r="8" />
      <circle cx="21" cy="27" r="3" fill="currentColor" />
      <path d="M34 14l7-7" strokeWidth="3.2" />
      <path d="M41 7h-6v6" strokeWidth="2.8" />
      <path d="M29 19l4-4" strokeWidth="2.8" />
    </svg>
  );
}

/**
 * VisionMissionValues Component for About Us page:
 * - Card 1: Our Vision (soft pink background, target icon, red-yellow underline, vision statement)
 * - Card 2: Our Mission (soft sky-blue background, rocket icon, red-yellow underline, mission statement)
 * - Card 3: Our Values (soft warm-yellow background, gem icon, red-yellow underline, 5 checklist items)
 * - Card 4: Certificate image in a light-blue frame matching the screenshot (comes last on mobile)
 * - Responsive: 1 column on mobile (image last), 2x2 on tablet, 4 columns on desktop
 */
export default function VisionMissionValues() {
  return (
    <section className="container-page relative z-20 pb-8 sm:pb-10 lg:pb-12">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
        
        {/* ========================================================= */}
        {/* CARD 1: Our Vision                                        */}
        {/* ========================================================= */}
        <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-rose-100 bg-[#fff1f2]/75 p-6 sm:p-7 shadow-card transition-all duration-300 hover:shadow-lg">
          <div>
            {/* Header: Target Icon + Title */}
            <div className="flex items-center gap-3.5">
              <div className="shrink-0">
                <TargetIcon className="h-10 w-10 text-brand-red" />
              </div>
              <div>
                <h3 className="font-bubble text-xl sm:text-2xl font-black text-brand-navy">
                  Our Vision
                </h3>
                {/* Two-tone accent bar: red + yellow below 'Our' */}
                <div className="mt-1.5 flex h-1 sm:h-1.5 w-11 overflow-hidden rounded-full" aria-hidden="true">
                  <span className="w-1/2 bg-brand-red" />
                  <span className="w-1/2 bg-brand-yellow" />
                </div>
              </div>
            </div>

            {/* Vision Statement */}
            <p className="mt-5 font-body text-xs sm:text-[13px] md:text-sm font-medium text-slate-700/90 leading-relaxed">
              To be a leading institution in early childhood education, recognized for nurturing curious minds and building a brighter future for every child.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CARD 2: Our Mission                                       */}
        {/* ========================================================= */}
        <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-sky-100 bg-[#f0f9ff]/85 p-6 sm:p-7 shadow-card transition-all duration-300 hover:shadow-lg">
          <div>
            {/* Header: Rocket Icon + Title */}
            <div className="flex items-center gap-3.5">
              <div className="shrink-0 text-brand-blue">
                <Rocket className="h-9 w-9 -rotate-12" strokeWidth={2.4} />
              </div>
              <div>
                <h3 className="font-bubble text-xl sm:text-2xl font-black text-brand-navy">
                  Our Mission
                </h3>
                {/* Two-tone accent bar: red + yellow below 'Our' */}
                <div className="mt-1.5 flex h-1 sm:h-1.5 w-11 overflow-hidden rounded-full" aria-hidden="true">
                  <span className="w-1/2 bg-brand-red" />
                  <span className="w-1/2 bg-brand-yellow" />
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <p className="mt-5 font-body text-xs sm:text-[13px] md:text-sm font-medium text-slate-700/90 leading-relaxed">
              To provide a safe, joyful and stimulating environment through quality education, modern teaching methods and activity-based learning.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CARD 3: Our Values                                        */}
        {/* ========================================================= */}
        <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-amber-100 bg-[#fefce8]/85 p-6 sm:p-7 shadow-card transition-all duration-300 hover:shadow-lg">
          <div>
            {/* Header: Gem Icon + Title */}
            <div className="flex items-center gap-3.5">
              <div className="shrink-0 text-amber-500">
                <Gem className="h-9 w-9" strokeWidth={2.4} />
              </div>
              <div>
                <h3 className="font-bubble text-xl sm:text-2xl font-black text-brand-navy">
                  Our Values
                </h3>
                {/* Two-tone accent bar: red + yellow below 'Our' */}
                <div className="mt-1.5 flex h-1 sm:h-1.5 w-11 overflow-hidden rounded-full" aria-hidden="true">
                  <span className="w-1/2 bg-brand-red" />
                  <span className="w-1/2 bg-brand-yellow" />
                </div>
              </div>
            </div>

            {/* Values Checklist with Golden Circular Checkmarks */}
            <ul className="mt-4 space-y-2">
              {[
                'Child-Centric Approach',
                'Quality Education',
                'Safe & Hygienic Environment',
                'Discipline & Creativity',
                'Respect & Responsibility',
              ].map((val) => (
                <li key={val} className="flex items-center gap-2.5 font-body text-xs sm:text-[13px] font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-white shadow-sm">
                    <Check size={11} strokeWidth={3.5} />
                  </span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CARD 4 / RIGHT: Certificate Image in Light-Blue Frame     */}
        {/* (Comes last on mobile, 4th column on desktop)              */}
        {/* ========================================================= */}
        <div className="h-full min-h-[220px] sm:min-h-[240px] overflow-hidden rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-sky-200/90 bg-white shadow-card transition-all duration-300 hover:shadow-lg">
          <img
            src={certificateImg}
            alt="Kids Zone students holding certificates with teachers"
            className="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
}
