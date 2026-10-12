import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';
import GalleryBanner from '../components/gallery/GalleryBanner.jsx';
import { galleryPages } from '../data/galleryData.js';

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const totalPages = 3;
  const currentImages = galleryPages[currentPage] || galleryPages[1];

  // Navigate next in dialog
  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % currentImages.length);
    }
  }, [selectedIndex, currentImages.length]);

  // Navigate prev in dialog
  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    }
  }, [selectedIndex, currentImages.length]);

  // Close dialog
  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation for dialog box (Esc, Left arrow, Right arrow)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex, handleNext, handlePrev, handleClose]);

  // Fast page switch + scroll to grid
  const handlePageChange = (page) => {
    setCurrentPage(page);
    const gridElem = document.getElementById('gallery-grid');
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full">
      {/* ------------------------------------------------------------- */}
      {/* FULL-WIDTH TOP HERO BANNER (Directly below navbar)            */}
      {/* ------------------------------------------------------------- */}
      <GalleryBanner />

      {/* ------------------------------------------------------------- */}
      {/* 12-IMAGE PHOTO GRID (Matching user reference layout)          */}
      {/* ------------------------------------------------------------- */}
      <section id="gallery-grid" className="container-page py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-7">
          {currentImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-500 ease-out hover:shadow-2xl"
              role="button"
              tabIndex={0}
              aria-label={`View photo ${idx + 1}`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedIndex(idx)}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-all duration-700 ease-out will-change-transform group-hover:scale-110 group-hover:brightness-[1.04]"
                />
                {/* Subtle soft lighting overlay on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PAGINATION: [1] [2] [3] [->] (Fast loading)                  */}
        {/* ------------------------------------------------------------- */}
        <nav aria-label="Gallery pagination" className="mt-10 sm:mt-12 flex items-center justify-center gap-2 sm:gap-3">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-brand-navy hover:bg-slate-50 hover:text-brand-navy sm:h-11 sm:w-11"
            >
              <ArrowLeft size={18} />
            </button>
          )}

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              aria-current={currentPage === page ? 'page' : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-lg font-display text-base font-bold shadow-sm transition-all sm:h-11 sm:w-11 ${
                currentPage === page
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-brand-navy hover:bg-slate-50 hover:text-brand-navy'
              }`}
            >
              {page}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-brand-navy hover:bg-slate-50 hover:text-brand-navy sm:h-11 sm:w-11"
            >
              <ArrowRight size={18} />
            </button>
          )}
        </nav>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CLEAN STANDARD CENTERED DIALOG BOX                           */}
      {/* ------------------------------------------------------------- */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm transition-all duration-300 sm:p-6"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Photo Preview Dialog"
        >
          {/* Centered Dialog Box Window */}
          <div
            className="relative flex w-full max-w-xl md:max-w-2xl lg:max-w-3xl flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-2 sm:p-2.5 shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (top-right) */}
            <button
              onClick={handleClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-md backdrop-blur-sm transition-all hover:bg-brand-navy hover:text-white hover:scale-105"
            >
              <X size={20} />
            </button>

            {/* Photo Frame with Next & Prev Navigation */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950 flex items-center justify-center">
              <img
                src={currentImages[selectedIndex].src}
                alt="Kids Zone Gallery Photo"
                className="h-full w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-md backdrop-blur-sm transition-all hover:bg-brand-navy hover:text-white hover:scale-105"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-md backdrop-blur-sm transition-all hover:bg-brand-navy hover:text-white hover:scale-105"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
