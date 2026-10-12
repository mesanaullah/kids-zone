import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Sun } from '../common/Decor.jsx';
import mikeIcon from '../../assets/images/mike-icon.png';
import yellowBorder from '../../assets/images/yellow-fancy-border.png';

export default function AdmissionBanner() {
  return (
    <section className="container-page mt-6">
      <div className="relative flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl bg-brand-navy px-4 py-2.5 shadow-card sm:px-6 sm:py-3 lg:flex-row lg:px-8">
        {/* Left: Mike + Heading with Fancy Bubbly Font */}
        <div className="flex items-center gap-3 shrink-0 sm:gap-3.5">
          <img
            src={mikeIcon}
            alt="Megaphone"
            decoding="async"
            className="h-12 w-12 shrink-0 object-contain drop-shadow-sm sm:h-14 sm:w-14 lg:h-16 lg:w-16"
          />
          <div className="select-none font-bubble leading-none">
            <div className="text-[30px] font-black tracking-wide text-white sm:text-[38px] lg:text-[42px] drop-shadow-sm">
              ADMISSION
            </div>
            <div className="mt-0.5 text-[20px] font-black tracking-normal text-brand-yellow sm:text-[26px] lg:text-[30px] drop-shadow-sm">
              IS GOING ON...
            </div>
          </div>
        </div>

        {/* Center: Yellow Fancy Border with classes */}
        <div className="relative flex w-full max-w-[330px] items-center justify-center px-5 py-3 text-center sm:max-w-[370px] sm:px-6">
          <img
            src={yellowBorder}
            alt=""
            aria-hidden="true"
            decoding="async"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-fill"
          />
          <div className="relative z-10 flex flex-col items-center justify-center font-display text-brand-navy py-1">
            <div className="text-[14px] font-bold leading-tight tracking-tight text-brand-navy sm:text-[16px]">
              Play Group <span className="mx-0.5 font-black text-brand-red">|</span> Nursery
            </div>
            <div className="text-lg font-black leading-tight text-brand-navy sm:text-2xl">
              1 to 8
            </div>
            <div className="text-[11px] font-bold leading-tight text-brand-navy sm:text-[13px]">
              (Based on CBSE Curriculum)
            </div>
          </div>
        </div>

        {/* Right: Enquiry Now button (with 4px top margin and shifted left) */}
        <div className="z-10 mt-[4px] flex shrink-0 items-center sm:mr-3 lg:mr-6">
          <Link
            to="/admission"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-2.5 font-display text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-red-600 hover:shadow-lg active:scale-95 sm:px-6 sm:py-3 sm:text-base"
          >
            Enquiry Now
            <ArrowRight size={18} strokeWidth={2.4} />
          </Link>
        </div>

        {/* Decorative Sun icon in the top right corner */}
        <Sun className="pointer-events-none absolute right-2 top-1.5 h-11 w-11 opacity-95 sm:right-3 sm:top-2 sm:h-12 sm:w-12" />
      </div>
    </section>
  );
}
