import React from 'react';
import { PageId } from '../types';

interface SkipLinksProps {
  onNavigate: (page: PageId) => void;
}

export const SkipLinks: React.FC<SkipLinksProps> = ({ onNavigate }) => {
  return (
    <div className="relative" role="region" aria-label="Skip navigation links">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-5 focus:py-3 focus:bg-stone-900 focus:text-stone-50 focus:font-medium focus:uppercase focus:text-xs focus:tracking-widest focus:rounded-lg focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-stone-400 transition-transform duration-150"
      >
        Skip to main content
      </a>
      <a
        href="#primary-nav"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-48 focus:z-[100] focus:px-5 focus:py-3 focus:bg-stone-900 focus:text-stone-50 focus:font-medium focus:uppercase focus:text-xs focus:tracking-widest focus:rounded-lg focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-stone-400 transition-transform duration-150"
      >
        Skip to primary navigation
      </a>
      <button
        type="button"
        onClick={() => {
          onNavigate('contact');
          setTimeout(() => {
            const formElem = document.getElementById('contact-form');
            if (formElem) {
              formElem.focus();
              formElem.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-[360px] focus:z-[100] focus:px-5 focus:py-3 focus:bg-stone-900 focus:text-stone-50 focus:font-medium focus:uppercase focus:text-xs focus:tracking-widest focus:rounded-lg focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-stone-400 transition-transform duration-150"
      >
        Skip to contact form
      </button>
      <a
        href="#a11y-toolkit"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-[540px] focus:z-[100] focus:px-5 focus:py-3 focus:bg-stone-900 focus:text-stone-50 focus:font-medium focus:uppercase focus:text-xs focus:tracking-widest focus:rounded-lg focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-stone-400 transition-transform duration-150"
      >
        Skip to accessibility toolkit
      </a>
    </div>
  );
};
