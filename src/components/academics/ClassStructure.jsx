import playGroupImg from '../../assets/images/Academic-images/play-group.jpg';
import nurseryImg from '../../assets/images/Academic-images/nursery.jpg';
import lkgImg from '../../assets/images/Academic-images/lkg.jpg';
import ukgImg from '../../assets/images/Academic-images/ukg.jpg';
import class1to5Img from '../../assets/images/Academic-images/class-1-to-5.jpg';

/**
 * Class Structure Section
 * Matches reference image design:
 * - Title: "Class Structure" in Navy
 * - Subtitle: "We offer academic programs for the following levels:"
 * - 5 rounded cards with colored header banners and authentic student photos
 *   stored in src/assets/images/Academic-images/
 * - Responsive: 1-2 cols on mobile, 3 on tablet, 5 on desktop
 */
export default function ClassStructure() {
  const classes = [
    {
      id: 'play-group',
      title: 'Play Group',
      textColor: 'text-[#e51a34]',
      headerBg: 'bg-[#fee2e2]',
      borderColor: 'border-rose-200',
      image: playGroupImg,
      alt: 'Play Group child engaged with educational ring tower',
    },
    {
      id: 'nursery',
      title: 'Nursery',
      textColor: 'text-[#dc2626]',
      headerBg: 'bg-[#fef3c7]',
      borderColor: 'border-amber-200',
      image: nurseryImg,
      alt: 'Nursery student practicing writing with pencil',
    },
    {
      id: 'lkg',
      title: 'LKG',
      textColor: 'text-[#0284c7]',
      headerBg: 'bg-[#e0f2fe]',
      borderColor: 'border-sky-200',
      image: lkgImg,
      alt: 'LKG learner developing fine motor skills with building blocks',
    },
    {
      id: 'ukg',
      title: 'UKG',
      textColor: 'text-[#16a34a]',
      headerBg: 'bg-[#dcfce7]',
      borderColor: 'border-emerald-200',
      image: ukgImg,
      alt: 'UKG student writing diligently in notebook',
    },
    {
      id: 'class-1-5',
      title: 'Class 1 to 5',
      textColor: 'text-[#1e3a8a]',
      headerBg: 'bg-[#f3e8ff]',
      borderColor: 'border-purple-200',
      image: class1to5Img,
      alt: 'Primary student reading educational textbook',
    },
  ];

  return (
    <section className="relative w-full">
      {/* Title & Subtitle */}
      <div>
        <h2 className="font-bubble text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight leading-tight select-none">
          <span className="text-brand-navy">Class </span>
          <span className="text-brand-red">Structure</span>
        </h2>
        {/* Dual Red & Yellow Accent Line */}
        <div
          className="mt-1.5 sm:mt-2 mb-2 sm:mb-2.5 flex h-1 sm:h-1.5 w-14 sm:w-16 items-center overflow-hidden rounded-full select-none"
          aria-hidden="true"
        >
          <span className="h-full w-1/2 bg-[#f0243c]" />
          <span className="h-full w-1/2 bg-[#ffd21f]" />
        </div>
        <p className="mt-1 mb-5 sm:mb-6 font-body text-sm font-medium text-slate-600 sm:text-base">
          We offer academic programs for the following levels:
        </p>
      </div>

      {/* Grid of 5 Class Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-5">
        {classes.map((item) => (
          <div
            key={item.id}
            className={`group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border ${item.borderColor} bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg`}
          >
            {/* Top Colored Header Pill */}
            <div className={`py-2.5 sm:py-3 px-3 text-center ${item.headerBg}`}>
              <h3 className={`font-display text-base sm:text-[17px] font-bold ${item.textColor}`}>
                {item.title}
              </h3>
            </div>

            {/* Photo Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
