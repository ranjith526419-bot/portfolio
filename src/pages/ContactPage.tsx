import React, { useState, useRef } from 'react';
import { ContactFormData, FormErrors } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';

interface ContactPageProps {
  onAnnounce: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onAnnounce }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    organization: '',
    inquiryType: 'audit',
    urgency: 'normal',
    message: '',
    needWcagAudit: true,
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@organization.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message description is required.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters detailing your inquiry.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must acknowledge the privacy and accessibility terms to continue.';
    }

    setErrors(newErrors);

    const errorCount = Object.keys(newErrors).length;
    if (errorCount > 0) {
      const summaryMsg = `Form submission failed with ${errorCount} error${errorCount > 1 ? 's' : ''}. Please review the error summary at the top of the form.`;
      onAnnounce(summaryMsg);
      setTimeout(() => {
        errorSummaryRef.current?.focus();
        errorSummaryRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const successMsg = `Thank you ${formData.fullName}. Your inquiry for ${formData.inquiryType} has been received. We will respond within 24 business hours.`;
      onAnnounce(successMsg);
      setTimeout(() => {
        successRef.current?.focus();
        successRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }, 800);
  };

  const focusField = (fieldId: string) => {
    const el = document.getElementById(fieldId);
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const maxMessageChars = 1000;
  const remainingChars = maxMessageChars - formData.message.length;

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Header Landmark */}
      <section aria-labelledby="contact-heading" className="space-y-4 border-b border-stone-200 dark:border-stone-800 pb-10">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
          DISPATCH & CORRESPONDENCE // 05
        </p>
        <h1
          id="contact-heading"
          className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-stone-900 dark:text-stone-100"
        >
          Initiate an <span className="italic font-serif text-stone-500 dark:text-stone-400">Accessibility Partnership</span>
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed font-light">
          Request an enterprise WCAG 2.2 AAA audit, architectural design system consultation, keynote speaking session, or technical workshop.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form Section */}
        <section
          aria-labelledby="form-section-heading"
          className="lg:col-span-8 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 sm:p-12 shadow-2xs"
        >
          <div className="border-b border-stone-100 dark:border-stone-800 pb-6 mb-8">
            <h2 id="form-section-heading" className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
              Consultation Inquiry Docket
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-1">
              Guaranteed 24h technical triage & assessment
            </p>
          </div>

          {/* Success Notification Alert */}
          {isSubmitted ? (
            <div
              ref={successRef}
              tabIndex={-1}
              role="alert"
              aria-live="polite"
              className="p-8 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 space-y-6 focus:outline-none focus:ring-4 focus:ring-stone-400"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-stone-900 dark:text-stone-100 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-2xl font-bold">Inquiry Docket Logged</h3>
                  <p className="text-xs font-mono text-stone-600 dark:text-stone-400 mt-0.5">
                    Confirmation dispatched to: <strong>{formData.email}</strong>
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-stone-900 rounded-xl text-xs space-y-2 font-mono text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800">
                <p><strong>Client:</strong> {formData.fullName} {formData.organization && `(${formData.organization})`}</p>
                <p><strong>Inquiry Type:</strong> {formData.inquiryType.toUpperCase()}</p>
                <p><strong>Response SLA:</strong> Within 24 business hours</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    organization: '',
                    inquiryType: 'audit',
                    urgency: 'normal',
                    message: '',
                    needWcagAudit: true,
                    consent: false,
                  });
                  setErrors({});
                  onAnnounce('Form reset for new submission.');
                }}
                className="px-6 py-3 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-stone-800 shadow-2xs"
              >
                Submit Another Consultation Inquiry
              </button>
            </div>
          ) : (
            <form
              id="contact-form"
              noValidate
              onSubmit={handleSubmit}
              className="space-y-8"
              aria-describedby="required-fields-note"
            >
              <p id="required-fields-note" className="text-xs font-mono text-stone-500 dark:text-stone-400">
                Fields marked with an asterisk (<span className="text-rose-600 font-bold" aria-hidden="true">*</span>) are mandatory.
              </p>

              {/* Accessible Error Summary Alert Box */}
              {Object.keys(errors).length > 0 && (
                <div
                  ref={errorSummaryRef}
                  tabIndex={-1}
                  role="alert"
                  aria-labelledby="error-summary-heading"
                  className="p-6 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-900 text-rose-900 dark:text-rose-200 space-y-3 focus:outline-none focus:ring-4 focus:ring-rose-400"
                >
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" aria-hidden="true" />
                    <h3 id="error-summary-heading" className="text-sm font-bold font-mono">
                      There are {Object.keys(errors).length} issues with your submission:
                    </h3>
                  </div>

                  <ol className="list-decimal list-inside space-y-1 text-xs font-mono">
                    {errors.fullName && (
                      <li>
                        <button
                          type="button"
                          onClick={() => focusField('full-name')}
                          className="font-bold underline hover:text-rose-950 dark:hover:text-white"
                        >
                          Full Name: {errors.fullName}
                        </button>
                      </li>
                    )}
                    {errors.email && (
                      <li>
                        <button
                          type="button"
                          onClick={() => focusField('email-address')}
                          className="font-bold underline hover:text-rose-950 dark:hover:text-white"
                        >
                          Email: {errors.email}
                        </button>
                      </li>
                    )}
                    {errors.message && (
                      <li>
                        <button
                          type="button"
                          onClick={() => focusField('message-content')}
                          className="font-bold underline hover:text-rose-950 dark:hover:text-white"
                        >
                          Message: {errors.message}
                        </button>
                      </li>
                    )}
                    {errors.consent && (
                      <li>
                        <button
                          type="button"
                          onClick={() => focusField('consent-checkbox')}
                          className="font-bold underline hover:text-rose-950 dark:hover:text-white"
                        >
                          Terms Consent: {errors.consent}
                        </button>
                      </li>
                    )}
                  </ol>
                </div>
              )}

              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="full-name"
                    className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400"
                  >
                    Full Name <span className="text-rose-600" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    name="fullName"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'full-name-error' : 'full-name-hint'}
                    placeholder="e.g. Jordan Miller"
                    className={`w-full px-4 py-3 text-sm rounded-lg bg-stone-50 dark:bg-stone-800 border text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? 'border-rose-600 focus:ring-rose-300'
                        : 'border-stone-300 dark:border-stone-700 focus:ring-stone-400'
                    }`}
                  />
                  <p id="full-name-hint" className="text-[11px] font-mono text-stone-400">
                    Your preferred personal or professional name.
                  </p>
                  {errors.fullName && (
                    <p id="full-name-error" className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                      ⚠ {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label
                    htmlFor="email-address"
                    className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400"
                  >
                    Contact Email <span className="text-rose-600" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    name="email"
                    required
                    inputMode="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : 'email-hint'}
                    placeholder="jordan@company.org"
                    className={`w-full px-4 py-3 text-sm rounded-lg bg-stone-50 dark:bg-stone-800 border text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-rose-600 focus:ring-rose-300'
                        : 'border-stone-300 dark:border-stone-700 focus:ring-stone-400'
                    }`}
                  />
                  <p id="email-hint" className="text-[11px] font-mono text-stone-400">
                    Encrypted and strictly confidential.
                  </p>
                  {errors.email && (
                    <p id="email-error" className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                      ⚠ {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Organization (Optional) */}
              <div className="space-y-2">
                <label
                  htmlFor="organization-name"
                  className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400"
                >
                  Organization / Company <span className="text-stone-400 text-xs font-normal font-sans">(Optional)</span>
                </label>
                <input
                  id="organization-name"
                  type="text"
                  name="organization"
                  autoComplete="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Acme Health Systems"
                  className="w-full px-4 py-3 text-sm rounded-lg bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400"
                />
              </div>

              {/* Fieldset: Inquiry Type Radio Group */}
              <fieldset className="border border-stone-200 dark:border-stone-800 rounded-2xl p-6 space-y-4">
                <legend className="px-3 text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500">
                  Primary Inquiry Focus <span className="text-rose-600" aria-hidden="true">*</span>
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { id: 'type-audit', value: 'audit', label: 'WCAG 2.2 AAA Audit' },
                    { id: 'type-consulting', value: 'consulting', label: 'Design System Architecture' },
                    { id: 'type-speaking', value: 'speaking', label: 'Keynote / Workshop' },
                    { id: 'type-collaboration', value: 'collaboration', label: 'Open Source Tooling' },
                    { id: 'type-general', value: 'general', label: 'Technical Inquiry' },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      htmlFor={opt.id}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-xs font-bold font-mono cursor-pointer transition-all ${
                        formData.inquiryType === opt.value
                          ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 shadow-2xs'
                          : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-750'
                      }`}
                    >
                      <input
                        type="radio"
                        id={opt.id}
                        name="inquiryType"
                        value={opt.value}
                        checked={formData.inquiryType === opt.value}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                        className="w-4 h-4 text-stone-900 focus:ring-stone-500"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Message Description */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="message-content"
                    className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400"
                  >
                    Project Scope & Objectives <span className="text-rose-600" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <span
                    id="char-countdown"
                    aria-live="polite"
                    className={`text-[11px] font-mono ${remainingChars < 50 ? 'text-rose-600 font-bold' : 'text-stone-400'}`}
                  >
                    {remainingChars} chars remaining
                  </span>
                </div>
                <textarea
                  id="message-content"
                  name="message"
                  required
                  rows={5}
                  maxLength={maxMessageChars}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error char-countdown' : 'message-hint char-countdown'}
                  placeholder="Describe your current application architecture, key deadlines, regulatory targets (e.g. European Accessibility Act / Section 508), or desired workshop topics..."
                  className={`w-full px-4 py-3 text-sm rounded-lg bg-stone-50 dark:bg-stone-800 border text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 ${
                    errors.message
                      ? 'border-rose-600 focus:ring-rose-300'
                      : 'border-stone-300 dark:border-stone-700 focus:ring-stone-400'
                  }`}
                />
                <p id="message-hint" className="text-[11px] font-mono text-stone-400">
                  Minimum 15 characters.
                </p>
                {errors.message && (
                  <p id="message-error" className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                    ⚠ {errors.message}
                  </p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="space-y-2 p-5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <div className="flex items-start gap-3">
                  <input
                    id="consent-checkbox"
                    type="checkbox"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    aria-required="true"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    className="w-4 h-4 mt-0.5 text-stone-900 rounded-sm focus:ring-stone-500"
                  />
                  <label htmlFor="consent-checkbox" className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed cursor-pointer font-light">
                    I acknowledge that the information provided will be used exclusively to process this technical inquiry in accordance with accessibility and data privacy standards. <span className="text-rose-600" aria-hidden="true">*</span>
                  </label>
                </div>
                {errors.consent && (
                  <p id="consent-error" className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 pl-7">
                    ⚠ {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 font-bold text-xs uppercase tracking-[0.2em] shadow-2xs transition-all focus:outline-none focus:ring-4 focus:ring-stone-400 disabled:opacity-70"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} aria-hidden="true" />
                  <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Consultation Request'}</span>
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Aside: Contact Details & SLA */}
        <aside
          aria-labelledby="aside-contact-heading"
          className="lg:col-span-4 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 space-y-6 shadow-2xs"
        >
          <h2 id="aside-contact-heading" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            Direct Communication
          </h2>

          <address className="not-italic space-y-4 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 shrink-0 border border-stone-200 dark:border-stone-700">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="block font-bold text-stone-900 dark:text-stone-100 font-mono text-xs uppercase tracking-wider">Direct Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-stone-900 dark:text-stone-100 hover:underline font-mono text-xs"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 shrink-0 border border-stone-200 dark:border-stone-700">
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="block font-bold text-stone-900 dark:text-stone-100 font-mono text-xs uppercase tracking-wider">Location</span>
                <span className="font-mono text-xs">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 shrink-0 border border-stone-200 dark:border-stone-700">
                <Clock className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="block font-bold text-stone-900 dark:text-stone-100 font-mono text-xs uppercase tracking-wider">Response SLA</span>
                <span className="font-mono text-xs">Under 24 hours on standard business days.</span>
              </div>
            </div>
          </address>

          {/* Guarantee Card */}
          <div className="p-5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold font-mono text-stone-900 dark:text-stone-100">
              <ShieldCheck className="w-4 h-4 text-stone-900 dark:text-stone-100" />
              <span>Full WCAG AAA Guarantee</span>
            </div>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              All architectural recommendations and audit findings are backed by IAAP certifications and Section 508 legal standards.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
