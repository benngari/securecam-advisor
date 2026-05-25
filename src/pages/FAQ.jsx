import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const FAQS = [
  {
    q: 'How many cameras do I need for a 3-bedroom house?',
    a: 'For a 3-bedroom bungalow, we typically recommend 4–8 cameras depending on your security level. This covers key entry points (front gate, back gate, driveway) plus main indoor areas (living room, master bedroom). Our advisor will give you a precise number based on your exact requirements.',
  },
  {
    q: 'What is the difference between DVR and NVR?',
    a: 'A DVR (Digital Video Recorder) works with analog cameras connected via coaxial cable — reliable and cost-effective for basic setups. An NVR (Network Video Recorder) works with IP cameras over ethernet or WiFi, offering higher resolution (up to 4K), easier cable management via PoE, and better remote access. For most modern installations we recommend NVR.',
  },
  {
    q: 'Do I need internet for CCTV to work?',
    a: 'No. A DVR or NVR system records locally to a hard drive and works completely without internet. However, internet is required if you want to view footage remotely on your phone or receive motion alert notifications. If you have no internet, we recommend a local DVR system with a monitor.',
  },
  {
    q: 'What storage size do I need?',
    a: 'Storage needs depend on camera count, recording resolution, and retention period. As a guide: 1TB handles roughly 6–8 cameras at 1080p for 7–10 days of continuous recording. 2TB is comfortable for most home setups. Large commercial systems (8+ cameras) need 4TB or more. Our advisor recommends storage based on your camera count.',
  },
  {
    q: 'Can I install CCTV myself?',
    a: 'Basic wireless / standalone camera systems can be self-installed quite easily — plug in, connect to WiFi, done. Wired DVR/NVR systems require running cables through walls, mounting hardware, and configuring the recorder — this is manageable for DIY enthusiasts but we recommend a professional installer for systems with 4+ cameras to ensure optimal placement and wiring.',
  },
  {
    q: 'What is a PoE camera system?',
    a: 'PoE stands for Power over Ethernet. In a PoE NVR system, a single ethernet cable carries both the video signal and power to each camera — eliminating the need for separate power cables at each camera location. This simplifies installation significantly and is the preferred choice for modern IP camera systems.',
  },
  {
    q: 'How far can CCTV cameras see at night?',
    a: 'Most consumer-grade IR cameras have a night vision range of 15–30 meters. High-end bullet cameras can reach 50–80 meters. For large perimeters (warehouses, large properties), PTZ cameras with powerful IR or white-light illumination are recommended. Our recommendations include IR range advice based on your security level.',
  },
  {
    q: 'Are the budget estimates accurate?',
    a: 'Our budget estimates are approximate ranges based on average market prices. Actual costs vary significantly by region, brand, and supplier. We recommend using our estimates as a planning guide and getting at least 3 quotes from local CCTV suppliers and installers before purchasing.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-body font-medium text-slate-200 text-sm leading-relaxed">{q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FiChevronDown className="text-neon-cyan shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-slate-400 font-body leading-relaxed border-t border-white/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="pt-28 pb-20 max-w-3xl mx-auto px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <span className="section-tag mb-4">FAQ</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">Frequently Asked Questions</h1>
        <p className="text-slate-400 font-body">Everything you need to know about CCTV systems and our advisor tool.</p>
      </motion.div>

      <div className="space-y-3">
        {FAQS.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <FAQItem
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
