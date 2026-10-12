import Button from '../common/Button.jsx';
import { Star, Plane } from '../common/Decor.jsx';
import building from '../../assets/images/school-building.jpg';

export default function Welcome() {
  return (
    <section className="container-page mt-8 grid items-center gap-6 lg:grid-cols-2">
      <div className="relative">
        {/* Top-right Yellow Star */}
        <Star className="absolute right-2 top-0 h-6 w-6 sm:right-4 sm:h-7 sm:w-7" color="#ffd21f" />
        <h2 className="font-display text-3xl font-extrabold text-brand-navy sm:text-4xl">
          Welcome to <span className="text-brand-red">KIDS ZONE</span>
        </h2>
        {/* Dual Red & Yellow accent line under Welcome */}
        <div className="mt-2 flex h-1 w-12 items-center overflow-hidden rounded-full">
          <span className="h-full w-8 bg-brand-red" />
          <span className="h-full w-4 bg-brand-yellow" />
        </div>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-brand-navy sm:text-base">
          At Kids Zone, we provide a happy, safe and stimulating environment for young learners. Our
          focus is on building a strong foundation through quality education, modern teaching methods
          and activity-based learning, so that every child grows into a confident and responsible
          individual.
        </p>
        <div className="mt-6 flex items-center gap-3.5 sm:gap-4">
          <Button to="/about" variant="red" arrow>
            Know More About Us
          </Button>
          {/* Yellow Star positioned before the blue Plane */}
          <Star className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" color="#ffd21f" />
          <Plane className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-card transition-transform duration-300 hover:scale-[1.01]">
        <img
          src={building}
          alt="Welcome to KIDS ZONE - Sidhi Priya House, Saharsa"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
