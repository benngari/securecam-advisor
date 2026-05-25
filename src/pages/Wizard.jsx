import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiArrowLeft, FiCheck } from 'react-icons/fi'
import { PROPERTY_TYPES, SECURITY_LEVELS, BUDGET_RANGES, generateRecommendation } from '../logic/recommendationEngine'
import toast from 'react-hot-toast'

const STEPS = [
  { id: 1, title: 'Property Type', subtitle: 'What kind of property are you securing?' },
  { id: 2, title: 'Coverage', subtitle: 'Where do you need cameras?' },
  { id: 3, title: 'Night & Remote', subtitle: 'Vision and monitoring preferences.' },
  { id: 4, title: 'Security Level', subtitle: 'How comprehensive should coverage be?' },
  { id: 5, title: 'Budget', subtitle: 'What is your available budget?' },
]

const INITIAL_ANSWERS = {
  propertyType: '',
  outdoorCoverage: null,
  indoorCoverage: true,
  nightVision: null,
  mobileMonitoring: null,
  internet: null,
  securityLevel: '',
  budgetRange: '',
}

function StepIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const stepNum = i + 1
        const status = stepNum < currentStep ? 'complete' : stepNum === currentStep ? 'active' : 'inactive'
        return (
          <div key={stepNum} className="flex items-center gap-2">
            <div className={`step-indicator ${status === 'active' ? 'step-active' : status === 'complete' ? 'step-complete' : 'step-inactive'}`}>
              {status === 'complete' ? <FiCheck className="text-xs" /> : <span>{stepNum}</span>}
            </div>
            {i < totalSteps - 1 && (
              <div className={`flex-1 h-px w-8 sm:w-12 transition-all duration-500 ${stepNum < currentStep ? 'bg-emerald-400/50' : 'bg-white/10'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function OptionCard({ selected, onClick, icon, label, desc }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`option-card text-left w-full ${selected ? 'selected' : ''}`}
    >
      <div className="flex items-start gap-3">
        {icon && <span className="text-2xl leading-none mt-0.5">{icon}</span>}
        <div className="flex-1 min-w-0">
          <div className={`font-body font-medium text-sm ${selected ? 'text-neon-cyan' : 'text-slate-200'}`}>{label}</div>
          {desc && <div className="text-slate-500 text-xs mt-1 font-body">{desc}</div>}
        </div>
        {selected && <FiCheck className="text-neon-cyan text-sm mt-0.5 shrink-0" />}
      </div>
    </motion.button>
  )
}

function YesNoCard({ value, selected, onClick, label, desc }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`option-card text-center flex-1 ${selected ? 'selected' : ''}`}
    >
      <div className={`font-display text-lg font-bold mb-1 ${selected ? 'text-neon-cyan' : 'text-slate-300'}`}>{label}</div>
      {desc && <div className="text-xs text-slate-500 font-body">{desc}</div>}
    </motion.button>
  )
}

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
}

export default function Wizard() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState(INITIAL_ANSWERS)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function goNext() {
    if (!canProceed()) return toast.error('Please select an option to continue.')
    if (step < STEPS.length) { setDirection(1); setStep(s => s + 1) }
    else handleSubmit()
  }

  function goBack() {
    if (step > 1) { setDirection(-1); setStep(s => s - 1) }
  }

  function canProceed() {
    switch (step) {
      case 1: return !!answers.propertyType
      case 2: return answers.outdoorCoverage !== null
      case 3: return answers.nightVision !== null && answers.mobileMonitoring !== null && answers.internet !== null
      case 4: return !!answers.securityLevel
      case 5: return !!answers.budgetRange
      default: return true
    }
  }

  function handleSubmit() {
    setLoading(true)
    setTimeout(() => {
      const recommendation = generateRecommendation(answers)
      sessionStorage.setItem('securecam_recommendation', JSON.stringify(recommendation))
      navigate('/results')
    }, 1800)
  }

  const stepData = STEPS[step - 1]

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <span className="section-tag mb-4">Recommendation Wizard</span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold">
            {loading ? 'Analysing Your Requirements...' : stepData.title}
          </h1>
          {!loading && <p className="text-slate-400 font-body mt-2">{stepData.subtitle}</p>}
        </div>

        {!loading && <StepIndicator currentStep={step} totalSteps={STEPS.length} />}

        {/* Loading State */}
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card p-12 text-center"
          >
            <div className="relative w-24 h-24 mx-auto mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-cyan border-r-neon-blue"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border-2 border-transparent border-t-neon-blue"
              />
              <div className="absolute inset-6 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
              </div>
            </div>
            <h2 className="font-display text-xl font-bold text-white mb-2">Processing Analysis</h2>
            <p className="text-slate-400 font-body text-sm">Building your personalised CCTV recommendation...</p>
            <div className="mt-8 space-y-2">
              {['Evaluating property parameters...', 'Selecting optimal camera types...', 'Calculating budget estimates...'].map((msg, i) => (
                <motion.div
                  key={msg}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.4 }}
                  className="flex items-center gap-3 text-xs text-slate-400 font-mono"
                >
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, delay: i * 0.4, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
                  />
                  {msg}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <>
            {/* Step Content */}
            <div className="glass-card p-6 sm:p-8 mb-6 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {/* Step 1: Property Type */}
                  {step === 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {PROPERTY_TYPES.map(p => (
                        <OptionCard
                          key={p.id}
                          selected={answers.propertyType === p.id}
                          onClick={() => setAnswers(a => ({ ...a, propertyType: p.id }))}
                          icon={p.icon}
                          label={p.label}
                        />
                      ))}
                    </div>
                  )}

                  {/* Step 2: Coverage */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-body font-semibold text-slate-300 mb-3">
                          Do you need outdoor / perimeter coverage?
                        </label>
                        <div className="flex gap-3">
                          <YesNoCard value={true} selected={answers.outdoorCoverage === true} onClick={() => setAnswers(a => ({ ...a, outdoorCoverage: true }))} label="Yes" desc="Gates, gardens, parking" />
                          <YesNoCard value={false} selected={answers.outdoorCoverage === false} onClick={() => setAnswers(a => ({ ...a, outdoorCoverage: false }))} label="No" desc="Indoor only" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-body font-semibold text-slate-300 mb-3">
                          Indoor coverage required?
                        </label>
                        <div className="flex gap-3">
                          <YesNoCard value={true} selected={answers.indoorCoverage === true} onClick={() => setAnswers(a => ({ ...a, indoorCoverage: true }))} label="Yes" desc="Rooms, corridors" />
                          <YesNoCard value={false} selected={answers.indoorCoverage === false} onClick={() => setAnswers(a => ({ ...a, indoorCoverage: false }))} label="No" desc="Outdoor only" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Night vision, mobile, internet */}
                  {step === 3 && (
                    <div className="space-y-6">
                      {[
                        { key: 'nightVision', label: 'Do you need night vision capability?', yesDesc: 'IR recording in darkness', noDesc: 'Daytime only' },
                        { key: 'mobileMonitoring', label: 'Want to monitor via mobile phone?', yesDesc: 'Live view on smartphone', noDesc: 'Monitor only on-site' },
                        { key: 'internet', label: 'Is internet / WiFi available on-site?', yesDesc: 'Broadband / 4G available', noDesc: 'No internet access' },
                      ].map(({ key, label, yesDesc, noDesc }) => (
                        <div key={key}>
                          <label className="block text-sm font-body font-semibold text-slate-300 mb-3">{label}</label>
                          <div className="flex gap-3">
                            <YesNoCard value={true} selected={answers[key] === true} onClick={() => setAnswers(a => ({ ...a, [key]: true }))} label="Yes" desc={yesDesc} />
                            <YesNoCard value={false} selected={answers[key] === false} onClick={() => setAnswers(a => ({ ...a, [key]: false }))} label="No" desc={noDesc} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 4: Security Level */}
                  {step === 4 && (
                    <div className="space-y-3">
                      {SECURITY_LEVELS.map(level => (
                        <OptionCard
                          key={level.id}
                          selected={answers.securityLevel === level.id}
                          onClick={() => setAnswers(a => ({ ...a, securityLevel: level.id }))}
                          label={level.label}
                          desc={level.desc}
                        />
                      ))}
                    </div>
                  )}

                  {/* Step 5: Budget */}
                  {step === 5 && (
                    <div className="space-y-3">
                      {BUDGET_RANGES.map(b => (
                        <OptionCard
                          key={b.id}
                          selected={answers.budgetRange === b.id}
                          onClick={() => setAnswers(a => ({ ...a, budgetRange: b.id }))}
                          label={b.label}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={goBack}
                disabled={step === 1}
                className={`btn-secondary px-5 py-3 ${step === 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                <FiArrowLeft /> Back
              </button>

              <div className="text-xs text-slate-500 font-mono">
                Step {step} of {STEPS.length}
              </div>

              <button
                onClick={goNext}
                className="btn-primary px-6 py-3"
              >
                {step === STEPS.length ? 'Get Recommendation' : 'Next'}
                <FiArrowRight />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
