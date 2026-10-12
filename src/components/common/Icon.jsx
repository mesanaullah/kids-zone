import {
  MonitorPlay, Monitor, Palette, ShieldCheck, MapPin, Facebook, ChevronRight,
  Menu, X, GraduationCap, UserRound, Megaphone,
} from 'lucide-react';

/* Solid silhouette icons with crisp cutouts (matching the exact navbar style) */
function SolidHome({ size = 18, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2.099l-10 8.333 1.3 1.56L5 10.66V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9.34l1.7 1.332 1.3-1.56-10-8.333z" />
    </svg>
  );
}

function SolidUsers({ size = 18, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 11.5a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2c0-2.33-4.67-3.5-7-3.5z" />
      <path d="M18 10a2.25 2.25 0 1 0-2.25-2.25A2.25 2.25 0 0 0 18 10zm1 2h-.5c.8.6 1.5 1.5 1.5 2.5v2.5h3.5v-1.75c0-1.66-3-2.75-4.5-2.75zM6 10a2.25 2.25 0 1 0-2.25-2.25A2.25 2.25 0 0 0 6 10zm-1 2c-1.5 0-4.5 1.09-4.5 2.75V17h3.5v-2.5c0-1 .7-1.9 1.5-2.5z" />
    </svg>
  );
}

function SolidBookOpen({ size = 18, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M11.2 5.5C9.7 4.5 7.7 4 5 4A4.9 4.9 0 0 0 2 4.9V19c.9-.5 2-.9 3-.9 2.5 0 4.7.5 6.2 1.9zm1.6 0C14.3 4.5 16.3 4 19 4c1.1 0 2.1.4 3 .9V19c-.9-.5-2-.9-3-.9-2.5 0-4.7.5-6.2 1.9z" />
    </svg>
  );
}

function SolidFileEdit({ size = 18, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.8L18.2 9H13V3.8zM8 12h5v2H8v-2zm0 4h4v2H8v-2zm12.5-4.3l-1.2 1.2-2.2-2.2 1.2-1.2a.8.8 0 0 1 1.1 0l1.1 1.1c.3.3.3.8 0 1.1zM10.8 19.4L17 13.2l2.2 2.2-6.2 6.2H10.8v-2.2z" />
    </svg>
  );
}

function SolidImage({ size = 18, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1 16H6l4-5 3 3.5 2.5-3 3.5 4.5zm-9.5-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );
}

function SolidPhone({ size = 18, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a1 1 0 0 0-1.01.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a1 1 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.99 1 1 0 0 0 7.58 3H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.62a1 1 0 0 0-.99-1z" />
    </svg>
  );
}

const icons = {
  Home: SolidHome,
  Users: SolidUsers,
  BookOpen: SolidBookOpen,
  FileEdit: SolidFileEdit,
  Image: SolidImage,
  Phone: SolidPhone,
  MonitorPlay,
  Monitor,
  Palette,
  ShieldCheck,
  MapPin,
  Facebook,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  UserRound,
  Megaphone,
};

export default function Icon({ name, ...props }) {
  const Cmp = icons[name];
  return Cmp ? <Cmp {...props} /> : null;
}
