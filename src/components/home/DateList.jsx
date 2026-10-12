import { Link } from 'react-router-dom';

const tones = {
  pink: { row: 'bg-[#fdeaea]', badge: 'bg-[#f8b4b4] text-[#c0152b]' },
  blue: { row: 'bg-[#e3eefc]', badge: 'bg-[#a9c8f5] text-[#0b2a7a]' },
  orange: { row: 'bg-[#fdf0dc]', badge: 'bg-[#f9c98a] text-[#b45309]' },
  purple: { row: 'bg-[#eee6fb]', badge: 'bg-[#cdb8f3] text-[#5b21b6]' },
};

// Clean brackets from titles and subtitles so UI stays clean and premium
const cleanTitle = (text) => (text ? text.replace(/\s*\([^)]*\)/g, '').trim() : '');
const cleanSub = (text) => (text ? text.replace(/[()]/g, '').trim() : '');

export default function DateList({ title, items }) {
  return (
    <div className="card p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <h3 className="section-title !text-lg font-bold text-brand-navy">{title}</h3>
      </div>
      <span className="mb-3.5 mt-1 block h-1 w-8 rounded-full bg-brand-red" />
      <ul className="space-y-2.5">
        {items.map((it) => {
          const content = (
            <div
              className={`flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 ${tones[it.tone || 'blue'].row
                }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg font-display leading-none shadow-sm ${tones[it.tone || 'blue'].badge
                  }`}
              >
                <span className="text-sm font-black">{it.day}</span>
                <span className="text-[10px] font-bold uppercase tracking-tight">{it.month}</span>
              </span>
              <div className="min-w-0 flex-1 pt-0.5">
                <span className="block font-bold text-xs sm:text-[13px] leading-snug text-brand-navy">
                  {cleanTitle(it.title)}
                </span>
                {it.sub && (
                  <span className="mt-0.5 block font-body text-[11px] leading-relaxed text-slate-600 font-medium">
                    {cleanSub(it.sub)}
                  </span>
                )}
              </div>
            </div>
          );

          if (it.to) {
            return (
              <li key={it.id || it.title}>
                {it.to.startsWith('http') ? (
                  <a
                    href={it.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:-translate-y-0.5"
                  >
                    {content}
                  </a>
                ) : (
                  <Link to={it.to} className="block transition-transform hover:-translate-y-0.5">
                    {content}
                  </Link>
                )}
              </li>
            );
          }

          return <li key={it.id || it.title}>{content}</li>;
        })}
      </ul>
    </div>
  );
}
