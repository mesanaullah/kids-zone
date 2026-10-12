import { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarDays,
  UserRound,
  BookOpen,
  MessageSquare,
  Send,
  CheckCircle2,
  Bookmark,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Loader2,
  AlertCircle,
  X,
} from 'lucide-react';
import ContactBanner from '../components/contact/ContactBanner.jsx';
import { submitToWeb3Forms } from '../config/web3forms.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    contactNumber: '',
    purpose: '',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'success', // 'success' | 'error'
    title: '',
    message: '',
  });

  // 15-second cooldown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const interval = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldown]);

  // Google-style custom validations
  const isParentNameValid = formData.parentName.trim().length >= 3;
  const isContactNumberValid = /^\d{10}$/.test(formData.contactNumber.trim());
  const isPurposeValid = formData.purpose.trim().length > 0;
  const isMessageValid = formData.message.trim().length >= 5;

  const isFormValid = isParentNameValid && isContactNumberValid && isPurposeValid && isMessageValid;

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handlePhoneChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, contactNumber: cleaned }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      parentName: true,
      contactNumber: true,
      purpose: true,
      message: true,
    });

    if (!isFormValid || isSubmitting || cooldown > 0) return;

    setIsSubmitting(true);

    try {
      const response = await submitToWeb3Forms(
        {
          'Form Name': 'Contact Page - Send Us a Message',
          'Parent / Guardian Name': formData.parentName,
          'Contact Number': formData.contactNumber,
          Purpose: formData.purpose,
          Message: formData.message,
        },
        `New Message from ${formData.parentName} (${formData.contactNumber}) - ${formData.purpose}`
      );

      if (response.success) {
        setModalState({
          isOpen: true,
          type: 'success',
          title: 'Message Sent Successfully!',
          message: `Thank you for reaching out to Kids Zone, ${formData.parentName}! Your message has been safely delivered to our administration team. We will call you on +91 ${formData.contactNumber} shortly.`,
        });

        // Reset form
        setFormData({
          parentName: '',
          contactNumber: '',
          purpose: '',
          message: '',
        });
        setTouched({});
      } else {
        setModalState({
          isOpen: true,
          type: 'error',
          title: 'Submission Issue',
          message:
            response.message ||
            'Something went wrong while sending your message. Please call our school desk directly at 06478-357-274.',
        });
      }
    } catch {
      setModalState({
        isOpen: true,
        type: 'error',
        title: 'Connection Issue',
        message:
          'Unable to reach the server. Please check your internet connection or call our desk directly at 06478-357-274.',
      });
    } finally {
      setIsSubmitting(false);
      setCooldown(15);
    }
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="w-full bg-[#f8fafc]/50">
      {/* ------------------------------------------------------------- */}
      {/* FULL-WIDTH TOP HERO BANNER (Directly below navbar)            */}
      {/* ------------------------------------------------------------- */}
      <ContactBanner />

      {/* ------------------------------------------------------------- */}
      {/* 4-CARD 2x2 CONTACT SECTION (Floating gently below the hero)   */}
      {/* ------------------------------------------------------------- */}
      <section className="container-page relative z-20 -mt-2 sm:-mt-3 lg:-mt-5 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* ========================================================= */}
          {/* CARD 1: Our Contact Information (Equal height to Card 2)  */}
          {/* ========================================================= */}
          <div className="flex h-full flex-col justify-between rounded-[26px] bg-white p-6 sm:p-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.08)]">
            <div>
              {/* Title with segmented red & yellow underline */}
              <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
                Our Contact Information
              </h2>
              <div className="flex h-1 w-12 rounded-full overflow-hidden mt-1.5 mb-6" aria-hidden="true">
                <span className="w-1/2 bg-[#f0243c]" />
                <span className="w-1/2 bg-[#ffd21f]" />
              </div>
            </div>

            {/* List of 5 items with balanced vertical spacing */}
            <div className="flex flex-1 flex-col justify-between gap-4 sm:gap-5 py-1">
              {/* 1. Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5b800] text-slate-900 shadow-sm">
                  <MapPin size={22} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-brand-navy">
                    Address
                  </h3>
                  <p className="mt-0.5 font-body text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    Sidhi Priya House, Krishna Nagar,
                    <br />
                    Saharsa (Bihar) - 852201
                  </p>
                </div>
              </div>

              {/* 2. Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d6fe0] text-white shadow-sm">
                  <Phone size={21} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-brand-navy">
                    Phone
                  </h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-x-2 font-body text-xs sm:text-sm font-medium text-slate-600">
                    <a href="tel:06478357274" className="hover:text-brand-blue transition-colors">
                      06478-357-274
                    </a>
                    <span className="text-slate-400 select-none" aria-hidden="true">/</span>
                    <a href="tel:+918252256336" className="hover:text-brand-blue transition-colors">
                      +91 82522 56336
                    </a>
                  </div>
                </div>
              </div>

              {/* 3. Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0243c] text-white shadow-sm">
                  <Mail size={21} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-brand-navy">
                    Email
                  </h3>
                  <div className="mt-0.5 space-y-0.5 font-body text-xs sm:text-sm font-medium text-slate-600">
                    <p>
                      <a href="mailto:Info@kidszonesaharsa.in" className="hover:text-brand-blue transition-colors">
                        Info@kidszonesaharsa.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. School Timing */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7048e8] text-white shadow-sm">
                  <Clock size={21} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-brand-navy">
                    School Timing
                  </h3>
                  <p className="mt-0.5 font-body text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    10:00 AM to 12:00 PM
                    <br />
                    <span className="text-slate-500 font-normal">(During Examination Period)</span>
                  </p>
                </div>
              </div>

              {/* 5. Classes Offered */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10b981] text-white shadow-sm">
                  <CalendarDays size={21} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-brand-navy">
                    Classes Offered
                  </h3>
                  <p className="mt-0.5 font-body text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    Play Group to Class 8
                    <br />
                    <span className="text-slate-500 font-normal">(Based on CBSE Curriculum)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 2: Send Us a Message (Equal height to Card 1)         */}
          {/* ========================================================= */}
          <div className="flex h-full flex-col justify-between rounded-[26px] bg-white p-6 sm:p-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.08)]">
            <div>
              {/* Header with Paper Airplane Doodle */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="mt-1 font-body text-xs sm:text-sm text-slate-500">
                    Fill in the details below and we will get back to you soon.
                  </p>
                </div>

                {/* Flying paper plane doodle */}
                <div className="relative shrink-0 w-11 h-11 flex items-center justify-center text-[#1d6fe0]" aria-hidden="true">
                  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor">
                    <path d="M42 6L20 28L14 18L42 6Z" strokeWidth="2.2" strokeLinejoin="round" />
                    <path d="M42 6L8 16L14 18L42 6Z" strokeWidth="2.2" strokeLinejoin="round" />
                    <path d="M12 36C18 39 24 33 28 28" strokeWidth="1.8" strokeDasharray="3 3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="flex flex-1 flex-col gap-3.5 mt-5">
              {/* Form Inputs Grid (Parent Name, Contact Number, and Class) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* 1. Parent / Guardian Name */}
                <div>
                  <div
                    className={`flex items-center gap-2.5 rounded-xl bg-[#f8fafc] border px-3.5 py-2.5 transition-all ${
                      touched.parentName && !isParentNameValid
                        ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                        : 'border-slate-200/80 focus-within:border-[#1d6fe0] focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <UserRound size={17} className="text-slate-400 shrink-0" />
                    <input
                      type="text"
                      placeholder="Parent/Guardian Name *"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      onBlur={() => handleBlur('parentName')}
                      className="w-full bg-transparent font-body text-xs sm:text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    />
                  </div>
                  {touched.parentName && !isParentNameValid && (
                    <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                      <AlertCircle size={12} /> Minimum 3 characters required.
                    </p>
                  )}
                </div>

                {/* 2. Contact Number (10 digits only) */}
                <div>
                  <div
                    className={`flex items-center gap-2.5 rounded-xl bg-[#f8fafc] border px-3.5 py-2.5 transition-all ${
                      touched.contactNumber && !isContactNumberValid
                        ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                        : 'border-slate-200/80 focus-within:border-[#1d6fe0] focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <Phone size={17} className="text-slate-400 shrink-0" />
                    <input
                      type="tel"
                      placeholder="Contact Number (10 digits) *"
                      value={formData.contactNumber}
                      onChange={handlePhoneChange}
                      onBlur={() => handleBlur('contactNumber')}
                      maxLength={10}
                      inputMode="numeric"
                      className="w-full bg-transparent font-body text-xs sm:text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    />
                    {formData.contactNumber && (
                      <span className="text-[10px] text-slate-400 font-medium">
                        {formData.contactNumber.length}/10
                      </span>
                    )}
                  </div>
                  {touched.contactNumber && !isContactNumberValid && (
                    <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                      <AlertCircle size={12} /> Must be a 10-digit number.
                    </p>
                  )}
                </div>

                {/* 3. Purpose Dropdown (Spans full width) */}
                <div className="sm:col-span-2">
                  <div
                    className={`relative flex items-center gap-2.5 rounded-xl bg-[#f8fafc] border px-3.5 py-2.5 transition-all ${
                      touched.purpose && !isPurposeValid
                        ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                        : 'border-slate-200/80 focus-within:border-[#1d6fe0] focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <BookOpen size={17} className="text-slate-400 shrink-0" />
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      onBlur={() => handleBlur('purpose')}
                      className={`w-full appearance-none bg-transparent font-body text-xs sm:text-sm outline-none pr-6 cursor-pointer ${
                        formData.purpose ? 'text-slate-800' : 'text-slate-400'
                      }`}
                    >
                      <option value="" disabled>
                        Select Purpose *
                      </option>
                      <option value="Admission Enquiry">Admission Enquiry</option>
                      <option value="General Information">General Information</option>
                      <option value="Fee Structure">Fee Structure</option>
                      <option value="Transport Facility">Transport Facility</option>
                      <option value="Hostel Information">Hostel Information</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown size={15} className="pointer-events-none absolute right-3 text-slate-400" />
                  </div>
                  {touched.purpose && !isPurposeValid && (
                    <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                      <AlertCircle size={12} /> Please select a purpose.
                    </p>
                  )}
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <div
                  className={`flex flex-1 flex-col rounded-xl bg-[#f8fafc] border p-3.5 transition-all min-h-[110px] sm:min-h-[125px] ${
                    touched.message && !isMessageValid
                      ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                      : 'border-slate-200/80 focus-within:border-[#1d6fe0] focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 text-xs sm:text-sm font-semibold text-slate-600">
                    <MessageSquare size={16} className="text-slate-400" />
                    <span>Your Message *</span>
                  </div>
                  <textarea
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onBlur={() => handleBlur('message')}
                    className="w-full flex-1 bg-transparent font-body text-xs sm:text-sm text-slate-800 outline-none resize-none placeholder:text-slate-400"
                  />
                </div>
                {touched.message && !isMessageValid && (
                  <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                    <AlertCircle size={12} /> Minimum 5 characters required.
                  </p>
                )}
              </div>

              {/* Submit Button (Disabled until filled, shows loader & 15s timer) */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting || cooldown > 0}
                className={`w-full py-3.5 px-6 rounded-xl font-display font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 select-none ${
                  !isFormValid || cooldown > 0 || isSubmitting
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    : 'bg-[#f0243c] hover:bg-[#d9142b] active:scale-[0.99] text-white shadow-md hover:shadow-lg cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin text-white" />
                    <span>Sending Message...</span>
                  </>
                ) : cooldown > 0 ? (
                  <>
                    <Clock size={16} className="text-slate-400 animate-pulse" />
                    <span>Please wait {cooldown}s</span>
                  </>
                ) : (
                  <>
                    <Send size={17} className="-rotate-12" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ========================================================= */}
          {/* CARD 3: Find Us on Map (Equal height to Card 4)           */}
          {/* ========================================================= */}
          <div className="flex h-full flex-col justify-between rounded-[26px] bg-white p-6 sm:p-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.08)]">
            <div>
              {/* Title with segmented red & yellow underline */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
                    Find Us on Map
                  </h2>
                  <div className="flex h-1 w-12 rounded-full overflow-hidden mt-1.5 mb-4" aria-hidden="true">
                    <span className="w-1/2 bg-[#f0243c]" />
                    <span className="w-1/2 bg-[#ffd21f]" />
                  </div>
                </div>

                {/* Map pin marker badge on top right */}
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                  <MapPin size={17} />
                </div>
              </div>
            </div>

            {/* Embedded Interactive Map */}
            <div className="relative flex-1 min-h-[290px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 mt-2">
              <iframe
                title="Kids Zone Location Map Saharsa"
                src="https://maps.google.com/maps?q=KIDS+ZONE+,SIDHI+PRIYA+HOUSE,+Krishna+Nagar,+Saharsa,+Bihar+852201&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Pin Callout Overlay */}
              <div className="pointer-events-none absolute top-10 right-4 sm:right-10 z-10 flex items-start gap-2 rounded-xl bg-white/95 backdrop-blur-sm p-2.5 shadow-md border border-slate-200/90 max-w-[220px]">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0243c] text-white">
                  <MapPin size={13} />
                </div>
                <div>
                  <p className="font-display text-xs font-bold text-brand-navy leading-tight">Kids Zone</p>
                  <p className="font-body text-[10px] text-slate-600 leading-tight mt-0.5">
                    Sidhi Priya House, Krishna Nagar,<br />Saharsa (Bihar) - 852201
                  </p>
                </div>
              </div>

              {/* Find Us on Map Button at Bottom-Left */}
              <a
                href="https://maps.app.goo.gl/gVfoRg5a4a8LQuwW9?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-lg bg-[#1d6fe0] hover:bg-blue-700 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md transition-colors"
              >
                <span>Find Us on Map</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 4: Get in Touch Quickly (Equal height to Card 3)     */}
          {/* ========================================================= */}
          <div className="flex h-full flex-col justify-between rounded-[26px] bg-white p-6 sm:p-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.08)]">
            <div>
              {/* Header with blue bookmark icon */}
              <div className="flex items-center gap-2 mb-4">
                <Bookmark size={20} className="text-[#1d6fe0] fill-[#1d6fe0]" />
                <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
                  Get in Touch Quickly
                </h2>
              </div>
            </div>

            {/* 2x2 Grid of Action Cards */}
            <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-2">
              {/* 1. WhatsApp */}
              <a
                href="https://wa.me/918252256336?text=Hello%20Kids%20Zone,%20I%20would%20like%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-4 bg-[#eafaf1] border border-[#c7f3d6] hover:border-emerald-300 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-sm mb-2.5">
                    <Phone size={22} className="text-white" />
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-800">
                    Chat on WhatsApp
                  </span>
                  <span className="mt-0.5 font-body font-bold text-xs sm:text-sm text-slate-900">
                    +91 82522 56336
                  </span>
                </div>
                <div className="flex justify-end mt-2">
                  <ArrowRight size={17} className="text-[#25d366] transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* 2. Call Us */}
              <a
                href="tel:06478357274"
                className="group rounded-2xl p-4 bg-[#edf5ff] border border-[#d2e4fc] hover:border-blue-300 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1d6fe0] text-white shadow-sm mb-2.5">
                    <Phone size={22} className="text-white" />
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-800">
                    Call Us
                  </span>
                  <span className="mt-0.5 font-body font-bold text-xs sm:text-sm text-slate-900">
                    06478-357-274
                  </span>
                </div>
                <div className="flex justify-end mt-2">
                  <ArrowRight size={17} className="text-[#1d6fe0] transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* 3. Email Us */}
              <a
                href="mailto:Info@kidszonesaharsa.in"
                className="group rounded-2xl p-4 bg-[#fff0f3] border border-[#fcd5dc] hover:border-rose-300 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0243c] text-white shadow-sm mb-2.5">
                    <Mail size={22} className="text-white" />
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-800">
                    Email Us
                  </span>
                  <span className="mt-0.5 font-body font-bold text-[11px] sm:text-xs text-slate-900 break-all">
                    Info@kidszonesaharsa.in
                  </span>
                </div>
                <div className="flex justify-end mt-2">
                  <ArrowRight size={17} className="text-[#f0243c] transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* 4. Follow Us on Facebook */}
              <a
                href="https://www.facebook.com/share/1DPtq4zKcT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-4 bg-[#f0f3ff] border border-[#dcdfff] hover:border-indigo-300 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-sm mb-2.5">
                    <span className="font-display font-black text-xl leading-none">f</span>
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-800">
                    Follow Us on Facebook
                  </span>
                  <span className="mt-0.5 font-body font-bold text-xs sm:text-sm text-slate-900">
                    Stay Updated
                  </span>
                </div>
                <div className="flex justify-end mt-2">
                  <ArrowRight size={17} className="text-[#1877f2] transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================= */}
      {/* PREMIUM MODAL POPUP: Message Sent Feedback                    */}
      {/* ============================================================= */}
      {modalState.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 text-center animate-scaleUp">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-inner ${
                modalState.type === 'success'
                  ? 'bg-emerald-100 text-emerald-600'
                  : 'bg-amber-100 text-amber-600'
              }`}
            >
              {modalState.type === 'success' ? (
                <CheckCircle2 size={36} strokeWidth={2.4} />
              ) : (
                <AlertCircle size={36} strokeWidth={2.4} />
              )}
            </div>

            <h3 className="mt-4 font-bubble text-xl sm:text-2xl font-bold text-slate-900">
              {modalState.title}
            </h3>

            <p className="mt-2.5 font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
              {modalState.message}
            </p>

            <button
              onClick={closeModal}
              className={`mt-6 w-full rounded-xl py-3 font-display text-sm font-bold text-white shadow-md transition-all active:scale-[0.98] ${
                modalState.type === 'success'
                  ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
                  : 'bg-[#f0243c] hover:bg-[#d91b31] shadow-red-500/20'
              }`}
            >
              Great, Thank You
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
