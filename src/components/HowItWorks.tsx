interface Props {
  highContrast: boolean;
}

export function HowItWorks({ highContrast }: Props) {
  const cardBg = highContrast ? 'bg-stone-800 border-stone-600' : 'bg-white border-stone-200';
  const headingColor = highContrast ? 'text-amber-300' : 'text-stone-800';
  const textColor = highContrast ? 'text-stone-200' : 'text-stone-700';
  const mutedText = highContrast ? 'text-stone-400' : 'text-stone-500';
  const subBg = highContrast ? 'bg-stone-900' : 'bg-stone-50';

  return (
    <div className="space-y-6">
      <section className={`${cardBg} border rounded-xl p-6`}>
        <h2 className={`text-2xl font-bold ${headingColor} mb-4`}>How This Works</h2>
        <p className={`${textColor} leading-relaxed mb-4`}>
          Outdoor Recovery Weather is a public weather companion for city life in desert conditions.
          It combines official weather data, public service availability, and ecological observations
          into plain-language guidance that anyone can use.
        </p>

        <div className="space-y-4">
          <div className={`${subBg} rounded-lg p-4`}>
            <h3 className={`font-bold ${headingColor} mb-2`}>What data does it use?</h3>
            <ul className={`text-sm ${textColor} space-y-2`}>
              <li><strong>NWS HeatRisk:</strong> A five-level framework from the National Weather Service that communicates population-level heat concern. Updated hourly.</li>
              <li><strong>NWS Forecast:</strong> Official temperature, humidity, wind, and precipitation forecasts. Updated every 6 hours.</li>
              <li><strong>City of Phoenix service data:</strong> Publicly listed cooling centers, hydration stations, and respite facilities. Verified daily by phone and in-person check.</li>
              <li><strong>USA-NPN phenology data:</strong> Public observational records of plant and animal seasonal activity. Used for coarse ecological context only.</li>
              <li><strong>Air quality data:</strong> From regional air quality monitoring districts.</li>
            </ul>
          </div>

          <div className={`${subBg} rounded-lg p-4`}>
            <h3 className={`font-bold ${headingColor} mb-2`}>How are forecasts calculated?</h3>
            <p className={`text-sm ${textColor} mb-2`}>
              The application combines multiple data sources with the following component weights:
            </p>
            <ul className={`text-sm ${textColor} space-y-1`}>
              <li>• HeatRisk level: 40%</li>
              <li>• Surface temperature estimates: 25%</li>
              <li>• Humidity and moisture conditions: 15%</li>
              <li>• Wind and dust conditions: 10%</li>
              <li>• Ecological observations: 10%</li>
            </ul>
            <p className={`text-sm ${mutedText} mt-2`}>
              Model version: ORW v1.0.2. Component weights are reviewed quarterly with community input.
            </p>
          </div>

          <div className={`${subBg} rounded-lg p-4`}>
            <h3 className={`font-bold ${headingColor} mb-2`}>How are services verified?</h3>
            <p className={`text-sm ${textColor}`}>
              Each service listing is verified through daily phone calls and periodic in-person checks.
              Verification status is shown beside every listing with a timestamp.
              When verification is older than 24 hours, the listing is marked "needs verification."
              Community members can submit corrections anonymously.
            </p>
          </div>

          <div className={`${subBg} rounded-lg p-4`}>
            <h3 className={`font-bold ${headingColor} mb-2`}>Who governs this tool?</h3>
            <p className={`text-sm ${textColor} mb-2`}>
              This application is developed with community oversight. Governance decisions include:
            </p>
            <ul className={`text-sm ${textColor} space-y-1`}>
              <li>• What data sources to include or exclude</li>
              <li>• How to weight different forecast components</li>
              <li>• Service verification protocols</li>
              <li>• Accessibility standards and review schedule</li>
              <li>• Privacy and non-enforcement policies</li>
              <li>• Correction and accountability processes</li>
            </ul>
            <p className={`text-sm ${mutedText} mt-2`}>
              Community governance meetings are held monthly. Meeting notes and decisions are published publicly.
            </p>
          </div>

          <div className={`${subBg} rounded-lg p-4`}>
            <h3 className={`font-bold ${headingColor} mb-2`}>What are the access paths?</h3>
            <ul className={`text-sm ${textColor} space-y-1`}>
              <li>• Responsive web page — no account required</li>
              <li>• Screen-reader-ready with proper headings and labels</li>
              <li>• High-contrast theme and text-only mode</li>
              <li>• Plain-language summary before maps or charts</li>
              <li>• SMS-length daily bulletin (text 602-555-0100)</li>
              <li>• Printable one-page daily bulletin</li>
              <li>• Phone line: 602-263-8800 (relay access available)</li>
              <li>• In-person lookup at listed facilities</li>
              <li>• Multilingual content reviewed with local community</li>
            </ul>
          </div>

          <div className={`${subBg} rounded-lg p-4`}>
            <h3 className={`font-bold ${headingColor} mb-2`}>How are corrections handled?</h3>
            <p className={`text-sm ${textColor}`}>
              Anyone can submit a correction through the "This listing is wrong or inaccessible" button.
              Corrections are anonymous — no personal data is collected.
              When a correction is submitted, the listing is immediately marked "needs verification"
              until a human reviewer confirms the update.
              All corrections are logged publicly with resolution status.
            </p>
          </div>
        </div>
      </section>

      <section className={`${cardBg} border rounded-xl p-6`}>
        <h2 className={`text-xl font-bold ${headingColor} mb-3`}>Correction History</h2>
        <p className={`text-sm ${textColor} mb-3`}>Recent corrections resolved this month:</p>
        <div className={`${subBg} rounded-lg p-4`}>
          <ul className={`text-sm ${textColor} space-y-2`}>
            <li className="flex justify-between">
              <span>Heritage Square Restroom — status changed to "needs verification"</span>
              <span className={mutedText}>June 13</span>
            </li>
            <li className="flex justify-between">
              <span>Central Library — updated hours for summer schedule</span>
              <span className={mutedText}>June 12</span>
            </li>
            <li className="flex justify-between">
              <span>Community Laundry — accessibility status pending confirmation</span>
              <span className={mutedText}>June 11</span>
            </li>
            <li className="flex justify-between">
              <span>East Valley Cooling Center — limited capacity reported</span>
              <span className={mutedText}>June 10</span>
            </li>
          </ul>
        </div>
        <p className={`text-xs mt-2 ${mutedText}`}>
          14 corrections resolved in June 2026. All corrections are reviewed by human staff.
        </p>
      </section>
    </div>
  );
}
