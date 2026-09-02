import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Compass, 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. Page Header Landmark */}
      <section aria-labelledby="about-heading" className="space-y-4 border-b border-stone-200 dark:border-stone-800 pb-10">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
          BIOGRAPHY & PHILOSOPHY // 01
        </p>
        <h1
          id="about-heading"
          className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-stone-900 dark:text-stone-100"
        >
          Engineering the Web for Every <span className="italic font-serif text-stone-500 dark:text-stone-400">Human Mind & Body</span>
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed font-light">
          Lead Accessibility Engineer and Principal Frontend Architect dedicated to building digital environments that eliminate barriers. With over a decade of experience across public sector civic tech, fintech, and design systems, I turn accessibility from a post-launch audit chore into an upfront competitive advantage.
        </p>
      </section>

      {/* 2. Core Philosophy Articles */}
      <section aria-labelledby="philosophy-heading" className="space-y-8">
        <h2
          id="philosophy-heading"
          className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-stone-400 dark:text-stone-500 flex items-center gap-4 w-full"
        >
          <span>Core Engineering Axioms</span>
          <span className="h-[1px] flex-1 bg-stone-200 dark:bg-stone-800" aria-hidden="true" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article
            aria-labelledby="principle-1"
            className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-4"
          >
            <span className="text-[10px] font-mono text-stone-400 block">
              AXIOM // 01
            </span>
            <h3 id="principle-1" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              The First Rule of ARIA is Native HTML5
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              If a native HTML5 element exists (like <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 py-0.5 rounded">&lt;button&gt;</code>, <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 py-0.5 rounded">&lt;dialog&gt;</code>, or <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 py-0.5 rounded">&lt;fieldset&gt;</code>), use it. Native elements convey semantics, focusability, and keyboard interactions with zero script overhead and maximum reliability.
            </p>
          </article>

          <article
            aria-labelledby="principle-2"
            className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-4"
          >
            <span className="text-[10px] font-mono text-stone-400 block">
              AXIOM // 02
            </span>
            <h3 id="principle-2" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              Design for the Keyboard First
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              A mouse is only one of many input modalities. If an experience cannot be operated smoothly via Tab, Shift+Tab, Arrow keys, and Space/Enter with unambiguous high-contrast focus rings, it is broken.
            </p>
          </article>

          <article
            aria-labelledby="principle-3"
            className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-4"
          >
            <span className="text-[10px] font-mono text-stone-400 block">
              AXIOM // 03
            </span>
            <h3 id="principle-3" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              Shift Accessibility Left into CI/CD
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              Automate the baseline with static AST linters, unit-level Axe tests, and synthetic screen-reader runs so developers catch regressions at code-review time, not during customer support crises.
            </p>
          </article>
        </div>
      </section>

      {/* 3. Credentials & Certifications */}
      <section aria-labelledby="certifications-heading" className="space-y-8">
        <h2
          id="certifications-heading"
          className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-stone-400 dark:text-stone-500 flex items-center gap-4 w-full"
        >
          <span>Accreditations & Credentials</span>
          <span className="h-[1px] flex-1 bg-stone-200 dark:bg-stone-800" aria-hidden="true" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERSONAL_INFO.certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 flex items-start gap-4 shadow-2xs"
            >
              <div className="p-3 rounded-xl bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shrink-0 border border-stone-200 dark:border-stone-700">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                  {cert.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                  {cert.issuer} • Class of {cert.year}
                </p>
                <span className="inline-block text-[10px] font-mono uppercase font-bold text-stone-700 dark:text-stone-300 bg-stone-200 dark:bg-stone-800 px-2 py-0.5 rounded mt-1">
                  Active Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Assistive Technology Testing Lab Environment */}
      <section aria-labelledby="testing-lab-heading" className="p-8 sm:p-10 rounded-2xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
            TESTING MATRIX INFRASTRUCTURE
          </span>
          <h2 id="testing-lab-heading" className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Hardware & Screen Reader Test Environment
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
            All design systems and architectures are verified on real physical hardware with standard screen reader combinations:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-bold block pb-2 border-b border-stone-100 dark:border-stone-800">
              Windows Matrix
            </span>
            <ul className="text-xs text-stone-600 dark:text-stone-300 space-y-1.5 font-light">
              <li>• NVDA with Google Chrome</li>
              <li>• JAWS 2025 with MS Edge</li>
              <li>• Windows High Contrast Mode</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-bold block pb-2 border-b border-stone-100 dark:border-stone-800">
              macOS / iOS Matrix
            </span>
            <ul className="text-xs text-stone-600 dark:text-stone-300 space-y-1.5 font-light">
              <li>• VoiceOver with Safari (macOS)</li>
              <li>• VoiceOver with Mobile Safari (iOS)</li>
              <li>• Full Keyboard Access mode</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-bold block pb-2 border-b border-stone-100 dark:border-stone-800">
              Android & ChromeOS
            </span>
            <ul className="text-xs text-stone-600 dark:text-stone-300 space-y-1.5 font-light">
              <li>• TalkBack with Android Chrome</li>
              <li>• ChromeVox on ChromeOS</li>
              <li>• Magnification & Large Cursor</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-bold block pb-2 border-b border-stone-100 dark:border-stone-800">
              Alternative Inputs
            </span>
            <ul className="text-xs text-stone-600 dark:text-stone-300 space-y-1.5 font-light">
              <li>• Single & Dual Switch Hardware</li>
              <li>• Eye Gaze & Head Pointer</li>
              <li>• Dragon Voice dictation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Education */}
      <section aria-labelledby="education-heading" className="space-y-6">
        <h2
          id="education-heading"
          className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-stone-400 dark:text-stone-500 flex items-center gap-4 w-full"
        >
          <span>Formal Education</span>
          <span className="h-[1px] flex-1 bg-stone-200 dark:bg-stone-800" aria-hidden="true" />
        </h2>
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              B.S. in Computer Science (HCI Focus)
            </h3>
            <span className="font-mono text-xs text-stone-400">
              Stanford University • 2013 – 2017
            </span>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
            Center for Human-Centered Artificial Intelligence & Accessibility Research
          </p>
          <p className="text-sm text-stone-600 dark:text-stone-300 pt-2 font-light leading-relaxed">
            Undergraduate Honors Thesis: <em>"Automated Syntactic Transformation of Arbitrary Web Components into WAI-ARIA Accessible Primitives"</em>
          </p>
        </div>
      </section>

      {/* Next Step Callout */}
      <div className="pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-wrap gap-4 items-center justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            Ready to inspect live case studies?
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
            Explore architectural breakdowns, keyboard matrices, and audits.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('projects')}
          className="px-6 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 font-bold text-xs uppercase tracking-[0.2em] transition-colors focus:outline-none focus:ring-4 focus:ring-stone-400"
        >
          View Case Studies & Audits
        </button>
      </div>
    </div>
  );
};
