import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeIn } from './animations'

export default function CourseCard({ course, index = 0, showLink = true }) {
  return (
    <FadeIn delay={index * 0.1}>
      <motion.article
        whileHover={{ y: -4 }}
        className="bg-white rounded-2xl overflow-hidden shadow-card border border-primary-50 card-hover h-full flex flex-col"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image}
            alt={course.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {course.duration}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-xl text-primary-800 mb-2">{course.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{course.description}</p>
          <ul className="flex flex-wrap gap-2 mb-4">
            {course.highlights.slice(0, 3).map((item) => (
              <li
                key={item}
                className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
          {showLink && (
            <Link
              to="/admissions"
              className="text-accent-600 font-semibold text-sm hover:text-accent-500 transition-colors inline-flex items-center gap-1"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </motion.article>
    </FadeIn>
  )
}
