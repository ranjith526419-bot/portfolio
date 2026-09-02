import React, { useState } from 'react';
import { PageId } from '../types';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Download, 
  FileText, 
  Printer, 
  Award,
  Sparkles
} from 'lucide-react';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
  onAnnounce: (msg: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({
  onNavigate,
  onAnnounce,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadResume = () => {
    // Generate accessible plain-text resume
    const textContent = `
========================================================================
ALEX MORGAN — RESUME
Lead Accessibility Engineer & Principal Frontend Architect
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
Website: https://alexmorgan.dev
========================================================================

CERTIFICATIONS:
${PERSONAL_INFO.certifications.map((c) => `- ${c.title} (${c.issuer}, ${c.year})`).join('\n')}

SUMMARY:
Staff-level accessibility architect and frontend engineer with 10+ years 
building WCAG 2.2 AAA compliant systems, high-scale design system component 
libraries, and public civic tech portals.

EXPERIENCE:

${EXPERIENCES.map(
  (exp) => `
------------------------------------------------------------------------
${exp.role.toUpperCase()}
${exp.company} | ${exp.location} | ${exp.period}
------------------------------------------------------------------------
${exp.summary}

Key Accomplishments:
${exp.achievements.map((a) => `* ${a}`).join('\n')}

Technologies: ${exp.technologies.join(', ')}
`
).join('\n')}

EDUCATION:
B.S. in Computer Science (HCI Focus), Stanford University (2013 - 2017)
========================================================================
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Alex-Morgan-Accessible-Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    const msg = 'Accessible plain-text resume downloaded successfully.';
    onAnnounce(msg);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  const handlePrint = () => {
    window.print();
    onAnnounce('Print dialog opened.');
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Header Landmark */}
      <section aria-labelledby="experience-heading" className="space-y-4 border-b border-stone-200 dark:border-stone-800 pb-10">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
          CAREER TRAJECTORY & CHRONOLOGY // 03
        </p>
        <h1
          id="experience-heading"
          className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-stone-900 dark:text-stone-100"
        >
          Staff Leadership & <span className="italic font-serif text-stone-500 dark:text-stone-400">Architecture Milestones</span>
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed font-light">
          Over a decade of driving accessibility transformation across large-scale engineering organizations, authoring enterprise standards, and eliminating systemic digital barriers.
        </p>

        {/* Resume Actions */}
        <div className="pt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-2xs focus:ring-2 focus:ring-stone-400"
            aria-label="Download accessible plain-text resume file"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Download Resume (.txt)</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs font-mono uppercase tracking-wider font-bold border border-stone-300 dark:border-stone-700 transition-colors"
            aria-label="Print or save as PDF format"
          >
            <Printer className="w-4 h-4" aria-hidden="true" />
            <span>Printable View</span>
          </button>

          {downloadSuccess && (
            <span
              role="status"
              aria-live="polite"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 font-mono"
            >
              <CheckCircle2 className="w-4 h-4 text-stone-900 dark:text-stone-100" aria-hidden="true" />
              <span>Resume file downloaded!</span>
            </span>
          )}
        </div>
      </section>

      {/* Semantic Timeline Ordered List */}
      <section aria-labelledby="timeline-heading" className="space-y-6">
        <h2 id="timeline-heading" className="sr-only">
          Chronological Work History
        </h2>

        <ol className="space-y-12 relative before:absolute before:inset-0 before:left-3.5 before:w-[1px] before:bg-stone-200 dark:before:bg-stone-800">
          {EXPERIENCES.map((exp, idx) => (
            <li
              key={exp.id}
              className="relative pl-10 space-y-3"
            >
              {/* Node indicator */}
              <div
                className={`absolute left-2 top-2 w-3.5 h-3.5 rounded-full border-2 ${
                  exp.isCurrent
                    ? 'bg-stone-900 border-white dark:bg-stone-100 dark:border-stone-950 ring-4 ring-stone-200 dark:ring-stone-800'
                    : 'bg-stone-400 border-white dark:border-stone-900'
                }`}
                aria-hidden="true"
              />

              <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 space-y-6 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-stone-400 block mb-1">
                      POSITION // 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-600 dark:text-stone-400 mt-1">
                      <span className="font-bold text-stone-900 dark:text-stone-200">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" aria-hidden="true" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono text-xs self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <time dateTime={exp.startDate}>{exp.period}</time>
                  </div>
                </div>

                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                  {exp.summary}
                </p>

                {/* Key Accomplishments */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
                    Architectural Milestones & Outcomes
                  </h4>
                  <ul className="space-y-2" aria-label={`Accomplishments at ${exp.company}`}>
                    {exp.achievements.map((ach, aIdx) => (
                      <li
                        key={aIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-stone-900 dark:text-stone-100 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="pt-2">
                  <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies used at ${exp.company}`}>
                    {exp.technologies.map((t, i) => (
                      <li
                        key={i}
                        className="text-[10px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-2 py-0.5 rounded"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};
