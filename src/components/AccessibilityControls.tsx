interface Props {
  highContrast: boolean;
  setHighContrast: (value: boolean) => void;
  textOnly: boolean;
  setTextOnly: (value: boolean) => void;
}

export function AccessibilityControls({ highContrast, setHighContrast, textOnly, setTextOnly }: Props) {
  return (
    <div
      className={`mt-3 p-4 rounded-lg border ${highContrast ? 'bg-stone-800 border-amber-400' : 'bg-blue-50 border-blue-200'}`}
      role="region"
      aria-label="Accessibility settings"
    >
      <h2 className={`text-sm font-bold mb-3 ${highContrast ? 'text-amber-300' : 'text-stone-800'}`}>
        ♿ Accessibility Options
      </h2>
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
            className="w-4 h-4 rounded"
          />
          <span className={`text-sm ${highContrast ? 'text-stone-200' : 'text-stone-700'}`}>
            High contrast mode
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={textOnly}
            onChange={(e) => setTextOnly(e.target.checked)}
            className="w-4 h-4 rounded"
          />
          <span className={`text-sm ${highContrast ? 'text-stone-200' : 'text-stone-700'}`}>
            Text-only mode (no visual charts)
          </span>
        </label>
      </div>
      <p className={`text-xs mt-2 ${highContrast ? 'text-stone-400' : 'text-stone-500'}`}>
        This application is designed to work with screen readers. All content uses proper heading structure and text alternatives.
        For a printed version, use the "Print daily bulletin" button. For phone access, call 602-263-8800.
      </p>
    </div>
  );
}
