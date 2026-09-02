import React, { useState } from 'react';
import { PageId, Project } from '../types';
import { PERSONAL_INFO, PROJECTS, TESTIMONIALS, SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle, 
  Sparkles, 
  BookOpen, 
  FileText, 
  Send, 
  Code2, 
  HeartHandshake,
  Layers,
  Terminal
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
  onAnnounce: (message: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  onAnnounce,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      const err = 'Please enter a valid email address.';
      setNewsletterMsg(err);
      onAnnounce(`Form error: ${err}`);
      return;
    }

    setNewsletterStatus('success');
    const succ = `Thank you! ${newsletterEmail} has been subscribed to the Architectural Gazette.`;
    setNewsletterMsg(succ);
    onAnnounce(succ);
    setNewsletterEmail('');
  };

  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="space-y-20 lg:space-y-28">
      {/* 1. HERO SECTION */}
      <section
        aria-labelledby="hero-heading"
        className="relative pt-4 pb-12 sm:pt-10 sm:pb-16 border-b border-stone-200 dark:border-stone-800"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            <header className="space-y-4">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
                Personal Portfolio & Standards Catalog
              </p>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight text-stone-900 dark:text-stone-50"
              >
                Developing for <span className="italic text-stone-500 dark:text-stone-400 font-serif">Everyone</span>, Without Exception.
              </h1>

              <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 max-w-xl leading-relaxed font-light">
                A multi-disciplinary lead engineer focused on building semantic, highly-accessible digital architectures that bridge the gap between human dignity and pristine engineering.
              </p>
            </header>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold text-xs uppercase tracking-[0.2em] shadow-md transition-all focus:outline-none focus:ring-4 focus:ring-stone-400 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold text-xs uppercase tracking-[0.2em] border border-stone-300 dark:border-stone-700 transition-all focus:outline-none focus:ring-4 focus:ring-stone-400"
              >
                <span>Initiate Audit</span>
              </button>
            </div>
          </div>

          {/* Side Profile Editorial Box */}
          <aside
            aria-labelledby="quick-profile-heading"
            className="lg:col-span-5 bg-stone-100 dark:bg-stone-900/70 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 sm:p-10 flex flex-col justify-between shadow-2xs space-y-6"
          >
            <h2 id="quick-profile-heading" className="sr-only">
              Alex Morgan Quick Profile Summary
            </h2>

            <div className="space-y-4 pb-6 border-b border-stone-200 dark:border-stone-800">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                00 / IDENTITY & CREDENTIALS
              </span>
              <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100 italic">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {PERSONAL_INFO.title}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 dark:text-stone-300">
                <ShieldCheck className="w-4 h-4 text-stone-900 dark:text-stone-100" aria-hidden="true" />
                <span>IAAP Certified (CPACC / WAS / ADS)</span>
              </div>
            </div>

            {/* Semantic Definition List for Quick Metrics */}
            <dl className="grid grid-cols-2 gap-4 text-left">
              <div className="border-l border-stone-300 dark:border-stone-700 pl-3">
                <dt className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                  Audits Completed
                </dt>
                <dd className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-0.5">
                  140+
                </dd>
              </div>
              <div className="border-l border-stone-300 dark:border-stone-700 pl-3">
                <dt className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                  Lighthouse A11y
                </dt>
                <dd className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-0.5">
                  100 / 100
                </dd>
              </div>
              <div className="border-l border-stone-300 dark:border-stone-700 pl-3">
                <dt className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                  Compliance
                </dt>
                <dd className="text-xs font-bold text-stone-800 dark:text-stone-200 mt-1 uppercase tracking-wider">
                  WCAG 2.2 AAA
                </dd>
              </div>
              <div className="border-l border-stone-300 dark:border-stone-700 pl-3">
                <dt className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                  Base Location
                </dt>
                <dd className="text-xs font-bold text-stone-800 dark:text-stone-200 mt-1 uppercase tracking-wider">
                  SF / Remote
                </dd>
              </div>
            </dl>

            <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex justify-between items-center text-xs text-stone-500">
              <span className="uppercase text-[10px] tracking-wider">W3C Working Group</span>
              <span className="font-serif italic font-bold text-stone-900 dark:text-stone-100">Invited Expert</span>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. FEATURED CASE STUDIES SECTION */}
      <section aria-labelledby="featured-projects-heading" className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <h2
            id="featured-projects-heading"
            className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-stone-400 dark:text-stone-500 flex items-center gap-4 w-full"
          >
            <span>Featured Case Studies</span>
            <span className="h-[1px] flex-1 bg-stone-200 dark:bg-stone-800" aria-hidden="true" />
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 shrink-0"
          >
            <span>All Works ({PROJECTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              aria-labelledby={`project-title-${project.id}`}
              className="group bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 flex flex-col justify-between shadow-2xs hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                    0{idx + 1} / {project.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
                    {project.wcagLevel}
                  </span>
                </div>

                <h3
                  id={`project-title-${project.id}`}
                  className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50 group-hover:underline underline-offset-4 cursor-pointer transition-colors"
                  onClick={() => onSelectProject(project)}
                >
                  {project.title}
                </h3>

                <p className="text-xs text-stone-400 font-mono">
                  {project.client} • <time dateTime={project.date}>{project.year}</time>
                </p>

                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                <div className="pt-2">
                  <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies used in ${project.title}`}>
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <li
                        key={i}
                        className="text-[10px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 group-hover:underline"
                  aria-label={`Read full case study for ${project.title}`}
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>

                <span className="text-[10px] font-mono text-stone-400">
                  Lighthouse 100
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. CORE TECHNICAL EXPERTISE TAXONOMY */}
      <section aria-labelledby="skills-heading" className="space-y-8">
        <div>
          <h2
            id="skills-heading"
            className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-stone-400 dark:text-stone-500 flex items-center gap-4 w-full mb-3"
          >
            <span>Technical Taxonomy</span>
            <span className="h-[1px] flex-1 bg-stone-200 dark:bg-stone-800" aria-hidden="true" />
          </h2>
          <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Competencies & Engineering Standards
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((categoryGroup, index) => (
            <div
              key={index}
              className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 space-y-5 shadow-2xs"
            >
              <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
                <span className="text-[10px] font-mono text-stone-400 block mb-1">
                  MODULE // 0{index + 1}
                </span>
                <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                  {categoryGroup.category}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                  {categoryGroup.description}
                </p>
              </div>

              <ul className="space-y-2.5" aria-label={`Skills in ${categoryGroup.category}`}>
                {categoryGroup.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-100 dark:border-stone-700/60"
                  >
                    <span className="font-medium text-stone-800 dark:text-stone-200">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ACCESSIBLE TESTIMONIALS (FIGURE, BLOCKQUOTE, FIGCAPTION, CITE) */}
      <section aria-labelledby="testimonials-heading" className="space-y-8">
        <h2
          id="testimonials-heading"
          className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-stone-400 dark:text-stone-500 flex items-center gap-4 w-full"
        >
          <span>Peer & Client Endorsements</span>
          <span className="h-[1px] flex-1 bg-stone-200 dark:bg-stone-800" aria-hidden="true" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <figure
              key={idx}
              className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 flex flex-col justify-between shadow-2xs space-y-6"
            >
              <blockquote className="font-serif text-lg sm:text-xl text-stone-800 dark:text-stone-200 italic leading-relaxed">
                “{item.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-4 pt-4 border-t border-stone-100 dark:border-stone-800">
                <div
                  className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 flex items-center justify-center font-serif font-bold text-sm shrink-0"
                  aria-hidden="true"
                >
                  {item.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <cite className="not-italic font-bold text-sm text-stone-900 dark:text-stone-100 block">
                    {item.author}
                  </cite>
                  <span className="text-xs text-stone-500 dark:text-stone-400 block font-mono">
                    {item.role}, {item.company}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 5. ACCESSIBLE NEWSLETTER & CONSULTATION SIGNUP */}
      <section
        aria-labelledby="newsletter-heading"
        className="p-8 sm:p-12 rounded-2xl bg-stone-900 text-stone-50 dark:border dark:border-stone-800 shadow-xl"
      >
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
              THE ARCHITECTURAL GAZETTE // MONTHLY DISPATCH
            </span>
            <h2 id="newsletter-heading" className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-white">
              Stay ahead of WCAG 2.2 and International Regulations
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              Receive monthly essays on accessible component mechanics, screen-reader compatibility matrixes, and actionable code recipes with zero promotional noise.
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            noValidate
            className="pt-2 space-y-3"
            aria-describedby="newsletter-disclaimer"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="newsletter-email-input" className="sr-only">
                  Email address for monthly accessibility newsletter
                </label>
                <input
                  id="newsletter-email-input"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="email@organization.com"
                  className="w-full px-4 py-3.5 rounded-lg text-stone-900 bg-white placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
                  aria-invalid={newsletterStatus === 'error'}
                  aria-describedby={newsletterStatus !== 'idle' ? 'newsletter-live-msg' : undefined}
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 rounded-lg bg-stone-100 hover:bg-white text-stone-900 font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-4 focus:ring-stone-400"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            <p id="newsletter-disclaimer" className="text-xs text-stone-400 font-mono">
              Zero spam. Unsubscribe at any time. Screen reader tested.
            </p>

            {/* Live region for feedback */}
            <div
              id="newsletter-live-msg"
              role="alert"
              aria-live="polite"
              className={`text-xs font-semibold p-3 rounded-lg transition-all ${
                newsletterStatus === 'success'
                  ? 'bg-stone-800 text-stone-100 border border-stone-600'
                  : newsletterStatus === 'error'
                  ? 'bg-rose-950 text-rose-200 border border-rose-700'
                  : 'hidden'
              }`}
            >
              {newsletterMsg}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
