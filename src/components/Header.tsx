import React, { useState, useEffect, useRef } from 'react';
import { PageId, A11ySettings } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Sliders, CheckCircle, ShieldCheck, Eye } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAudit: () => void;
  a11ySettings: A11ySettings;
  onToggleA11yToolbar: () => void;
  isA11yToolbarOpen: boolean;
}

const NAV_ITEMS: { id: PageId; label: string; description: string }[] = [
  { id: 'home', label: 'Home', description: 'Overview and featured highlights' },
  { id: 'about', label: 'About', description: 'Biography, background, and accessibility philosophy' },
  { id: 'projects', label: 'Case Studies', description: 'Interactive accessible engineering projects' },
  { id: 'experience', label: 'Experience', description: 'Career timeline, achievements, and resume' },
  { id: 'writing', label: 'Articles', description: 'Guides on WCAG 2.2 and HTML5 standards' },
  { id: 'contact', label: 'Contact', description: 'Accessible inquiry and consultation form' },
];

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenAudit,
  a11ySettings,
  onToggleA11yToolbar,
  isA11yToolbarOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    // Focus main content on navigation
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <header
      role="banner"
      id="site-header"
      className="sticky top-0 z-40 bg-[#fafaf9]/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand / Logo */}
          <div className="flex items-center space-x-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="group flex items-baseline gap-2.5 p-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 dark:focus-visible:ring-stone-100"
              aria-label={`${PERSONAL_INFO.name}, go to homepage`}
            >
              <span className="text-2xl sm:text-3xl font-serif italic font-black tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-stone-400">
                / A11Y ARCHITECT
              </span>
            </a>
          </div>

          {/* Desktop Primary Navigation */}
          <nav
            id="primary-nav"
            role="navigation"
            aria-label="Primary Navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-4"
          >
            <ul className="flex items-center gap-6 lg:gap-8 font-medium text-[11px] uppercase tracking-[0.25em]" role="menubar">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <li key={item.id} role="none">
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => handleNavClick(item.id)}
                      aria-current={isActive ? 'page' : undefined}
                      aria-description={item.description}
                      className={`relative py-1.5 transition-all duration-150 focus:outline-none ${
                        isActive
                          ? 'text-stone-900 dark:text-stone-100 font-bold'
                          : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span
                          className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-stone-900 dark:bg-stone-100"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Accessibility & Audit Toolkit Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Live Audit Modal Trigger */}
            <button
              type="button"
              id="audit-trigger-btn"
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors shadow-2xs"
              aria-label="View live WCAG 2.2 and Lighthouse Audit Score of this website (100/100 score)"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-stone-900 dark:text-stone-100" aria-hidden="true" />
              <span className="hidden sm:inline text-[10px] uppercase font-bold tracking-wider">WCAG 2.2</span>
              <span className="bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-mono text-[10px] px-1.5 py-0.2 rounded font-bold">
                100/100
              </span>
            </button>

            {/* Accessibility Preferences Toolbar Toggle */}
            <button
              type="button"
              id="a11y-toolkit"
              onClick={onToggleA11yToolbar}
              aria-expanded={isA11yToolbarOpen}
              aria-controls="a11y-preferences-drawer"
              aria-label={
                isA11yToolbarOpen
                  ? 'Close Accessibility Controls Panel'
                  : 'Open Accessibility Controls Panel (High contrast, font size, dyslexic font)'
              }
              className={`p-2 sm:px-3 sm:py-1.5 text-xs font-medium rounded-lg border flex items-center gap-1.5 transition-colors ${
                isA11yToolbarOpen
                  ? 'bg-stone-900 text-stone-50 border-stone-900 dark:bg-stone-100 dark:text-stone-900'
                  : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-200 border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden md:inline font-bold uppercase text-[10px] tracking-wider">Settings</span>
              {a11ySettings.highContrast && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-label="(High Contrast active)" />
              )}
            </button>

            {/* Mobile Navigation Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              className="md:hidden p-2 rounded-lg text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden bg-[#fafaf9] dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4"
        >
          <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
              Site Navigation
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 p-1 font-mono"
            >
              Close (Esc)
            </button>
          </div>
          <nav aria-label="Mobile Primary Navigation">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-between ${
                        isActive
                          ? 'bg-stone-900 text-stone-50 font-bold dark:bg-stone-100 dark:text-stone-900'
                          : 'text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800'
                      }`}
                    >
                      <span className="uppercase text-xs tracking-wider">{item.label}</span>
                      {isActive && <CheckCircle className="w-4 h-4" aria-hidden="true" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
