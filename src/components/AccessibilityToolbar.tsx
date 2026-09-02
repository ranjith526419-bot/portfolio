import React from 'react';
import { A11ySettings } from '../types';
import { 
  Sliders, 
  Eye, 
  Type, 
  Sparkles, 
  Layers, 
  Volume2, 
  RotateCcw, 
  X, 
  Check, 
  ZapOff 
} from 'lucide-react';

interface AccessibilityToolbarProps {
  isOpen: boolean;
  onClose: () => void;
  settings: A11ySettings;
  onUpdateSettings: (newSettings: Partial<A11ySettings>) => void;
  onResetSettings: () => void;
  announcementLogs: string[];
}

export const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onResetSettings,
  announcementLogs,
}) => {
  if (!isOpen) return null;

  return (
    <section
      id="a11y-preferences-drawer"
      role="region"
      aria-label="Accessibility and Display Preferences"
      className="fixed bottom-4 right-4 z-50 w-full max-w-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 font-sans"
    >
      {/* Header */}
      <div className="bg-stone-900 text-stone-100 px-5 py-4 flex items-center justify-between border-b border-stone-800">
        <div className="flex items-center gap-2.5">
          <Sliders className="w-5 h-5 text-stone-100" aria-hidden="true" />
          <div>
            <h2 className="font-serif text-lg font-bold tracking-tight">Accessibility Toolkit</h2>
            <p className="text-xs font-mono text-stone-400">Personalize your reading & viewing experience</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Accessibility Controls dialog"
          className="p-1.5 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Controls body */}
      <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
        {/* Contrast Toggle */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700">
          <div className="flex items-center gap-3">
            <Eye className="w-5 h-5 text-stone-900 dark:text-stone-100" aria-hidden="true" />
            <div>
              <span className="block text-xs font-mono font-bold text-stone-900 dark:text-stone-100" id="contrast-label">
                WCAG AAA High Contrast
              </span>
              <span className="block text-[11px] text-stone-500 dark:text-stone-400 font-light">
                Enhances text contrast ratio to 7:1+
              </span>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={settings.highContrast}
            aria-labelledby="contrast-label"
            onClick={() => onUpdateSettings({ highContrast: !settings.highContrast })}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 ${
              settings.highContrast ? 'bg-stone-900 dark:bg-stone-100' : 'bg-stone-300 dark:bg-stone-700'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-stone-900 transition-transform ${
                settings.highContrast ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Font Size Scaling */}
        <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 space-y-2">
          <div className="flex items-center gap-2">
            <Type className="w-4 h-4 text-stone-900 dark:text-stone-100" aria-hidden="true" />
            <span className="text-xs font-mono font-bold text-stone-900 dark:text-stone-100" id="font-scale-group">
              Text Scaling
            </span>
          </div>
          <div
            role="radiogroup"
            aria-labelledby="font-scale-group"
            className="grid grid-cols-3 gap-2 pt-1"
          >
            {(
              [
                { id: 'normal', label: '100% Default' },
                { id: 'large', label: '115% Large' },
                { id: 'xlarge', label: '130% Extra' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                role="radio"
                aria-checked={settings.fontSize === opt.id}
                onClick={() => onUpdateSettings({ fontSize: opt.id })}
                className={`px-2 py-2 text-xs font-mono font-semibold rounded-lg border text-center transition-all ${
                  settings.fontSize === opt.id
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 shadow-2xs'
                    : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:bg-stone-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dyslexic Font Toggle */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-stone-900 dark:text-stone-100" aria-hidden="true" />
            <div>
              <span className="block text-xs font-mono font-bold text-stone-900 dark:text-stone-100" id="dyslexic-label">
                Dyslexia Font (Lexend)
              </span>
              <span className="block text-[11px] text-stone-500 dark:text-stone-400 font-light">
                Wider letter-spacing for cognitive clarity
              </span>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={settings.dyslexicFont}
            aria-labelledby="dyslexic-label"
            onClick={() => onUpdateSettings({ dyslexicFont: !settings.dyslexicFont })}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 ${
              settings.dyslexicFont ? 'bg-stone-900 dark:bg-stone-100' : 'bg-stone-300 dark:bg-stone-700'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-stone-900 transition-transform ${
                settings.dyslexicFont ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Reduced Motion Toggle */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700">
          <div className="flex items-center gap-3">
            <ZapOff className="w-5 h-5 text-stone-900 dark:text-stone-100" aria-hidden="true" />
            <div>
              <span className="block text-xs font-mono font-bold text-stone-900 dark:text-stone-100" id="motion-label">
                Reduce Animations & Motion
              </span>
              <span className="block text-[11px] text-stone-500 dark:text-stone-400 font-light">
                Disables all non-essential UI transitions
              </span>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={settings.reducedMotion}
            aria-labelledby="motion-label"
            onClick={() => onUpdateSettings({ reducedMotion: !settings.reducedMotion })}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 ${
              settings.reducedMotion ? 'bg-stone-900 dark:bg-stone-100' : 'bg-stone-300 dark:bg-stone-700'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-stone-900 transition-transform ${
                settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Semantic HTML Visual Inspector Toggle */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-stone-900 dark:text-stone-100" aria-hidden="true" />
            <div>
              <span className="block text-xs font-mono font-bold text-stone-900 dark:text-stone-100" id="semantics-label">
                Semantic Landmarks Overlay
              </span>
              <span className="block text-[11px] text-stone-500 dark:text-stone-400 font-light">
                Badges on &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;
              </span>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={settings.showSemantics}
            aria-labelledby="semantics-label"
            onClick={() => onUpdateSettings({ showSemantics: !settings.showSemantics })}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 ${
              settings.showSemantics ? 'bg-stone-900 dark:bg-stone-100' : 'bg-stone-300 dark:bg-stone-700'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-stone-900 transition-transform ${
                settings.showSemantics ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Screen Reader Live Announcements Stream */}
        <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-stone-900 dark:text-stone-100" aria-hidden="true" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-600 dark:text-stone-300">
                ARIA Live Stream
              </span>
            </div>
            <span className="text-[10px] font-mono text-stone-700 dark:text-stone-300 bg-stone-200 dark:bg-stone-800 px-1.5 py-0.5 rounded">
              aria-live="polite"
            </span>
          </div>
          <div
            className="p-3 bg-stone-900 text-stone-100 rounded-lg text-xs font-mono max-h-24 overflow-y-auto space-y-1"
            tabIndex={0}
            aria-label="Screen reader announcement transcript history"
          >
            {announcementLogs.length === 0 ? (
              <p className="text-stone-500 italic">No announcements yet.</p>
            ) : (
              announcementLogs.map((log, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-stone-500 text-[10px] select-none">[{idx + 1}]</span>
                  <span className="text-stone-200">{log}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Reset Action */}
        <div className="pt-2 flex items-center justify-between">
          <button
            type="button"
            onClick={onResetSettings}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            Reset Defaults
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs font-mono font-bold uppercase tracking-wider rounded-lg hover:bg-stone-800 shadow-2xs"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </section>
  );
};
