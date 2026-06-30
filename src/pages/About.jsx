import { Link } from 'react-router-dom'
import { FadeIn } from '../components/animations'

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-medical-teal text-white section-padding">
        <div className="container-custom mx-auto text-center">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Al-Farabi College</h1>
            <p className="text-primary-100 max-w-2xl mx-auto text-lg">
              Dedicated to excellence in allied health education, preparing skilled professionals
              for Pakistan&apos;s growing healthcare sector.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop"
                alt="Students learning in a modern allied health sciences classroom"
                loading="lazy"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
              />
            </FadeIn>
            <FadeIn delay={1}>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="font-display text-3xl font-bold text-primary-900 mt-2 mb-6">
                Empowering Healthcare Professionals
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Al-Farabi College of Allied Health Sciences is committed to providing high-quality,
                accessible education in allied health disciplines. We bridge the gap between academic
                learning and real-world clinical practice through modern laboratories, experienced
                faculty, and industry-aligned curricula.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our graduates serve hospitals, diagnostic centers, pharmacies, and operating theatres
                across Pakistan — making a tangible difference in patient care and community health.
              </p>
              <Link to="/courses" className="btn-primary">
                Explore Our Programs
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50/50">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Recognition</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mt-2">
              Accredited & Recognized
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-primary-100 card-hover h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center text-2xl mb-5">
                  🏛️
                </div>
                <h3 className="font-display font-bold text-xl text-primary-800 mb-3">
                  Pakistan Medical Faculty (PMF)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our diploma programs are structured in accordance with PMF guidelines, ensuring
                  graduates meet national standards for allied health qualifications. Curriculum,
                  assessments, and certification pathways align with PMF requirements for dispensers,
                  lab technicians, radiographers, and OT technologists.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-primary-100 card-hover h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center text-2xl mb-5">
                  ✅
                </div>
                <h3 className="font-display font-bold text-xl text-primary-800 mb-3">
                  Allied Health Professional Council
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Al-Farabi College programs are recognized by the Allied Health Professional Council,
                  enabling our graduates to pursue professional registration and employment in both
                  public and private healthcare institutions throughout Pakistan.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { value: '4+', label: 'Specialized Programs' },
              { value: '2 Yrs', label: 'Diploma Duration' },
              { value: '100%', label: 'Practical Training Focus' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i}>
                <div className="p-6">
                  <p className="font-display text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
