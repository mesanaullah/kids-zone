import { useState, useEffect } from 'react';
import {
  User,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Send,
  Headset,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  X,
} from 'lucide-react';
import { submitToWeb3Forms } from '../../config/web3forms.js';

/**
 * AdmissionEnquirySection Component:
 * - Left column: Admission Enquiry Form with Google-style field validations
 * - 10-digit number only phone validation, 3+ characters name validation
 * - Classes dropdown from Play Group up to Class 8
 * - Disabled submit button until all required fields are valid
 * - Animated loading spinner while submitting
 * - Web3Forms integration sending all fields to email
 * - 15-second anti-spam cooldown timer
 * - Premium feedback modal popup
 * - Right column: "Need Help with Admission?" contact cards
 */
export default function AdmissionEnquirySection() {
  const [formData, setFormData] = useState({
    childName: '',
    selectedClass: '',
    gender: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
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

  // Validation rules
  const isChildNameValid = formData.childName.trim().length >= 3;
  const isParentNameValid = formData.parentName.trim().length >= 3;
  const isPhoneValid = /^\d{10}$/.test(formData.phone.trim());
  const isClassValid = formData.selectedClass.trim().length > 0;
  const isGenderValid = formData.gender.trim().length > 0;
  const isAddressValid = formData.address.trim().length >= 5;
  const isEmailValid =
    !formData.email.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());

  // Overall form validity
  const isFormValid =
    isChildNameValid &&
    isParentNameValid &&
    isPhoneValid &&
    isClassValid &&
    isGenderValid &&
    isAddressValid &&
    isEmailValid;

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Only allow numbers for phone input (strictly 10 digits)
  const handlePhoneChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: cleaned }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      childName: true,
      selectedClass: true,
      gender: true,
      parentName: true,
      phone: true,
      email: true,
      address: true,
    });

    if (!isFormValid || isSubmitting || cooldown > 0) return;

    setIsSubmitting(true);

    try {
      const response = await submitToWeb3Forms(
        {
          'Form Name': 'Admission Enquiry Form',
          "Child's Full Name": formData.childName,
          'Class Applying For': formData.selectedClass,
          Gender: formData.gender,
          'Parent / Guardian Name': formData.parentName,
          'Phone / Contact Number': formData.phone,
          'Email Address': formData.email || 'Not provided',
          'Residential Address': formData.address,
        },
        `New Admission Enquiry - ${formData.childName} (${formData.selectedClass})`
      );

      if (response.success) {
        setModalState({
          isOpen: true,
          type: 'success',
          title: 'Enquiry Submitted Successfully!',
          message: `Thank you for your interest in Kids Zone School! We have received ${formData.childName}'s admission enquiry for ${formData.selectedClass}. Our admissions office will contact you at +91 ${formData.phone} shortly.`,
        });

        // Reset form data
        setFormData({
          childName: '',
          selectedClass: '',
          gender: '',
          parentName: '',
          phone: '',
          email: '',
          address: '',
        });
        setTouched({});
      } else {
        setModalState({
          isOpen: true,
          type: 'error',
          title: 'Submission Notice',
          message:
            response.message ||
            'Something went wrong while sending your enquiry. Please check your details or call our admissions desk directly.',
        });
      }
    } catch {
      setModalState({
        isOpen: true,
        type: 'error',
        title: 'Connection Issue',
        message:
          'Unable to connect to the enquiry service. Please check your internet connection or call our desk directly at 06478-357-274.',
      });
    } finally {
      setIsSubmitting(false);
      setCooldown(15); // Start 15-second cooldown timer
    }
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section className="container-page pb-14 sm:pb-16 lg:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* ============================================================= */}
        {/* LEFT COLUMN: Admission Enquiry Form                           */}
        {/* ============================================================= */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.08)]">
          <div>
            {/* Header Title & Segmented Red-Yellow Underline */}
            <h2 className="font-bubble text-2xl sm:text-3xl font-black tracking-tight leading-tight select-none">
              <span className="text-brand-navy">Admission Enquiry </span>
              <span className="text-brand-red">Form</span>
            </h2>
            <div className="flex h-1 w-12 rounded-full overflow-hidden mt-1.5 mb-4 sm:mb-5" aria-hidden="true">
              <span className="w-1/2 bg-[#f0243c]" />
              <span className="w-1/2 bg-[#ffd21f]" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-4">
              {/* 2-Column Inputs Grid (6 symmetric inputs) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* 1. Child's Full Name * */}
                <div>
                  <div
                    className={`relative flex items-center rounded-xl border bg-[#f8fafc] px-3.5 py-3 transition-colors ${
                      touched.childName && !isChildNameValid
                        ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                        : 'border-slate-200/90 focus-within:border-brand-blue focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <User size={18} className="text-slate-400 shrink-0" aria-hidden="true" />
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('childName')}
                      placeholder="Child's Full Name *"
                      className="ml-3 w-full bg-transparent font-body text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
                  </div>
                  {touched.childName && !isChildNameValid && (
                    <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                      <AlertCircle size={12} /> Minimum 3 characters required.
                    </p>
                  )}
                </div>

                {/* 2. Select Class * (Up to Class 8) */}
                <div>
                  <div
                    className={`relative flex items-center rounded-xl border bg-[#f8fafc] px-3.5 py-3 transition-colors ${
                      touched.selectedClass && !isClassValid
                        ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                        : 'border-slate-200/90 focus-within:border-brand-blue focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <GraduationCap size={18} className="text-slate-400 shrink-0" aria-hidden="true" />
                    <select
                      name="selectedClass"
                      value={formData.selectedClass}
                      onChange={handleChange}
                      onBlur={() => handleBlur('selectedClass')}
                      className={`ml-3 w-full appearance-none bg-transparent font-body text-xs sm:text-sm focus:outline-none cursor-pointer pr-5 ${
                        formData.selectedClass ? 'text-slate-800' : 'text-slate-400'
                      }`}
                    >
                      <option value="" disabled>Select Class *</option>
                      <option value="Play Group">Play Group (2.5+ years)</option>
                      <option value="Nursery">Nursery (3+ years)</option>
                      <option value="LKG">LKG (4+ years)</option>
                      <option value="UKG">UKG (5+ years)</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                    </select>
                    <ChevronDown size={17} className="text-slate-400 shrink-0 pointer-events-none absolute right-3" />
                  </div>
                  {touched.selectedClass && !isClassValid && (
                    <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                      <AlertCircle size={12} /> Please select a class.
                    </p>
                  )}
                </div>

                {/* 3. Gender * */}
                <div>
                  <div
                    className={`relative flex items-center rounded-xl border bg-[#f8fafc] px-3.5 py-3 transition-colors ${
                      touched.gender && !isGenderValid
                        ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                        : 'border-slate-200/90 focus-within:border-brand-blue focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <User size={18} className="text-slate-400 shrink-0" aria-hidden="true" />
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      onBlur={() => handleBlur('gender')}
                      className={`ml-3 w-full appearance-none bg-transparent font-body text-xs sm:text-sm focus:outline-none cursor-pointer pr-5 ${
                        formData.gender ? 'text-slate-800' : 'text-slate-400'
                      }`}
                    >
                      <option value="" disabled>Gender *</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown size={17} className="text-slate-400 shrink-0 pointer-events-none absolute right-3" />
                  </div>
                  {touched.gender && !isGenderValid && (
                    <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                      <AlertCircle size={12} /> Please select gender.
                    </p>
                  )}
                </div>

                {/* 4. Parent/Guardian Name * */}
                <div>
                  <div
                    className={`relative flex items-center rounded-xl border bg-[#f8fafc] px-3.5 py-3 transition-colors ${
                      touched.parentName && !isParentNameValid
                        ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                        : 'border-slate-200/90 focus-within:border-brand-blue focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <User size={18} className="text-slate-400 shrink-0" aria-hidden="true" />
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('parentName')}
                      placeholder="Parent/Guardian Name *"
                      className="ml-3 w-full bg-transparent font-body text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
                  </div>
                  {touched.parentName && !isParentNameValid && (
                    <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                      <AlertCircle size={12} /> Minimum 3 characters required.
                    </p>
                  )}
                </div>

                {/* 5. Phone Number * (10-digits only) */}
                <div>
                  <div
                    className={`relative flex items-center rounded-xl border bg-[#f8fafc] px-3.5 py-3 transition-colors ${
                      touched.phone && !isPhoneValid
                        ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                        : 'border-slate-200/90 focus-within:border-brand-blue focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <Phone size={18} className="text-slate-400 shrink-0" aria-hidden="true" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onBlur={() => handleBlur('phone')}
                      placeholder="Phone Number (10 digits) *"
                      maxLength={10}
                      inputMode="numeric"
                      className="ml-3 w-full bg-transparent font-body text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
                    {formData.phone && (
                      <span className="text-[10px] text-slate-400 font-medium">
                        {formData.phone.length}/10
                      </span>
                    )}
                  </div>
                  {touched.phone && !isPhoneValid && (
                    <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                      <AlertCircle size={12} /> Must be a 10-digit number.
                    </p>
                  )}
                </div>

                {/* 6. Email Address (Optional) */}
                <div>
                  <div
                    className={`relative flex items-center rounded-xl border bg-[#f8fafc] px-3.5 py-3 transition-colors ${
                      touched.email && !isEmailValid
                        ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                        : 'border-slate-200/90 focus-within:border-brand-blue focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <Mail size={18} className="text-slate-400 shrink-0" aria-hidden="true" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="Email Address (Optional)"
                      className="ml-3 w-full bg-transparent font-body text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
                  </div>
                  {touched.email && !isEmailValid && (
                    <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                      <AlertCircle size={12} /> Please enter a valid email.
                    </p>
                  )}
                </div>
              </div>

              {/* 7. Residential Address (Full Width Textarea with MapPin Icon) */}
              <div>
                <div
                  className={`relative flex items-start rounded-xl border bg-[#f8fafc] px-3.5 py-3 transition-colors ${
                    touched.address && !isAddressValid
                      ? 'border-red-400 bg-red-50/40 ring-1 ring-red-200'
                      : 'border-slate-200/90 focus-within:border-brand-blue focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100'
                  }`}
                >
                  <MapPin size={18} className="text-slate-400 shrink-0 mt-1" aria-hidden="true" />
                  <textarea
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={() => handleBlur('address')}
                    placeholder="Residential Address *"
                    className="ml-3 w-full min-h-[90px] sm:min-h-[100px] resize-y bg-transparent font-body text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none leading-relaxed"
                  />
                </div>
                {touched.address && !isAddressValid && (
                  <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-red-500">
                    <AlertCircle size={12} /> Minimum 5 characters required for address.
                  </p>
                )}
              </div>

              {/* Submit Enquiry Button (Disabled until filled, shows loader & 15s timer) */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting || cooldown > 0}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-display text-sm sm:text-base font-bold transition-all duration-200 select-none ${
                    !isFormValid || cooldown > 0 || isSubmitting
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                      : 'bg-[#f0243c] text-white shadow-md shadow-red-500/20 hover:bg-[#d91b31] hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin text-white" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : cooldown > 0 ? (
                    <>
                      <Clock size={16} className="text-slate-400 animate-pulse" />
                      <span>Please wait {cooldown}s</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="-rotate-12" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ============================================================= */}
        {/* RIGHT COLUMN: Need Help with Admission?                       */}
        {/* ============================================================= */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 lg:p-6 xl:p-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.08)]">
          <div>
            {/* Header: Headset Icon + Title + Decreased Subheading Height */}
            <div className="flex items-start gap-3">
              <Headset size={26} className="text-[#0b2a7a] shrink-0 mt-0.5" strokeWidth={2.4} aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <h3 className="font-bubble text-xl sm:text-2xl font-black text-[#0b2a7a] tracking-tight leading-tight select-none break-words">
                  Need Help with Admission?
                </h3>
                <p className="mt-0.5 font-body text-xs sm:text-[13px] text-slate-500 leading-snug break-words">
                  Our admission team is here to help you.
                  <br />
                  Feel free to contact us for any queries.
                </p>
              </div>
            </div>

            {/* 3 Contact Info Cards Stack - Circle Icons aligned with Head Titles */}
            <div className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4">
              
              {/* 1. Call Us */}
              <div className="flex items-start gap-3.5 sm:gap-4 rounded-2xl border border-rose-100 bg-[#fff1f2] p-3.5 sm:p-4 transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#f0243c] text-white shadow-sm mt-0.5">
                  <Phone size={19} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-display text-sm sm:text-base font-bold text-[#0b2a7a] leading-tight">
                    Call Us
                  </h4>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 font-body text-xs sm:text-sm font-bold text-[#0b2a7a]">
                    <a href="tel:06478357274" className="hover:text-[#f0243c] transition-colors">
                      06478-357-274
                    </a>
                    <span className="text-[#0b2a7a]/40 select-none font-normal" aria-hidden="true">/</span>
                    <a href="tel:+918252256336" className="hover:text-[#f0243c] transition-colors">
                      +91 82522 56336
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. Email Us (Wraps naturally to next line without clipping or hiding) */}
              <div className="flex items-start gap-3.5 sm:gap-4 rounded-2xl border border-sky-100 bg-[#f0f9ff] p-3.5 sm:p-4 transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#1d6fe0] text-white shadow-sm mt-0.5">
                  <Mail size={19} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-display text-sm sm:text-base font-bold text-[#0b2a7a] leading-tight">
                    Email Us
                  </h4>
                  <div className="mt-1 space-y-1 font-body text-xs sm:text-[13px] md:text-sm font-semibold text-[#0b2a7a]">
                    <p className="leading-snug break-words">
                      <a href="mailto:Info@kidszonesaharsa.in" className="hover:text-[#1d6fe0] transition-colors">
                        Info@kidszonesaharsa.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Visit Our Office */}
              <div className="flex items-start gap-3.5 sm:gap-4 rounded-2xl border border-emerald-100 bg-[#f0fdf4] p-3.5 sm:p-4 transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-sm mt-0.5">
                  <MapPin size={19} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-display text-sm sm:text-base font-bold text-[#0b2a7a] leading-tight">
                    Visit Our Office
                  </h4>
                  <p className="mt-1 font-body text-xs sm:text-sm font-medium text-slate-700 leading-snug break-words">
                    Sidhi Priya House, Krishna Nagar,
                    <br />
                    Saharsa (Bihar) - 852201
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ============================================================= */}
      {/* PREMIUM MODAL POPUP: Success / Notice Feedback                */}
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
    </section>
  );
}
