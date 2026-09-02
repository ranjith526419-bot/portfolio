import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { 
  FolderGit2, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  X,
  Code2,
  Sparkles
} from 'lucide-react';

interface ProjectsPageProps {
  selectedProject: Project | null;
  onSelectProject: (project: Project | null) => void;
  onAnnounce: (msg: string) => void;
}

const CATEGORIES = ['All', 'Design Systems', 'Web Apps', 'Audits & Tooling', 'Open Source'] as const;

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  selectedProject,
  onSelectProject,
  onAnnounce,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onAnnounce(`Filtered case studies by category: ${category}. Found ${
      category === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === category).length
    } results.`);
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Header Landmark */}
      <section aria-labelledby="projects-heading" className="space-y-4 border-b border-stone-200 dark:border-stone-800 pb-10">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
          CASE STUDIES & COMPONENT PORTFOLIO // 02
        </p>
        <h1
          id="projects-heading"
          className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-stone-900 dark:text-stone-100"
        >
          Engineered for <span className="italic font-serif text-stone-500 dark:text-stone-400">100% WCAG 2.2 AAA</span> Conformance
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed font-light">
          Explore production design systems, public sector portals, and static telemetry analysis tools built with strict adherence to WHATWG semantic landmarks, keyboard mechanics, and assistive technology compatibility.
        </p>

        {/* Filters & Search Controls */}
        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          {/* Category Tabs */}
          <div
            role="group"
            aria-label="Filter case studies by domain category"
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                    isSelected
                      ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 shadow-2xs'
                      : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <label htmlFor="project-search" className="sr-only">
              Search case studies by title, summary or tech stack
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Search className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              id="project-search"
              type="search"
              placeholder="Search stack or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 font-mono"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          List of Case Studies
        </h2>

        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-3">
            <p className="text-stone-600 dark:text-stone-300 font-semibold font-serif text-lg">
              No case studies match your search criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-lg text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                aria-labelledby={`card-title-${project.id}`}
                className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 flex flex-col justify-between shadow-2xs hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                      0{idx + 1} / {project.category.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
                      <ShieldCheck className="w-3.5 h-3.5 text-stone-900 dark:text-stone-100" aria-hidden="true" />
                      <span>{project.wcagLevel}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3
                      id={`card-title-${project.id}`}
                      className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-light italic">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-stone-400 font-mono">
                    Client: {project.client} • <time dateTime={project.date}>{project.year}</time>
                  </p>

                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                    {project.summary}
                  </p>

                  {/* Tech stack */}
                  <div className="pt-2">
                    <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies in ${project.title}`}>
                      {project.technologies.map((t, i) => (
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

                {/* Card Action footer */}
                <div className="pt-6 mt-6 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectProject(project);
                      onAnnounce(`Opened deep case study modal for ${project.title}`);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors focus:ring-2 focus:ring-stone-400"
                    aria-label={`Open comprehensive case study details for ${project.title}`}
                  >
                    <span>Read Architectural Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                        aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
                      >
                        <Github className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm animate-in fade-in"
        >
          <div className="bg-[#fafaf9] dark:bg-stone-900 w-full max-w-3xl rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-stone-900 text-white px-6 py-5 flex items-center justify-between border-b border-stone-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-stone-800 text-stone-100 text-[10px] font-mono font-bold uppercase">
                  {selectedProject.wcagLevel}
                </span>
                <span className="text-xs text-stone-400 font-mono">• {selectedProject.category}</span>
              </div>
              <button
                type="button"
                onClick={() => onSelectProject(null)}
                aria-label="Close Case Study Details Modal"
                className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-800 dark:text-stone-200 text-sm">
              <div>
                <h2 id="modal-case-study-title" className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-50">
                  {selectedProject.title}
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 font-light italic">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Lighthouse Score Matrix */}
              <div className="grid grid-cols-4 gap-2 text-center p-4 rounded-xl bg-white dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <div>
                  <span className="block font-mono font-bold text-stone-900 dark:text-stone-100 text-xl">
                    {selectedProject.lighthouseScore.accessibility}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-stone-500">Accessibility</span>
                </div>
                <div>
                  <span className="block font-mono font-bold text-stone-900 dark:text-stone-100 text-xl">
                    {selectedProject.lighthouseScore.performance}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-stone-500">Performance</span>
                </div>
                <div>
                  <span className="block font-mono font-bold text-stone-900 dark:text-stone-100 text-xl">
                    {selectedProject.lighthouseScore.seo}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-stone-500">SEO Schema</span>
                </div>
                <div>
                  <span className="block font-mono font-bold text-stone-900 dark:text-stone-100 text-xl">
                    {selectedProject.lighthouseScore.bestPractices}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-stone-500">Best Practices</span>
                </div>
              </div>

              {/* Problem / Challenge */}
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  The Accessibility Challenge
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* Engineering Solution */}
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  Architectural Solution & Semantic Execution
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Key Features list */}
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  Verified Accessibility Primitives
                </h3>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures.map((kf, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-stone-900 dark:text-stone-100 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{kf}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-white dark:bg-stone-800/60 px-6 py-4 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between">
              <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                Press <strong>Esc</strong> to close modal
              </span>
              <button
                type="button"
                onClick={() => onSelectProject(null)}
                className="px-5 py-2 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-stone-800"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
