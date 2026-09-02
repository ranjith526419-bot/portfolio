import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Twitter, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const header = document.getElementById('site-header');
    if (header) {
      header.focus();
    }
  };

  return (
    <footer
      role="contentinfo"
      id="site-footer"
      className="bg-[#fafaf9] dark:bg-stone-950 text-stone-800 dark:text-stone-200 border-t border-stone-200 dark:border-stone-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16 mb-12">
          {/* Col 1: Bio & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif italic font-bold text-2xl text-stone-900 dark:text-stone-100 tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                / FOLIO
              </span>
            </div>
            <p className="text-stone-600 dark:text-stone-400 text-sm max-w-md leading-relaxed font-light">
              Architecting radically inclusive, high-performance web experiences built upon strict HTML5 semantic landmarks, WCAG 2.2 AAA accessibility standards, and editorial typography.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-900 dark:text-stone-100" aria-hidden="true" />
              <span>WCAG 2.2 AAA Conformance Verified</span>
            </div>
          </div>

          {/* Col 2: Semantic Sitemap */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
              Navigation Sitemap
            </h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2 text-xs uppercase tracking-wider font-medium">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors focus:outline-none focus:underline"
                  >
                    Home Overview
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('about')}
                    className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors focus:outline-none focus:underline"
                  >
                    About & Philosophy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('projects')}
                    className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors focus:outline-none focus:underline"
                  >
                    Case Studies & Audits
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('experience')}
                    className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors focus:outline-none focus:underline"
                  >
                    Career Experience
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('writing')}
                    className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors focus:outline-none focus:underline"
                  >
                    Articles & Guides
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('statement')}
                    className="text-stone-900 dark:text-stone-100 font-bold transition-colors focus:outline-none focus:underline"
                  >
                    Accessibility Statement
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Col 3: Semantic Address & Socials */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
              Contact Channels
            </h3>
            <address className="not-italic space-y-2 text-xs text-stone-500 dark:text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" aria-hidden="true" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-stone-900 dark:hover:text-stone-100 focus:underline font-mono"
                  aria-label={`Send email to ${PERSONAL_INFO.email}`}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </address>

            <div className="pt-2">
              <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500 mb-2">
                Social Profiles
              </span>
              <ul className="flex items-center space-x-2" aria-label="Social media profiles">
                <li>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-stone-100 dark:bg-stone-900 hover:bg-stone-900 hover:text-stone-50 text-stone-600 dark:text-stone-300 dark:hover:bg-stone-100 dark:hover:text-stone-900 rounded-lg flex items-center justify-center transition-colors border border-stone-200 dark:border-stone-800"
                    aria-label="Alex Morgan on GitHub (opens in new browser tab)"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-stone-100 dark:bg-stone-900 hover:bg-stone-900 hover:text-stone-50 text-stone-600 dark:text-stone-300 dark:hover:bg-stone-100 dark:hover:text-stone-900 rounded-lg flex items-center justify-center transition-colors border border-stone-200 dark:border-stone-800"
                    aria-label="Alex Morgan on LinkedIn (opens in new browser tab)"
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-stone-100 dark:bg-stone-900 hover:bg-stone-900 hover:text-stone-50 text-stone-600 dark:text-stone-300 dark:hover:bg-stone-100 dark:hover:text-stone-900 rounded-lg flex items-center justify-center transition-colors border border-stone-200 dark:border-stone-800"
                    aria-label="Alex Morgan on Twitter (opens in new browser tab)"
                  >
                    <Twitter className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Top Jump */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
          <p className="font-mono text-[11px]">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with semantic HTML5 & WCAG 2.2 AAA standards.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400"
            aria-label="Back to top of page"
          >
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
