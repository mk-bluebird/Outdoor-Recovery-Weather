interface ViewMode {
  id: string;
  label: string;
  description: string;
  emphasis: string;
}

interface Props {
  views: ViewMode[];
  activeView: string;
  setActiveView: (id: string) => void;
  highContrast: boolean;
}

export function ViewSelector({ views, activeView, setActiveView, highContrast }: Props) {
  return (
    <section aria-label="Choose a purpose-oriented view" className="mb-4">
      <p className={`text-sm mb-2 ${highContrast ? 'text-stone-300' : 'text-stone-600'}`}>
        <strong>Choose a view</strong> — optional interface modes. You do not need to declare who you are.
      </p>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="View modes">
        {views.map(view => (
          <button
            key={view.id}
            role="tab"
            aria-selected={activeView === view.id}
            onClick={() => setActiveView(view.id)}
            className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
              activeView === view.id
                ? (highContrast
                  ? 'bg-amber-400 text-black border-amber-400 font-bold'
                  : 'bg-stone-800 text-white border-stone-800 font-medium')
                : (highContrast
                  ? 'border-stone-500 text-stone-300 hover:border-amber-400 hover:text-amber-300'
                  : 'border-stone-300 text-stone-600 hover:border-stone-500 hover:text-stone-800')
            }`}
            title={`${view.label}: ${view.description}`}
          >
            {view.label}
          </button>
        ))}
      </div>
    </section>
  );
}
