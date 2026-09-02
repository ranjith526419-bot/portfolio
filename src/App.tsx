/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Project, A11ySettings } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { SkipLinks } from './components/SkipLinks';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { A11yAuditor } from './components/A11yAuditor';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { WritingPage } from './pages/WritingPage';
import { ContactPage } from './pages/ContactPage';
import { A11yStatementPage } from './pages/A11yStatementPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isA11yToolbarOpen, setIsA11yToolbarOpen] = useState(false);
  
  // Screen Reader Live Announcement log
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [liveAnnouncement, setLiveAnnouncement] = useState('');

  // Accessibility Settings state
  const [a11ySettings, setA11ySettings] = useState<A11ySettings>({
    highContrast: false,
    fontSize: 'normal',
    dyslexicFont: false,
    reducedMotion: false,
    showSemantics: false,
    screenReaderLogs: true,
  });

  // Announce messages to screen reader live region
  const announceToScreenReader = (message: string) => {
    setLiveAnnouncement(message);
    setAnnouncements((prev) => [message, ...prev].slice(0, 15));
  };

  // Sync route from URL Hash on mount & popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'projects', 'experience', 'writing', 'contact', 'statement'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title and URL hash when page changes
  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: `${PERSONAL_INFO.name} — Senior Accessibility Engineer & Full-Stack Architect`,
      about: `About & Accessibility Philosophy — ${PERSONAL_INFO.name}`,
      projects: `Case Studies & WCAG 2.2 AAA Audits — ${PERSONAL_INFO.name}`,
      experience: `Career Timeline & Resume — ${PERSONAL_INFO.name}`,
      writing: `Articles & Engineering Guides — ${PERSONAL_INFO.name}`,
      contact: `Consultation & Contact Form — ${PERSONAL_INFO.name}`,
      statement: `Accessibility Statement — ${PERSONAL_INFO.name}`,
    };

    document.title = pageTitles[currentPage] || PERSONAL_INFO.name;
    window.history.replaceState(null, '', `#${currentPage}`);
  }, [currentPage]);

  // Apply A11y classes to body element
  useEffect(() => {
    const body = document.body;

    // High contrast
    if (a11ySettings.highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    // Dyslexic font
    if (a11ySettings.dyslexicFont) {
      body.classList.add('dyslexic-font');
    } else {
      body.classList.remove('dyslexic-font');
    }

    // Reduced motion
    if (a11ySettings.reducedMotion) {
      body.classList.add('reduce-motion');
    } else {
      body.classList.remove('reduce-motion');
    }

    // Semantic landmark highlights
    if (a11ySettings.showSemantics) {
      body.classList.add('show-semantics');
    } else {
      body.classList.remove('show-semantics');
    }

    // Font size
    body.classList.remove('text-base', 'text-lg', 'text-xl');
    if (a11ySettings.fontSize === 'large') {
      body.style.fontSize = '115%';
    } else if (a11ySettings.fontSize === 'xlarge') {
      body.style.fontSize = '130%';
    } else {
      body.style.fontSize = '100%';
    }
  }, [a11ySettings]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: a11ySettings.reducedMotion ? 'auto' : 'smooth' });
    announceToScreenReader(`Navigated to ${page.toUpperCase()} page.`);
  };

  const handleUpdateSettings = (newSettings: Partial<A11ySettings>) => {
    setA11ySettings((prev) => {
      const updated = { ...prev, ...newSettings };
      announceToScreenReader('Accessibility display settings updated.');
      return updated;
    });
  };

  const handleResetSettings = () => {
    setA11ySettings({
      highContrast: false,
      fontSize: 'normal',
      dyslexicFont: false,
      reducedMotion: false,
      showSemantics: false,
      screenReaderLogs: true,
    });
    announceToScreenReader('Reset all accessibility preferences to default.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* 1. Accessible Skip Navigation Links */}
      <SkipLinks onNavigate={handleNavigate} />

      {/* 2. ARIA Live Regions for Screen Reader Announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="a11y-live-status"
      >
        {liveAnnouncement}
      </div>

      {/* 3. Semantic Header Landmark */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAudit={() => {
          setIsAuditModalOpen(true);
          announceToScreenReader('Opened WCAG 2.2 and Lighthouse Audit Inspector modal.');
        }}
        a11ySettings={a11ySettings}
        onToggleA11yToolbar={() => {
          setIsA11yToolbarOpen(!isA11yToolbarOpen);
          announceToScreenReader(
            !isA11yToolbarOpen
              ? 'Opened Accessibility Settings drawer.'
              : 'Closed Accessibility Settings drawer.'
          );
        }}
        isA11yToolbarOpen={isA11yToolbarOpen}
      />

      {/* 4. Semantic Main Content Landmark */}
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 focus:outline-none"
      >
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={(project) => {
              setSelectedProject(project);
              setCurrentPage('projects');
              announceToScreenReader(`Navigated to projects and selected ${project.title}`);
            }}
            onAnnounce={announceToScreenReader}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'projects' && (
          <ProjectsPage
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
            onAnnounce={announceToScreenReader}
          />
        )}

        {currentPage === 'experience' && (
          <ExperiencePage
            onNavigate={handleNavigate}
            onAnnounce={announceToScreenReader}
          />
        )}

        {currentPage === 'writing' && <WritingPage onAnnounce={announceToScreenReader} />}

        {currentPage === 'contact' && <ContactPage onAnnounce={announceToScreenReader} />}

        {currentPage === 'statement' && <A11yStatementPage onNavigate={handleNavigate} />}
      </main>

      {/* 5. Semantic Footer Landmark */}
      <Footer onNavigate={handleNavigate} />

      {/* 6. Floating Accessibility Preferences Controls Drawer */}
      <AccessibilityToolbar
        isOpen={isA11yToolbarOpen}
        onClose={() => setIsA11yToolbarOpen(false)}
        settings={a11ySettings}
        onUpdateSettings={handleUpdateSettings}
        onResetSettings={handleResetSettings}
        announcementLogs={announcements}
      />

      {/* 7. Live Lighthouse & WCAG 2.2 AAA Audit Inspector Modal */}
      <A11yAuditor
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onToggleSemantics={() =>
          handleUpdateSettings({ showSemantics: !a11ySettings.showSemantics })
        }
        isSemanticsActive={a11ySettings.showSemantics}
      />
    </div>
  );
}
