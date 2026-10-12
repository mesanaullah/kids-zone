import Hero from '../components/home/Hero.jsx';
import FeatureStrip from '../components/home/FeatureStrip.jsx';
import AdmissionBanner from '../components/home/AdmissionBanner.jsx';
import Welcome from '../components/home/Welcome.jsx';
import Classes from '../components/home/Classes.jsx';
import DateList from '../components/home/DateList.jsx';
import Gallery from '../components/home/Gallery.jsx';
import { notices, holidays } from '../data/siteData.js';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <AdmissionBanner />
      <Welcome />

      <section className="container-page mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.85fr_0.85fr]">
        <Classes />
        <DateList title="Notices" items={notices} />
        <DateList title="Holiday Calendar" items={holidays} />
      </section>

      <Gallery />
    </>
  );
}
