export interface WeatherData {
  date: string;
  location: string;
  highTemp: number;
  lowTemp: number;
  currentTemp: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  uvIndex: number;
  heatRiskLevel: number;
  heatRiskLabel: string;
  lastUpdated: string;
  dataConfidence: string;
}

export interface TimeWindow {
  start: string;
  end: string;
  label: string;
  severity: 'low' | 'moderate' | 'high' | 'extreme';
}

export interface Resource {
  id: string;
  type: 'water' | 'cooling' | 'restroom' | 'covered-rest' | 'dry-recovery';
  name: string;
  address: string;
  status: 'open' | 'limited' | 'full' | 'unavailable' | 'needs-verification';
  hours: string;
  accessibility: string;
  languageSupport: string[];
  lastVerified: string;
  phone?: string;
}

export interface EcologicalData {
  pollinatorOpportunity: string;
  confidence: string;
  bloomStatus: string;
  desertPulse: string;
  habitatAction: string;
}

export const weatherData: WeatherData = {
  date: 'Saturday, June 14, 2026',
  location: 'Phoenix, AZ — Central Service Zone',
  highTemp: 111,
  lowTemp: 89,
  currentTemp: 96,
  humidity: 18,
  windSpeed: 8,
  windDirection: 'SW',
  uvIndex: 11,
  heatRiskLevel: 4,
  heatRiskLabel: 'Major',
  lastUpdated: '6:15 AM MST',
  dataConfidence: 'Moderate — two service locations need fresh accessibility verification.',
};

export const thermalLoadWindows: TimeWindow[] = [
  { start: '5:30 AM', end: '8:00 AM', label: 'Lower-exposure window', severity: 'low' },
  { start: '8:00 AM', end: '11:00 AM', label: 'Increasing heat', severity: 'moderate' },
  { start: '11:00 AM', end: '7:00 PM', label: 'High thermal load period', severity: 'high' },
  { start: '7:00 PM', end: '10:00 PM', label: 'Gradual cooling', severity: 'moderate' },
  { start: '10:00 PM', end: '5:30 AM', label: 'Overnight recovery (limited)', severity: 'moderate' },
];

export const surfaceHazardWindows: TimeWindow[] = [
  { start: '6:00 AM', end: '10:00 AM', label: 'Surfaces warming', severity: 'moderate' },
  { start: '10:00 AM', end: '12:00 PM', label: 'Surfaces becoming hazardous', severity: 'high' },
  { start: '12:00 PM', end: '6:00 PM', label: 'Surface hazard peak', severity: 'extreme' },
  { start: '6:00 PM', end: '9:00 PM', label: 'Surfaces slowly cooling', severity: 'moderate' },
];

export const resources: Resource[] = [
  {
    id: 'w1',
    type: 'water',
    name: 'Central Library Hydration Station',
    address: '1221 N Central Ave',
    status: 'open',
    hours: '9:00 AM – 5:00 PM (Mon–Sat)',
    accessibility: 'Wheelchair accessible entrance; accessible restroom on main floor',
    languageSupport: ['English', 'Spanish'],
    lastVerified: 'Today, 6:00 AM',
    phone: '602-262-4600',
  },
  {
    id: 'w2',
    type: 'water',
    name: 'St. Vincent de Paul Hydration Center',
    address: '145 S 12th Ave',
    status: 'open',
    hours: '7:00 AM – 3:00 PM (Daily)',
    accessibility: 'Ground-level entry; wide aisles',
    languageSupport: ['English', 'Spanish'],
    lastVerified: 'Today, 5:45 AM',
  },
  {
    id: 'w3',
    type: 'water',
    name: 'Margaret T. Hance Park Fountain',
    address: '15 N 2nd St',
    status: 'open',
    hours: 'Dawn to dusk',
    accessibility: 'Paved pathways; accessible seating nearby',
    languageSupport: [],
    lastVerified: 'Today, 6:10 AM',
  },
  {
    id: 'c1',
    type: 'cooling',
    name: 'East Valley Cooling Center',
    address: '2500 E Broadway Rd',
    status: 'limited',
    hours: '10:00 AM – 8:00 PM (activated during heat events)',
    accessibility: 'Fully accessible; cots and seating available',
    languageSupport: ['English', 'Spanish', 'ASL via video relay'],
    lastVerified: 'Today, 5:30 AM',
    phone: '602-263-8800',
  },
  {
    id: 'c2',
    type: 'cooling',
    name: 'Central City Respite Facility',
    address: '520 W Van Buren St',
    status: 'limited',
    hours: '8:00 AM – 6:00 PM (Daily)',
    accessibility: 'Wheelchair accessible; service animals welcome',
    languageSupport: ['English', 'Spanish'],
    lastVerified: 'Yesterday, 4:00 PM',
    phone: '602-531-4400',
  },
  {
    id: 'r1',
    type: 'restroom',
    name: 'Heritage Square Public Restroom',
    address: '115 N 6th St',
    status: 'needs-verification',
    hours: 'Published: 6:00 AM – 10:00 PM',
    accessibility: 'Accessibility details pending confirmation',
    languageSupport: [],
    lastVerified: 'June 12, 2026',
  },
  {
    id: 'r2',
    type: 'restroom',
    name: 'Central Library Restroom',
    address: '1221 N Central Ave',
    status: 'open',
    hours: '9:00 AM – 5:00 PM (Mon–Sat)',
    accessibility: 'Accessible stalls available; family restroom on 2nd floor',
    languageSupport: [],
    lastVerified: 'Today, 6:00 AM',
  },
  {
    id: 'cr1',
    type: 'covered-rest',
    name: 'Steele Indian School Park Ramada',
    address: '300 E Indian School Rd',
    status: 'open',
    hours: 'Park hours: 5:00 AM – 10:00 PM',
    accessibility: 'Paved access; shade structures with seating',
    languageSupport: [],
    lastVerified: 'Today, 5:50 AM',
  },
  {
    id: 'dr1',
    type: 'dry-recovery',
    name: 'Community Laundry & Dry Space',
    address: '815 W Jackson St',
    status: 'needs-verification',
    hours: 'Published: 7:00 AM – 7:00 PM',
    accessibility: 'Status needs confirmation',
    languageSupport: ['English', 'Spanish'],
    lastVerified: 'June 11, 2026',
    phone: '602-256-3771',
  },
];

export const ecologicalData: EcologicalData = {
  pollinatorOpportunity: 'Favorable',
  confidence: 'moderate',
  bloomStatus: 'Palo verde and desert wildflower bloom winding down; creosote and ocotillo still flowering in some areas.',
  desertPulse: 'Moisture response under observation — recent monsoon moisture may support changing plant and insect conditions over the next 7–10 days.',
  habitatAction: 'Preserve flowering plants where safe to do so. Avoid unnecessary pesticide application during bloom. Reduce nonessential night lighting where practical.',
};

export const dryRecoveryData = {
  gapLevel: 'Moderate',
  description: 'Recent overnight humidity (38–45%) and residual ground moisture may slow drying for clothing, bedding, shoes, and outdoor equipment.',
  verifiedServices: 'Covered rest is available at listed locations; laundry and dedicated drying status needs confirmation.',
  action: 'Check listed service options before traveling. If you manage a public site, consider opening covered drying space, confirming restroom access, and replenishing towels or dry supplies.',
};

export const viewModes = [
  { id: 'recovery', label: "Today's recovery", description: 'Anyone outdoors', emphasis: 'Heat, shade, water, restrooms, cooling, transit' },
  { id: 'transit', label: 'Transit and walking', description: 'Riders, pedestrians, delivery workers, visitors', emphasis: 'Lower-exposure travel windows, public rest points, shade and water' },
  { id: 'service', label: 'Service coordination', description: 'Mutual-aid groups, libraries, nonprofits, facility staff', emphasis: 'Capacity status, water refill, dry recovery, staffing proposals' },
  { id: 'garden', label: 'Garden and habitat', description: 'Residents, gardeners, schools, restoration groups', emphasis: 'Bloom conditions, pollinator opportunity, waterwise habitat actions' },
  { id: 'stewardship', label: 'Public stewardship', description: 'Parks, facilities, neighborhood associations', emphasis: 'Restroom servicing, shade maintenance, repair needs' },
  { id: 'research', label: 'Research and transparency', description: 'Researchers, journalists, civic reviewers', emphasis: 'Data provenance, model weights, freshness, limitations, corrections' },
];
