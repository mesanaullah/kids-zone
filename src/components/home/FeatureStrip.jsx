import Icon from '../common/Icon.jsx';
import { features } from '../../data/siteData.js';

export default function FeatureStrip() {
  return (
    <section className="container-page relative z-10 -mt-2 lg:-mt-4">
      <ul className="grid grid-cols-2 gap-y-4 rounded-2xl bg-white p-4 shadow-card sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0 lg:p-5">
        {features.map((f, i) => (
          <li
            key={f.label}
            className={`flex flex-col items-center gap-2 px-2 text-center ${
              i !== 0 ? 'lg:border-l lg:border-slate-200' : ''
            }`}
          >
            {f.filled ? (
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: f.color }}
              >
                <Icon name={f.icon} size={24} />
              </span>
            ) : (
              <span className="flex h-12 w-12 items-center justify-center" style={{ color: f.color }}>
                <Icon name={f.icon} size={38} strokeWidth={1.8} />
              </span>
            )}
            <span className="whitespace-pre-line font-display text-[13px] font-semibold leading-tight text-brand-navy sm:text-sm">
              {f.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
