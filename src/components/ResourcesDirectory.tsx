import { useState } from 'react';
import { resources, Resource } from '../data/weatherData';

interface Props {
  highContrast: boolean;
  textOnly: boolean;
}

function StatusBadge({ status, highContrast }: { status: Resource['status']; highContrast: boolean }) {
  const config: Record<string, { label: string; color: string; icon: string }> = {
    'open': { label: 'Open', color: highContrast ? 'bg-green-900 text-green-200 border-green-400' : 'bg-green-100 text-green-800 border-green-300', icon: '✅' },
    'limited': { label: 'Limited capacity', color: highContrast ? 'bg-yellow-900 text-yellow-200 border-yellow-400' : 'bg-yellow-100 text-yellow-800 border-yellow-300', icon: '⚠️' },
    'full': { label: 'Full', color: highContrast ? 'bg-red-900 text-red-200 border-red-400' : 'bg-red-100 text-red-800 border-red-300', icon: '🔴' },
    'unavailable': { label: 'Temporarily unavailable', color: highContrast ? 'bg-red-900 text-red-200 border-red-400' : 'bg-red-100 text-red-800 border-red-300', icon: '❌' },
    'needs-verification': { label: 'Needs verification', color: highContrast ? 'bg-stone-700 text-stone-200 border-stone-400' : 'bg-stone-100 text-stone-700 border-stone-400', icon: '❓' },
  };
  const c = config[status];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded border ${c.color}`}>
      <span aria-hidden="true">{c.icon}</span> {c.label}
    </span>
  );
}

function TypeIcon({ type }: { type: Resource['type'] }) {
  const icons: Record<string, string> = {
    'water': '💧',
    'cooling': '❄️',
    'restroom': '🚻',
    'covered-rest': '🏕️',
    'dry-recovery': '👕',
  };
  return <span className="text-xl" aria-hidden="true">{icons[type]}</span>;
}

function TypeLabel({ type }: { type: Resource['type'] }) {
  const labels: Record<string, string> = {
    'water': 'Free water refill',
    'cooling': 'Cooling / respite',
    'restroom': 'Public restroom',
    'covered-rest': 'Covered rest',
    'dry-recovery': 'Dry-recovery support',
  };
  return <span className="font-medium">{labels[type]}</span>;
}

export function ResourcesDirectory({ highContrast, textOnly }: Props) {
  const [filter, setFilter] = useState<string>('all');
  const [showCorrection, setShowCorrection] = useState<string | null>(null);
  const [correctionSubmitted, setCorrectionSubmitted] = useState<string[]>([]);

  const cardBg = highContrast ? 'bg-stone-800 border-stone-600' : 'bg-white border-stone-200';
  const headingColor = highContrast ? 'text-amber-300' : 'text-stone-800';
  const textColor = highContrast ? 'text-stone-200' : 'text-stone-700';
  const mutedText = highContrast ? 'text-stone-400' : 'text-stone-500';
  const subBg = highContrast ? 'bg-stone-900' : 'bg-stone-50';

  const filteredResources = filter === 'all' ? resources : resources.filter(r => r.type === filter);

  const filters = [
    { id: 'all', label: 'All services' },
    { id: 'water', label: '💧 Water' },
    { id: 'cooling', label: '❄️ Cooling' },
    { id: 'restroom', label: '🚻 Restrooms' },
    { id: 'covered-rest', label: '🏕️ Covered rest' },
    { id: 'dry-recovery', label: '👕 Dry recovery' },
  ];

  const handleCorrection = (id: string) => {
    setCorrectionSubmitted([...correctionSubmitted, id]);
    setShowCorrection(null);
  };

  return (
    <section aria-label="Public services directory" className={`${cardBg} border rounded-xl p-5`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl" aria-hidden="true">📍</span>
        <h3 className={`text-lg font-bold ${headingColor}`}>Public Support — Verified Resources</h3>
      </div>
      <p className={`text-sm ${textColor} mb-4`}>
        Recovery resources near the central public-service zone. Each listing shows service type, current availability, hours, and access information.
      </p>

      {/* Filters */}
      {!textOnly && (
        <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Filter by service type">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-3 py-1.5 text-sm rounded border ${
                filter === f.id
                  ? (highContrast ? 'bg-amber-400 text-black border-amber-400 font-bold' : 'bg-stone-800 text-white border-stone-800')
                  : (highContrast ? 'border-stone-500 text-stone-300 hover:border-amber-400' : 'border-stone-300 text-stone-600 hover:border-stone-500')
              }`}
              aria-pressed={filter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {/* Resource List */}
      <div className="space-y-3">
        {filteredResources.map(resource => (
          <div
            key={resource.id}
            className={`${subBg} rounded-lg p-4 border ${highContrast ? 'border-stone-600' : 'border-stone-200'}`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-start gap-2">
                <TypeIcon type={resource.type} />
                <div>
                  <p className={`font-medium ${textColor}`}>
                    <TypeLabel type={resource.type} />
                  </p>
                  <p className={`text-sm font-semibold ${headingColor}`}>{resource.name}</p>
                  <p className={`text-sm ${mutedText}`}>{resource.address}</p>
                </div>
              </div>
              <StatusBadge status={resource.status} highContrast={highContrast} />
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-sm ${textColor}`}>
              <div>
                <span className={`font-medium ${mutedText}`}>Hours: </span>
                {resource.hours}
              </div>
              <div>
                <span className={`font-medium ${mutedText}`}>Access: </span>
                {resource.accessibility}
              </div>
              {resource.languageSupport.length > 0 && (
                <div>
                  <span className={`font-medium ${mutedText}`}>Languages: </span>
                  {resource.languageSupport.join(', ')}
                </div>
              )}
              <div>
                <span className={`font-medium ${mutedText}`}>Last verified: </span>
                {resource.lastVerified}
              </div>
              {resource.phone && (
                <div>
                  <span className={`font-medium ${mutedText}`}>Phone: </span>
                  <a href={`tel:${resource.phone}`} className={`${highContrast ? 'text-amber-300 underline' : 'text-blue-700 underline'}`}>
                    {resource.phone}
                  </a>
                </div>
              )}
            </div>

            {/* Correction button */}
            {correctionSubmitted.includes(resource.id) ? (
              <div className={`mt-3 text-sm ${highContrast ? 'text-green-300' : 'text-green-700'}`}>
                ✅ Thank you. This listing is marked "needs verification" until a human reviewer confirms the update.
              </div>
            ) : showCorrection === resource.id ? (
              <div className={`mt-3 p-3 ${highContrast ? 'bg-stone-800 border-amber-500' : 'bg-white border-amber-300'} border rounded`}>
                <p className={`text-sm ${textColor} mb-2`}>Report that this listing is wrong or inaccessible:</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCorrection(resource.id)}
                    className={`px-3 py-1.5 text-sm rounded ${highContrast ? 'bg-amber-400 text-black' : 'bg-amber-500 text-white'} font-medium`}
                  >
                    Submit correction
                  </button>
                  <button
                    onClick={() => setShowCorrection(null)}
                    className={`px-3 py-1.5 text-sm rounded ${highContrast ? 'border-stone-500 text-stone-300' : 'border-stone-300 text-stone-600'} border`}
                  >
                    Cancel
                  </button>
                </div>
                <p className={`text-xs mt-2 ${mutedText}`}>Anonymous reports accepted. No personal data collected.</p>
              </div>
            ) : (
              <button
                onClick={() => setShowCorrection(resource.id)}
                className={`mt-3 text-xs ${highContrast ? 'text-amber-300 underline' : 'text-blue-700 underline'} hover:opacity-80`}
              >
                This listing is wrong or inaccessible →
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Offline option */}
      <div className={`mt-4 p-4 ${highContrast ? 'bg-stone-900 border-amber-500' : 'bg-blue-50 border-blue-200'} border rounded-lg`}>
        <p className={`text-sm font-medium ${headingColor}`}>Need an offline option?</p>
        <p className={`text-sm ${textColor}`}>
          Call the public resource line: <a href="tel:602-263-8800" className={`font-bold ${highContrast ? 'text-amber-300 underline' : 'text-blue-700 underline'}`}>602-263-8800</a> (relay access available).
          Or visit a listed facility in person during posted hours.
        </p>
      </div>

      {/* Printable bulletin link */}
      <div className="mt-3 flex gap-3">
        <button
          onClick={() => window.print()}
          className={`px-4 py-2 text-sm rounded border ${highContrast ? 'border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black' : 'border-stone-400 text-stone-700 hover:bg-stone-100'}`}
        >
          🖨️ Print daily bulletin
        </button>
      </div>
    </section>
  );
}
