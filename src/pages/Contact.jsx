import { useState } from 'react'
import { toast } from 'react-toastify'
import { FadeIn } from '../components/animations'
import { courseOptions, contactInfo } from '../data/courses'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  course: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.phone || !form.course || !form.message) {
      toast.error('Please fill in all fields.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully! Check your email for confirmation.')
        setForm(initialForm)
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.')
      }
    } catch {
      toast.error('Network error. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-medical-teal text-white section-padding">
        <div className="container-custom mx-auto text-center">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-primary-100 max-w-2xl mx-auto text-lg">
              Have questions about admissions, courses, or fee discounts? Reach out — we&apos;re
              here to help you start your healthcare journey.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn>
              <div className="bg-white rounded-2xl shadow-card border border-primary-100 p-8">
                <h2 className="font-display text-2xl font-bold text-primary-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="+92 300 0000000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Course Interested In *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                    >
                      <option value="">Select a course</option>
                      {courseOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Info + Map */}
            <FadeIn delay={1}>
              <div className="space-y-8">
                <div className="bg-primary-50 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-primary-900 mb-6">
                    Get in Touch
                  </h3>
                  <ul className="space-y-5">
                    {[
                      { icon: '📍', label: 'Address', value: contactInfo.address },
                      { icon: '📞', label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
                      { icon: '✉️', label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                      { icon: '🕐', label: 'Hours', value: contactInfo.hours },
                    ].map((item) => (
                      <li key={item.label} className="flex gap-4">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-primary-600">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-gray-700 hover:text-primary-600 transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-700">{item.value}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-card border border-primary-100 h-64 md:h-80">
                  <iframe
                    title="Al-Farabi College location map"
                    src={contactInfo.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
