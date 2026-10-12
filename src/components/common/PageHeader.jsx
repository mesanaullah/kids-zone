import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import { Star, Sun } from './Decor.jsx';

export default function PageHeader({ title, subtitle, breadcrumbTitle }) {
  const currentTitle = breadcrumbTitle || title;

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-navy via-[#0c318d] to-brand-navy-dark py-10 text-white sm:py-14">
      {/* Decorative playful elements matching Kids Zone theme */}
      <div className="pointer-events-none absolute -right-6 -top-6 opacity-20 sm:opacity-30">
        <Sun className="h-32 w-32" />
      </div>
      <div className="pointer-events-none absolute bottom-3 right-1/4 hidden opacity-30 sm:block">
        <Star className="h-8 w-8 rotate-12" color="#ffd21f" />
      </div>
      <div className="pointer-events-none absolute left-8 top-4 hidden opacity-20 sm:block">
        <Star className="h-6 w-6 -rotate-12" color="#ffd21f" />
      </div>

      <div className="container-page relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumbs" className="mb-3 flex items-center gap-2 text-xs font-medium text-white/80 sm:text-sm">
          <Link
            to="/"
            className="flex items-center gap-1.5 transition-colors hover:text-brand-yellow"
          >
            <HomeIcon size={14} className="text-brand-yellow" />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="text-white/40" />
          <span className="font-semibold text-brand-yellow">{currentTitle}</span>
        </nav>

        {/* Page Title */}
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {/* Playful curved accent underline */}
        <svg
          className="mt-2 h-2.5 w-28 text-brand-yellow sm:w-36"
          viewBox="0 0 140 8"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M2 5C35 2 105 2 138 5.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-3 max-w-2xl font-body text-sm font-medium text-white/90 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom wave transition */}
      <svg
        className="absolute -bottom-1 left-0 h-4 w-full text-white"
        viewBox="0 0 1200 16"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 C300,16 600,0 900,14 C1050,21 1150,8 1200,0 L1200,16 L0,16 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
