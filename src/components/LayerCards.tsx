import { thermalLoadWindows, surfaceHazardWindows, ecologicalData, dryRecoveryData } from '../data/weatherData';

interface Props {
  highContrast: boolean;
  textOnly: boolean;
  activeView: string;
}

function SeverityBadge({ severity, highContrast }: { severity: string; highContrast: boolean }) {
  const colors: Record<string, string> = {
    low: highContrast ? 'bg-green-900 text-green-200 border-green-400' : 'bg-green-100 text-green-800 border-green-300',
    moderate: highContrast ? 'bg-yellow-900 text-yellow-200 border-yellow-400' : 'bg-yellow-100 text-yellow-800 border-yellow-300',
    high: highContrast ? 'bg-orange-900 text-orange-200 border-orange-400' : 'bg-orange-100 text-orange-800 border-orange-300',
    extreme: highContrast ? 'bg-red-900 text-red-200 border-red-400' : 'bg-red-100 text-red-800 border-red-300',
  };
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-bold rounded border ${colors[severity] || colors.moderate}`}>
      {severity.toUpperCase()}
    </span>
  );
}

function TimeBar({ windows, highContrast }: { windows: typeof thermalLoadWindows; highContrast: boolean }) {
  return (
    <div className="space-y-2">
      {windows.map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className={`text-xs font-mono w-28 ${highContrast ? 'text-stone-300' : 'text-stone-600'}`}>
            {w.start}–{w.end}
          </span>
          <div className="flex-1">
            <div className={`h-6 rounded flex items-center px-2 ${
              w.severity === 'low' ? (highContrast ? 'bg-green-900' : 'bg-green-100') :
              w.severity === 'moderate' ? (highContrast ? 'bg-yellow-900' : 'bg-yellow-100') :
              w.severity === 'high' ? (highContrast ? 'bg-orange-900' : 'bg-orange-100') :
              (highContrast ? 'bg-red-900' : 'bg-red-100')
            }`}>
              <span className={`text-xs font-medium ${highContrast ? 'text-stone-100' : 'text-stone-800'}`}>
                {w.label}
              </span>
            </div>
          </div>
          <SeverityBadge severity={w.severity} highContrast={highContrast} />
        </div>
      ))}
    </div>
  );
}

export function LayerCards({ highContrast, textOnly, activeView }: Props) {
  const cardBg = highContrast ? 'bg-stone-800 border-stone-600' : 'bg-white border-stone-200';
  const headingColor = highContrast ? 'text-amber-300' : 'text-stone-800';
  const textColor = highContrast ? 'text-stone-200' : 'text-stone-700';
  const mutedText = highContrast ? 'text-stone-400' : 'text-stone-500';
  const subBg = highContrast ? 'bg-stone-900' : 'bg-stone-50';

  const showHeatCard = ['recovery', 'transit', 'service', 'research'].includes(activeView);
  const showResourcesCard = ['recovery', 'transit', 'service'].includes(activeView);
  const showDryRecovery = ['recovery', 'service'].includes(activeView);
  const showAirSurface = ['recovery', 'transit', 'stewardship'].includes(activeView);
  const showLivingSystems = ['garden', 'research', 'stewardship'].includes(activeView);

  return (
    <div className="space-y-4">
      {/* Layer 1: Sky and Heat */}
      {showHeatCard && (
        <section aria-label="Sky and heat layer" className={`${cardBg} border rounded-xl p-5`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl" aria-hidden="true">🌡️</span>
            <h3 className={`text-lg font-bold ${headingColor}`}>Sky and Heat</h3>
            <span className={`text-xs px-2 py-0.5 rounded ${highContrast ? 'bg-stone-700 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>Layer 1 of 5</span>
          </div>
          <p className={`${textColor} mb-3`}>
            <strong>HeatRisk elevated (Level {4} — Major).</strong> Strong sun expected after 10 AM.
            High thermal load period: 11 AM to 7 PM.
          </p>

          {!textOnly && (
            <div className={`${subBg} rounded-lg p-4 mb-3`}>
              <p className={`text-sm font-medium ${headingColor} mb-2`}>Today's Thermal Timeline</p>
              <TimeBar windows={thermalLoadWindows} highContrast={highContrast} />
            </div>
          )}

          {textOnly && (
            <div className={`${subBg} rounded-lg p-3 mb-3`}>
              <p className={`text-sm ${textColor}`}>
                5:30–8:00 AM: Lower exposure (LOW) | 8:00–11:00 AM: Increasing heat (MODERATE) | 11:00 AM–7:00 PM: High thermal load (HIGH) | 7:00–10:00 PM: Gradual cooling (MODERATE) | 10:00 PM–5:30 AM: Overnight recovery limited (MODERATE)
              </p>
            </div>
          )}

          <div className={`${highContrast ? 'bg-stone-900 border-amber-600' : 'bg-amber-50 border-amber-200'} border-l-4 p-3 rounded-r`}>
            <p className={`text-sm font-medium ${headingColor}`}>Action</p>
            <p className={`text-sm ${textColor}`}>
              Plan higher-effort travel earlier in the day when possible. Use verified cooling or respite options during high thermal load hours.
            </p>
          </div>
          <p className={`text-xs mt-2 ${mutedText}`}>
            Source: NWS HeatRisk. This is complementary to official alerts.
          </p>
        </section>
      )}

      {/* Layer 2: Recovery */}
      {showResourcesCard && (
        <section aria-label="Recovery layer" className={`${cardBg} border rounded-xl p-5`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl" aria-hidden="true">💧</span>
            <h3 className={`text-lg font-bold ${headingColor}`}>Recovery</h3>
            <span className={`text-xs px-2 py-0.5 rounded ${highContrast ? 'bg-stone-700 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>Layer 2 of 5</span>
          </div>
          <p className={`${textColor} mb-3`}>
            <strong>Overnight Recovery Deficit: Elevated.</strong> Tonight may remain warm enough that passive outdoor cooling is limited.
            Water, shade, and indoor cooling can reduce exposure during the day.
          </p>
          <div className={`${subBg} rounded-lg p-3 mb-3`}>
            <p className={`text-sm font-medium ${headingColor} mb-1`}>Recovery resources summary</p>
            <ul className={`text-sm ${textColor} space-y-1`}>
              <li>✅ 3 verified water points open</li>
              <li>✅ 2 cooling/respite options (limited capacity reported)</li>
              <li>⚠️ 1 restroom needs verification</li>
              <li>✅ 1 covered rest area available</li>
              <li>⚠️ Dry-recovery support not verified today</li>
            </ul>
          </div>
          <p className={`text-xs ${mutedText}`}>
            Need an offline option? Call the public resource line: 602-263-8800 (relay access available).
          </p>
        </section>
      )}

      {/* Layer 3: Dry Recovery */}
      {showDryRecovery && (
        <section aria-label="Dry recovery layer" className={`${cardBg} border rounded-xl p-5`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl" aria-hidden="true">👕</span>
            <h3 className={`text-lg font-bold ${headingColor}`}>Dry Recovery</h3>
            <span className={`text-xs px-2 py-0.5 rounded ${highContrast ? 'bg-stone-700 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>Layer 3 of 5</span>
          </div>
          <div className={`${highContrast ? 'bg-yellow-900 border-yellow-500' : 'bg-yellow-50 border-yellow-300'} border-l-4 p-3 rounded-r mb-3`}>
            <p className={`text-sm font-bold ${headingColor}`}>Dry-Recovery Gap: {dryRecoveryData.gapLevel}</p>
          </div>
          <p className={`${textColor} mb-2`}>{dryRecoveryData.description}</p>
          <p className={`text-sm ${textColor} mb-2`}>
            <strong>What is verified:</strong> {dryRecoveryData.verifiedServices}
          </p>
          <div className={`${highContrast ? 'bg-stone-900 border-amber-600' : 'bg-amber-50 border-amber-200'} border-l-4 p-3 rounded-r`}>
            <p className={`text-sm font-medium ${headingColor}`}>Action</p>
            <p className={`text-sm ${textColor}`}>{dryRecoveryData.action}</p>
          </div>
        </section>
      )}

      {/* Layer 4: Surfaces and Air */}
      {showAirSurface && (
        <section aria-label="Surfaces and air layer" className={`${cardBg} border rounded-xl p-5`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl" aria-hidden="true">🏜️</span>
            <h3 className={`text-lg font-bold ${headingColor}`}>Surfaces and Air</h3>
            <span className={`text-xs px-2 py-0.5 rounded ${highContrast ? 'bg-stone-700 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>Layer 4 of 5</span>
          </div>

          <div className={`${subBg} rounded-lg p-4 mb-3`}>
            <p className={`text-sm font-bold ${highContrast ? 'text-red-400' : 'text-red-700'} mb-2`}>
              ⚠️ Surface Hazard Window: HIGH — 12 PM to 6 PM
            </p>
            <p className={`text-sm ${textColor}`}>
              Unshaded pavement, metal seating, and vehicle interiors may become much hotter than the air temperature.
            </p>
          </div>

          {!textOnly && (
            <div className={`${subBg} rounded-lg p-4 mb-3`}>
              <p className={`text-sm font-medium ${headingColor} mb-2`}>Surface Condition Timeline</p>
              <TimeBar windows={surfaceHazardWindows} highContrast={highContrast} />
            </div>
          )}

          <div className={`${subBg} rounded-lg p-4 mb-3`}>
            <p className={`text-sm font-medium ${headingColor} mb-1`}>Dust and Respiratory Burden</p>
            <p className={`text-sm ${textColor}`}>
              Window: <strong>Low to moderate.</strong> Conditions may change with wind and localized dust.
              Current wind: 8 mph SW.
            </p>
          </div>

          <div className={`${highContrast ? 'bg-stone-900 border-amber-600' : 'bg-amber-50 border-amber-200'} border-l-4 p-3 rounded-r`}>
            <p className={`text-sm font-medium ${headingColor}`}>Action</p>
            <p className={`text-sm ${textColor}`}>
              Use shade and protective footwear. Check official air-quality guidance if you are sensitive to dust or smoke.
            </p>
          </div>
        </section>
      )}

      {/* Layer 5: Living Systems */}
      {showLivingSystems && (
        <section aria-label="Living systems layer" className={`${cardBg} border rounded-xl p-5`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl" aria-hidden="true">🌿</span>
            <h3 className={`text-lg font-bold ${headingColor}`}>Living Systems</h3>
            <span className={`text-xs px-2 py-0.5 rounded ${highContrast ? 'bg-stone-700 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>Layer 5 of 5</span>
          </div>

          <div className={`${highContrast ? 'bg-green-900 border-green-500' : 'bg-green-50 border-green-300'} border-l-4 p-3 rounded-r mb-3`}>
            <p className={`text-sm font-bold ${headingColor}`}>
              Pollinator Opportunity: {ecologicalData.pollinatorOpportunity}
            </p>
            <p className={`text-xs ${mutedText}`}>Confidence: {ecologicalData.confidence}</p>
          </div>

          <p className={`text-sm ${textColor} mb-2`}>
            Morning temperatures, lower wind, and current flowering-resource observations may support pollinator activity in suitable habitat.
          </p>

          <div className={`${subBg} rounded-lg p-3 mb-3`}>
            <p className={`text-sm font-medium ${headingColor} mb-1`}>Current Bloom Status</p>
            <p className={`text-sm ${textColor}`}>{ecologicalData.bloomStatus}</p>
          </div>

          <div className={`${subBg} rounded-lg p-3 mb-3`}>
            <p className={`text-sm font-medium ${headingColor} mb-1`}>Desert Pulse</p>
            <p className={`text-sm ${textColor}`}>{ecologicalData.desertPulse}</p>
          </div>

          <div className={`${highContrast ? 'bg-stone-900 border-green-600' : 'bg-green-50 border-green-200'} border-l-4 p-3 rounded-r`}>
            <p className={`text-sm font-medium ${headingColor}`}>Habitat-Support Action</p>
            <p className={`text-sm ${textColor}`}>{ecologicalData.habitatAction}</p>
          </div>

          <p className={`text-xs mt-3 ${mutedText}`}>
            This is a habitat-support forecast — not a wildlife-location tool or a prediction that any species is present.
            Ecological context informed by USA-NPN public observational resources.
          </p>
        </section>
      )}
    </div>
  );
}
