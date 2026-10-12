import galleryStudents from '../assets/images/gallery-students.jpg';
import galleryActivity from '../assets/images/gallery-activity.jpg';
import galleryMoments from '../assets/images/gallery-moments.jpg';
import galleryComputer from '../assets/images/gallery-computer.jpg';
import galleryCreativity from '../assets/images/gallery-creativity.jpg';
import galleryLearners from '../assets/images/gallery-learners.jpg';

export const school = {
  name: 'KIDS ZONE',
  tagline: 'Play Group to Class 8',
  board: 'Based on CBSE Curriculum',
  address: 'Sidhi Priya House, Krishna Nagar, Saharsa',
  fullAddress: 'Sidhi Priya House, Krishna Nagar, Saharsa, Bihar 852201',
  addressLines: ['Sidhi Priya House,', 'Krishna Nagar, Saharsa, Bihar 852201'],
  phones: ['06478-357-274', '+91 82522 56336'],
  email: 'Info@kidszonesaharsa.in',
  facebook: 'https://www.facebook.com/share/1DPtq4zKcT/?mibextid=wwXIfr',
  mapUrl: 'https://maps.app.goo.gl/gVfoRg5a4a8LQuwW9?g_st=ic',
  developer: 'Earthix',
  developerUrl: 'https://earthix.in/',
  studentLoginUrl: 'https://earthix.in/portal/login',
  staffLoginUrl: 'https://earthix.in/staff-portal/login',
  year: 2025,
};

export const navLinks = [
  { label: 'Home', to: '/', icon: 'Home' },
  { label: 'About Us', to: '/about', icon: 'Users' },
  { label: 'Academics', to: '/academics', icon: 'BookOpen' },
  { label: 'Admission', to: '/admission', icon: 'FileEdit' },
  { label: 'Gallery', to: '/gallery', icon: 'Image' },
  { label: 'Contact Us', to: '/contact', icon: 'Phone' },
];

export const features = [
  { label: 'CBSE Based\nCurriculum', icon: 'BookOpen', color: '#e11d2e', filled: true },
  { label: 'Experienced\nTeachers', icon: 'Users', color: '#0b2a7a' },
  { label: 'Smart\nClassroom', icon: 'MonitorPlay', color: '#0b2a7a' },
  { label: 'Computer\nClass', icon: 'Monitor', color: '#1d6fe0' },
  { label: 'Activity Based\nLearning', icon: 'Palette', color: '#f0475f', filled: true },
  { label: 'Safe & Hygienic\nEnvironment', icon: 'ShieldCheck', color: '#f59a1b', filled: true },
];

export const classes = [
  { label: 'Play Group', icon: 'Bear', bg: 'bg-[#fde4e4]', text: 'text-[#e11d2e]' },
  { label: 'Nursery', icon: 'Blocks', bg: 'bg-[#fdeedd]', text: 'text-[#f08a00]' },
  { label: 'LKG / UKG', icon: 'ABC', bg: 'bg-[#dfeafd]', text: 'text-[#0b2a7a]' },
  { label: 'Class 1 to 8', icon: 'Pencil', bg: 'bg-[#dcf5e6]', text: 'text-[#0b2a7a]' },
];

import {
  getUpcomingIndianEvents,
  getUpcomingIndianHolidays,
} from '../services/indianCalendarService.js';

export const events = getUpcomingIndianEvents(3);
export const holidays = getUpcomingIndianHolidays(3);

export const gallery = [
  { label: 'Our Students', src: galleryStudents },
  { label: 'Activity Based Learning', src: galleryActivity },
  { label: 'Happy Moments', src: galleryMoments },
  { label: 'Computer Class', src: galleryComputer },
  { label: 'Creativity & Talent', src: galleryCreativity },
  { label: 'Our Little Learners', src: galleryLearners },
];

export const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Admission', to: '/admission' },
  { label: 'About Us', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Academics', to: '/academics' },
  { label: 'Contact Us', to: '/contact' },
];
