import { WeatherData } from '../data/weatherData';

interface Props {
  weatherData: WeatherData;
  highContrast: boolean;
  textOnly: boolean;
}

export function DailySummary({ weatherData, highContrast, textOnly }: Props) {
  const cardBg = highContrast ? 'bg-stone-800 border-amber-400' : 'bg-white border-stone-200';
  const headingColor = highContrast ? 'text-amber-300' : 'text-stone-800';
  const textColor = highContrast ? 'text-stone-200' : 'text-stone-700';
  const mutedText = highContrast ? 'text-stone-400' : 'text-stone-500';

  return (
    <section aria-label="Today's recovery forecast" className={`${cardBg} border-2 rounded-xl p-6 shadow-sm`}>
      {/* Date and Location */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div>
          <p className={`text-xs uppercase tracking-wide ${mutedText}`}>Forecast for</p>
          <p className={`text-lg font-semibold ${headingColor}`}>{weatherData.date}</p>
        </div>
        <div className="text-right">
          <p className={`text-xs ${mutedText}`}>{weatherData.location}</p>
          <p className={`text-xs ${mutedText}`}>Updated: {weatherData.lastUpdated}</p>
        </div>
      </div>

      {/* Main Summary */}
      <div className={`${highContrast ? 'bg-stone-900 border-amber-500' : 'bg-amber-50 border-amber-300'} border-l-4 p-4 rounded-r mb-4`}>
        <h2 className={`text-lg font-bold ${headingColor} mb-2`}>
          Today's Recovery Outlook
        </h2>
        <p className={`${textColor} leading-relaxed`}>
          <strong>High thermal load from 11 AM–7 PM.</strong> Overnight recovery may be limited.
          Verified free water is available nearby. Cooling and respite options are open during posted hours.
        </p>
        <p className={`${textColor} leading-relaxed mt-2`}>
          <strong>Best lower-exposure window: 5:30 AM–8:00 AM.</strong>
        </p>
      </div>

      {/* Quick Stats */}
      {!textOnly && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <div className={`${highContrast ? 'bg-stone-900' : 'bg-stone-50'} rounded-lg p-3 text-center`}>
            <p className={`text-xs ${mutedText}`}>High / Low</p>
            <p className={`text-xl font-bold ${headingColor}`}>{weatherData.highTemp}° / {weatherData.lowTemp}°</p>
          </div>
          <div className={`${highContrast ? 'bg-stone-900' : 'bg-stone-50'} rounded-lg p-3 text-center`}>
            <p className={`text-xs ${mutedText}`}>HeatRisk</p>
            <p className={`text-xl font-bold ${highContrast ? 'text-red-400' : 'text-red-600'}`}>
              Level {weatherData.heatRiskLevel}
            </p>
            <p className={`text-xs ${mutedText}`}>{weatherData.heatRiskLabel}</p>
          </div>
          <div className={`${highContrast ? 'bg-stone-900' : 'bg-stone-50'} rounded-lg p-3 text-center`}>
            <p className={`text-xs ${mutedText}`}>UV Index</p>
            <p className={`text-xl font-bold ${highContrast ? 'text-orange-400' : 'text-orange-600'}`}>{weatherData.uvIndex}</p>
            <p className={`text-xs ${mutedText}`}>Extreme</p>
          </div>
          <div className={`${highContrast ? 'bg-stone-900' : 'bg-stone-50'} rounded-lg p-3 text-center`}>
            <p className={`text-xs ${mutedText}`}>Humidity</p>
            <p className={`text-xl font-bold ${headingColor}`}>{weatherData.humidity}%</p>
            <p className={`text-xs ${mutedText}`}>Very dry</p>
          </div>
        </div>
      )}

      {/* Text-only stats */}
      {textOnly && (
        <div className={`${highContrast ? 'bg-stone-900' : 'bg-stone-50'} rounded-lg p-3 mb-4`}>
          <p className={`${textColor}`}>
            High: {weatherData.highTemp}°F | Low: {weatherData.lowTemp}°F | HeatRisk: Level {weatherData.heatRiskLevel} ({weatherData.heatRiskLabel}) | UV: {weatherData.uvIndex} (Extreme) | Humidity: {weatherData.humidity}% (Very dry) | Wind: {weatherData.windSpeed} mph {weatherData.windDirection}
          </p>
        </div>
      )}

      {/* Data Confidence */}
      <div className={`flex items-start gap-2 ${highContrast ? 'bg-stone-900' : 'bg-blue-50'} rounded-lg p-3`}>
        <span className="text-lg" aria-hidden="true">ℹ️</span>
        <div>
          <p className={`text-sm font-medium ${headingColor}`}>Data Confidence: Moderate</p>
          <p className={`text-sm ${textColor}`}>{weatherData.dataConfidence}</p>
        </div>
      </div>

      {/* Source attribution */}
      <p className={`text-xs mt-3 ${mutedText}`}>
        Heat information from NWS HeatRisk. This tool complements — does not replace — official NWS watches, warnings, and advisories.
      </p>
    </section>
  );
}
