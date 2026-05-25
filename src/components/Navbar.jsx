import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX, FiShield } from 'react-icons/fi'
import { useState } from 'react'

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/wizard', label: 'Get Advice' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-navy-950/80 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-cyan flex items-center justify-center">
            <FiShield className="text-white text-sm" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-60 blur-md transition-opacity" />
          </div>
          <span className="font-display text-sm font-bold tracking-wider text-white">
            SECURE<span className="text-neon-cyan">CAM</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200 ${
                pathname === link.to
                  ? 'text-neon-cyan bg-neon-cyan/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-200"
          >
            {darkMode ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
          </button>

          <Link to="/wizard" className="hidden md:flex btn-primary text-sm px-4 py-2">
            Start Now
          </Link>

          <button
            className="md:hidden w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 bg-navy-900/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-1"
        >
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-body font-medium transition-all ${
                pathname === link.to ? 'text-neon-cyan bg-neon-cyan/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/wizard" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 justify-center">
            Start Recommendation
          </Link>
        </motion.div>
      )}
    </motion.nav>
  )
}
