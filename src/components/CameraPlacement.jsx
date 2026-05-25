import { motion } from 'framer-motion'

const PROPERTY_LAYOUTS = {
  cubicle: {
    label: 'Studio / Cubicle',
    rooms: [{ id: 'main', label: 'Room', x: 10, y: 10, w: 80, h: 80 }],
    doors: [{ x: 48, y: 90, dir: 'bottom' }],
    cameraSuggestions: [
      { x: 15, y: 15, dir: 'se', label: 'Corner' },
    ],
  },
  bedsitter: {
    label: 'Bedsitter',
    rooms: [
      { id: 'main', label: 'Main', x: 8, y: 8, w: 84, h: 55 },
      { id: 'bath', label: 'Bath', x: 60, y: 63, w: 32, h: 30 },
    ],
    doors: [{ x: 48, y: 8, dir: 'top' }, { x: 8, y: 35, dir: 'left' }],
    cameraSuggestions: [
      { x: 12, y: 14, dir: 'se', label: 'Living area' },
      { x: 5, y: 5, dir: 'se', label: 'Entrance', outdoor: true },
    ],
  },
  '1bed': {
    label: '1 Bedroom',
    rooms: [
      { id: 'living', label: 'Living', x: 8, y: 8, w: 50, h: 55 },
      { id: 'bed', label: 'Bedroom', x: 62, y: 8, w: 30, h: 45 },
      { id: 'bath', label: 'Bath', x: 62, y: 56, w: 30, h: 20 },
      { id: 'kitchen', label: 'Kitchen', x: 8, y: 66, w: 50, h: 27 },
    ],
    doors: [{ x: 8, y: 38, dir: 'left' }],
    cameraSuggestions: [
      { x: 10, y: 12, dir: 'se', label: 'Living room' },
      { x: 62, y: 10, dir: 'sw', label: 'Bedroom' },
      { x: 3, y: 38, dir: 'e', label: 'Entrance', outdoor: true },
    ],
  },
  '2bed': {
    label: '2 Bedroom',
    rooms: [
      { id: 'living', label: 'Living', x: 8, y: 8, w: 45, h: 45 },
      { id: 'bed1', label: 'Bed 1', x: 57, y: 8, w: 35, h: 40 },
      { id: 'bed2', label: 'Bed 2', x: 8, y: 57, w: 35, h: 35 },
      { id: 'kitchen', label: 'Kitchen', x: 47, y: 57, w: 45, h: 35 },
    ],
    doors: [{ x: 8, y: 30, dir: 'left' }],
    cameraSuggestions: [
      { x: 10, y: 12, dir: 'se', label: 'Living room' },
      { x: 87, y: 12, dir: 'sw', label: 'Bed 1' },
      { x: 3, y: 30, dir: 'e', label: 'Front gate', outdoor: true },
      { x: 90, y: 80, dir: 'nw', label: 'Back yard', outdoor: true },
    ],
  },
  '3bed_bungalow': {
    label: '3 Bedroom Bungalow',
    rooms: [
      { id: 'living', label: 'Living', x: 8, y: 35, w: 40, h: 40 },
      { id: 'bed1', label: 'Master', x: 52, y: 8, w: 40, h: 30 },
      { id: 'bed2', label: 'Bed 2', x: 8, y: 8, w: 40, h: 24 },
      { id: 'bed3', label: 'Bed 3', x: 52, y: 42, w: 40, h: 33 },
      { id: 'kitchen', label: 'Kitchen', x: 8, y: 78, w: 40, h: 15 },
      { id: 'garage', label: 'Garage', x: 52, y: 78, w: 40, h: 15 },
    ],
    doors: [{ x: 27, y: 36, dir: 'top' }],
    cameraSuggestions: [
      { x: 10, y: 38, dir: 'se', label: 'Living room' },
      { x: 55, y: 11, dir: 'sw', label: 'Master' },
      { x: 27, y: 2, dir: 's', label: 'Front gate', outdoor: true },
      { x: 95, y: 50, dir: 'w', label: 'Perimeter', outdoor: true },
      { x: 27, y: 98, dir: 'n', label: 'Back gate', outdoor: true },
      { x: 3, y: 15, dir: 'e', label: 'Side access', outdoor: true },
    ],
  },
  apartment: {
    label: 'Apartment',
    rooms: [
      { id: 'living', label: 'Living', x: 8, y: 35, w: 55, h: 55 },
      { id: 'bed', label: 'Bedroom', x: 67, y: 35, w: 25, h: 55 },
      { id: 'hall', label: 'Hallway', x: 8, y: 8, w: 84, h: 24 },
    ],
    doors: [{ x: 8, y: 22, dir: 'left' }],
    cameraSuggestions: [
      { x: 10, y: 40, dir: 'se', label: 'Living room' },
      { x: 5, y: 22, dir: 'e', label: 'Apt door' },
      { x: 68, y: 37, dir: 'sw', label: 'Bedroom' },
    ],
  },
  shop: {
    label: 'Shop / Retail',
    rooms: [
      { id: 'floor', label: 'Shop Floor', x: 8, y: 8, w: 62, h: 85 },
      { id: 'store', label: 'Storage', x: 74, y: 8, w: 18, h: 50 },
      { id: 'till', label: 'Counter', x: 74, y: 62, w: 18, h: 30 },
    ],
    doors: [{ x: 35, y: 8, dir: 'top' }, { x: 8, y: 93, dir: 'bottom' }],
    cameraSuggestions: [
      { x: 10, y: 12, dir: 'se', label: 'Shop overview' },
      { x: 66, y: 12, dir: 'sw', label: 'Fisheye 360°' },
      { x: 74, y: 65, dir: 'nw', label: 'Counter/POS' },
      { x: 35, y: 2, dir: 's', label: 'Shopfront', outdoor: true },
    ],
  },
  office: {
    label: 'Office',
    rooms: [
      { id: 'open', label: 'Open Plan', x: 8, y: 35, w: 60, h: 58 },
      { id: 'conf', label: 'Conference', x: 72, y: 35, w: 20, h: 32 },
      { id: 'server', label: 'Server Rm', x: 72, y: 71, w: 20, h: 22 },
      { id: 'reception', label: 'Reception', x: 8, y: 8, w: 84, h: 24 },
    ],
    doors: [{ x: 49, y: 8, dir: 'top' }],
    cameraSuggestions: [
      { x: 10, y: 12, dir: 'se', label: 'Reception' },
      { x: 10, y: 38, dir: 'se', label: 'Open plan' },
      { x: 72, y: 38, dir: 'sw', label: 'Conference' },
      { x: 74, y: 73, dir: 'sw', label: 'Server room' },
      { x: 49, y: 2, dir: 's', label: 'Building front', outdoor: true },
    ],
  },
  warehouse: {
    label: 'Warehouse',
    rooms: [
      { id: 'main', label: 'Warehouse Floor', x: 8, y: 20, w: 72, h: 72 },
      { id: 'loading', label: 'Loading Bay', x: 84, y: 20, w: 8, h: 40 },
      { id: 'office', label: 'Office', x: 8, y: 8, w: 30, h: 10 },
    ],
    doors: [{ x: 84, y: 45, dir: 'right' }, { x: 23, y: 8, dir: 'top' }],
    cameraSuggestions: [
      { x: 10, y: 23, dir: 'se', label: 'Corner A' },
      { x: 76, y: 23, dir: 'sw', label: 'Corner B' },
      { x: 10, y: 88, dir: 'ne', label: 'Corner C' },
      { x: 76, y: 88, dir: 'nw', label: 'Corner D' },
      { x: 90, y: 45, dir: 'w', label: 'Loading dock', outdoor: true },
      { x: 23, y: 2, dir: 's', label: 'Main gate', outdoor: true },
    ],
  },
}

function getDirStyles(dir) {
  const map = {
    se: { top: 0, left: 0, borderRadius: '0 50% 50% 50%' },
    sw: { top: 0, right: 0, borderRadius: '50% 0 50% 50%' },
    ne: { bottom: 0, left: 0, borderRadius: '50% 50% 50% 0' },
    nw: { bottom: 0, right: 0, borderRadius: '50% 50% 0 50%' },
    n: { bottom: 0, left: '50%', transform: 'translateX(-50%)', borderRadius: '50% 50% 0 0' },
    s: { top: 0, left: '50%', transform: 'translateX(-50%)', borderRadius: '0 0 50% 50%' },
    e: { top: '50%', left: 0, transform: 'translateY(-50%)', borderRadius: '0 50% 50% 0' },
    w: { top: '50%', right: 0, transform: 'translateY(-50%)', borderRadius: '50% 0 0 50%' },
  }
  return map[dir] || map['se']
}

export default function CameraPlacement({ propertyType, placements, cameraCount }) {
  const layout = PROPERTY_LAYOUTS[propertyType] || PROPERTY_LAYOUTS['1bed']

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-body font-semibold text-white">Camera Placement Diagram</h3>
          <p className="text-slate-400 text-xs font-mono mt-1">{layout.label} — {cameraCount} camera{cameraCount !== 1 ? 's' : ''}</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-body text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan" />Indoor
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />Outdoor
          </span>
        </div>
      </div>

      {/* Floor plan */}
      <div
        className="relative w-full bg-navy-950/60 rounded-xl overflow-hidden border border-white/10"
        style={{ paddingBottom: '75%' }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="scan-line" />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Rooms */}
          {layout.rooms.map(room => (
            <g key={room.id}>
              <rect
                x={room.x} y={room.y} width={room.w} height={room.h}
                fill="rgba(30,45,74,0.6)" stroke="rgba(56,189,248,0.15)" strokeWidth="0.5"
                rx="1"
              />
              <text
                x={room.x + room.w / 2} y={room.y + room.h / 2 + 1}
                textAnchor="middle" fontSize="3.5" fill="rgba(148,163,184,0.5)"
                fontFamily="DM Sans, sans-serif"
              >
                {room.label}
              </text>
            </g>
          ))}

          {/* Doors */}
          {layout.doors.map((door, i) => (
            <circle key={i} cx={door.x} cy={door.y} r="1.5" fill="rgba(56,189,248,0.4)" />
          ))}

          {/* Camera positions */}
          {layout.cameraSuggestions.map((cam, i) => (
            <g key={i}>
              {/* Coverage cone */}
              <circle cx={cam.x} cy={cam.y} r="15" fill={cam.outdoor ? 'rgba(251,191,36,0.04)' : 'rgba(56,189,248,0.04)'} />

              {/* Camera dot */}
              <circle
                cx={cam.x} cy={cam.y} r="2.5"
                fill={cam.outdoor ? '#FBBF24' : '#38BDF8'}
              />
              <circle
                cx={cam.x} cy={cam.y} r="2.5"
                fill="none"
                stroke={cam.outdoor ? 'rgba(251,191,36,0.6)' : 'rgba(56,189,248,0.6)'}
                strokeWidth="0.8"
              >
                <animate attributeName="r" values="2.5;5;2.5" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0;1" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              </circle>

              {/* Label */}
              <text
                x={cam.x + (cam.x > 50 ? -3.5 : 3.5)}
                y={cam.y + (cam.y > 50 ? -3.5 : 4.5)}
                textAnchor={cam.x > 50 ? 'end' : 'start'}
                fontSize="2.8"
                fill={cam.outdoor ? 'rgba(251,191,36,0.8)' : 'rgba(56,189,248,0.8)'}
                fontFamily="JetBrains Mono, monospace"
              >
                {cam.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Placement list */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {placements.indoor.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-neon-cyan" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Indoor Locations</span>
            </div>
            {placements.indoor.map((loc, i) => (
              <div key={i} className="text-sm font-body text-slate-300 py-1 border-b border-white/5 last:border-0 pl-4">
                {loc}
              </div>
            ))}
          </div>
        )}
        {placements.outdoor.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Outdoor Locations</span>
            </div>
            {placements.outdoor.map((loc, i) => (
              <div key={i} className="text-sm font-body text-slate-300 py-1 border-b border-white/5 last:border-0 pl-4">
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
