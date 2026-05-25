import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMessageSquare, FiSend } from 'react-icons/fi'
import toast from 'react-hot-toast'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return toast.error('Please fill in all required fields.')
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setForm({ name: '', email: '', subject: '', message: '' })
      toast.success('Message sent! We\'ll get back to you soon.')
    }, 1200)
  }

  return (
    <div className="pt-28 pb-20 max-w-2xl mx-auto px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <span className="section-tag mb-4">Contact</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">Get in Touch</h1>
        <p className="text-slate-400 font-body">
          Have a question about our recommendations? Need help understanding your results? We're here.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="glass-card p-8"
      >
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Name *</label>
              <input
                className="input-field"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Email *</label>
              <input
                type="email"
                className="input-field"
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Subject</label>
            <input
              className="input-field"
              placeholder="What's this about?"
              value={form.subject}
              onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Message *</label>
            <textarea
              className="input-field min-h-[140px] resize-y"
              placeholder="Your message..."
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={sending}
            className="btn-primary w-full justify-center py-3.5 gap-3"
          >
            {sending ? (
              <>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                />
                Sending...
              </>
            ) : (
              <><FiSend /> Send Message</>
            )}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {[
          { icon: <FiMail />, label: 'Email', value: 'hello@securecam.advisor' },
          { icon: <FiMessageSquare />, label: 'Response Time', value: 'Within 24 hours' },
        ].map(item => (
          <div key={item.label} className="glass-card p-4 flex items-center gap-4">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-neon-cyan flex items-center justify-center text-base">
              {item.icon}
            </div>
            <div>
              <div className="text-xs text-slate-500 font-mono">{item.label}</div>
              <div className="text-sm text-slate-200 font-body">{item.value}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
