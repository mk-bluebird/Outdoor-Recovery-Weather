interface Props {
  highContrast: boolean;
}

export function NeverDo({ highContrast }: Props) {
  const cardBg = highContrast ? 'bg-stone-800 border-stone-600' : 'bg-white border-stone-200';
  const headingColor = highContrast ? 'text-amber-300' : 'text-stone-800';
  const textColor = highContrast ? 'text-stone-200' : 'text-stone-700';
  const mutedText = highContrast ? 'text-stone-400' : 'text-stone-500';
  const subBg = highContrast ? 'bg-stone-900' : 'bg-stone-50';

  return (
    <div className="space-y-6">
      <section className={`${cardBg} border rounded-xl p-6`}>
        <h2 className={`text-2xl font-bold ${headingColor} mb-4`}>What This Tool Will Never Do</h2>
        <p className={`${textColor} leading-relaxed mb-6`}>
          This page is a public commitment. It describes actions and uses that this tool is designed to prevent.
          These commitments are part of the governance framework and are reviewed with community input.
        </p>

        <div className="space-y-4">
          <div className={`${highContrast ? 'bg-red-900 border-red-500' : 'bg-red-50 border-red-300'} border-l-4 p-4 rounded-r`}>
            <h3 className={`font-bold ${highContrast ? 'text-red-200' : 'text-red-800'} mb-2`}>
              ❌ This tool will never identify, track, or assess people
            </h3>
            <ul className={`text-sm ${highContrast ? 'text-red-100' : 'text-red-700'} space-y-1`}>
              <li>• It does not collect identity data</li>
              <li>• It does not collect health or medical information</li>
              <li>• It does not collect housing status</li>
              <li>• It does not collect substance-use information</li>
              <li>• It does not collect biometric data</li>
              <li>• It does not collect device identifiers</li>
              <li>• It does not collect movement or location history</li>
              <li>• It does not categorize or judge anyone</li>
            </ul>
          </div>

          <div className={`${highContrast ? 'bg-red-900 border-red-500' : 'bg-red-50 border-red-300'} border-l-4 p-4 rounded-r`}>
            <h3 className={`font-bold ${highContrast ? 'text-red-200' : 'text-red-800'} mb-2`}>
              ❌ This tool will never be used for enforcement
            </h3>
            <ul className={`text-sm ${highContrast ? 'text-red-100' : 'text-red-700'} space-y-1`}>
              <li>• It is not used for law enforcement purposes</li>
              <li>• It does not show "risk areas," "crime zones," or "disorder zones"</li>
              <li>• It does not show enforcement patrols or exclusion zones</li>
              <li>• It does not support actions designed to remove people from public space</li>
              <li>• It is not used for eligibility decisions for services</li>
            </ul>
          </div>

          <div className={`${highContrast ? 'bg-red-900 border-red-500' : 'bg-red-50 border-red-300'} border-l-4 p-4 rounded-r`}>
            <h3 className={`font-bold ${highContrast ? 'text-red-200' : 'text-red-800'} mb-2`}>
              ❌ This tool will never show person-level data
            </h3>
            <ul className={`text-sm ${highContrast ? 'text-red-100' : 'text-red-700'} space-y-1`}>
              <li>• It does not show individual people or groups on maps</li>
              <li>• It does not show encampments or sleeping locations</li>
              <li>• It does not show movement paths</li>
              <li>• It does not show cameras or surveillance locations</li>
              <li>• It does not show personal reports tied to a person</li>
            </ul>
          </div>

          <div className={`${highContrast ? 'bg-red-900 border-red-500' : 'bg-red-50 border-red-300'} border-l-4 p-4 rounded-r`}>
            <h3 className={`font-bold ${highContrast ? 'text-red-200' : 'text-red-800'} mb-2`}>
              ❌ This tool will never make person-level predictions
            </h3>
            <ul className={`text-sm ${highContrast ? 'text-red-100' : 'text-red-700'} space-y-1`}>
              <li>• It does not predict individual behavior</li>
              <li>• It does not predict who "needs" services</li>
              <li>• It does not use predictive-policing-adjacent metrics</li>
              <li>• It does not automate facility activation based on person presence</li>
            </ul>
          </div>

          <div className={`${highContrast ? 'bg-red-900 border-red-500' : 'bg-red-50 border-red-300'} border-l-4 p-4 rounded-r`}>
            <h3 className={`font-bold ${highContrast ? 'text-red-200' : 'text-red-800'} mb-2`}>
              ❌ This tool will never present uncertain information as certain
            </h3>
            <ul className={`text-sm ${highContrast ? 'text-red-100' : 'text-red-700'} space-y-1`}>
              <li>• It does not show unverified capacity estimates as confirmed</li>
              <li>• It does not frame ecological claims as certain facts</li>
              <li>• It does not show precise wildlife locations (roosts, nests, dens)</li>
              <li>• It always shows confidence levels and data freshness</li>
              <li>• It always shows uncertainty ranges where applicable</li>
            </ul>
          </div>

          <div className={`${highContrast ? 'bg-red-900 border-red-500' : 'bg-red-50 border-red-300'} border-l-4 p-4 rounded-r`}>
            <h3 className={`font-bold ${highContrast ? 'text-red-200' : 'text-red-800'} mb-2`}>
              ❌ This tool will never replace official guidance
            </h3>
            <ul className={`text-sm ${highContrast ? 'text-red-100' : 'text-red-700'} space-y-1`}>
              <li>• It does not replace NWS watches, warnings, or advisories</li>
              <li>• It does not provide medical advice</li>
              <li>• It does not replace official air-quality health guidance</li>
              <li>• It always identifies official sources</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${cardBg} border rounded-xl p-6`}>
        <h2 className={`text-xl font-bold ${headingColor} mb-3`}>What This Tool Instead Does</h2>
        <div className={`${subBg} rounded-lg p-4`}>
          <ul className={`text-sm ${textColor} space-y-2`}>
            <li>✅ Describes environmental conditions in plain language</li>
            <li>✅ Shows publicly available resources with verified status</li>
            <li>✅ Provides coarse ecological context for habitat support</li>
            <li>✅ Identifies lower-exposure time windows for travel and rest</li>
            <li>✅ Shows data confidence, freshness, and sources for every claim</li>
            <li>✅ Accepts anonymous corrections from the public</li>
            <li>✅ Works offline through phone, print, and in-person options</li>
            <li>✅ Uses neutral language: "support verification needed," not "unverified area"</li>
            <li>✅ Requires human approval for proposed service actions</li>
            <li>✅ Exposes governance decisions and model details publicly</li>
          </ul>
        </div>
      </section>

      <section className={`${cardBg} border rounded-xl p-6`}>
        <h2 className={`text-xl font-bold ${headingColor} mb-3`}>Accountability</h2>
        <p className={`text-sm ${textColor} mb-3`}>
          If this tool ever acts contrary to these commitments, the community governance process includes:
        </p>
        <ul className={`text-sm ${textColor} space-y-2`}>
          <li>• Public reporting of violations through the correction system</li>
          <li>• Monthly community governance review meetings</li>
          <li>• Published correction history and resolution status</li>
          <li>• Independent accessibility review (annual)</li>
          <li>• Transparent model version history and changelog</li>
          <li>• Community veto power over new data sources or features</li>
        </ul>
        <p className={`text-xs mt-3 ${mutedText}`}>
          Last governance review: June 2026. Next review: July 2026.
        </p>
      </section>
    </div>
  );
}
