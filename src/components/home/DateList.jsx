import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const tones = {
  pink: { row: 'bg-[#fdeaea]', badge: 'bg-[#f8b4b4] text-[#c0152b]' },
  blue: { row: 'bg-[#e3eefc]', badge: 'bg-[#a9c8f5] text-[#0b2a7a]' },
  orange: { row: 'bg-[#fdf0dc]', badge: 'bg-[#f9c98a] text-[#b45309]' },
  purple: { row: 'bg-[#eee6fb]', badge: 'bg-[#cdb8f3] text-[#5b21b6]' },
};

/** Reusable card: Upcoming Events and Holiday Calendar share this layout. */
export default function DateList({ title, items, to = '#' }) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <h3 className="section-title !text-lg">{title}</h3>
        <Link to={to} className="flex items-center gap-1 text-xs font-semibold text-brand-blue">
          View All <ArrowRight size={14} />
        </Link>
      </div>
      <span className="mb-3 mt-1 block h-1 w-8 rounded-full bg-brand-red" />
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.title} className={`flex items-center gap-3 rounded-lg px-2 py-1.5 ${tones[it.tone].row}`}>
            <span className={`flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-md font-display leading-none ${tones[it.tone].badge}`}>
              <span className="text-sm font-extrabold">{it.day}</span>
              <span className="text-[10px] font-semibold">{it.month}</span>
            </span>
            <span className="text-xs leading-tight text-brand-navy sm:text-[13px]">
              {it.title}
              {it.sub && <span className="block">{it.sub}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
