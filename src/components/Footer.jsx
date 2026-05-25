import { Link } from 'react-router-dom'
import { FiShield, FiGithub, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-blue to-neon-cyan flex items-center justify-center">
                <FiShield className="text-white text-xs" />
              </div>
              <span className="font-display text-sm font-bold tracking-wider text-white">
                SECURE<span className="text-neon-cyan">CAM</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm font-body leading-relaxed">
              Smart CCTV advisory system helping you make confident security decisions.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-3">Navigation</h4>
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/wizard', 'Get Advice'], ['/about', 'About'], ['/faq', 'FAQ'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} className="text-sm text-slate-500 hover:text-neon-cyan transition-colors font-body">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-3">Disclaimer</h4>
            <p className="text-slate-500 text-xs font-body leading-relaxed">
              SecureCam Advisor provides recommendations for informational purposes only. 
              Always consult a certified security professional before installation.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} SecureCam Advisor. Advisory use only.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-slate-600 hover:text-neon-cyan transition-colors"><FiGithub /></a>
            <a href="#" className="text-slate-600 hover:text-neon-cyan transition-colors"><FiTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
