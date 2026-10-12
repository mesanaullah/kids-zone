import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { school } from '../../data/siteData.js';

/**
 * School logo + wordmark.
 * variant="light" -> dark text (header). variant="dark" -> white text (footer).
 */
export default function Logo({ variant = 'light' }) {
  const isDark = variant === 'dark';
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Kids Zone home">
      <img
        src={logo}
        alt="Kids Zone Saharsa logo"
        decoding="async"
        fetchPriority="high"
        loading="eager"
        width={88}
        height={88}
        className={`rounded-full object-cover ${isDark ? 'h-14 w-14 sm:h-16 sm:w-16' : 'h-14 w-14 sm:h-[88px] sm:w-[88px]'}`}
      />
      <div className="leading-none">
        <div
          className={`font-display text-[26px] font-extrabold tracking-wide sm:text-[40px] ${
            isDark ? 'text-white' : 'text-brand-navy'
          }`}
        >
          {school.name}
        </div>
        <div className="mt-1 inline-block rounded-full bg-brand-yellow px-2.5 py-0.5 font-display text-[10px] font-bold text-brand-navy sm:px-4 sm:text-[15px]">
          Play Group <span className="mx-1 text-brand-red">|</span> Nursery{' '}
          <span className="mx-1 text-brand-red">|</span> 1 to 8
        </div>
        <div
          className={`mt-1 text-center font-display text-[10px] font-semibold sm:text-sm ${
            isDark ? 'text-white/90' : 'text-brand-navy'
          }`}
        >
          {school.board}
        </div>
      </div>
    </Link>
  );
}
