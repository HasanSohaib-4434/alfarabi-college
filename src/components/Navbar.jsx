import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/courses', label: 'Courses' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-100 shadow-sm">
      <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-medical-teal flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
              AF
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-primary-800 text-sm leading-tight">
                Al-Farabi College
              </p>
              <p className="text-xs text-primary-500">Allied Health Sciences</p>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label }) => {
              const active = location.pathname === path
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active ? 'text-primary-700' : 'text-gray-600 hover:text-primary-600'
                    }`}
                  >
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-accent-500 rounded-full"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden md:block">
            <Link to="/admissions" className="btn-primary text-sm py-2.5 px-5">
              Apply Now
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-primary-700 hover:bg-primary-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-primary-50"
            >
              <ul className="py-4 space-y-1">
                {navLinks.map(({ path, label }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium ${
                        location.pathname === path
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="px-4 pt-2">
                  <Link to="/admissions" className="btn-primary w-full text-sm" onClick={() => setOpen(false)}>
                    Apply Now
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
