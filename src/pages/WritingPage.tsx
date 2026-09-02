import React, { useState } from 'react';
import { PageId, Article } from '../types';
import { ARTICLES } from '../data/portfolioData';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Share2, 
  Check, 
  Tag, 
  ChevronRight,
  BookMarked
} from 'lucide-react';

interface WritingPageProps {
  onAnnounce: (msg: string) => void;
}

export const WritingPage: React.FC<WritingPageProps> = ({ onAnnounce }) => {
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(ARTICLES[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (article: Article) => {
    navigator.clipboard.writeText(`https://alexmorgan.dev/writing#${article.slug}`);
    setCopiedId(article.id);
    onAnnounce(`Copied link to article: ${article.title}`);
    setTimeout(() => setCopiedId(null), 3000);
  };

  const handleToggleArticle = (id: string) => {
    const isExpanding = expandedArticleId !== id;
    setExpandedArticleId(isExpanding ? id : null);
    if (isExpanding) {
      const art = ARTICLES.find((a) => a.id === id);
      onAnnounce(`Expanded article: ${art?.title}`);
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Header Landmark */}
      <section aria-labelledby="writing-heading" className="space-y-4 border-b border-stone-200 dark:border-stone-800 pb-10">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500">
          PUBLICATIONS & ESSAYS // 04
        </p>
        <h1
          id="writing-heading"
          className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-stone-900 dark:text-stone-100"
        >
          Engineering Guides & <span className="italic font-serif text-stone-500 dark:text-stone-400">WCAG Standards</span>
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed font-light">
          Deep-dive technical essays on web accessibility standards, ARIA landmark implementations, focus order algorithms, and accessible form UX.
        </p>
      </section>

      {/* Articles List */}
      <section aria-labelledby="articles-list-heading" className="space-y-8">
        <h2 id="articles-list-heading" className="sr-only">
          Published Technical Articles
        </h2>

        <div className="space-y-10">
          {ARTICLES.map((article, idx) => {
            const isExpanded = expandedArticleId === article.id;
            return (
              <article
                key={article.id}
                id={article.slug}
                aria-labelledby={`article-heading-${article.id}`}
                className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 sm:p-10 space-y-6 shadow-2xs hover:border-stone-400 dark:hover:border-stone-600 transition-colors"
              >
                {/* Meta info */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
                  <div className="flex items-center gap-3 text-xs font-mono text-stone-500 dark:text-stone-400">
                    <span className="text-[10px] uppercase font-bold text-stone-400">
                      ESSAY // 0{idx + 1}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
                      <time dateTime={article.isoDate}>{article.publishDate}</time>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopyLink(article)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                      aria-label={`Copy link for ${article.title}`}
                    >
                      {copiedId === article.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-stone-900 dark:text-stone-100" aria-hidden="true" />
                          <span className="font-bold text-stone-900 dark:text-stone-100">Copied</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Share Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-3">
                  <h3
                    id={`article-heading-${article.id}`}
                    className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight"
                  >
                    {article.title}
                  </h3>
                  <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2">
                  <ul className="flex flex-wrap gap-1.5" aria-label={`Tags for ${article.title}`}>
                    {article.tags.map((tag, tIdx) => (
                      <li
                        key={tIdx}
                        className="text-[10px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expandable full text content */}
                {isExpanded && (
                  <div className="pt-8 border-t border-stone-100 dark:border-stone-800 space-y-4 text-base text-stone-700 dark:text-stone-200 leading-relaxed font-serif bg-stone-50/70 dark:bg-stone-950/40 p-8 rounded-xl border border-stone-200 dark:border-stone-800/80">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-4">
                      COMPLETE UNABRIDGED TRANSCRIPT
                    </span>
                    {article.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="leading-relaxed font-light text-stone-800 dark:text-stone-200">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Footer Action Toggle */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleToggleArticle(article.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`article-content-${article.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest font-mono text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300"
                  >
                    <span>{isExpanded ? 'Collapse Transcript' : 'Read Unabridged Essay'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? '-rotate-90' : ''}`} aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
