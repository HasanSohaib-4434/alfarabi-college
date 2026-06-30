import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import { FadeIn } from '../components/animations'
import { courses } from '../data/courses'

export default function Courses() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-medical-teal text-white section-padding">
        <div className="container-custom mx-auto text-center">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
            <p className="text-primary-100 max-w-2xl mx-auto text-lg">
              Two-year diploma programs in high-demand allied health fields — designed for
              immediate career entry upon graduation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <div key={course.id} className="flex flex-col">
                <CourseCard course={course} index={i} showLink={false} />
                <FadeIn delay={i + 2} className="mt-4 px-2">
                  <h4 className="font-semibold text-primary-800 mb-2">What You&apos;ll Learn</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-medical-green">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            ))}
          </div>

          <FadeIn className="mt-16 text-center bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Ready to Enroll?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Admissions are currently open. Check eligibility requirements and fee discount
              options on our admissions page.
            </p>
            <Link to="/admissions" className="btn-primary">
              View Admissions Info
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
