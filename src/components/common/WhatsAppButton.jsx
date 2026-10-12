import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Direct WhatsApp chat link with prefilled enquiry greeting
  const whatsappUrl =
    'https://wa.me/918252256336?text=Hello%20Kids%20Zone,%20I%20would%20like%20to%20inquire%20about%20admissions.';

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none pointer-events-auto"
    >
      {/* Tooltip on hover (desktop) */}
      <span
        className={`hidden sm:inline-block rounded-full bg-slate-900/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        Chat on WhatsApp
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kids Zone on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-14 w-14 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_14px_30px_-5px_rgba(37,211,102,0.65)] hover:bg-[#20ba59] active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        {/* Soft breathing pulse effect */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          style={{ animationDuration: '3s' }}
          aria-hidden="true"
        />

        {/* WhatsApp Official SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="relative h-7 w-7 fill-white transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.582.7 5.002 1.922 7.086L2 30l7.158-1.874A13.935 13.935 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.642a11.58 11.58 0 0 1-5.908-1.614l-.424-.252-4.388 1.152 1.172-4.28-.276-.44A11.606 11.606 0 0 1 4.358 16C4.358 9.58 9.58 4.358 16 4.358S27.642 9.58 27.642 16 22.42 27.642 16 27.642zm6.38-8.704c-.35-.176-2.072-1.022-2.394-1.14-.322-.116-.556-.176-.79.176-.234.352-.906 1.14-1.11 1.374-.204.234-.41.264-.76.088-.35-.176-1.478-.544-2.816-1.736-1.04-.928-1.742-2.074-1.946-2.426-.204-.352-.022-.542.154-.716.158-.158.35-.37.526-.556.176-.186.234-.316.352-.526.116-.21.058-.396-.03-.572-.088-.176-.79-1.904-1.082-2.608-.284-.686-.572-.592-.79-.604l-.672-.012c-.234 0-.614.088-.936.438-.322.352-1.228 1.2-1.228 2.928 0 1.728 1.258 3.398 1.434 3.632.176.234 2.476 3.78 6 5.3 3.524 1.52 3.524 1.014 4.162.954.638-.06 2.072-.846 2.364-1.666.292-.82.292-1.522.204-1.668-.088-.146-.322-.234-.672-.41z" />
        </svg>
      </a>
    </aside>
  );
}
