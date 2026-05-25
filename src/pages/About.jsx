import { motion } from 'framer-motion'
import { FiShield, FiEye, FiZap, FiUsers } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function About() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <span className="section-tag mb-4">About</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">About SecureCam Advisor</h1>
        <p className="text-slate-400 font-body text-lg leading-relaxed mb-12">
          SecureCam Advisor is a free, intelligent CCTV planning tool that helps property owners, 
          business operators, and security enthusiasts make informed camera system decisions — 
          without needing to be an expert.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {[
          { icon: <FiShield />, title: 'Advisory Only', desc: 'Our recommendations are informational. Always consult a certified CCTV installer for professional assessments.' },
          { icon: <FiEye />, title: 'Rule-Based Engine', desc: 'Our recommendation logic is built on industry-standard best practices for CCTV deployment across property types.' },
          { icon: <FiZap />, title: 'Instant Results', desc: 'No waiting, no sign-ups. Answer 8 questions and get a comprehensive system plan in seconds.' },
          { icon: <FiUsers />, title: 'Free to Use', desc: 'Completely free for personal and commercial advisory use. No ads, no tracking, no fees.' },
        ].map((item, i) => (
          <motion.div key={item.title} custom={i + 1} variants={fadeUp} initial="hidden" animate="visible" className="glass-card p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-neon-cyan flex items-center justify-center text-lg mb-3">{item.icon}</div>
            <h3 className="font-body font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm font-body leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="glass-card p-8">
        <h2 className="font-display text-xl font-bold mb-4">How the Engine Works</h2>
        <div className="prose prose-invert prose-sm max-w-none font-body text-slate-300 space-y-3">
          <p>The recommendation engine uses a rule-based logic system. Based on your property type and security level selection, we look up a pre-configured system profile that matches industry standards for that property category.</p>
          <p>We then layer in your specific requirements — night vision, mobile monitoring, internet availability — and adjust the recommendation accordingly. Budget estimates are calculated using real-world average pricing for camera hardware, recording systems, storage media, and professional installation.</p>
          <p>Camera placement suggestions follow CCTV best practices: cover all entry/exit points, provide overlapping fields of view, and eliminate blind spots in high-value areas.</p>
        </div>
      </motion.div>
    </div>
  )
}
