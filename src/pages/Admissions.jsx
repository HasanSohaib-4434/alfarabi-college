import { Link } from 'react-router-dom'
import { FadeIn, StaggerContainer } from '../components/animations'
import { motion } from 'framer-motion'

const discounts = [
  {
    marks: '90%+',
    discount: '30%',
    color: 'from-accent-500 to-accent-600',
    description: 'Matric students scoring 90% or above receive a 30% tuition fee discount.',
  },
  {
    marks: '80%+',
    discount: '20%',
    color: 'from-primary-500 to-medical-teal',
    description: 'Matric students scoring 80% or above qualify for a 20% tuition fee discount.',
  },
]

const careers = [
  { title: 'Hospital Laboratories', icon: '🏥' },
  { title: 'Diagnostic Centers', icon: '🔬' },
  { title: 'Community Pharmacies', icon: '💊' },
  { title: 'Operating Theatres', icon: '⚕️' },
  { title: 'Radiology Departments', icon: '📡' },
  { title: 'Public Health Programs', icon: '🌍' },
]

export default function Admissions() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/admissions-hero.jpg"
            alt="Students celebrating academic achievement at graduation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative container-custom mx-auto section-padding text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500 text-white text-sm font-semibold mb-6 animate-pulse">
              🎓 Admissions Open Now
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Join Al-Farabi College
            </h1>
            <p className="text-primary-100 max-w-2xl mx-auto text-lg mb-8">
              Secure your seat in one of our PMF-recognized allied health diploma programs.
              Limited availability — apply early to avoid disappointment.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact for Enrollment
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Fee Discounts</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mt-2">
              Merit-Based Scholarships
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              We reward academic excellence. High-achieving Matric students automatically qualify
              for tuition fee reductions.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {discounts.map((item, i) => (
              <FadeIn key={item.marks} delay={i}>
                <div className="relative overflow-hidden rounded-2xl shadow-card card-hover">
                  <div className={`bg-gradient-to-br ${item.color} p-8 text-white text-center`}>
                    <p className="text-sm font-medium opacity-90 mb-1">Matric Marks</p>
                    <p className="font-display text-5xl font-bold mb-1">{item.marks}</p>
                    <p className="text-3xl font-bold">{item.discount} OFF</p>
                  </div>
                  <div className="bg-white p-6">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50/50">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Career Paths</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mt-2">
              Where Our Graduates Work
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {careers.map((career) => (
              <motion.div
                key={career.title}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="bg-white rounded-xl p-6 text-center shadow-card border border-primary-50 card-hover"
              >
                <div className="text-3xl mb-3">{career.icon}</div>
                <p className="font-semibold text-primary-800 text-sm">{career.title}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto max-w-3xl">
          <FadeIn>
            <div className="bg-white rounded-2xl border border-primary-100 shadow-card p-8 md:p-10">
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-6">
                Admission Requirements
              </h2>
              <ul className="space-y-4">
                {[
                  'Matriculation (Science group preferred) or equivalent qualification',
                  'Minimum age of 16 years at time of admission',
                  'Valid CNIC / B-Form and recent passport-size photographs',
                  'Original academic documents for verification',
                  'Medical fitness certificate (if required)',
                ].map((req) => (
                  <li key={req} className="flex items-start gap-3 text-gray-600">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-primary-100 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Apply Now
                </Link>
                <Link to="/courses" className="btn-secondary">
                  View Courses
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
