// Small decorative doodles (sun, star, paper plane) used around hero/welcome sections.

export function Sun({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="#ffd21f" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="24" cy="24" r="8" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line key={a} x1="24" y1="6" x2="24" y2="11" transform={`rotate(${a} 24 24)`} />
      ))}
    </svg>
  );
}

export function Star({ className = '', color = '#ffd21f', strokeWidth = 2.4 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.5 6 20.9l1.3-6.7-5-4.7 6.8-.8L12 2.5z" />
    </svg>
  );
}

export function Plane({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="#1d4fd8" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path d="M44 4L4 20l14 5 5 14 21-35z" />
      <path d="M18 25L44 4" />
    </svg>
  );
}
