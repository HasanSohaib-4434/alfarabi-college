import { Link } from 'react-router-dom'
import { contactInfo } from '../data/courses'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container-custom mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center text-white font-bold">
                AF
              </div>
              <div>
                <p className="font-display font-bold text-white">Al-Farabi College</p>
                <p className="text-xs text-primary-300">Allied Health Sciences</p>
              </div>
            </div>
            <p className="text-sm text-primary-200 leading-relaxed">
              Empowering future healthcare professionals through PMF-recognized allied health programs
              and hands-on clinical training.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/courses', label: 'Our Courses' },
                { to: '/admissions', label: 'Admissions' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-primary-200 hover:text-accent-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li>Dispenser</li>
              <li>Lab Technician</li>
              <li>Radiography & Imaging</li>
              <li>OT Technology</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-200">
              <li className="flex gap-2">
                <span>📍</span>
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-accent-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-400 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-2">
                <span>🕐</span>
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-300">
          <p>&copy; {new Date().getFullYear()} Al-Farabi College of Allied Health Sciences. All rights reserved.</p>
          <p>PMF & Allied Health Professional Council Recognized</p>
        </div>
      </div>
    </footer>
  )
}
