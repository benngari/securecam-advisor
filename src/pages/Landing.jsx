import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiShield, FiEye, FiZap, FiSmartphone, FiCheckCircle, FiStar } from 'react-icons/fi'
import { MdOutlineSecurity } from 'react-icons/md'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
}

const FEATURES = [
  {
    icon: <FiShield className="text-2xl" />,
    title: 'Smart Property Analysis',
    desc: 'Tailored recommendations based on your property type, size, and layout — from studio to warehouse.',
    color: 'blue',
  },
  {
    icon: <FiEye className="text-2xl" />,
    title: 'Placement Visualization',
    desc: 'See exactly where cameras should go with an interactive placement diagram for your property.',
    color: 'cyan',
  },
  {
    icon: <FiZap className="text-2xl" />,
    title: 'Instant Recommendations',
    desc: 'Get camera count, types, DVR/NVR advice, storage sizing, and budget estimates in seconds.',
    color: 'yellow',
  },
  {
    icon: <FiSmartphone className="text-2xl" />,
    title: 'Budget-Aware Advice',
    desc: 'Recommendations calibrated to your budget — from basic $100 setups to professional systems.',
    color: 'emerald',
  },
]

const STEPS = [
  { num: '01', title: 'Select Property', desc: 'Tell us what type of property you want to secure.' },
  { num: '02', title: 'Set Requirements', desc: 'Indoor/outdoor, night vision, mobile monitoring needs.' },
  { num: '03', title: 'Choose Budget', desc: 'Pick your security level and available budget range.' },
  { num: '04', title: 'Get Your Plan', desc: 'Receive a full, tailored CCTV system recommendation.' },
]

const TESTIMONIALS = [
  { name: 'James M.', role: 'Shop Owner', quote: 'Got my 5-camera setup perfectly configured. Saved me hours of research.', stars: 5 },
  { name: 'Sarah K.', role: 'Homeowner', quote: 'Recommended exactly the right system for my 3-bedroom bungalow. Very detailed.', stars: 5 },
  { name: 'David O.', role: 'Warehouse Manager', quote: 'The placement diagram alone was worth it. Our security consultant was impressed.', stars: 5 },
]

export default function Landing() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 grid-bg opacity-100" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px]" />
        </div>

        {/* Animated camera ring */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="w-80 h-80 rounded-full border border-neon-cyan/10 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="w-56 h-56 rounded-full border border-blue-500/20 flex items-center justify-center"
            >
              <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/30 to-neon-cyan/20 flex items-center justify-center backdrop-blur-sm border border-neon-cyan/20">
                  <MdOutlineSecurity className="text-neon-cyan text-3xl" />
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Orbit dots */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-neon-cyan"
              style={{
                top: '50%',
                left: '50%',
                x: Math.cos((deg * Math.PI) / 180) * 150 - 4,
                y: Math.sin((deg * Math.PI) / 180) * 150 - 4,
                boxShadow: '0 0 8px rgba(56,189,248,0.8)',
              }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="section-tag mb-6 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                AI-Powered Security Advisor
              </span>
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
            >
              Smart CCTV{' '}
              <span className="neon-text">Recommendations</span>
              {' '}For Every Property
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-slate-400 text-lg font-body leading-relaxed mb-8 max-w-xl"
            >
              Answer 8 simple questions and get a complete, budget-matched CCTV security system 
              recommendation — with camera placement diagrams and installation tips.
            </motion.p>

            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Link to="/wizard" className="btn-primary text-base px-8 py-4 gap-3">
                Get My Recommendation
                <FiArrowRight className="text-lg" />
              </Link>
              <Link to="/about" className="btn-secondary text-base px-8 py-4">
                How It Works
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[['9', 'Property Types'], ['8', 'Questions'], ['100%', 'Free to Use']].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-neon-cyan">{val}</div>
                  <div className="text-xs text-slate-500 font-body mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Features</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
              Everything You Need to Decide
            </h2>
            <p className="text-slate-400 mt-4 font-body max-w-lg mx-auto">
              Our recommendation engine covers every aspect of CCTV planning so you don't have to guess.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card-hover p-6"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  f.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                  f.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                  f.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {f.icon}
                </div>
                <h3 className="font-body font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm font-body leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Process</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
              Four Steps to Security Clarity
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-10" />
                )}
                <div className="glass-card p-6">
                  <div className="font-display text-4xl font-bold text-neon-cyan/20 mb-4">{step.num}</div>
                  <h3 className="font-body font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm font-body leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Testimonials</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">Trusted by Property Owners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <FiStar key={j} className="text-yellow-400 fill-yellow-400 text-sm" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm font-body leading-relaxed mb-4">"{t.quote}"</p>
                <div>
                  <div className="font-body font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs font-mono">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent" />
              <div className="scan-line" />
            </div>
            <div className="relative">
              <FiShield className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                Ready to Secure Your Property?
              </h2>
              <p className="text-slate-400 font-body mb-8 max-w-md mx-auto">
                Get your personalised CCTV recommendation in under 2 minutes. Free, instant, no sign-up.
              </p>
              <Link to="/wizard" className="btn-primary text-base px-8 py-4 gap-3">
                Start the Advisor
                <FiArrowRight />
              </Link>
              <div className="flex justify-center gap-6 mt-8">
                {['Free to use', 'No sign-up', 'Instant results'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-400 font-body">
                    <FiCheckCircle className="text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
