import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CourseCard from '../components/CourseCard'
import { FadeIn, StaggerContainer } from '../components/animations'
import { courses, features } from '../data/courses'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Modern medical laboratory with healthcare professionals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/75 to-primary-700/60" />
        </div>

        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-6 border border-accent-500/30">
              Admissions Open — PMF Recognized Programs
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Shape Your Future in{' '}
              <span className="text-accent-400">Allied Health Sciences</span>
            </h1>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              Al-Farabi College offers industry-leading diploma programs in Dispenser, Lab Technician,
              Radiography & Imaging, and OT Technology — preparing you for rewarding healthcare careers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-primary">
                Apply Now
              </Link>
              <Link to="/courses" className="btn-secondary bg-white/10 border-white/40 text-white hover:bg-white/20">
                Explore Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="section-padding bg-primary-50/50">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
              Allied Health Diploma Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four specialized two-year programs designed to meet Pakistan Medical Faculty standards
              and industry demands.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <Link to="/courses" className="btn-secondary">
              View All Course Details
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mt-2">
              Excellence in Healthcare Education
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="p-6 rounded-2xl bg-white border border-primary-100 shadow-card card-hover text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display font-bold text-lg text-primary-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cta-banner.jpg"
            alt="Healthcare professionals collaborating in a hospital setting"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/85" />
        </div>
        <div className="relative container-custom mx-auto section-padding text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Healthcare Career Today
            </h2>
            <p className="text-primary-100 max-w-xl mx-auto mb-8">
              Limited seats available. Matric students with 80%+ marks qualify for fee discounts.
              Join Al-Farabi College and become a certified allied health professional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="btn-primary">
                Apply for Admission
              </Link>
              <Link to="/contact" className="btn-secondary border-white/40 text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
