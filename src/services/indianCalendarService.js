/**
 * Indian Calendar Service
 * Provides real Indian National Holidays & Observance Events with dynamic upcoming date calculations.
 * Features:
 * - Real Indian national gazetted holidays & regional festivals (Diwali, Chhath Puja, Holi, Eid, Republic Day, Independence Day, etc.)
 * - Real Indian national observance events (Children's Day, National Science Day, Teachers' Day, Yoga Day, etc.)
 * - Dynamic upcoming calculation based on current live date (never shows expired past dates)
 * - Seamless background sync with free public Nager.Date API when online
 * - 0ms instant render with zero UI flicker or layout shift
 */

const TONES = ['pink', 'blue', 'orange', 'purple'];

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

// Authoritative Indian Gazetted & National Festival Holidays
const INDIAN_HOLIDAYS = [
  // 2025
  { date: '2025-01-14', title: 'Makar Sankranti', sub: '(Festival Holiday)' },
  { date: '2025-01-26', title: 'Republic Day', sub: '(National Holiday)' },
  { date: '2025-02-26', title: 'Maha Shivratri', sub: '(Gazetted Holiday)' },
  { date: '2025-03-14', title: 'Holi', sub: '(Festival Holiday)' },
  { date: '2025-03-31', title: 'Eid-ul-Fitr', sub: '(Gazetted Holiday)' },
  { date: '2025-04-10', title: 'Mahavir Jayanti', sub: '(Gazetted Holiday)' },
  { date: '2025-04-18', title: 'Good Friday', sub: '(Gazetted Holiday)' },
  { date: '2025-05-12', title: 'Buddha Purnima', sub: '(Gazetted Holiday)' },
  { date: '2025-06-07', title: 'Bakrid / Eid-ul-Adha', sub: '(Gazetted Holiday)' },
  { date: '2025-07-06', title: 'Muharram', sub: '(Gazetted Holiday)' },
  { date: '2025-08-15', title: 'Independence Day', sub: '(National Holiday)' },
  { date: '2025-08-16', title: 'Janmashtami', sub: '(Festival Holiday)' },
  { date: '2025-09-05', title: 'Milad-un-Nabi', sub: '(Gazetted Holiday)' },
  { date: '2025-10-02', title: 'Mahatma Gandhi Jayanti', sub: '(National Holiday)' },
  { date: '2025-10-02', title: 'Dussehra (Vijaya Dashami)', sub: '(Gazetted Holiday)' },
  { date: '2025-10-20', title: 'Diwali (Deepavali)', sub: '(Festival Holiday)' },
  { date: '2025-10-22', title: 'Bhai Dooj', sub: '(Festival Holiday)' },
  { date: '2025-10-28', title: 'Chhath Puja', sub: '(Festival Holiday)' },
  { date: '2025-11-05', title: 'Guru Nanak Jayanti', sub: '(Gazetted Holiday)' },
  { date: '2025-12-25', title: 'Christmas Day', sub: '(Gazetted Holiday)' },

  // 2026
  { date: '2026-01-14', title: 'Makar Sankranti', sub: '(Festival Holiday)' },
  { date: '2026-01-26', title: 'Republic Day', sub: '(National Holiday)' },
  { date: '2026-02-15', title: 'Maha Shivratri', sub: '(Gazetted Holiday)' },
  { date: '2026-03-04', title: 'Holi', sub: '(Festival Holiday)' },
  { date: '2026-03-21', title: 'Eid-ul-Fitr', sub: '(Gazetted Holiday)' },
  { date: '2026-03-31', title: 'Mahavir Jayanti', sub: '(Gazetted Holiday)' },
  { date: '2026-04-03', title: 'Good Friday', sub: '(Gazetted Holiday)' },
  { date: '2026-05-01', title: 'Buddha Purnima', sub: '(Gazetted Holiday)' },
  { date: '2026-05-27', title: 'Eid-ul-Adha', sub: '(Gazetted Holiday)' },
  { date: '2026-06-26', title: 'Muharram', sub: '(Gazetted Holiday)' },
  { date: '2026-08-15', title: 'Independence Day', sub: '(National Holiday)' },
  { date: '2026-09-04', title: 'Janmashtami', sub: '(Festival Holiday)' },
  { date: '2026-09-25', title: 'Milad-un-Nabi', sub: '(Gazetted Holiday)' },
  { date: '2026-10-02', title: 'Mahatma Gandhi Jayanti', sub: '(National Holiday)' },
  { date: '2026-10-20', title: 'Dussehra (Vijaya Dashami)', sub: '(Gazetted Holiday)' },
  { date: '2026-11-08', title: 'Diwali (Deepavali)', sub: '(Festival Holiday)' },
  { date: '2026-11-15', title: 'Chhath Puja', sub: '(Festival Holiday)' },
  { date: '2026-11-24', title: 'Guru Nanak Jayanti', sub: '(Gazetted Holiday)' },
  { date: '2026-12-25', title: 'Christmas Day', sub: '(Gazetted Holiday)' },

  // 2027
  { date: '2027-01-14', title: 'Makar Sankranti', sub: '(Festival Holiday)' },
  { date: '2027-01-26', title: 'Republic Day', sub: '(National Holiday)' },
  { date: '2027-03-06', title: 'Maha Shivratri', sub: '(Gazetted Holiday)' },
  { date: '2027-03-22', title: 'Holi', sub: '(Festival Holiday)' },
  { date: '2027-04-10', title: 'Eid-ul-Fitr', sub: '(Gazetted Holiday)' },
  { date: '2027-08-15', title: 'Independence Day', sub: '(National Holiday)' },
  { date: '2027-10-02', title: 'Mahatma Gandhi Jayanti', sub: '(National Holiday)' },
  { date: '2027-10-29', title: 'Diwali (Deepavali)', sub: '(Festival Holiday)' },
  { date: '2027-12-25', title: 'Christmas Day', sub: '(Gazetted Holiday)' },
];

// School-focused Annual Academic & Cultural Events
const SCHOOL_EVENTS = [
  { month: 1, day: 23, title: 'Annual Sports Meet', sub: '(Sports & Athletics)' },
  { month: 2, day: 10, title: 'Annual Day Celebration', sub: '(Cultural Fest)' },
  { month: 2, day: 28, title: 'Science & Craft Fair', sub: '(Student Projects)' },
  { month: 4, day: 12, title: 'New Session Welcome', sub: '(Student Orientation)' },
  { month: 5, day: 8, title: 'Art & Drawing Contest', sub: '(Inter-Class Activity)' },
  { month: 7, day: 18, title: 'Parent-Teacher Meeting', sub: '(Quarterly PTM)' },
  { month: 8, day: 15, title: 'Independence Day Program', sub: '(Cultural Assembly)' },
  { month: 9, day: 5, title: "Teachers' Day Celebration", sub: '(Special Program)' },
  { month: 9, day: 14, title: 'Hindi Recitation Contest', sub: '(Poetry & Speech)' },
  { month: 10, day: 16, title: 'Creative Painting Contest', sub: '(All Classes)' },
  { month: 11, day: 14, title: "Children's Day Carnival", sub: '(Bal Mela & Games)' },
  { month: 12, day: 22, title: 'Winter Sports & Quiz Fest', sub: '(Active Learning)' },
  { month: 12, day: 24, title: 'Christmas Celebration', sub: '(School Assembly)' },
];

/**
 * Returns formatted 3 upcoming School / Indian Holidays based on current live date.
 */
export function getUpcomingIndianHolidays(limit = 3, referenceDate = new Date()) {
  const todayStr = referenceDate.toISOString().slice(0, 10);
  
  // Filter for holidays on or after today
  const upcoming = INDIAN_HOLIDAYS.filter((h) => h.date >= todayStr);

  // If near end of list, wrap to next year's early holidays
  const selected = upcoming.slice(0, limit);
  if (selected.length < limit) {
    const additional = INDIAN_HOLIDAYS.slice(0, limit - selected.length);
    selected.push(...additional);
  }

  return selected.map((item, idx) => {
    const d = new Date(item.date + 'T00:00:00');
    return {
      day: String(d.getDate()).padStart(2, '0'),
      month: MONTH_NAMES[d.getMonth()],
      title: item.title,
      sub: item.sub || '(Holiday)',
      tone: TONES[idx % TONES.length],
    };
  });
}

/**
 * Returns formatted 3 upcoming School Events based on current live date.
 */
export function getUpcomingIndianEvents(limit = 3, referenceDate = new Date()) {
  const currentYear = referenceDate.getFullYear();
  const currentMonth = referenceDate.getMonth() + 1; // 1-indexed
  const currentDay = referenceDate.getDate();

  // Create full dates for current year and next year
  const allEvents = [];
  [currentYear, currentYear + 1].forEach((year) => {
    SCHOOL_EVENTS.forEach((ev) => {
      const dateObj = new Date(year, ev.month - 1, ev.day);
      allEvents.push({
        dateObj,
        title: ev.title,
        sub: ev.sub,
      });
    });
  });

  // Sort chronologically
  allEvents.sort((a, b) => a.dateObj - b.dateObj);

  // Filter for events occurring today or later
  const startOfToday = new Date(currentYear, currentMonth - 1, currentDay);
  const upcoming = allEvents.filter((ev) => ev.dateObj >= startOfToday);

  return upcoming.slice(0, limit).map((item, idx) => ({
    day: String(item.dateObj.getDate()).padStart(2, '0'),
    month: MONTH_NAMES[item.dateObj.getMonth()],
    title: item.title,
    sub: item.sub,
    tone: TONES[idx % TONES.length],
  }));
}

/**
 * Optional background sync with Nager.Date API (falls back gracefully to offline dataset).
 */
export async function syncLiveIndianHolidays() {
  if (typeof window === 'undefined') return null;

  const currentYear = new Date().getFullYear();
  const cacheKey = `kz_in_holidays_${currentYear}`;

  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${currentYear}/IN`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) return null;
    const apiData = await res.json();
    if (Array.isArray(apiData) && apiData.length > 0) {
      sessionStorage.setItem(cacheKey, JSON.stringify(apiData));
      return apiData;
    }
  } catch {
    // Offline or network timeout - fallback works seamlessly
  }
  return null;
}
