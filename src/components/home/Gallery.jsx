import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gallery } from '../../data/siteData.js';

export default function Gallery() {
  return (
    <section className="container-page mt-8">
      <div className="flex items-center justify-between">
        <h2 className="section-title flex items-center gap-3">
          Glimpses of Our School
          <span className="hidden h-0.5 w-8 bg-brand-red sm:block" />
        </h2>
        <Link to="/gallery" className="flex items-center gap-1 text-sm font-semibold text-brand-blue">
          View Gallery <ArrowRight size={16} />
        </Link>
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {gallery.map((g, idx) => (
          <li key={idx}>
            <Link
              to="/gallery"
              className="group block overflow-hidden rounded-xl bg-slate-100 shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl"
              title={g.label}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
