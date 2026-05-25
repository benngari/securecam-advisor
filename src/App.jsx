import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import Landing from './pages/Landing'
import Wizard from './pages/Wizard'
import Results from './pages/Results'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="min-h-screen bg-navy-950 dark:bg-navy-950 light:bg-slate-100 transition-colors duration-300">
        <BrowserRouter>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/wizard" element={<Wizard />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1E2D4A',
              color: '#F8FAFC',
              border: '1px solid rgba(56,189,248,0.2)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
            },
            success: {
              iconTheme: { primary: '#38BDF8', secondary: '#0F172A' },
            },
            error: {
              iconTheme: { primary: '#F87171', secondary: '#0F172A' },
            },
          }}
        />
      </div>
    </div>
  )
}
