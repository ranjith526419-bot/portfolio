import { Project, Experience, Article, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Alex Morgan',
  pronouns: 'they/them',
  title: 'Lead Accessibility Engineer & Principal Frontend Architect',
  location: 'San Francisco, CA & Remote',
  email: 'alex.morgan.a11y@example.com',
  github: 'https://github.com/alexmorgan-a11y',
  linkedin: 'https://linkedin.com/in/alexmorgan-accessibility',
  twitter: 'https://twitter.com/alexmorgan_a11y',
  w3cRole: 'Invited Expert, W3C Web Content Accessibility Guidelines (WCAG) Working Group',
  certifications: [
    { title: 'CPACC (Certified Professional in Accessibility Core Competencies)', issuer: 'IAAP', year: '2021' },
    { title: 'WAS (Web Accessibility Specialist)', issuer: 'IAAP', year: '2022' },
    { title: 'ADS (Accessible Document Specialist)', issuer: 'IAAP', year: '2023' },
  ],
  stats: [
    { label: 'WCAG AAA Audits Completed', value: '140+', detail: 'Across Fortune 500 & Gov portals' },
    { label: 'Design System Components Hardened', value: '450+', detail: '100% keyboard & screen-reader tested' },
    { label: 'Engineering Mentorship', value: '1,200+', detail: 'Developers trained in accessible patterns' },
    { label: 'Lighthouse A11y & SEO Score', value: '100 / 100', detail: 'Zero automated or manual violations' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'a11y-design-system',
    title: 'Aura Accessible Design System',
    tagline: 'Enterprise-grade React component library with WCAG 2.2 AAA guarantees',
    category: 'Design Systems',
    role: 'Lead Accessibility Architect',
    year: '2024 - 2025',
    date: '2025-01-15',
    client: 'FinTech Global Consortium',
    summary: 'Spearheaded the redesign and technical architecture of an enterprise design system used by over 300 engineering teams, serving 40 million global consumers with zero accessibility regressions.',
    challenge: 'Legacy component primitives had broken focus traps, inconsistent keyboard shortcuts, non-descriptive ARIA landmark semantics, and poor color contrast ratios failing Section 508 and European Accessibility Act (EAA) compliance.',
    solution: 'Constructed custom primitive abstractions with roving tabindex, inert attributes, WCAG 2.2 focus appearance (3px minimum offset), polymorphic HTML5 semantic containers, and integrated CI/CD automated screen reader matrix testing.',
    wcagLevel: 'WCAG 2.2 AAA',
    lighthouseScore: {
      accessibility: 100,
      performance: 99,
      seo: 100,
      bestPractices: 100,
    },
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'ARIA 1.2', 'Playwright Axe-core', 'WAI-ARIA APG'],
    keyFeatures: [
      'Accessible combobox with virtualized listbox and live region narration',
      'Dual-axis responsive data tables with sticky column headers and cell coordinate announcements',
      'Automated color contrast runtime validator enforcing 7:1 ratio for normal text',
      'Full keyboard-first navigation with visible, customizable high-contrast focus rings'
    ],
    demoUrl: 'https://example.com/aura-design-system',
    repoUrl: 'https://github.com/alexmorgan-a11y/aura-accessible-design-system',
    imageAlt: 'Component tree diagrams and keyboard focus states in Aura Design System',
    featured: true,
  },
  {
    id: 'civic-health-portal',
    title: 'Civic Health Access Platform',
    tagline: 'Multi-lingual public healthcare scheduling platform with voice and switch device support',
    category: 'Web Apps',
    role: 'Principal Frontend Engineer',
    year: '2023 - 2024',
    date: '2024-06-20',
    client: 'Department of Public Health',
    summary: 'Engineered a resilient, high-speed public health portal allowing citizens with cognitive, visual, motor, and auditory disabilities to schedule medical appointments and view health records.',
    challenge: 'Complex dynamic multi-step booking workflows were abandoning screen reader users mid-booking due to unannounced asynchronous updates and confusing input formats.',
    solution: 'Implemented polite live regions (`aria-live="polite"`), strict step progression semantics using `<ol>` and `<fieldset>`, descriptive error summaries, and zero reliance on color alone for critical vaccine statuses.',
    wcagLevel: 'WCAG 2.2 AAA',
    lighthouseScore: {
      accessibility: 100,
      performance: 100,
      seo: 100,
      bestPractices: 100,
    },
    technologies: ['HTML5 Semantic Landmarks', 'React', 'ARIA Live Regions', 'Vite', 'Screen Reader APG'],
    keyFeatures: [
      'Multi-step form wizard with focus restoration and live error summaries',
      'Integrated text-to-speech phonetic calendar slot selectors',
      'Support for single-switch input devices and alternative pointer hardware',
      'Dyslexia-friendly typography toggle and high-contrast dark theme mode'
    ],
    demoUrl: 'https://example.com/civic-health-portal',
    repoUrl: 'https://github.com/alexmorgan-a11y/civic-health-access',
    imageAlt: 'Screenshot of the accessible appointment booking interface with high contrast theme',
    featured: true,
  },
  {
    id: 'axe-telemetry-engine',
    title: 'A11y Inspector & Telemetry CLI',
    tagline: 'Developer tool for detecting semantic HTML violations and color contrast defects in CI pipelines',
    category: 'Audits & Tooling',
    role: 'Creator & Maintainer',
    year: '2023',
    date: '2023-11-10',
    client: 'Open Source Community',
    summary: 'Authored an open-source static analysis and runtime linter checking for missing landmark elements, improper heading hierarchies, orphan inputs, and unannounced modal traps.',
    challenge: 'Developers frequently introduced regressions like skipping heading tags (`<h1>` to `<h3>`) or using `<div>` wrappers instead of semantic `<button>` or `<nav>` tags without noticing.',
    solution: 'Created an AST parser and Chrome DevTools extension that builds an accessibility tree diagram, calculates luminous contrast mathematically, and outputs actionable fix suggestions.',
    wcagLevel: 'WCAG 2.2 AAA',
    lighthouseScore: {
      accessibility: 100,
      performance: 98,
      seo: 100,
      bestPractices: 100,
    },
    technologies: ['Node.js', 'TypeScript', 'AST Parser', 'W3C Contrast Algorithm (WCAG 3.0 APCA)', 'Chromium API'],
    keyFeatures: [
      'Semantic document outline generator with visual hierarchy validation',
      'APCA and WCAG 2.2 color contrast ratio analyzer',
      'Automated keyboard tab sequence flow visualizer',
      'Screen reader utterance simulator with transcript export'
    ],
    demoUrl: 'https://example.com/a11y-telemetry',
    repoUrl: 'https://github.com/alexmorgan-a11y/a11y-telemetry-engine',
    imageAlt: 'Terminal output showing zero accessibility violations and high contrast audit passing',
    featured: true,
  },
  {
    id: 'inclusive-audio-player',
    title: 'Waveform Accessible Media Player',
    tagline: 'HTML5 `<video>` and `<audio>` controller with captions, transcripts, and audio descriptions',
    category: 'Open Source',
    role: 'Lead Developer',
    year: '2022',
    date: '2022-08-14',
    client: 'National Library for Digital Media',
    summary: 'A fully accessible HTML5 media player supporting dual WebVTT subtitles, synchronized interactive transcripts, sign-language video PiP overlay, and keyboard scrubbing.',
    challenge: 'Standard HTML5 audio/video controls lack synchronized transcript search, speed announcements for screen readers, and customizable closed-caption styles.',
    solution: 'Constructed custom accessible controls with ARIA sliders, live caption styling controls (font size, background opacity, color contrast), and keyboard shortcut maps.',
    wcagLevel: 'WCAG 2.2 AAA',
    lighthouseScore: {
      accessibility: 100,
      performance: 99,
      seo: 100,
      bestPractices: 100,
    },
    technologies: ['HTML5 `<video>`', 'WebVTT', 'ARIA 1.2', 'CSS Custom Properties', 'Web Audio API'],
    keyFeatures: [
      'Interactive searchable transcript with auto-scrolling synced to playback',
      'Customizable caption rendering complying with FCC and WCAG 1.2.2 requirements',
      'Custom ARIA slider controls for volume, position, and playback rate',
      'Zero keyboard traps with fully documented accesskey combinations'
    ],
    demoUrl: 'https://example.com/waveform-player',
    repoUrl: 'https://github.com/alexmorgan-a11y/waveform-accessible-player',
    imageAlt: 'Audio player with interactive transcript and accessible speed controls',
    featured: false,
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead Accessibility Engineer & Staff Frontend Architect',
    company: 'Nexus Inclusive Systems',
    location: 'San Francisco, CA (Hybrid)',
    period: '2022 - Present',
    startDate: '2022-03-01',
    endDate: 'Present',
    isCurrent: true,
    summary: 'Leading enterprise accessibility strategy and frontend architecture across 12 product lines. Spearheaded company-wide readiness for European Accessibility Act (EAA 2025) and Section 508 federal mandates.',
    achievements: [
      'Eliminated 100% of high-severity WCAG violations across 4 flagship web applications, improving Lighthouse scores from 68 to 100.',
      'Designed and deployed automated accessibility regression testing in CI/CD pipeline, catching 85% of semantic HTML and ARIA flaws before merge.',
      'Formulated the organization’s Design System A11y Guidelines and trained 200+ frontend engineers and product designers on inclusive development.',
      'Represented the company on the W3C Web Content Accessibility Guidelines (WCAG) Working Group.'
    ],
    technologies: ['HTML5 Semantics', 'ARIA 1.2', 'React', 'TypeScript', 'Axe Core', 'JAWS', 'NVDA', 'VoiceOver']
  },
  {
    id: 'exp-2',
    role: 'Senior Frontend Accessibility Specialist',
    company: 'CivicTech Solutions',
    location: 'Austin, TX (Remote)',
    period: '2019 - 2022',
    startDate: '2019-06-01',
    endDate: '2022-02-28',
    isCurrent: false,
    summary: 'Architected accessible public-facing portals and state government services, ensuring complete compliance with WCAG 2.1 Level AA and Section 508 standards.',
    achievements: [
      'Redesigned state benefits renewal portal to achieve WCAG 2.1 AA conformance, leading to a 34% increase in completion rates for users with assistive tech.',
      'Implemented accessible data visualizers with SVG patterns, tabular fallbacks, and screen-reader data table counterparts.',
      'Conducted over 150 usability testing sessions with blind, low-vision, motor-impaired, and neurodivergent participants.'
    ],
    technologies: ['Semantic HTML5', 'JavaScript (ES6+)', 'ARIA APG', 'Sass', 'Lighthouse CI', 'Screen Readers']
  },
  {
    id: 'exp-3',
    role: 'Frontend UI/UX Engineer',
    company: 'Apex Media Labs',
    location: 'Seattle, WA',
    period: '2017 - 2019',
    startDate: '2017-08-01',
    endDate: '2019-05-31',
    isCurrent: false,
    summary: 'Developed responsive web applications, content publishing platforms, and interactive media controllers with strict performance and SEO metrics.',
    achievements: [
      'Built custom responsive video player with closed captioning, multi-track audio descriptions, and keyboard shortcuts.',
      'Optimized Core Web Vitals, achieving sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS).'
    ],
    technologies: ['HTML5', 'CSS3 / Grid / Flexbox', 'TypeScript', 'React', 'Webpack', 'SEO Structured Data']
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'wcag-22-breakdown',
    title: 'Mastering WCAG 2.2: New Success Criteria & Practical Implementation',
    slug: 'mastering-wcag-22-success-criteria',
    excerpt: 'An in-depth breakdown of Focus Appearance, Dragging Movements, Target Size (Minimum), and Redundant Entry criteria with practical code examples.',
    publishDate: 'February 12, 2025',
    isoDate: '2025-02-12',
    readTime: '8 min read',
    tags: ['Accessibility', 'WCAG 2.2', 'Standards', 'HTML5'],
    content: [
      'The publication of WCAG 2.2 introduces essential updates focusing on users with cognitive disabilities, low vision, and motor impairments. In this article, we examine how to implement each new success criterion with clean, semantic code.',
      'Focus Appearance (2.4.11 - Level AA) requires focus indicators to have a minimum contrasting area and a contrast ratio of at least 3:1 against adjacent colors. Using modern CSS outline-offset and robust box-shadows ensures focus is never obscured.',
      'Target Size Minimum (2.5.8 - Level AA) establishes that interactive targets must be at least 24 by 24 CSS pixels or have sufficient spacing from adjacent targets. We explore how CSS margin and pseudo-element hit area expansion solve this elegantly.',
      'Redundant Entry (3.3.7 - Level A) prevents requiring users to re-enter information already provided in the same process, dramatically reducing cognitive fatigue. We demonstrate form auto-population and accessible storage mechanisms.'
    ]
  },
  {
    id: 'semantic-html-power',
    title: 'Why Semantic HTML5 Outperforms Div-Soup Every Single Day',
    slug: 'why-semantic-html5-outperforms-div-soup',
    excerpt: 'How native HTML5 tags like `<main>`, `<article>`, `<nav>`, `<aside>`, and `<dialog>` provide built-in accessibility, SEO advantages, and superior performance.',
    publishDate: 'November 28, 2024',
    isoDate: '2024-11-28',
    readTime: '6 min read',
    tags: ['HTML5', 'Semantics', 'SEO', 'Performance'],
    content: [
      'Before adding ARIA attributes to generic div and span elements, remember the First Rule of ARIA: if you can use a native HTML element or attribute with the semantics and behavior already built in, then do so.',
      'Native elements like `<button>`, `<dialog>`, and `<details>` include free keyboard event listeners (Enter and Space triggering), focusability, and screen-reader role mapping without writing extra JavaScript.',
      'Semantic landmark tags like `<header>`, `<nav>`, `<main>`, `<aside>`, and `<footer>` create a navigable document outline that search engine crawlers and screen readers use to index and traverse your content instantaneously.'
    ]
  },
  {
    id: 'accessible-forms-masterclass',
    title: 'Building Keyboard-First, Error-Resilient Accessible Forms',
    slug: 'building-keyboard-first-accessible-forms',
    excerpt: 'Step-by-step architecture for fieldsets, explicit label associations, live region error summaries, and accessible validation states.',
    publishDate: 'September 14, 2024',
    isoDate: '2024-09-14',
    readTime: '10 min read',
    tags: ['Forms', 'ARIA', 'UX', 'WCAG'],
    content: [
      'Forms are where users complete transactions, authenticate, and submit critical data. Yet form accessibility remains one of the most common failure points on the modern web.',
      'Every input MUST have an unambiguous accessible name via `<label htmlFor="...">`. For groups of related controls like radio buttons or checkboxes, group them within `<fieldset>` and designate context with `<legend>`.',
      'When validation errors occur, do not merely show red text. Use `aria-invalid="true"`, link the error description using `aria-describedby`, and present an aggregated error summary at the top of the form with `role="alert"` and focus restoration.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Accessibility & Standards',
    description: 'International standards, certification frameworks, and assistive technology testing',
    skills: [
      { name: 'WCAG 2.1 & 2.2 (Levels A, AA, AAA)', level: 'Expert', standard: 'W3C Standard' },
      { name: 'WAI-ARIA 1.2 / 1.3 Patterns', level: 'Expert', standard: 'W3C Recommendation' },
      { name: 'Section 508 & European Accessibility Act (EAA)', level: 'Expert', standard: 'Legal Mandates' },
      { name: 'Screen Readers (JAWS, NVDA, VoiceOver, TalkBack)', level: 'Expert', standard: 'Assistive Tech' },
      { name: 'Keyboard Navigation & Focus Trapping', level: 'Expert', standard: 'WCAG 2.1.1' },
      { name: 'Color Contrast & APCA Calculations', level: 'Expert', standard: 'WCAG 1.4.3 / 1.4.6' },
    ]
  },
  {
    category: 'HTML5 Semantic Architecture & Core Tech',
    description: 'Native semantic markup, browser APIs, and standards-compliant frontend development',
    skills: [
      { name: 'Semantic HTML5 Landmark Structure', level: 'Expert', standard: 'WHATWG / W3C' },
      { name: 'Accessible Form Controls (`<fieldset>`, `<legend>`)', level: 'Expert', standard: 'HTML5 Spec' },
      { name: 'SEO & Structured Data (JSON-LD, OpenGraph)', level: 'Expert', standard: 'Schema.org' },
      { name: 'TypeScript & JavaScript (ESNext)', level: 'Expert', standard: 'ECMAScript' },
      { name: 'React 19 & Next.js Architecture', level: 'Expert', standard: 'Modern Frameworks' },
      { name: 'Accessible CSS / Tailwind CSS / Fluid Typography', level: 'Expert', standard: 'W3C CSS' },
    ]
  },
  {
    category: 'Testing, Auditing & Quality Assurance',
    description: 'Automated CI/CD linters, static analysis, and manual user testing workflows',
    skills: [
      { name: 'Axe-core & Playwright Automated Testing', level: 'Expert', standard: 'CI/CD Automation' },
      { name: 'Lighthouse & Web Vitals Optimization', level: 'Expert', standard: 'Google Standards' },
      { name: 'WAVE & ARC Toolkit Auditing', level: 'Expert', standard: 'Industry Tools' },
      { name: 'Assistive Tech Usability Studies', level: 'Advanced', standard: 'User Research' },
      { name: 'VPAT & ACR Document Authoring', level: 'Expert', standard: 'Compliance Docs' },
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Alex transformed our entire design system from an accessibility liability into the gold standard for our global enterprise. Their grasp of semantic HTML and screen reader mechanics is unmatched.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "FinTech Global Consortium"
  },
  {
    quote: "Working with Alex taught our team that accessibility isn't a checklist at the end of a sprint — it's the fundamental architectural foundation of great software.",
    author: "Marcus Chen",
    role: "Head of Product",
    company: "CivicTech Solutions"
  }
];
