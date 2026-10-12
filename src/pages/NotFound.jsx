import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';
import PageHeader from '../components/common/PageHeader.jsx';

export default function NotFound() {
  return (
    <div>
      <PageHeader
        title="Page Not Found"
        subtitle="Oops! The page you are looking for does not exist or has been moved."
      />

      <section className="container-page py-16 text-center">
        <div className="mx-auto max-w-md">
          <div className="font-bubble text-7xl font-bold text-brand-navy">404</div>
          <p className="mt-3 font-body text-slate-600">
            Let's get you back on track to exploring our school.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-6 py-3 font-display text-base font-semibold text-white shadow-md transition-colors hover:bg-brand-navy-dark"
            >
              <HomeIcon size={18} /> Return to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
