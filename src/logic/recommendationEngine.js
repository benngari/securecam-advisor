// =============================================
// SecureCam Advisor — Recommendation Engine
// Prices in Kenya Shillings (KES)
// Source: informedstore.co.ke
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
  { id: 'under10k', label: 'Under KES 10,000', min: 0, max: 10000 },
  { id: '10k_30k', label: 'KES 10,000 – 30,000', min: 10000, max: 30000 },
  { id: '30k_100k', label: 'KES 30,000 – 100,000', min: 30000, max: 100000 },
  { id: 'above100k', label: 'Above KES 100,000', min: 100000, max: 9999999 },
]

// Camera product database — KES prices from informedstore.co.ke
const CAMERA_DB = {
  dome_indoor: {
    type: 'Indoor Dome Camera',
    desc: 'Wide-angle, discreet ceiling mount. Ideal for interior rooms. e.g. Uniview 2MP Dome Eyeball.',
    priceRange: 'KES 2,000 – 5,500 each',
    unitPrice: 3500,
    features: ['Wide angle 90–120°', 'Vandal-resistant', 'Ceiling mount', 'PoE powered'],
    icon: '📹',
    source: 'Uniview 2MP Dome — KES 5,500 (informedstore.co.ke)',
  },
  bullet_outdoor: {
    type: 'Outdoor Bullet Camera',
    desc: 'Long-range directional. Weatherproof IP67. e.g. Uniview 4MP IR Bullet IPC2124LB.',
    priceRange: 'KES 5,000 – 16,500 each',
    unitPrice: 7000,
    features: ['IP67 weatherproof', 'IR up to 30m', 'PoE powered', 'Visible deterrent'],
    icon: '🎥',
    source: 'Uniview 4MP Bullet — KES 5,000 (informedstore.co.ke)',
  },
  ptz: {
    type: 'PTZ Camera',
    desc: 'Pan-tilt-zoom for large areas. e.g. Uniview 2MP Mini PTZ Dome IPC6412LR.',
    priceRange: 'KES 18,000 – 60,000 each',
    unitPrice: 23000,
    features: ['5X optical zoom', 'Remote pan/tilt', 'Auto-tracking', 'WiFi + PoE'],
    icon: '🔭',
    source: 'Uniview 2MP Mini PTZ — KES 18,000 (informedstore.co.ke)',
  },
  fisheye: {
    type: '360° Fisheye / Turret Camera',
    desc: 'Full-color 360° coverage. e.g. HD Audio Turret 2MP UAC-T122-AF28M-W.',
    priceRange: 'KES 2,500 – 5,500 each',
    unitPrice: 3500,
    features: ['360° coverage', 'Full color 24/7', 'Built-in mic', 'IP67'],
    icon: '🌐',
    source: 'HD Turret 2MP Full Color — KES 2,500 (informedstore.co.ke)',
  },
  doorbell_cam: {
    type: 'WiFi Surveillance Camera',
    desc: 'Smart WiFi camera with pan/tilt. e.g. Tenda CP3 2K WiFi Camera.',
    priceRange: 'KES 3,500 each',
    unitPrice: 3500,
    features: ['360° pan/tilt', 'Two-way audio', 'Cloud storage', 'Motion alerts'],
    icon: '🔔',
    source: 'Tenda CP3 WiFi Camera — KES 3,500 (informedstore.co.ke)',
  },
  bullet_hd: {
    type: '5MP Color Hunter Bullet Camera',
    desc: 'Full-color 24/7 outdoor bullet. e.g. Uniview 5MP Color Hunter IPC2225SE.',
    priceRange: 'KES 15,000 each',
    unitPrice: 15000,
    features: ['5MP 24/7 color', 'IP67 + IK10', 'Smart IR 60m', 'PoE powered'],
    icon: '🎯',
    source: 'Uniview 5MP Color Hunter — KES 15,000 (informedstore.co.ke)',
  },
}

// System type database — KES prices
const SYSTEMS = {
  standalone: {
    name: 'Standalone / WiFi Camera',
    desc: 'Individual WiFi cameras with cloud/SD storage. No DVR needed. Easy setup.',
    icon: '☁️',
    pros: ['Zero wiring', 'Easy install', 'App control', 'SD/cloud storage'],
    cons: ['Internet dependent', 'Limited cameras', 'Monthly cloud fees'],
    unitCost: 0,
  },
  dvr: {
    name: 'DVR System (Analog)',
    desc: 'Digital Video Recorder with analog cameras. e.g. Uniview 8CH DVR XVR301-08G3 — KES 7,500.',
    icon: '📼',
    pros: ['Cost effective', 'Reliable', 'No internet needed', 'Long cable runs'],
    cons: ['Lower resolution', 'Coaxial wiring needed', 'Bulkier cables'],
    unitCost: 7500,
  },
  nvr: {
    name: 'NVR System (IP Network)',
    desc: 'Network Video Recorder with high-res IP cameras over PoE ethernet.',
    icon: '🖥️',
    pros: ['4K capable', 'PoE single cable', 'Scalable', 'Remote access'],
    cons: ['Higher cost', 'Ethernet wiring needed', 'Setup complexity'],
    unitCost: 18000,
  },
  hybrid: {
    name: 'Hybrid System',
    desc: 'Mix of wired NVR and wireless standalone cameras.',
    icon: '🔀',
    pros: ['Flexible', 'Best of both', 'Scalable', 'Any location coverage'],
    cons: ['More complex setup', 'Higher total cost'],
    unitCost: 12000,
  },
}

function getPropertyConfig(propertyId, securityLevel) {
  const configs = {
    cubicle: {
      basic:  { cameras: 1, indoor: 1, outdoor: 0, system: 'standalone', storage: 'SD Card 128GB', cams: ['doorbell_cam'] },
      medium: { cameras: 2, indoor: 1, outdoor: 1, system: 'standalone', storage: 'SD Card 256GB', cams: ['doorbell_cam', 'bullet_outdoor'] },
      high:   { cameras: 2, indoor: 1, outdoor: 1, system: 'nvr', storage: '1TB HDD', cams: ['fisheye', 'bullet_outdoor'] },
    },
    bedsitter: {
      basic:  { cameras: 1, indoor: 1, outdoor: 0, system: 'standalone', storage: 'SD Card 128GB', cams: ['doorbell_cam'] },
      medium: { cameras: 2, indoor: 1, outdoor: 1, system: 'standalone', storage: 'SD Card 256GB', cams: ['dome_indoor', 'doorbell_cam'] },
      high:   { cameras: 3, indoor: 2, outdoor: 1, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'fisheye', 'bullet_outdoor'] },
    },
    '1bed': {
      basic:  { cameras: 2, indoor: 1, outdoor: 1, system: 'standalone', storage: 'SD Card 256GB', cams: ['dome_indoor', 'bullet_outdoor'] },
      medium: { cameras: 3, indoor: 2, outdoor: 1, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'fisheye', 'bullet_outdoor'] },
      high:   { cameras: 4, indoor: 2, outdoor: 2, system: 'nvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'bullet_outdoor', 'bullet_hd'] },
    },
    '2bed': {
      basic:  { cameras: 3, indoor: 2, outdoor: 1, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'dome_indoor', 'bullet_outdoor'] },
      medium: { cameras: 4, indoor: 2, outdoor: 2, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'fisheye', 'bullet_outdoor', 'bullet_outdoor'] },
      high:   { cameras: 6, indoor: 3, outdoor: 3, system: 'nvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'bullet_hd', 'bullet_outdoor', 'ptz'] },
    },
    '3bed_bungalow': {
      basic:  { cameras: 4, indoor: 2, outdoor: 2, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor'] },
      medium: { cameras: 6, indoor: 3, outdoor: 3, system: 'nvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'bullet_hd', 'bullet_outdoor', 'bullet_outdoor'] },
      high:   { cameras: 8, indoor: 4, outdoor: 4, system: 'nvr', storage: '4TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_hd', 'bullet_hd', 'bullet_outdoor', 'ptz'] },
    },
    apartment: {
      basic:  { cameras: 2, indoor: 2, outdoor: 0, system: 'standalone', storage: 'SD Card 256GB', cams: ['dome_indoor', 'doorbell_cam'] },
      medium: { cameras: 3, indoor: 2, outdoor: 1, system: 'nvr', storage: '1TB HDD', cams: ['dome_indoor', 'fisheye', 'bullet_outdoor'] },
      high:   { cameras: 5, indoor: 3, outdoor: 2, system: 'nvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'bullet_hd', 'ptz'] },
    },
    shop: {
      basic:  { cameras: 3, indoor: 2, outdoor: 1, system: 'dvr', storage: '1TB HDD', cams: ['dome_indoor', 'fisheye', 'bullet_outdoor'] },
      medium: { cameras: 5, indoor: 3, outdoor: 2, system: 'nvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'bullet_hd', 'bullet_outdoor'] },
      high:   { cameras: 8, indoor: 5, outdoor: 3, system: 'nvr', storage: '4TB HDD', cams: ['fisheye', 'fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_hd', 'bullet_hd', 'ptz'] },
    },
    office: {
      basic:  { cameras: 4, indoor: 3, outdoor: 1, system: 'dvr', storage: '2TB HDD', cams: ['dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_outdoor'] },
      medium: { cameras: 8, indoor: 5, outdoor: 3, system: 'nvr', storage: '4TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_hd', 'bullet_outdoor', 'ptz'] },
      high:   { cameras: 12, indoor: 8, outdoor: 4, system: 'nvr', storage: '4TB HDD', cams: ['fisheye', 'fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_hd', 'bullet_hd', 'bullet_outdoor', 'ptz'] },
    },
    warehouse: {
      basic:  { cameras: 6, indoor: 4, outdoor: 2, system: 'dvr', storage: '2TB HDD', cams: ['fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_outdoor', 'bullet_outdoor'] },
      medium: { cameras: 10, indoor: 6, outdoor: 4, system: 'nvr', storage: '4TB HDD', cams: ['fisheye', 'fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_hd', 'bullet_outdoor', 'bullet_outdoor', 'ptz'] },
      high:   { cameras: 16, indoor: 10, outdoor: 6, system: 'nvr', storage: '4TB HDD', cams: ['fisheye', 'fisheye', 'fisheye', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'dome_indoor', 'bullet_hd', 'bullet_hd', 'bullet_outdoor', 'bullet_outdoor', 'bullet_outdoor', 'ptz'] },
    },
  }
  return configs[propertyId]?.[securityLevel] || configs['1bed'].basic
}

function getPlacementLocations(propertyId, config) {
  const placements = {
    cubicle:        { indoor: ['Main room corner (wide angle)'], outdoor: ['Front door / entrance'] },
    bedsitter:      { indoor: ['Living area', 'Bedroom corner'], outdoor: ['Front door', 'Window facing exterior'] },
    '1bed':         { indoor: ['Living room', 'Bedroom doorway'], outdoor: ['Front entrance', 'Back yard / balcony'] },
    '2bed':         { indoor: ['Living room', 'Master bedroom', 'Hallway'], outdoor: ['Front gate', 'Back fence', 'Side alley'] },
    '3bed_bungalow':{ indoor: ['Living room', 'Kitchen', 'Master bedroom', 'Hallway'], outdoor: ['Front gate', 'Driveway', 'Back garden', 'Side perimeter'] },
    apartment:      { indoor: ['Living room', 'Corridor', 'Bedroom'], outdoor: ['Apartment door', 'Balcony'] },
    shop:           { indoor: ['Main floor (wide angle)', 'Counter/POS area', 'Storage room', 'Changing room entrance'], outdoor: ['Shop front', 'Back entrance', 'Car park'] },
    office:         { indoor: ['Reception', 'Open plan area', 'Server room', 'Conference room', 'Corridors'], outdoor: ['Parking lot', 'Building entrance', 'Emergency exits'] },
    warehouse:      { indoor: ['Loading bay', 'Aisles/racks', 'Manager office', 'Entrance lobby'], outdoor: ['Perimeter fence', 'Vehicle gate', 'Loading dock exterior', 'All four corners'] },
  }
  const all = placements[propertyId] || placements['1bed']
  return {
    indoor: all.indoor.slice(0, Math.max(config.indoor, 1)),
    outdoor: all.outdoor.slice(0, Math.max(config.outdoor, 1)),
  }
}

function estimateBudget(config, answers) {
  const { system, cams } = config

  // Camera costs from real KES prices
  const cameraCost = cams.reduce((sum, camId) => sum + (CAMERA_DB[camId]?.unitPrice || 3500), 0)

  // DVR/NVR costs based on real market prices
  const systemCosts = {
    standalone: 0,
    dvr: config.cameras <= 4 ? 7500 : 12000,   // Uniview 8CH DVR = KES 7,500
    nvr: config.cameras <= 4 ? 18000 : config.cameras <= 8 ? 28000 : 45000,
  }

  // Storage costs (Kenya market)
  const storageCosts = {
    'SD Card 128GB': 1500,
    'SD Card 256GB': 2500,
    '1TB HDD': 8000,
    '2TB HDD': 14000,
    '4TB HDD': 22000,
    '8TB HDD': 38000,
  }

  const storageCost = storageCosts[config.storage] || 8000
  const nightVisionAddon = answers.nightVision ? config.cameras * 500 : 0
  const installCost = config.cameras * 2500  // ~KES 2,500 per camera installation

  const systemCost = systemCosts[system] || 0
  const subtotal = cameraCost + systemCost + storageCost + nightVisionAddon + installCost

  return {
    cameras: cameraCost,
    system: systemCost,
    storage: storageCost,
    installation: installCost,
    total: subtotal,
    low: Math.round(subtotal * 0.9),
    high: Math.round(subtotal * 1.3),
  }
}

function getInstallationTips(answers, config) {
  const tips = []
  if (answers.internet && config.system === 'nvr') tips.push('Connect your NVR to your router for remote viewing via the EZStation or Hik-Connect app.')
  if (!answers.internet) tips.push('Without internet, a local DVR/NVR recording to hard drive is your best option. You can still view footage on a local monitor.')
  if (config.outdoor > 0) tips.push('Mount outdoor cameras at 7–9 feet height, angled 15–45° downward for optimal face capture and deterrence.')
  if (answers.nightVision) tips.push('Ensure outdoor cameras have at least 30m IR night vision. Avoid mounting near lights that could wash out the IR sensor.')
  if (answers.mobileMonitoring) tips.push('Download the Uniview EZStation or EZView app for remote live viewing and motion alerts on your phone.')
  tips.push('Run cables through conduit pipes inside walls/ceilings before plastering to protect them from damage.')
  tips.push('Connect your system to a UPS (Uninterruptible Power Supply) to keep cameras recording during Nairobi power outages.')
  if (config.cameras >= 6) tips.push('For 6+ cameras, get quotes from certified installers in Nairobi — contact Informed Systems on +254 793 000 111.')
  if (config.system === 'nvr') tips.push('Use PoE (Power over Ethernet) — a single ethernet cable carries both video signal and power to each camera, simplifying installation.')
  tips.push('Buy cameras from a verified Kenyan dealer like Informed Systems Store to get warranty support and genuine Uniview products.')
  return tips
}

// =============================================
// MAIN RECOMMENDATION FUNCTION
// =============================================
export function generateRecommendation(answers) {
  const config = getPropertyConfig(answers.propertyType, answers.securityLevel)
  const uniqueCamIds = [...new Set(config.cams)]
  const cameraTypes = uniqueCamIds.map(id => ({ ...CAMERA_DB[id], id }))
  const systemInfo = { ...SYSTEMS[config.system] }
  const placements = getPlacementLocations(answers.propertyType, config)
  const budget = estimateBudget(config, answers)
  const tips = getInstallationTips(answers, config)

  const features = []
  if (answers.nightVision) features.push({ label: 'Night Vision (IR)', icon: '🌙', detail: 'Up to 30m IR range — cameras see clearly in total darkness' })
  if (answers.mobileMonitoring) features.push({ label: 'Mobile Monitoring', icon: '📱', detail: 'Live view & push alerts on your smartphone via app' })
  if (answers.internet) features.push({ label: 'Remote Access', icon: '🌐', detail: 'View live footage from anywhere via internet' })
  if (answers.outdoorCoverage) features.push({ label: 'Outdoor Coverage', icon: '🏡', detail: 'IP67 weatherproof cameras for perimeter & exterior areas' })
  if (answers.securityLevel === 'high') {
    features.push({ label: 'Smart Motion Detection', icon: '⚡', detail: 'AI-powered person & vehicle detection with instant alerts' })
    features.push({ label: 'Deterrence Features', icon: '🔊', detail: 'Built-in speaker & light for active intruder deterrence' })
  }
  if (answers.securityLevel !== 'basic') features.push({ label: 'Loop Recording', icon: '🔄', detail: 'Automatically overwrites oldest footage when storage is full' })
  features.push({ label: 'HD Recording', icon: '📽️', detail: answers.securityLevel === 'high' ? '4K / 5MP Ultra HD recording' : '1080p / 2MP Full HD recording' })

  const wiredOrWireless = config.system === 'standalone' ? 'Wireless (WiFi)' : config.system === 'dvr' ? 'Wired (Coaxial)' : 'Wired (Ethernet / PoE)'

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
    currency: 'KES',
  }
}
