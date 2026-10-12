import AboutBanner from '../components/about/AboutBanner.jsx';
import OurStory from '../components/about/OurStory.jsx';
import VisionMissionValues from '../components/about/VisionMissionValues.jsx';
import WhyChooseKidsZone from '../components/about/WhyChooseKidsZone.jsx';

export default function About() {
  return (
    <div className="bg-white">
      <AboutBanner />
      <OurStory />
      <VisionMissionValues />
      <WhyChooseKidsZone />
    </div>
  );
}
