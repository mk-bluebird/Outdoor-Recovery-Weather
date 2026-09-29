interface Props {
  highContrast: boolean;
}

export function GovernanceFooter({ highContrast }: Props) {
  const bgColor = highContrast ? 'bg-stone-900 border-stone-600' : 'bg-stone-100 border-stone-300';
  const textColor = highContrast ? 'text-stone-300' : 'text-stone-700';
  const headingColor = highContrast ? 'text-amber-300' : 'text-stone-800';
  const mutedText = highContrast ? 'text-stone-500' : 'text-stone-500';

  return (
    <footer className={`${bgColor} border-t mt-8`}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Public Governance Statement */}
        <div className={`${highContrast ? 'bg-stone-800 border-amber-500' : 'bg-white border-amber-300'} border-l-4 p-4 rounded-r mb-6`}>
          <h2 className={`text-base font-bold ${headingColor} mb-2`}>Public Governance Statement</h2>
          <p className={`text-sm ${textColor} leading-relaxed`}>
            This forecast describes environmental conditions and publicly available recovery resources.
            It does not collect identity, health, housing, substance-use, biometric, device, or movement data.
            It is not used for enforcement, eligibility decisions, or person-level prediction.
            Proposed service actions require human approval.
          </p>
        </div>

        {/* Transparency Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className={`text-sm font-bold ${headingColor} mb-2`}>Data Sources</h3>
            <ul className={`text-xs ${textColor} space-y-1`}>
              <li>• NWS HeatRisk — updated hourly</li>
              <li>• NWS Forecast — updated every 6 hours</li>
              <li>• City of Phoenix cooling centers — verified daily</li>
              <li>• Hydration stations — verified daily</li>
              <li>• USA-NPN phenology data — seasonal</li>
              <li>• AQMD air quality — updated hourly</li>
            </ul>
          </div>
          <div>
            <h3 className={`text-sm font-bold ${headingColor} mb-2`}>Transparency</h3>
            <ul className={`text-xs ${textColor} space-y-1`}>
              <li>• Model version: ORW v1.0.2</li>
              <li>• Service verification method: Daily phone + in-person check</li>
              <li>• Component weights: HeatRisk 40%, surface temp 25%, humidity 15%, wind 10%, ecological 10%</li>
              <li>• Last accessibility review: May 2026</li>
              <li>• Corrections this month: 14 resolved</li>
            </ul>
          </div>
        </div>

        {/* Known Limitations */}
        <div className={`${highContrast ? 'bg-stone-800' : 'bg-white'} rounded-lg p-4 mb-6`}>
          <h3 className={`text-sm font-bold ${headingColor} mb-2`}>Known Limitations</h3>
          <ul className={`text-xs ${textColor} space-y-1`}>
            <li>• Service availability may change between verification visits.</li>
            <li>• Ecological forecasts are coarse and general — not species-specific.</li>
            <li>• Surface temperature estimates are modeled, not measured at every location.</li>
            <li>• This tool does not replace official NWS alerts or medical guidance.</li>
            <li>• Resource listings may have outdated accessibility information.</li>
          </ul>
        </div>

        {/* Contact and Access */}
        <div className="flex flex-wrap gap-4 mb-6">
          <a href="tel:602-263-8800" className={`text-sm ${highContrast ? 'text-amber-300 underline' : 'text-blue-700 underline'}`}>
            📞 Public resource line: 602-263-8800
          </a>
          <span className={`text-sm ${mutedText}`}>|</span>
          <span className={`text-sm ${textColor}`}>
            Relay access available
          </span>
          <span className={`text-sm ${mutedText}`}>|</span>
          <button className={`text-sm ${highContrast ? 'text-amber-300 underline' : 'text-blue-700 underline'}`}>
            📋 Report an error (anonymous)
          </button>
        </div>

        {/* Bottom statement */}
        <div className={`border-t ${highContrast ? 'border-stone-700' : 'border-stone-300'} pt-4`}>
          <p className={`text-xs ${mutedText} text-center`}>
            <strong>Clear statement:</strong> This tool does not identify, track, or assess people.
          </p>
          <p className={`text-xs ${mutedText} text-center mt-1`}>
            Outdoor Recovery Weather: Phoenix — A public-support forecast, not a personal assessment.
          </p>
          <p className={`text-xs ${mutedText} text-center mt-2`}>
            Community governance decisions visible at "How this works" page.
          </p>
        </div>
      </div>
    </footer>
  );
}
