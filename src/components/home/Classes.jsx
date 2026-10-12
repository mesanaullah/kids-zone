import { classes } from '../../data/siteData.js';

const emoji = { Bear: '🧸', Blocks: '🔠', ABC: '🔤', Pencil: '✏️' };

export default function Classes() {
  return (
    <div className="card flex flex-col justify-between p-4 sm:p-5">
      <div>
        <h3 className="section-title">Our Classes</h3>
        <span className="mb-4 mt-1 block h-1 w-10 rounded-full bg-brand-red" />
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-2.5 lg:gap-2 xl:gap-3">
        {classes.map((c) => (
          <div
            key={c.label}
            className={`flex flex-col items-center justify-center rounded-2xl px-1 py-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm sm:px-2 sm:py-5 ${c.bg}`}
          >
            <div className="flex h-11 w-11 items-center justify-center text-3xl sm:h-12 sm:w-12 sm:text-4xl" aria-hidden="true">
              {emoji[c.icon]}
            </div>
            <div
              className={`mt-2 whitespace-nowrap font-display text-[12px] font-bold tracking-tight sm:text-[13px] xl:text-[14px] ${c.text}`}
            >
              {c.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
