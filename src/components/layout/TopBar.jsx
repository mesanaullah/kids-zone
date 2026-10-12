import { Link } from 'react-router-dom';
import { Info, MapPin, Mail, Facebook } from 'lucide-react';
import { school } from '../../data/siteData.js';

export default function TopBar() {
  // Dynamically calculate academic session (e.g., 2026 -> "2026-27", 2027 -> "2027-28")
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // 0-indexed (0 = Jan)
  // New session typically starts in March/April, so Jan/Feb can refer to ongoing or upcoming
  const startYear = currentMonth < 2 ? currentYear : currentYear;
  const nextYearShort = String(startYear + 1).slice(-2);
  const sessionText = `${startYear}-${nextYearShort}`;

  // Reusable Ticker Content Block (Rendered twice for seamless gapless loop)
  const TickerBlock = () => (
    <div className="flex items-center gap-4 sm:gap-6 shrink-0 pr-4 sm:pr-6 text-[11px] sm:text-xs font-medium text-[#0b2a7a]">
      {/* 1. Built by Earthix */}
      <div className="inline-flex items-center gap-1.5">
        <Info size={13} className="text-[#1d6fe0] shrink-0" aria-hidden="true" />
        <a
          href={school.developerUrl || 'https://earthix.in/'}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-colors"
          title="Designed & Developed by Earthix"
        >
          <span className="text-[#b91c1c] font-semibold">Built by</span>{' '}
          <span className="font-bold text-[#b91c1c]">{school.developer || 'Earthix'}</span>
        </a>
      </div>

      <span className="text-amber-500 font-black select-none" aria-hidden="true">•</span>

      {/* 2. Contact */}
      <div className="inline-flex items-center gap-1.5">
        <Info size={13} className="text-[#1d6fe0] shrink-0" aria-hidden="true" />
        <Link
          to="/contact"
          className="font-semibold text-[#0b2a7a] hover:text-[#1d6fe0] transition-colors"
        >
          Contact
        </Link>
      </div>

      <span className="text-amber-500 font-black select-none" aria-hidden="true">•</span>

      {/* 3. Admission Open - Dynamic Session */}
      <div className="inline-flex items-center gap-1.5">
        <Info size={13} className="text-[#1d6fe0] shrink-0" aria-hidden="true" />
        <Link
          to="/admission"
          className="font-semibold text-[#0b2a7a] hover:text-[#f0243c] transition-colors"
        >
          Admission Open - Session {sessionText}
        </Link>
      </div>

      <span className="text-amber-500 font-black select-none" aria-hidden="true">•</span>

      {/* 4. Location / Map */}
      <div className="inline-flex items-center gap-1.5">
        <MapPin size={13} className="text-[#1d6fe0] shrink-0" aria-hidden="true" />
        <a
          href={school.mapUrl || 'https://maps.app.goo.gl/gVfoRg5a4a8LQuwW9?g_st=ic'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0b2a7a] hover:text-[#1d6fe0] transition-colors"
          title="Find Kids Zone on Google Maps"
        >
          Sidhi Priya House, Krishna Nagar, Saharsa, Bihar 852201
        </a>
      </div>

      <span className="text-amber-500 font-black select-none" aria-hidden="true">•</span>

      {/* 5. Real Email */}
      <div className="inline-flex items-center gap-1.5">
        <Mail size={13} className="text-[#1d6fe0] shrink-0" aria-hidden="true" />
        <a
          href={`mailto:${school.email || 'Info@kidszonesaharsa.in'}`}
          className="text-[#0b2a7a] hover:text-[#1d6fe0] transition-colors"
        >
          {school.email || 'Info@kidszonesaharsa.in'}
        </a>
      </div>

      <span className="text-amber-500 font-black select-none" aria-hidden="true">•</span>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-[#ebf5fe] border-b border-[#cfe2fe] py-2 select-none">
      <div className="flex items-center justify-between w-full">
        
        {/* Infinite Seamless Ticker Track (Moves right to left smoothly, loops forever without pause) */}
        <div className="overflow-hidden flex-1 relative flex items-center">
          <div className="animate-marquee whitespace-nowrap cursor-default">
            {/* Track 1 */}
            <TickerBlock />
            {/* Track 2: Identical twin guarantees 100% gapless continuous infinite loop */}
            <TickerBlock />
          </div>
        </div>

        {/* Fixed Right-Side Facebook Button with Premium Frosted Gradient Dock */}
        <div className="relative z-20 shrink-0 flex items-center pr-3 sm:pr-4 pl-3 sm:pl-4 bg-gradient-to-l from-[#ebf5fe] via-[#ebf5fe] to-transparent">
          <a
            href={school.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Kids Zone on Facebook"
            className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-sm transition-all duration-200 hover:scale-110 hover:bg-[#166fe5] hover:shadow-md active:scale-95 cursor-pointer"
            title="Follow Kids Zone on Facebook"
          >
            <Facebook size={13} fill="white" className="text-white" />
          </a>
        </div>

      </div>
    </div>
  );
}
