import { useState } from 'react';
import { DailySummary } from './components/DailySummary';
import { LayerCards } from './components/LayerCards';
import { ResourcesDirectory } from './components/ResourcesDirectory';
import { ViewSelector } from './components/ViewSelector';
import { GovernanceFooter } from './components/GovernanceFooter';
import { HowItWorks } from './components/HowItWorks';
import { NeverDo } from './components/NeverDo';
import { AccessibilityControls } from './components/AccessibilityControls';
import { weatherData, viewModes } from './data/weatherData';

type Page = 'forecast' | 'how-it-works' | 'never-do';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('forecast');
  const [activeView, setActiveView] = useState('recovery');
  const [highContrast, setHighContrast] = useState(false);
  const [textOnly, setTextOnly] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);

  const activeViewData = viewModes.find(v => v.id === activeView);

  return (
    <div className={`min-h-screen ${highContrast ? 'bg-black text-white' : 'bg-stone-50 text-stone-900'} transition-colors`}>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-amber-400 focus:text-black focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className={`${highContrast ? 'bg-stone-900 border-stone-600' : 'bg-white border-stone-200'} border-b shadow-sm`}>
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className={`text-xl sm:text-2xl font-bold ${highContrast ? 'text-amber-300' : 'text-stone-800'}`}>
                ☀️ Outdoor Recovery Weather
              </h1>
              <p className={`text-sm ${highContrast ? 'text-stone-300' : 'text-stone-600'}`}>
                Phoenix — Public Desert Weather Companion
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setShowAccessibility(!showAccessibility)}
                className={`px-3 py-1.5 text-sm rounded border ${highContrast ? 'border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black' : 'border-stone-300 text-stone-700 hover:bg-stone-100'}`}
                aria-label="Accessibility options"
              >
                ♿ Accessibility
              </button>
              <nav aria-label="Main navigation" className="flex gap-1">
                <button
                  onClick={() => setCurrentPage('forecast')}
                  className={`px-3 py-1.5 text-sm rounded ${currentPage === 'forecast' ? (highContrast ? 'bg-amber-400 text-black font-bold' : 'bg-stone-800 text-white') : (highContrast ? 'text-stone-300 hover:text-white' : 'text-stone-600 hover:bg-stone-100')}`}
                >
                  Forecast
                </button>
                <button
                  onClick={() => setCurrentPage('how-it-works')}
                  className={`px-3 py-1.5 text-sm rounded ${currentPage === 'how-it-works' ? (highContrast ? 'bg-amber-400 text-black font-bold' : 'bg-stone-800 text-white') : (highContrast ? 'text-stone-300 hover:text-white' : 'text-stone-600 hover:bg-stone-100')}`}
                >
                  How this works
                </button>
                <button
                  onClick={() => setCurrentPage('never-do')}
                  className={`px-3 py-1.5 text-sm rounded ${currentPage === 'never-do' ? (highContrast ? 'bg-amber-400 text-black font-bold' : 'bg-stone-800 text-white') : (highContrast ? 'text-stone-300 hover:text-white' : 'text-stone-600 hover:bg-stone-100')}`}
                >
                  Never do
                </button>
              </nav>
            </div>
          </div>

          {/* Accessibility Controls */}
          {showAccessibility && (
            <AccessibilityControls
              highContrast={highContrast}
              setHighContrast={setHighContrast}
              textOnly={textOnly}
              setTextOnly={setTextOnly}
            />
          )}
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="max-w-5xl mx-auto px-4 py-6">
        {currentPage === 'forecast' && (
          <div className="space-y-6">
            {/* View Selector */}
            <ViewSelector
              views={viewModes}
              activeView={activeView}
              setActiveView={setActiveView}
              highContrast={highContrast}
            />

            {/* Active View Description */}
            {activeViewData && (
              <div className={`${highContrast ? 'bg-stone-800 border-stone-600' : 'bg-blue-50 border-blue-200'} border rounded-lg p-4`}>
                <p className={`text-sm ${highContrast ? 'text-stone-200' : 'text-blue-800'}`}>
                  <strong>View:</strong> {activeViewData.label} — <em>{activeViewData.description}</em>
                </p>
                <p className={`text-sm mt-1 ${highContrast ? 'text-stone-300' : 'text-blue-700'}`}>
                  Emphasis: {activeViewData.emphasis}
                </p>
              </div>
            )}

            {/* Daily Summary Card */}
            <DailySummary weatherData={weatherData} highContrast={highContrast} textOnly={textOnly} />

            {/* Layer Cards */}
            <LayerCards highContrast={highContrast} textOnly={textOnly} activeView={activeView} />

            {/* Resources Directory */}
            <ResourcesDirectory highContrast={highContrast} textOnly={textOnly} />
          </div>
        )}

        {currentPage === 'how-it-works' && <HowItWorks highContrast={highContrast} />}
        {currentPage === 'never-do' && <NeverDo highContrast={highContrast} />}
      </main>

      {/* Governance Footer */}
      <GovernanceFooter highContrast={highContrast} />
    </div>
  );
}

export default App;
