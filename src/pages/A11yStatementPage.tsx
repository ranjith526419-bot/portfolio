import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, CheckCircle2, FileText, ArrowRight, HelpCircle } from 'lucide-react';

interface A11yStatementPageProps {
  onNavigate: (page: PageId) => void;
}

export const A11yStatementPage: React.FC<A11yStatementPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24 max-w-4xl mx-auto">
      {/* Header Landmark */}
      <section aria-labelledby="statement-heading" className="space-y-4 border-b border-stone-200 dark:border-stone-800 pb-10">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
          W3C / WAI CONFORMANCE DISCLOSURE // 06
        </p>
        <h1
          id="statement-heading"
          className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-stone-900 dark:text-stone-100"
        >
          Accessibility <span className="italic font-serif text-stone-500 dark:text-stone-400">Statement</span>
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 leading-relaxed font-light">
          {PERSONAL_INFO.name} is committed to ensuring digital accessibility for people with visual, auditory, motor, cognitive, and speech disabilities.
        </p>
      </section>

      {/* Formal W3C Conformance Sections */}
      <article className="space-y-12 text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-light">
        <section aria-labelledby="conformance-status" className="space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
            SECTION 01
          </span>
          <h2 id="conformance-status" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            Conformance Status
          </h2>
          <p className="text-base">
            The <strong>Web Content Accessibility Guidelines (WCAG)</strong> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
          </p>
          <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-stone-900 dark:text-stone-100 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-stone-900 dark:text-stone-100 text-sm font-mono">
                This portfolio website is strictly conformant with WCAG 2.2 Level AAA.
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                Strictly conformant means that 100% of the content conforms to all accessibility standards without exceptions.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="technical-specs" className="space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
            SECTION 02
          </span>
          <h2 id="technical-specs" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            Technical Specifications
          </h2>
          <p className="text-base">
            Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 font-mono text-xs text-stone-800 dark:text-stone-200">
            <li>HTML5 Semantic Landmarks (WHATWG Living Standard)</li>
            <li>WAI-ARIA 1.2 / 1.3 Roles, States, and Live Regions</li>
            <li>CSS3 Custom Properties & WCAG 2.2 AAA Focus Indicators</li>
            <li>ECMAScript / TypeScript Accessible Event Listeners</li>
          </ul>
        </section>

        <section aria-labelledby="measures" className="space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
            SECTION 03
          </span>
          <h2 id="measures" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            Accessibility Measures Taken
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Skip Links & Tab Order', desc: 'Bypass blocks to skip straight to main content or forms.' },
              { title: 'High-Contrast Focus Rings', desc: '3px minimum high-contrast indicators across all interactive elements.' },
              { title: 'Screen Reader Live Regions', desc: 'Polite narration alerts on form validation and asynchronous state changes.' },
              { title: 'Dyslexia & Motion Controls', desc: 'Custom typeface adjustments and prefers-reduced-motion support.' },
            ].map((m, i) => (
              <div key={i} className="p-5 rounded-xl bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-800">
                <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100">{m.title}</h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1.5 font-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="feedback" className="space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
            SECTION 04
          </span>
          <h2 id="feedback" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            Feedback & Contact
          </h2>
          <p className="text-base">
            We welcome your feedback on the accessibility of this site. If you encounter accessibility barriers, please let us know:
          </p>
          <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div>
              <p className="font-mono font-bold text-stone-900 dark:text-stone-100 text-xs">
                Email: {PERSONAL_INFO.email}
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                We try to respond to accessibility feedback within 1 business day.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-lg font-mono uppercase tracking-widest text-xs font-bold hover:bg-stone-800 shadow-2xs"
            >
              Open Contact Form
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};
