// =============================================
// SecureCam Advisor — Recommendation Engine
// =============================================

export const PROPERTY_TYPES = [
  { id: 'cubicle', label: 'Cubicle / Studio', icon: '🏠', size: 'xs' },
  { id: 'bedsitter', label: 'Bedsitter', icon: '🛏️', size: 'xs' },
  { id: '1bed', label: '1 Bedroom', icon: '🏡', size: 'sm' },
  { id: '2bed', label: '2 Bedroom', icon: '🏘️', size: 'sm' },
  { id: '3bed_bungalow', label: '3 Bedroom Bungalow', icon: '🏠', size: 'md' },
  { id: 'apartment', label: 'Apartment', icon: '🏢', size: 'md' },
  { id: 'shop', label: 'Shop / Retail', icon: '🏪', size: 'md' },
  { id: 'office', label: 'Office', icon: '🏬', size: 'lg' },
  { id: 'warehouse', label: 'Warehouse', icon: '🏭', size: 'xl' },
]

export const SECURITY_LEVELS = [
  { id: 'basic', label: 'Basic', desc: 'Deter intruders, basic monitoring', color: 'emerald' },
  { id: 'medium', label: 'Medium', desc: 'Enhanced coverage, remote access', color: 'yellow' },
  { id: 'high', label: 'High', desc: 'Maximum coverage, pro-grade system', color: 'red' },
]

export const BUDGET_RANGES = [
  { id: 'under100', label: 'Under $100', min: 0, max: 100 },
  { id: '100_300', label: '$100 – $300', min: 100, max: 300 },
  { id: '300_1000', label: '$300 – $1,000', min: 300, max: 1000 },
  { id: 'above1000', label: 'Above $1,000', min: 1000, max: 9999 },
]

// Camera product database
const CAMERA_DB = {
  dome_indoor: {
    type: 'Indoor Dome Camera',
    desc: 'Wide-angle, discreet ceiling mount. Ideal for interior rooms.',
    priceRange: '$15–$60 each',
    features: ['Wide angle 90–120°', 'Vandal-resistant', 'Ceiling mount', 'Blend-in design'],
    icon: '📹',
  },
  bullet_outdoor: {
    type: 'Outdoor Bullet Camera',
    desc: 'Long-range directional. Weatherproof for perimeter use.',
    priceRange: '$25–$90 each',
    features: ['IP66 weatherproof', 'Long IR range 30m+', 'Directional', 'Visible deterrent'],
    icon: '🎥',
  },
  ptz: {
    type: 'PTZ Camera',
    desc: 'Pan-tilt-zoom for large areas. Remote-controlled coverage.',
    priceRange: '$80–$300 each',
    features: ['360° pan', 'Remote zoom', 'Auto-tracking', 'Large area coverage'],
    icon: '🔭',
  },
  fisheye: {
    type: 'Fisheye 360° Camera',
    desc: 'Single camera covers entire room with no blind spots.',
    priceRange: '$40–$120 each',
    features: ['360° coverage', 'No blind spots', 'Dewarping software', 'One camera per room'],
    icon: '🌐',
  },
  doorbell_cam: {
    type: 'Video Doorbell Camera',
    desc: 'Smart doorbell with two-way audio and motion alerts.',
    priceRange: '$30–$150',
    features: ['Two-way audio', 'Motion alerts', 'Visitor log', 'Smart home integration'],
    icon: '🔔',
  },
}

// System type database
const SYSTEMS = {
  standalone: {
    name: 'Standalone / Cloud Camera',
    desc: 'Individual WiFi cameras with cloud storage. Easy setup, no DVR needed.',
    icon: '☁️',
    pros: ['Zero wiring', 'Easy install', 'App control', 'Cloud storage'],
    cons: ['Monthly fees', 'Internet dependent', 'Limited cameras'],
  },
  dvr: {
    name: 'DVR System (Analog)',
    desc: 'Digital Video Recorder with analog cameras over coaxial cable.',
    icon: '📼',
    pros: ['Cost effective', 'Reliable', 'No internet needed', 'Long cables'],
    cons: ['Lower resolution', 'Coaxial wiring needed', 'Bulkier'],
  },
  nvr: {
    name: 'NVR System (IP Network)',
    desc: 'Network Video Recorder with high-res IP cameras over ethernet/PoE.',
    icon: '🖥️',
    pros: ['High resolution 4K', 'PoE cables', 'Scalable', 'Remote access'],
    cons: ['Higher cost', 'Ethernet wiring', 'Setup complexity'],
  },
  hybrid: {
    name: 'Hybrid System',
    desc: 'Mix of wired NVR cameras and wireless standalone cameras.',
    icon: '🔀',
    pros: ['Flexible', 'Best of both', 'Scalable', 'Coverage anywhere'],
    cons: ['More complex', 'Higher cost'],
  },
}

function getPropertyConfig(propertyId, securityLevel) {
  const configs = {
    cubicle: {
      basic: { cameras: 1, indoor: 1, outdoor: 0, system: 'standalone', storage: '128GB SD / Cloud', cams: ['dome_indoor'] },
      medium: { cameras: 2, indoor: 1, outdoor: 1, system: 'standalone', storage: '256GB SD / Cloud', cams: ['dome_indoor', 'doorbell_cam'] },
      high: { cameras: 2, indoor: 1, outdoor: 1, system: 'nvr', storage: '1TB HDD', cams: ['fisheye', 'doorbell_cam'] },
    },
    bedsitter: {
      basic: { cameras: 1, indoor: 1, outdoor: 0, system: 'standalone', storage: '128GB SD / Cloud', cams: ['dome_indoor'] },
      medium: { cameras: 2, indoor: 1, outdoor: 1, system: 'standalone', storage: '256GB SD / Cloud', cams: ['dome_indoor', 'doorbell_cam'] },
      high: { cameras: 3, indoor: 2, outdoor: 1, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'dome_indoor', 'bullet_outdoor'] },
    },
    '1bed': {
      basic: { cameras: 2, indoor: 1, outdoor: 1, system: 'standalone', storage: '256GB SD', cams: ['dome_indoor', 'bullet_outdoor'] },
      medium: { cameras: 3, indoor: 2, outdoor: 1, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'dome_indoor', 'bullet_outdoor'] },
      high: { cameras: 4, indoor: 2, outdoor: 2, system: 'nvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor'] },
    },
    '2bed': {
      basic: { cameras: 3, indoor: 2, outdoor: 1, system: 'standalone', storage: '1TB HDD', cams: ['dome_indoor', 'dome_indoor', 'bullet_outdoor'] },
      medium: { cameras: 4, indoor: 2, outdoor: 2, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor'] },
      high: { cameras: 6, indoor: 3, outdoor: 3, system: 'nvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor', 'ptz'] },
    },
    '3bed_bungalow': {
      basic: { cameras: 4, indoor: 2, outdoor: 2, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor'] },
      medium: { cameras: 6, indoor: 3, outdoor: 3, system: 'nvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor', 'bullet_outdoor'] },
      high: { cameras: 8, indoor: 4, outdoor: 4, system: 'nvr', storage: '4TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor', 'bullet_outdoor', 'ptz'] },
    },
    apartment: {
      basic: { cameras: 2, indoor: 2, outdoor: 0, system: 'standalone', storage: '256GB SD', cams: ['dome_indoor', 'doorbell_cam'] },
      medium: { cameras: 3, indoor: 2, outdoor: 1, system: 'nvr', storage: '1TB HDD', cams: ['dome_indoor', 'dome_indoor', 'bullet_outdoor'] },
      high: { cameras: 5, indoor: 3, outdoor: 2, system: 'nvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'ptz'] },
    },
    shop: {
      basic: { cameras: 3, indoor: 2, outdoor: 1, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'fisheye', 'bullet_outdoor'] },
      medium: { cameras: 5, indoor: 3, outdoor: 2, system: 'nvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor'] },
      high: { cameras: 8, indoor: 5, outdoor: 3, system: 'nvr', storage: '4TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'fisheye', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor', 'ptz'] },
    },
    office: {
      basic: { cameras: 4, indoor: 3, outdoor: 1, system: 'dvr', storage: '2TB HDD', cams: ['dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_outdoor'] },
      medium: { cameras: 8, indoor: 5, outdoor: 3, system: 'nvr', storage: '4TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor', 'ptz'] },
      high: { cameras: 12, indoor: 8, outdoor: 4, system: 'nvr', storage: '8TB HDD', cams: ['fisheye', 'fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor', 'bullet_outdoor', 'ptz'] },
    },
    warehouse: {
      basic: { cameras: 6, indoor: 4, outdoor: 2, system: 'dvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor'] },
      medium: { cameras: 10, indoor: 6, outdoor: 4, system: 'nvr', storage: '4TB HDD', cams: ['fisheye', 'fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor', 'bullet_outdoor', 'ptz'] },
      high: { cameras: 16, indoor: 10, outdoor: 6, system: 'nvr', storage: '8TB HDD', cams: ['fisheye', 'fisheye', 'fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor', 'bullet_outdoor', 'bullet_outdoor', 'bullet_outdoor', 'ptz'] },
    },
  }

  return configs[propertyId]?.[securityLevel] || configs['1bed'].basic
}

function getPlacementLocations(propertyId, config) {
  const indoor = config.indoor
  const outdoor = config.outdoor

  const placements = {
    cubicle: {
      indoor: ['Main room corner (wide angle)'],
      outdoor: ['Front door / entrance'],
    },
    bedsitter: {
      indoor: ['Living area', 'Bedroom corner'],
      outdoor: ['Front door', 'Window facing exterior'],
    },
    '1bed': {
      indoor: ['Living room', 'Bedroom doorway'],
      outdoor: ['Front entrance', 'Back yard / balcony'],
    },
    '2bed': {
      indoor: ['Living room', 'Master bedroom', 'Hallway'],
      outdoor: ['Front gate', 'Back fence', 'Side alley'],
    },
    '3bed_bungalow': {
      indoor: ['Living room', 'Kitchen', 'Master bedroom', 'Hallway'],
      outdoor: ['Front gate', 'Driveway', 'Back garden', 'Side perimeter'],
    },
    apartment: {
      indoor: ['Living room', 'Corridor', 'Bedroom'],
      outdoor: ['Apartment door (shared hall)', 'Balcony'],
    },
    shop: {
      indoor: ['Main floor (wide angle)', 'Counter/POS area', 'Storage room', 'Changing room entrance'],
      outdoor: ['Shop front', 'Back entrance', 'Car park'],
    },
    office: {
      indoor: ['Reception', 'Open plan area', 'Server room', 'Conference room', 'Corridors'],
      outdoor: ['Parking lot', 'Building entrance', 'Emergency exits'],
    },
    warehouse: {
      indoor: ['Loading bay', 'Aisles/racks', 'Manager office', 'Entrance lobby'],
      outdoor: ['Perimeter fence', 'Vehicle gate', 'Loading dock exterior', 'All four corners'],
    },
  }

  const allLocations = placements[propertyId] || placements['1bed']
  return {
    indoor: allLocations.indoor.slice(0, Math.max(indoor, 1)),
    outdoor: allLocations.outdoor.slice(0, Math.max(outdoor, 1)),
  }
}

function estimateBudget(config, answers) {
  const { system, cameras } = config

  const cameraBaseCosts = {
    standalone: 35,
    dvr: 25,
    nvr: 45,
  }

  const systemCosts = {
    standalone: 0,
    dvr: cameras <= 4 ? 80 : 130,
    nvr: cameras <= 4 ? 120 : cameras <= 8 ? 200 : 350,
  }

  const storageCost = {
    standalone: 15,
    dvr: config.storage.includes('2TB') ? 60 : config.storage.includes('4TB') ? 100 : config.storage.includes('8TB') ? 180 : 35,
    nvr: config.storage.includes('2TB') ? 70 : config.storage.includes('4TB') ? 110 : config.storage.includes('8TB') ? 200 : 40,
  }

  const nightVisionAddon = answers.nightVision ? cameras * 8 : 0
  const installAddon = cameras * 20

  const cameraCost = cameras * cameraBaseCosts[system]
  const total = cameraCost + systemCosts[system] + (storageCost[system] || 0) + nightVisionAddon + installAddon

  return {
    cameras: cameraCost,
    system: systemCosts[system],
    storage: storageCost[system] || 0,
    installation: installAddon,
    total,
    low: Math.round(total * 0.85),
    high: Math.round(total * 1.35),
  }
}

function getInstallationTips(answers, config) {
  const tips = []

  if (answers.internet && config.system === 'nvr') {
    tips.push('Connect your NVR to your router for remote viewing via smartphone app.')
  }
  if (!answers.internet) {
    tips.push('Without internet, a local DVR/NVR recording to hard drive is your best option.')
  }
  if (config.outdoor > 0) {
    tips.push('Mount outdoor cameras at 7–9 feet height, angled 15–45° downward for optimal face capture.')
  }
  if (answers.nightVision) {
    tips.push('Ensure outdoor cameras have at least 30m IR night vision range. Avoid mounting near light sources that wash out the IR.')
  }
  if (answers.mobileMonitoring) {
    tips.push('Download the manufacturer\'s app (e.g., Hik-Connect, Dahua DMSS, or EZVIZ) and create an account for remote viewing.')
  }
  tips.push('Run cables through walls/ceilings before plastering. Conduit pipes protect cables from damage.')
  tips.push('Power your system on a UPS (Uninterruptible Power Supply) to keep cameras running during outages.')
  if (config.cameras >= 6) {
    tips.push('For systems with 6+ cameras, consider hiring a certified CCTV installer for optimal placement and wiring.')
  }
  if (config.system === 'nvr') {
    tips.push('Use PoE (Power over Ethernet) switches to power IP cameras — one cable handles both data and power.')
  }

  return tips
}

// =============================================
// MAIN RECOMMENDATION FUNCTION
// =============================================
export function generateRecommendation(answers) {
  const config = getPropertyConfig(answers.propertyType, answers.securityLevel)
  const uniqueCams = [...new Set(config.cams)]
  const cameraTypes = uniqueCams.map(id => ({ ...CAMERA_DB[id], id }))
  const systemInfo = SYSTEMS[config.system]
  const placements = getPlacementLocations(answers.propertyType, config)
  const budget = estimateBudget(config, answers)
  const tips = getInstallationTips(answers, config)

  const features = []
  if (answers.nightVision) features.push({ label: 'Night Vision (IR)', icon: '🌙', detail: 'Up to 30m IR range in total darkness' })
  if (answers.mobileMonitoring) features.push({ label: 'Mobile Monitoring', icon: '📱', detail: 'Live view & alerts on your smartphone' })
  if (answers.internet) features.push({ label: 'Remote Access', icon: '🌐', detail: 'View footage from anywhere via internet' })
  if (answers.outdoorCoverage) features.push({ label: 'Outdoor Coverage', icon: '🏡', detail: 'Weatherproof cameras for exterior areas' })
  if (answers.securityLevel === 'high') {
    features.push({ label: 'Motion Detection & Alerts', icon: '⚡', detail: 'Push notifications on movement events' })
    features.push({ label: 'AI Smart Detection', icon: '🤖', detail: 'Person & vehicle detection to reduce false alarms' })
  }
  if (answers.securityLevel !== 'basic') {
    features.push({ label: 'Loop Recording', icon: '🔄', detail: 'Overwrites oldest footage when storage is full' })
  }
  features.push({ label: 'HD Recording', icon: '📽️', detail: answers.securityLevel === 'high' ? '4K Ultra HD recording' : '1080p Full HD recording' })

  const wiredOrWireless = config.system === 'standalone'
    ? 'Wireless (WiFi)'
    : config.system === 'dvr'
    ? 'Wired (Coaxial)'
    : 'Wired (Ethernet/PoE)'

  return {
    propertyType: PROPERTY_TYPES.find(p => p.id === answers.propertyType)?.label || answers.propertyType,
    securityLevel: answers.securityLevel,
    cameraCount: config.cameras,
    indoorCount: config.indoor,
    outdoorCount: config.outdoor,
    cameraTypes,
    systemInfo,
    systemType: config.system.toUpperCase(),
    wiredOrWireless,
    storage: config.storage,
    features,
    budget,
    placements,
    tips,
    answers,
  }
}
