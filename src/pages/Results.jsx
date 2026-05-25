import { useEffect, useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiDownload, FiRefreshCw, FiBookmark, FiShield, FiCamera, FiHardDrive, FiWifi, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { MdOutlineSecurity } from 'react-icons/md'
import toast from 'react-hot-toast'
import CameraPlacement from '../components/CameraPlacement'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } }),
}

function StatCard({ icon, label, value, sub, color = 'cyan', delay = 0 }) {
  return (
    <motion.div custom={delay} variants={fadeUp} initial="hidden" animate="visible" className="stat-card">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-base mb-1 ${
        color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
        color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
        color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
        'bg-purple-500/20 text-purple-400'
      }`}>
        {icon}
      </div>
      <div className="font-display text-xl font-bold text-white">{value}</div>
      <div className="font-body text-xs text-slate-400">{label}</div>
      {sub && <div className="font-mono text-xs text-slate-500 mt-0.5">{sub}</div>}
    </motion.div>
  )
}

export default function Results() {
  const [rec, setRec] = useState(null)
  const [saved, setSaved] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const stored = sessionStorage.getItem('securecam_recommendation')
    if (!stored) { navigate('/wizard'); return }
    setRec(JSON.parse(stored))
  }, [])

  if (!rec) return null

  function handleSave() {
    const saved = JSON.parse(localStorage.getItem('securecam_saves') || '[]')
    saved.unshift({ ...rec, savedAt: new Date().toISOString() })
    localStorage.setItem('securecam_saves', JSON.stringify(saved.slice(0, 10)))
    setSaved(true)
    toast.success('Recommendation saved locally!')
  }

  function handleExportPDF() {
    toast('Preparing PDF...', { icon: '📄' })
    setTimeout(() => {
      const content = `
SECURECAM ADVISOR — RECOMMENDATION REPORT
==========================================
Property: ${rec.propertyType}
Security Level: ${rec.securityLevel.toUpperCase()}
Generated: ${new Date().toLocaleDateString()}

SYSTEM OVERVIEW
---------------
Total Cameras: ${rec.cameraCount}
Indoor Cameras: ${rec.indoorCount}
Outdoor Cameras: ${rec.outdoorCount}
System Type: ${rec.systemType}
Connection: ${rec.wiredOrWireless}
Storage: ${rec.storage}

CAMERA TYPES
------------
${rec.cameraTypes.map(c => `• ${c.type}: ${c.desc} (${c.priceRange})`).join('\n')}

KEY FEATURES
------------
${rec.features.map(f => `• ${f.label}: ${f.detail}`).join('\n')}

BUDGET ESTIMATE
---------------
Camera Equipment: KES ${rec.budget.cameras.toLocaleString()}
System (DVR/NVR): KES ${rec.budget.system.toLocaleString()}
Storage: KES ${rec.budget.storage.toLocaleString()}
Installation: KES ${rec.budget.installation.toLocaleString()}
TOTAL RANGE: KES ${rec.budget.low.toLocaleString()} – KES ${rec.budget.high.toLocaleString()}

CAMERA PLACEMENT
----------------
Indoor: ${rec.placements.indoor.join(', ')}
Outdoor: ${rec.placements.outdoor.join(', ')}

INSTALLATION TIPS
-----------------
${rec.tips.map((t, i) => `${i + 1}. ${t}`).join('\n')}

--
Advisory only. Consult a certified installer before purchasing.
      `.trim()

      const blob = new Blob([content], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `SecureCam-Recommendation-${rec.propertyType.replace(/\s+/g, '-')}.txt`
      a.click()
      URL.revokeObjectURL(url)
      toast.success('Report downloaded!')
    }, 500)
  }

  const levelColor = rec.securityLevel === 'high' ? 'text-red-400 bg-red-400/10 border-red-400/20' :
    rec.securityLevel === 'medium' ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' :
    'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="section-tag mb-3">Your Recommendation</span>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-white">
                CCTV System Plan
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className="text-slate-400 font-body text-sm">{rec.propertyType}</span>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${levelColor}`}>
                  {rec.securityLevel.toUpperCase()} SECURITY
                </span>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button onClick={handleExportPDF} className="btn-secondary text-sm px-4 py-2.5 gap-2">
                <FiDownload /> Export Report
              </button>
              <button onClick={handleSave} className={`btn-secondary text-sm px-4 py-2.5 gap-2 ${saved ? 'border-emerald-400/40 text-emerald-400' : ''}`}>
                <FiBookmark /> {saved ? 'Saved!' : 'Save'}
              </button>
              <Link to="/wizard" className="btn-primary text-sm px-4 py-2.5 gap-2">
                <FiRefreshCw /> New
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<FiCamera />} label="Total Cameras" value={rec.cameraCount} sub={`${rec.indoorCount} in · ${rec.outdoorCount} out`} color="cyan" delay={0} />
          <StatCard icon={<MdOutlineSecurity />} label="System Type" value={rec.systemType} sub={rec.wiredOrWireless} color="blue" delay={1} />
          <StatCard icon={<FiHardDrive />} label="Storage" value={rec.storage.split(' ')[0]} sub={rec.storage.split(' ').slice(1).join(' ')} color="purple" delay={2} />
          <StatCard icon={<FiShield />} label="Budget Range" value={`KES ${rec.budget.low.toLocaleString()}`} sub={`up to KES ${rec.budget.high.toLocaleString()}`} color="emerald" delay={3} />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Camera Types */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="lg:col-span-2">
            <div className="glass-card p-6 h-full">
              <h3 className="font-body font-semibold text-white mb-4 flex items-center gap-2">
                <FiCamera className="text-neon-cyan" /> Recommended Camera Types
              </h3>
              <div className="space-y-3">
                {rec.cameraTypes.map((cam, i) => (
                  <div key={cam.id + i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/20 transition-all">
                    <span className="text-2xl">{cam.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-body font-semibold text-white text-sm">{cam.type}</div>
                      <div className="text-slate-400 text-xs font-body mt-0.5 leading-relaxed">{cam.desc}</div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {cam.features.map(f => (
                          <span key={f} className="text-xs font-mono text-neon-cyan/70 bg-cyan-500/10 border border-neon-cyan/10 px-2 py-0.5 rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 text-right whitespace-nowrap">{cam.priceRange}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* System Info */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible">
            <div className="glass-card p-6 h-full">
              <h3 className="font-body font-semibold text-white mb-4 flex items-center gap-2">
                <FiHardDrive className="text-neon-cyan" /> Recording System
              </h3>
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{rec.systemInfo.icon}</div>
                <div className="font-body font-semibold text-white">{rec.systemInfo.name}</div>
                <div className="text-slate-400 text-xs font-body mt-1 leading-relaxed">{rec.systemInfo.desc}</div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Pros</div>
                  {rec.systemInfo.pros.map(p => (
                    <div key={p} className="flex items-center gap-2 text-xs text-slate-300 font-body py-1">
                      <FiCheckCircle className="text-emerald-400 shrink-0" /> {p}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-mono text-red-400 uppercase tracking-wider mb-2">Cons</div>
                  {rec.systemInfo.cons.map(c => (
                    <div key={c} className="flex items-center gap-2 text-xs text-slate-400 font-body py-1">
                      <FiAlertCircle className="text-red-400/70 shrink-0" /> {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Placement Diagram */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
          <CameraPlacement
            propertyType={rec.answers.propertyType}
            placements={rec.placements}
            cameraCount={rec.cameraCount}
          />
        </motion.div>

        {/* Features + Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Features */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible">
            <div className="glass-card p-6 h-full">
              <h3 className="font-body font-semibold text-white mb-4 flex items-center gap-2">
                <FiWifi className="text-neon-cyan" /> System Features
              </h3>
              <div className="space-y-3">
                {rec.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
                    <span className="text-lg">{feat.icon}</span>
                    <div>
                      <div className="font-body font-medium text-white text-sm">{feat.label}</div>
                      <div className="text-slate-400 text-xs font-body mt-0.5">{feat.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Budget Breakdown */}
          <motion.div custom={8} variants={fadeUp} initial="hidden" animate="visible">
            <div className="glass-card p-6 h-full">
              <h3 className="font-body font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-neon-cyan font-mono text-sm">KES</span> Budget Breakdown
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Camera Equipment', value: rec.budget.cameras },
                  { label: 'DVR / NVR System', value: rec.budget.system },
                  { label: 'Storage Media', value: rec.budget.storage },
                  { label: 'Installation (est.)', value: rec.budget.installation },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-sm text-slate-300 font-body">{item.label}</span>
                    <span className="font-mono text-sm text-slate-200">KES {item.value.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-3 mt-1">
                  <span className="font-body font-semibold text-white">Estimated Total</span>
                  <div className="text-right">
                    <div className="font-display font-bold text-neon-cyan text-lg">KES {rec.budget.low.toLocaleString()} – KES {rec.budget.high.toLocaleString()}</div>
                    <div className="text-xs text-slate-500 font-mono">including installation</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-amber-400/10 border border-amber-400/20">
                <p className="text-xs text-amber-400/80 font-body leading-relaxed">
                  ⚠️ Advisory estimate only. Prices vary by region and supplier. Get 3 quotes from certified installers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Installation Tips */}
        <motion.div custom={9} variants={fadeUp} initial="hidden" animate="visible" className="glass-card p-6">
          <h3 className="font-body font-semibold text-white mb-4 flex items-center gap-2">
            <FiShield className="text-neon-cyan" /> Installation Tips
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {rec.tips.map((tip, i) => (
              <div key={i} className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="font-display text-xs font-bold text-neon-cyan/40 mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm text-slate-300 font-body leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div custom={10} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 text-center">
          <p className="text-slate-500 text-sm font-body mb-4">
            Want a different configuration? Restart the advisor.
          </p>
          <Link to="/wizard" className="btn-primary px-8 py-3">
            <FiRefreshCw /> Start New Recommendation
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
