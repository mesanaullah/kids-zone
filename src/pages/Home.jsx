import { useState, useEffect } from 'react';
import Hero from '../components/home/Hero.jsx';
import FeatureStrip from '../components/home/FeatureStrip.jsx';
import AdmissionBanner from '../components/home/AdmissionBanner.jsx';
import Welcome from '../components/home/Welcome.jsx';
import Classes from '../components/home/Classes.jsx';
import DateList from '../components/home/DateList.jsx';
import Gallery from '../components/home/Gallery.jsx';
import { events as defaultEvents, holidays as defaultHolidays } from '../data/siteData.js';
import { syncLiveIndianHolidays, getUpcomingIndianHolidays } from '../services/indianCalendarService.js';

export default function Home() {
  const [eventsList] = useState(defaultEvents);
  const [holidaysList, setHolidaysList] = useState(defaultHolidays);

  useEffect(() => {
    syncLiveIndianHolidays().then((apiData) => {
      if (apiData) {
        setHolidaysList(getUpcomingIndianHolidays(3));
      }
    });
  }, []);

  return (
    <>
      <Hero />
      <FeatureStrip />
      <AdmissionBanner />
      <Welcome />

      <section className="container-page mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.85fr_0.85fr]">
        <Classes />
        <DateList title="Upcoming Events" items={eventsList} />
        <DateList title="Holiday Calendar" items={holidaysList} />
      </section>

      <Gallery />
    </>
  );
}
