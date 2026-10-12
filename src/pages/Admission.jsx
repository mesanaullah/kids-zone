import AdmissionBanner from '../components/admission/AdmissionBanner.jsx';
import AdmissionProcess from '../components/admission/AdmissionProcess.jsx';
import AdmissionInfoCards from '../components/admission/AdmissionInfoCards.jsx';
import AdmissionEnquirySection from '../components/admission/AdmissionEnquirySection.jsx';

export default function Admission() {
  return (
    <div className="w-full bg-[#f8fafc]/50">
      {/* ------------------------------------------------------------- */}
      {/* 1. FULL-WIDTH TOP HERO BANNER (Directly below navbar)         */}
      {/* ------------------------------------------------------------- */}
      <AdmissionBanner />

      {/* ------------------------------------------------------------- */}
      {/* 2. ADMISSION PROCESS SECTION (Floats gently over hero bottom) */}
      {/* ------------------------------------------------------------- */}
      <AdmissionProcess />

      {/* ------------------------------------------------------------- */}
      {/* 3. ADMISSION INFO CARDS (Eligibility, Documents, Why Choose)  */}
      {/* ------------------------------------------------------------- */}
      <AdmissionInfoCards />

      {/* ------------------------------------------------------------- */}
      {/* 4. ADMISSION ENQUIRY & CONTACT SECTION (Form + Need Help)      */}
      {/* ------------------------------------------------------------- */}
      <AdmissionEnquirySection />
    </div>
  );
}
