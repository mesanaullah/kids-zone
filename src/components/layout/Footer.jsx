import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../common/Logo.jsx';
import { quickLinks, school } from '../../data/siteData.js';

export default function Footer() {
  return (
    <footer className="relative mt-10 bg-brand-navy text-white">
      {/* wavy top edge */}
      <svg
        className="absolute -top-5 left-0 h-6 w-full text-brand-navy"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 24V12C150 0 300 0 450 10s300 14 450 4 220-10 300-2v12z" fill="currentColor" />
      </svg>

      <div className="container-page grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.1fr]">
        <Logo variant="dark" />

        <div>
          <h4 className="mb-3 font-display text-lg font-bold">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="flex items-center gap-1.5 text-white/90 hover:text-brand-yellow">
                  <ChevronRight size={14} className="text-brand-yellow" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-lg font-bold text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            {/* Phone numbers in a single line */}
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-yellow" />
              <div className="flex flex-wrap items-center gap-x-2 text-sm text-white/95">
                <a
                  href={`tel:${school.phones[0].replace(/\s/g, '')}`}
                  className="font-medium hover:text-brand-yellow transition-colors tracking-wide"
                >
                  {school.phones[0]}
                </a>
                <span className="text-white/40 select-none" aria-hidden="true">/</span>
                <a
                  href={`tel:${school.phones[1].replace(/\s/g, '')}`}
                  className="font-medium hover:text-brand-yellow transition-colors tracking-wide"
                >
                  {school.phones[1]}
                </a>
              </div>
            </li>

            {/* Real updated email */}
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-yellow" />
              <a
                href={`mailto:${school.email || 'Info@kidszonesaharsa.in'}`}
                className="text-white/90 hover:text-brand-yellow transition-colors break-all"
              >
                {school.email || 'Info@kidszonesaharsa.in'}
              </a>
            </li>

            {/* Accurate Google Maps location */}
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-yellow" />
              <a
                href={school.mapUrl || 'https://maps.app.goo.gl/gVfoRg5a4a8LQuwW9?g_st=ic'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-brand-yellow transition-colors leading-relaxed"
                title="Find Kids Zone on Google Maps"
              >
                {school.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col items-center justify-between gap-1 py-3 text-[11px] text-white/85 sm:flex-row sm:text-xs">
          <p>© {school.year} Kids Zone, Saharsa. All Rights Reserved.</p>
          <p>
            Designed &amp; Developed by{' '}
            <a
              href={school.developerUrl || 'https://earthix.in/'}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition-colors hover:text-brand-yellow"
            >
              {school.developer || 'Earthix'}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
