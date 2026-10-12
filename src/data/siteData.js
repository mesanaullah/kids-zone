
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

import { getUpcomingIndianHolidays } from '../services/indianCalendarService.js';

export const notices = [
  {
    id: 1,
    day: '06',
    month: 'OCT',
    title: '📢 Admission Open 2026–27',
    sub: 'Give your child a strong foundation for a brighter future.',
    tone: 'pink',
    to: '/admission',
  },
  {
    id: 2,
    day: '06',
    month: 'OCT',
    title: '📚 New Academic Session 2026–27',
    sub: 'Welcome to a new session of learning, growth, creativity and success.',
    tone: 'blue',
    to: '/academics',
  },
  {
    id: 3,
    day: '06',
    month: 'OCT',
    title: '💙 Website Designed & Developed by Earthix',
    sub: 'Smart digital solutions for modern businesses. Built by Earthix.',
    tone: 'orange',
    to: 'https://earthix.in/',
  },
];

export const holidays = [
  {
    id: 1,
    day: '20',
    month: 'OCT',
    title: 'Dussehra',
    sub: 'Festival Holiday',
    tone: 'pink',
  },
  {
    id: 2,
    day: '08',
    month: 'NOV',
    title: 'Diwali',
    sub: 'Festival Holiday',
    tone: 'blue',
  },
  {
    id: 3,
    day: '15',
    month: 'NOV',
    title: 'Chhath Puja',
    sub: 'Festival Holiday',
    tone: 'orange',
  },
];

export const gallery = [
  {
    label: 'Our Students in Classroom',
    src: 'https://res.cloudinary.com/lyyvf2pr/image/upload/v1791793346/WhatsApp_Image_2026-10-12_at_12.27.26_AM.jpg',
  },
  {
    label: 'Activity Based Learning Workshop',
    src: 'https://res.cloudinary.com/lyyvf2pr/image/upload/v1791793342/WhatsApp_Image_2026-10-12_at_12.27.25_AM_1.jpg',
  },
  {
    label: 'Creative Drawing & Art Talent',
    src: 'https://res.cloudinary.com/lyyvf2pr/image/upload/v1791793342/WhatsApp_Image_2026-10-12_at_12.27.24_AM.jpg',
  },
  {
    label: 'Cheerful Classroom Moments',
    src: 'https://res.cloudinary.com/lyyvf2pr/image/upload/v1791793344/WhatsApp_Image_2026-10-12_at_12.27.25_AM.jpg',
  },
  {
    label: 'Cultural Events & Celebrations',
    src: 'https://res.cloudinary.com/lyyvf2pr/image/upload/v1791793341/WhatsApp_Image_2026-10-12_at_12.27.24_AM_1.jpg',
  },
  {
    label: 'Our Curious Little Learners',
    src: 'https://res.cloudinary.com/lyyvf2pr/image/upload/v1791793337/WhatsApp_Image_2026-10-12_at_12.27.22_AM.jpg',
  },
];

export const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Admission', to: '/admission' },
  { label: 'About Us', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Academics', to: '/academics' },
  { label: 'Contact Us', to: '/contact' },
];
