import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { GraduationCap, UserRound, Menu, X } from 'lucide-react';
import Logo from '../common/Logo.jsx';
import Icon from '../common/Icon.jsx';
import logoImg from '../../assets/images/logo.png';
import { navLinks, school } from '../../data/siteData.js';

const linkClass = ({ isActive }) =>
  `flex items-center gap-2 rounded-xl px-3.5 py-2 font-display text-[15px] font-semibold transition-all duration-200 select-none ${
    isActive
      ? 'bg-brand-yellow text-brand-navy font-bold shadow-sm scale-[1.02]'
      : 'text-brand-navy hover:bg-brand-yellow/35 hover:scale-[1.01]'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Monitor scroll position to apply sleek elevation and compact styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ============================================================= */}
      {/* 1. DESKTOP BRAND & LOGIN BAR (Scrolls naturally at the top)    */}
      {/* ============================================================= */}
      <div className="hidden bg-white lg:block border-b border-slate-50">
        <div className="container-page flex items-center justify-between gap-4 py-3">
          <Logo />

          {/* Login buttons (desktop) */}
          <div className="flex items-center gap-3">
            <a
              href={school.studentLoginUrl || 'https://earthix.in/portal/login'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-brand-navy px-5 py-2.5 font-display text-[15px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-brand-navy-dark hover:shadow hover:-translate-y-0.5"
            >
              <GraduationCap size={19} /> Student Login
            </a>
            <a
              href={school.staffLoginUrl || 'https://earthix.in/staff-portal/login'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-brand-red px-5 py-2.5 font-display text-[15px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-red-600 hover:shadow hover:-translate-y-0.5"
            >
              <UserRound size={19} /> Staff Login
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 2. DESKTOP STICKY NAVBAR (Sticks at top-0 smoothly on scroll)  */}
      {/* ============================================================= */}
      <div
        className={`sticky top-0 z-50 hidden lg:block transition-all duration-300 ease-in-out border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-slate-100/90 py-2'
            : 'bg-transparent border-transparent py-2.5'
        }`}
      >
        <div className="container-page">
          <nav
            className={`flex items-center transition-all duration-300 ease-in-out border ${
              scrolled
                ? 'justify-between px-1 py-1 rounded-none bg-transparent shadow-none border-transparent'
                : 'justify-between rounded-2xl bg-white px-3.5 py-1.5 shadow-card border-slate-100/80'
            }`}
          >
            {/* Scrolled Compact Brand Logo & Title with smooth slide-in */}
            <div
              className={`flex items-center shrink-0 overflow-hidden transition-all duration-300 ease-in-out ${
                scrolled
                  ? 'max-w-[200px] opacity-100 mr-4'
                  : 'max-w-0 opacity-0 mr-0 pointer-events-none'
              }`}
            >
              <Link
                to="/"
                className="flex items-center gap-2.5 shrink-0 group transition-transform duration-200 hover:scale-[1.02]"
                aria-label="Kids Zone Home"
                tabIndex={scrolled ? 0 : -1}
              >
                <img
                  src={logoImg}
                  alt="Kids Zone"
                  decoding="async"
                  loading="eager"
                  fetchPriority="high"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover shadow-sm ring-2 ring-brand-yellow/60"
                />
                <span className="font-display font-extrabold text-brand-navy text-lg tracking-wide whitespace-nowrap">
                  KIDS ZONE
                </span>
              </Link>
            </div>

            {/* Navigation Links: Home, About Us, Academics, Admission, Gallery, Contact Us */}
            <div
              className={`flex items-center gap-1 sm:gap-1.5 transition-all duration-300 ease-in-out ${
                scrolled ? 'justify-center flex-1' : 'justify-between w-full'
              }`}
            >
              {navLinks.map((l) => (
                <NavLink key={l.to} to={l.to} end className={linkClass}>
                  <Icon name={l.icon} size={18} />
                  <span>{l.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Scrolled Quick Login Buttons with smooth slide-in */}
            <div
              className={`flex items-center shrink-0 overflow-hidden transition-all duration-300 ease-in-out ${
                scrolled
                  ? 'max-w-[240px] opacity-100 ml-4'
                  : 'max-w-0 opacity-0 ml-0 pointer-events-none'
              }`}
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <a
                  href={school.studentLoginUrl || 'https://earthix.in/portal/login'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-brand-navy px-3.5 py-1.5 font-display text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-navy-dark hover:scale-[1.02]"
                  title="Student Login Portal"
                  tabIndex={scrolled ? 0 : -1}
                >
                  <GraduationCap size={15} /> Student
                </a>
                <a
                  href={school.staffLoginUrl || 'https://earthix.in/staff-portal/login'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-brand-red px-3.5 py-1.5 font-display text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-red-600 hover:scale-[1.02]"
                  title="Staff Login Portal"
                  tabIndex={scrolled ? 0 : -1}
                >
                  <UserRound size={15} /> Staff
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 3. MOBILE & TABLET STICKY HEADER (Sticks at top-0 with menu)   */}
      {/* ============================================================= */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md lg:hidden transition-all duration-300 ${
          scrolled || open
            ? 'shadow-md border-b border-slate-100'
            : 'shadow-sm border-b border-slate-50'
        }`}
      >
        <div className="container-page flex items-center justify-between gap-4 py-2.5">
          <Logo />

          {/* Hamburger toggle button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-white shadow-sm transition-colors hover:bg-brand-navy-dark active:scale-95"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {open && (
          <div className="container-page pb-4 pt-1 animate-fadeIn">
            <nav className="flex flex-col gap-1.5 rounded-2xl bg-white p-3 shadow-card border border-slate-100">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  <Icon name={l.icon} size={19} />
                  <span>{l.label}</span>
                </NavLink>
              ))}

              {/* Mobile Student & Staff Login buttons */}
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                <a
                  href={school.studentLoginUrl || 'https://earthix.in/portal/login'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-navy px-3 py-2.5 font-display text-xs font-bold text-white shadow-sm transition-colors hover:bg-brand-navy-dark"
                  onClick={() => setOpen(false)}
                >
                  <GraduationCap size={16} /> Student Login
                </a>
                <a
                  href={school.staffLoginUrl || 'https://earthix.in/staff-portal/login'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-red px-3 py-2.5 font-display text-xs font-bold text-white shadow-sm transition-colors hover:bg-red-600"
                  onClick={() => setOpen(false)}
                >
                  <UserRound size={16} /> Staff Login
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
