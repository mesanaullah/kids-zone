import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './TopBar.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const seoMap = {
      '/': {
        title: 'Kids Zone Saharsa | Best Play School & Primary School (Play Group to Class 8)',
        description: 'Kids Zone is a premier CBSE-pattern English medium school in Krishna Nagar, Saharsa, Bihar. Offering Play Group, Nursery, LKG, UKG, and Classes 1 to 8.',
      },
      '/about': {
        title: 'About Us | Kids Zone School Saharsa, Bihar',
        description: 'Learn about Kids Zone School in Saharsa - our vision, mission, expert faculty, and child-centric education rooted in moral values and modern teaching.',
      },
      '/academics': {
        title: 'Academics & CBSE Curriculum | Kids Zone Saharsa',
        description: 'Explore academics at Kids Zone Saharsa from Play Group to Class 8. Holistic education, interactive smart classes, STEM activities, and extracurriculars.',
      },
      '/admission': {
        title: 'Admission Open 2026-27 | Kids Zone School Saharsa',
        description: 'Admissions open for Session 2026-27 at Kids Zone Saharsa. Apply online for Play Group to Class 8. Transparent fee structure and friendly admission process.',
      },
      '/gallery': {
        title: 'Photo Gallery & Campus Life | Kids Zone Saharsa',
        description: 'Glimpses of activities, science fairs, sports days, cultural celebrations, and classrooms at Kids Zone School, Krishna Nagar, Saharsa.',
      },
      '/contact': {
        title: 'Contact Us | Kids Zone Saharsa | Sidhi Priya House, Krishna Nagar',
        description: 'Get in touch with Kids Zone School, Saharsa. Call 06478-357-274 / +91 82522 56336 or email Info@kidszonesaharsa.in. Located at Sidhi Priya House, Krishna Nagar.',
      },
    };

    const currentSeo = seoMap[pathname] || {
      title: 'Kids Zone Saharsa | Play Group to Class 8',
      description: 'Kids Zone, Saharsa - Play Group to Class 8. Based on CBSE Curriculum. Sidhi Priya House, Krishna Nagar, Saharsa, Bihar.',
    };

    document.title = currentSeo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.description);
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
